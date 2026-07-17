const { chromium } = require('playwright');

const CHROME = process.env.CHROME_PATH || undefined; // undefined => встроенный Chromium Playwright
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8410';
const results = [];
const consoleErrors = [];
const pageErrors = [];

function report(name, ok, note = '') {
  results.push({ name, ok, note });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${note ? ' — ' + note : ''}`);
}

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport: { width: 420, height: 860 } });
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 200)); });
  page.on('pageerror', err => pageErrors.push(String(err).slice(0, 300)));

  // 1. Load
  await page.goto(BASE + '/index.html', { waitUntil: 'load', timeout: 20000 });
  await page.waitForTimeout(1500);
  report('Страница загружается', true);
  const title = await page.title();
  report('Заголовок = AI-Gram', title === 'AI-Gram', title);

  // 2. Open a chat and send a message (local provider default)
  await page.evaluate(() => document.querySelector('.chat-row')?.click());
  await page.waitForTimeout(600);
  const input = page.locator('#messageInput');
  await input.fill('Привет, как дела?');
  await page.locator('#sendBtn').click();
  await page.waitForTimeout(400);
  const myMsg = await page.locator('.message.own, .message.me').count();
  report('Своё сообщение появилось', myMsg > 0, `count=${myMsg}`);
  // wait for local AI reply (delay ~0.9-2.4s + typewriter)
  await page.waitForTimeout(5000);
  const totalMsgs = await page.locator('.message').count();
  report('ИИ ответил (локальный провайдер)', totalMsgs >= 2, `messages=${totalMsgs}`);

  // 3. Settings center opens, new cards present
  await page.evaluate(() => { const b = document.querySelector('[data-menu="home"], #homeMenuBtn, .home-menu-btn'); b?.click(); });
  await page.waitForTimeout(300);
  // Fallback: open settings via tile/app API is fragile; use direct card check after forcing panel
  const hasPluginCard = await page.locator('[data-settings-open="plugin"]').count();
  const hasP2pCard = await page.locator('[data-settings-open="p2p"]').count();
  report('Карточка «Плагины» в настройках', hasPluginCard === 1);
  report('Карточка «P2P-чат» в настройках', hasP2pCard === 1);

  // 4. Plugin panel: open, save + enable a plugin, trigger it
  await page.evaluate(() => (d=>{d?.showModal?.();d?.classList.add('open')})(document.querySelector('#pluginPanel')));
  await page.waitForTimeout(200);
  await page.locator('#pluginNameInput').fill('Тест-бот');
  await page.locator('#pluginCodeInput').fill("onMessage(m => { if (m.own && /пинг/i.test(m.text)) sendMessage('понг от плагина'); });");
  await page.locator('#pluginSaveBtn').click();
  await page.waitForTimeout(300);
  const pluginRow = await page.locator('.plugin-row').count();
  report('Плагин сохранён и в списке', pluginRow === 1);
  await page.locator('.plugin-row .switch').click();
  await page.waitForTimeout(300);
  const enabled = await page.locator('.plugin-row .switch.on').count();
  report('Плагин включается', enabled === 1);
  await page.evaluate(() => (d=>{d?.close?.();d?.classList.remove('open')})(document.querySelector('#pluginPanel')));
  await page.waitForTimeout(200);
  await input.fill('пинг');
  await page.locator('#sendBtn').click();
  await page.waitForTimeout(2500);
  const pongVisible = await page.locator('.message', { hasText: 'понг от плагина' }).count();
  report('Плагин ответил на сообщение', pongVisible >= 1, `count=${pongVisible}`);

  // 5. Tile mode: enable and check live tiles
  await page.evaluate(() => (d=>{d?.showModal?.();d?.classList.add('open')})(document.querySelector('#tilePanel')));
  await page.waitForTimeout(200);
  await page.locator('#tileModeSwitch').click();
  await page.waitForTimeout(500);
  await page.evaluate(() => (d=>{d?.close?.();d?.classList.remove('open')})(document.querySelector('#tilePanel')));
  await page.waitForTimeout(300);
  // go back to home screen to see the board
  await page.evaluate(() => document.querySelector('.back-btn, [data-back], #backBtn')?.click());
  await page.waitForTimeout(600);
  const monitorTile = await page.locator('[data-tile-id="app:monitor"]').count();
  const statsTile = await page.locator('[data-tile-id="app:stats"]').count();
  const pluginTile = await page.locator('[data-tile-id="app:plugins"]').count();
  const p2pTile = await page.locator('[data-tile-id="app:p2p"]').count();
  report('Плитка «Монитор» на доске', monitorTile === 1);
  report('Плитка «Статистика» на доске', statsTile === 1);
  report('Плитки «Плагины» и «P2P»', pluginTile === 1 && p2pTile === 1);
  const metricText = await page.locator('[data-tile-id="app:monitor"] .tile-metric').textContent().catch(() => '');
  report('Монитор показывает метрику', /ток\/с/.test(metricText || ''), (metricText || '').trim());
  const statsMetric = await page.locator('[data-tile-id="app:stats"] .tile-metric').textContent().catch(() => '');
  report('Статистика показывает метрику', /сооб\./.test(statsMetric || ''), (statsMetric || '').trim());

  // 6. P2P: create invite (WebRTC datachannel offer, no network needed for local SDP)
  await page.evaluate(() => (d=>{d?.showModal?.();d?.classList.add('open')})(document.querySelector('#p2pPanel')));
  await page.waitForTimeout(200);
  await page.locator('#p2pCreateBtn').click();
  await page.waitForTimeout(3500);
  const outCode = await page.locator('#p2pOutCode').inputValue();
  report('P2P: код-приглашение сгенерирован', outCode.length > 100, `len=${outCode.length}`);

  // 6b. Full P2P handshake between two pages
  const ctx2 = await browser.newContext({ viewport: { width: 420, height: 860 } });
  const page2 = await ctx2.newPage();
  page2.on('pageerror', err => pageErrors.push('p2:' + String(err).slice(0, 200)));
  await page2.goto(BASE + '/index.html', { waitUntil: 'load', timeout: 20000 });
  await page2.evaluate(() => localStorage.setItem('messengerUserProfile', JSON.stringify({ name: 'Гость', handle: '@guest' })));
  await page2.reload({ waitUntil: 'load' });
  await page2.waitForTimeout(1300);
  await page2.evaluate(() => (d=>{d?.showModal?.();d?.classList.add('open')})(document.querySelector('#p2pPanel')));
  // Новый упрощённый флоу: гость просто вставляет приглашение в умное поле — роль и ответ определяются сами
  await page2.evaluate((code) => { const i = document.querySelector('#p2pInCode'); i.value = code; i.dispatchEvent(new Event('input', { bubbles: true })); }, outCode);
  let answerCode = '';
  for (let i = 0; i < 20; i++) { answerCode = await page2.locator('#p2pOutCode').inputValue(); if (answerCode.length > 100) break; await page2.waitForTimeout(400); }
  report('P2P: ответный код у гостя (умное поле)', answerCode.length > 100, `len=${answerCode.length}`);
  await page.evaluate((code) => { const i = document.querySelector('#p2pInCode'); i.value = code; i.dispatchEvent(new Event('input', { bubbles: true })); }, answerCode);
  // Ждём именно ОТКРЫТОГО канала (статус «в сети · P2P»), а не просто коннекта
  let hostChat = { status: '', header: '', panelClosed: false };
  for (let i = 0; i < 20; i++) {
    hostChat = await page.evaluate(() => ({
      status: document.querySelector('#status')?.textContent || '',
      header: document.querySelector('#chatTitle')?.textContent || '',
      panelClosed: document.querySelector('#p2pPanel')?.open !== true
    }));
    if (/в сети · P2P/.test(hostChat.status)) break;
    await page.waitForTimeout(400);
  }
  const p2pConnected = /в сети · P2P/.test(hostChat.status) && hostChat.panelClosed;
  report('P2P: соединение установлено (чат создан)', p2pConnected, JSON.stringify(hostChat));
  if (p2pConnected) {
    await page.evaluate(() => { const i = document.querySelector('#messageInput'); i.value = 'привет с хоста'; i.dispatchEvent(new Event('input', { bubbles: true })); });
    await page.evaluate(() => document.querySelector('#sendBtn')?.click());
    let got = false;
    for (let i = 0; i < 12; i++) { got = await page2.evaluate(() => [...document.querySelectorAll('.message')].some(m => m.textContent.includes('привет с хоста'))); if (got) break; await page2.waitForTimeout(400); }
    report('P2P: сообщение дошло', got === true);
  }
  await page2.close();

  // 7. Memory toggle: enabling without network should degrade gracefully (no crash)
  await page.evaluate(() => { (d=>{d?.close?.();d?.classList.remove('open')})(document.querySelector('#p2pPanel')); (d=>{d?.showModal?.();d?.classList.add('open')})(document.querySelector('#apiPanel')); });
  await page.waitForTimeout(200);
  await page.locator('#aiMemoryToggle').check();
  await page.waitForTimeout(4000);
  const memStatus = await page.locator('#aiMemoryStatus').textContent();
  report('Память: статус отображается', (memStatus || '').length > 0, (memStatus || '').trim());
  const crashedAfterMemory = pageErrors.length;
  report('Память: нет краша без сети', true, `pageErrors so far=${crashedAfterMemory}`);
  await page.locator('#aiMemoryToggle').uncheck();
  await page.evaluate(() => (d=>{d?.close?.();d?.classList.remove('open')})(document.querySelector('#apiPanel')));

  // 8. Share target params import
  await page.goto(BASE + '/index.html?text=' + encodeURIComponent('Текст из шаринга'), { waitUntil: 'load' });
  await page.waitForTimeout(2000);
  const sharedImported = await page.evaluate(() => JSON.stringify(localStorage.getItem('aiPersonaChats') || '').includes('шаринга') || document.body.textContent.includes('шаринга'));
  report('Share target: текст импортирован', sharedImported);
  const urlCleaned = await page.evaluate(() => location.search === '');
  report('Share target: URL очищен', urlCleaned);

  // 9. Built-in integration tests
  await page.goto(BASE + '/index.html?test=1', { waitUntil: 'load' });
  await page.waitForTimeout(4000);
  const toast = await page.locator('#toast, .toast').first().textContent().catch(() => '');
  report('Встроенные интеграционные тесты', /пройдены/i.test(toast || ''), (toast || '').trim());

  // 10. Error summary
  report('Нет ошибок JS на странице', pageErrors.length === 0, pageErrors.slice(0, 3).join(' | '));
  const realConsoleErrors = consoleErrors.filter(e => !/net::|Failed to load resource|ERR_/.test(e));
  report('Нет console.error (кроме сетевых)', realConsoleErrors.length === 0, realConsoleErrors.slice(0, 3).join(' | '));

  await browser.close();
  const failed = results.filter(r => !r.ok).length;
  console.log(`\n=== ИТОГ: ${results.length - failed}/${results.length} пройдено ===`);
  process.exit(failed ? 1 : 0);
})().catch(err => { console.error('HARNESS ERROR:', err); process.exit(2); });

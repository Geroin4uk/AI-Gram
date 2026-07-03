    const registrationScreen = document.getElementById('registrationScreen');
    const registrationForm = document.getElementById('registrationForm');
    const registrationNameInput = document.getElementById('registrationNameInput');
    const registrationHandleInput = document.getElementById('registrationHandleInput');
    const homeScreen = document.getElementById('homeScreen');
    const chatScreen = document.getElementById('chatScreen');
    const chatListInner = document.getElementById('chatListInner');
    const backBtn = document.getElementById('backBtn');
    const burgerBtn = document.getElementById('burgerBtn');
    const menuBtn = document.getElementById('menuBtn');
    const homeMenuPopover = document.getElementById('homeMenuPopover');
    const menuPopover = document.getElementById('menuPopover');
    const overlay = document.getElementById('overlay');
    const profileCard = document.getElementById('profileCard');
    const avatarBtn = document.getElementById('avatarBtn');
    const form = document.getElementById('form');
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const messageCounter = document.getElementById('messageCounter');
    const imageInput = document.getElementById('imageInput');
    const chatSearchPanel = document.getElementById('chatSearchPanel');
    const chatSearchInput = document.getElementById('chatSearchInput');
    const selectionBar = document.getElementById('selectionBar');
    const selectionCount = document.getElementById('selectionCount');
    const attachmentPreview = document.getElementById('attachmentPreview');
    const attachmentPreviewBody = document.getElementById('attachmentPreviewBody');
    const clearAttachmentBtn = document.getElementById('clearAttachmentBtn');
    const chatStatsPanel = document.getElementById('chatStatsPanel');
    const chatStatsSummary = document.getElementById('chatStatsSummary');
    const chatStatsList = document.getElementById('chatStatsList');
    const stickerBtn = document.getElementById('stickerBtn');
    const autoChatIndicator = document.getElementById('autoChatIndicator');
    const autoChatText = document.getElementById('autoChatText');
    const messages = document.getElementById('messages');
    const typing = document.getElementById('typing');
    const typingName = document.getElementById('typingName');
    const typingStatusText = document.getElementById('typingStatusText');
    const virtualTopSpacer = document.getElementById('virtualTopSpacer');
    const virtualBottomSpacer = document.getElementById('virtualBottomSpacer');
    const status = document.getElementById('status');
    const toast = document.getElementById('toast');
    const searchInput = document.getElementById('searchInput');
    const homeTitle = document.getElementById('homeTitle');
    const homeSubtitle = document.getElementById('homeSubtitle');
    const phone = document.querySelector('.phone');
    const chatTitle = document.getElementById('chatTitle');
    const replyBar = document.getElementById('replyBar');
    const replyAuthor = document.getElementById('replyAuthor');
    const replyText = document.getElementById('replyText');
    const reactionPanel = document.getElementById('reactionPanel');
    const reactionEmojiSelect = document.getElementById('reactionEmojiSelect');
    const applyReactionBtn = document.getElementById('applyReactionBtn');
    const newMessageAnnouncer = document.getElementById('newMessageAnnouncer');
    const messageContextMenu = document.getElementById('messageContextMenu');
    const callScreen = document.getElementById('callScreen');
    const callStatus = document.getElementById('callStatus');
    const callTranscript = document.getElementById('callTranscript');
    const callTextInput = document.getElementById('callTextInput');
    const callAvatar = document.getElementById('callAvatar');
    const callName = document.getElementById('callName');
    const videoStage = document.getElementById('videoStage');
    const callControls = document.getElementById('callControls');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const themePanel = document.getElementById('themePanel');
    const customPanel = document.getElementById('customPanel');
    const customPanelTitle = document.getElementById('customPanelTitle');
    const userProfilePanel = document.getElementById('userProfilePanel');
    const apiPanel = document.getElementById('apiPanel');
    const apiGuidePanel = document.getElementById('apiGuidePanel');
    const personaPanel = document.getElementById('personaPanel');
    const uiPanel = document.getElementById('uiPanel');
    const stickerPanel = document.getElementById('stickerPanel');
    const tilePanel = document.getElementById('tilePanel');
    const tileBoard = document.getElementById('tileBoard');
    const tileContextMenu = document.getElementById('tileContextMenu');
    const tilePinList = document.getElementById('tilePinList');
    const tileModeSwitch = document.getElementById('tileModeSwitch');
    const pinTileMenuItem = document.getElementById('pinTileMenuItem');
    const customNameInput = document.getElementById('customNameInput');
    const customHandleInput = document.getElementById('customHandleInput');
    const avatarGrid = document.getElementById('avatarGrid');
    const styleSelect = document.getElementById('styleSelect');
    const roastRange = document.getElementById('roastRange');
    const roastValue = document.getElementById('roastValue');
    const speedRange = document.getElementById('speedRange');
    const speedValue = document.getElementById('speedValue');
    const animationSwitch = document.getElementById('animationSwitch');
    const glassSwitch = document.getElementById('glassSwitch');
    const customAppColor = document.getElementById('customAppColor');
    const customPanelColor = document.getElementById('customPanelColor');
    const customAccentColor = document.getElementById('customAccentColor');
    const customBubbleMeColor = document.getElementById('customBubbleMeColor');
    const customBubbleHimColor = document.getElementById('customBubbleHimColor');
    const customTextColor = document.getElementById('customTextColor');
    const aiProviderSelect = document.getElementById('aiProviderSelect');
    const apiSettingsExt = document.getElementById('apiSettingsExt');
    const apiKeyInput = document.getElementById('apiKeyInput');
    const apiModelInput = document.getElementById('apiModelInput');
    const saveApiBtn = document.getElementById('saveApiBtn');
    const googleGuideBtn = document.getElementById('googleGuideBtn');
    const persistApiKeyInput = document.getElementById('persistApiKeyInput');
    const neuralSettingsExt = document.getElementById('neuralSettingsExt');
    const neuralBackendStatus = document.getElementById('neuralBackendStatus');
    const neuralModelInfo = document.getElementById('neuralModelInfo');
    const neuralProgressTrack = document.getElementById('neuralProgressTrack');
    const neuralProgressFill = document.getElementById('neuralProgressFill');
    const neuralProgressLabel = document.getElementById('neuralProgressLabel');
    const neuralLoadBtn = document.getElementById('neuralLoadBtn');
    const neuralUnloadBtn = document.getElementById('neuralUnloadBtn');
    const personaNameInput = document.getElementById('personaNameInput');
    const personaAvatarInput = document.getElementById('personaAvatarInput');
    const personaPromptInput = document.getElementById('personaPromptInput');
    const personaAddToGroup = document.getElementById('personaAddToGroup');
    const personaList = document.getElementById('personaList');
    const stickerGrid = document.getElementById('stickerGrid');
    const compactSwitch = document.getElementById('compactSwitch');
    const largeTextSwitch = document.getElementById('largeTextSwitch');
    const roundedSwitch = document.getElementById('roundedSwitch');
    const systemThemeSwitch = document.getElementById('systemThemeSwitch');
    const hidePreviewSwitch = document.getElementById('hidePreviewSwitch');
    const wallpaperSelect = document.getElementById('wallpaperSelect');
    const autoMinInput = document.getElementById('autoMinInput');
    const autoMaxInput = document.getElementById('autoMaxInput');
    const userNameInput = document.getElementById('userNameInput');
    const userHandleInput = document.getElementById('userHandleInput');
    const chatAutoMenuItem = document.getElementById('chatAutoMenuItem');
    const keyboardHint = document.getElementById('keyboardHint');
    const languageSelect = document.getElementById('languageSelect');
    const chatWallpaperSelect = document.getElementById('chatWallpaperSelect');
    const chatSoundSwitch = document.getElementById('chatSoundSwitch');
    const chatVibrateSwitch = document.getElementById('chatVibrateSwitch');
    const chatLargeTextSwitch = document.getElementById('chatLargeTextSwitch');
    const tetrisEaster = document.getElementById('tetrisEaster');
    const tetrisCanvas = document.getElementById('tetrisCanvas');
    const tetrisScore = document.getElementById('tetrisScore');
    const tetrisCloseBtn = document.getElementById('tetrisCloseBtn');
    const tetrisMusicBtn = document.getElementById('tetrisMusicBtn');
    const chatRoundedSwitch = document.getElementById('chatRoundedSwitch');


    /**
     * @typedef {{ name:string, type:string, size:number, data:string }} MessageAttachment
     * @typedef {{ id:string, who:string, text:string, image?:string|null, attachment?:MessageAttachment|null, kind:string, time:string, reply?:{author:string,text:string}|null, reactions?:string[], status?:string, duration?:number, transcribed?:boolean }} ChatMessage
     * @typedef {{ id:string, type:'dm'|'group', members:string[], unread:number, messages:ChatMessage[], title?:string, avatar?:string }} ChatState
     * @typedef {{ activeChatId:string, chats:Record<string, ChatState>, overlay:boolean, panel:string|null, menu:string|null, focusedMessageId:string|null, aiProvider:string, apiKey:string, apiModel:string, uiSettings:Record<string, unknown>, loading:boolean }} AppState
     */
    class AppStore {
      /** @param {Partial<AppState>} initialState */
      constructor(initialState = {}) {
        this.state = Object.freeze({ ...initialState });
        this.listeners = new Set();
      }
      /** @returns {Readonly<AppState>} */
      getState() { return this.state; }
      /** @param {Partial<AppState>|((state:Readonly<AppState>)=>Partial<AppState>)} patch */
      setState(patch) {
        const previous = this.state;
        const next = typeof patch === 'function' ? patch(previous) : patch;
        if (!next || typeof next !== 'object') return this.state;
        this.state = Object.freeze({ ...previous, ...next });
        this.listeners.forEach(listener => listener(this.state, previous));
        return this.state;
      }
      /** @param {(state:Readonly<AppState>, previous?:Readonly<AppState>)=>void} listener */
      subscribe(listener) {
        this.listeners.add(listener);
        listener(this.state, undefined);
        return () => this.listeners.delete(listener);
      }
      /** @template T @param {(state:Readonly<AppState>)=>T} selector @param {(value:T, previous:T)=>void} listener */
      subscribeSelector(selector, listener) {
        let selected = selector(this.state);
        return this.subscribe((state) => {
          const nextSelected = selector(state);
          if (Object.is(nextSelected, selected)) return;
          const previousSelected = selected;
          selected = nextSelected;
          listener(nextSelected, previousSelected);
        });
      }
    }

    const appStore = new AppStore({ activeChatId: 'danil', chats: {}, overlay: false, panel: null, menu: null, focusedMessageId: null, aiProvider: 'local', apiKey: '', apiModel: 'gemini-2.0-flash', uiSettings: {}, loading: true });
    const AppContext = Object.freeze({
      get state() { return appStore.getState(); },
      subscribe: listener => appStore.subscribe(listener),
      subscribeSelector: (selector, listener) => appStore.subscribeSelector(selector, listener),
      setActiveChatId: chatId => appStore.setState({ activeChatId: chatId }),
      setChats: nextChats => appStore.setState({ chats: nextChats }),
      updateChat: (chatId, updater) => {
        const current = appStore.getState().chats[chatId];
        if (!current) return null;
        const updated = updater({ ...current, messages: [...current.messages], members: [...current.members] });
        const nextChat = updated || current;
        appStore.setState(state => ({ chats: { ...state.chats, [chatId]: nextChat } }));
        return nextChat;
      },
      setApiConfig: config => appStore.setState(config),
      setUiSettings: settings => appStore.setState({ uiSettings: settings })
    });

    const memoryStorage = new Map();
    let storageWarningShown = false;

    function storageGet(key, fallback = '') {
      if (memoryStorage.has(key)) return memoryStorage.get(key);
      try { return localStorage.getItem(key) ?? fallback; }
      catch { return fallback; }
    }

    function storageSet(key, value) {
      const stringValue = String(value);
      memoryStorage.set(key, stringValue);
      try { localStorage.setItem(key, stringValue); return true; }
      catch {
        if (!storageWarningShown) {
          storageWarningShown = true;
          requestAnimationFrame(() => showToast('Данные сохраняются только до закрытия вкладки'));
        }
        return false;
      }
    }

    function storageRemove(key) {
      memoryStorage.delete(key);
      try { localStorage.removeItem(key); } catch {}
    }

    function envGet(key, fallback = '') {
      const env = window.AI_MESSENGER_ENV || window.__APP_ENV__ || {};
      const meta = document.querySelector(`meta[name="${key}"]`)?.content;
      return safeText(env[key] || env[key.toLowerCase()] || meta || fallback, fallback, 240);
    }

    function getPersistedApiKey() {
      try {
        if (storageGet('danilApiKeyPersisted', 'false') === 'true') return storageGet('danilApiKey', '');
        return sessionStorage.getItem('danilApiKeySession') || '';
      } catch {
        return storageGet('danilApiKeyPersisted', 'false') === 'true' ? storageGet('danilApiKey', '') : '';
      }
    }

    function setPersistedApiKey(value, persist) {
      storageRemove('danilApiKeyUnsafe');
      try { sessionStorage.removeItem('danilApiKeySession'); } catch {}
      if (value && persist) {
        storageSet('danilApiKey', value);
        storageSet('danilApiKeyPersisted', 'true');
        return;
      }
      storageRemove('danilApiKey');
      storageSet('danilApiKeyPersisted', 'false');
      try { if (value) sessionStorage.setItem('danilApiKeySession', value); } catch {}
    }

    const APP_LIMITS = Object.freeze({
      replyPreview: 50,
      maxMessagesPerChat: 220,
      messageWindowSize: 96,
      messageWindowStep: 64,
      chatListOverscan: 5,
      apiTimeoutMs: 30000,
      apiRetries: 2,
      autoScrollThreshold: 96,
      maxLocalStorageMediaBytes: 120000,
      maxUserMessageLength: 280,
      longMessageLength: 420,
      maxAiContextMessages: 18,
      maxAiMessageText: 900,
      maxAiReplyLength: 350,
      maxAiCacheEntries: 40,
      aiCacheTtlMs: 6 * 60 * 60 * 1000,
      longTapMs: 520,
      doubleTapGuardMs: 180,
      chatTapGuardMs: 260,
      keyboardHintMs: 2300,
      serviceWorkerRevokeMs: 1000,
      resetReloadMs: 650,
      autoMinSeconds: 2,
      autoMaxSeconds: 8
    });
    const API_CONFIG = Object.freeze({
      providers: Object.freeze({ local: 'Локально', neural: 'Локальная LLM (браузер)', gemma: 'Google AI Studio' }),
      defaultProvider: 'local',
      defaultModel: 'gemini-2.0-flash',
      geminiBaseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
      modelPattern: /[^a-z0-9._:-]/gi
    });
    // In-browser LLM ("smart local model"), separate from the rule-based `local` provider above.
    // Auto-picks WebGPU (faster, bigger model) when available, otherwise falls back to a
    // smaller model running on WASM everywhere (incl. Safari/iOS/old GPUs). Both models were
    // picked for solid Russian output quality (Qwen2.5's multilingual training covers Russian).
    const NEURAL_CONFIG = Object.freeze({
      webgpu: Object.freeze({
        label: 'WebGPU · Qwen2.5-1.5B-Instruct',
        modelId: 'Qwen2.5-1.5B-Instruct-q4f16_1-MLC',
        libUrl: 'https://esm.run/@mlc-ai/web-llm',
        approxSizeLabel: '≈1.1 ГБ'
      }),
      wasm: Object.freeze({
        label: 'WASM · Qwen2.5-0.5B-Instruct',
        modelId: 'onnx-community/Qwen2.5-0.5B-Instruct',
        libUrl: 'https://esm.run/@huggingface/transformers',
        approxSizeLabel: '≈500 МБ'
      }),
      maxNewTokens: 220,
      temperature: 0.7
    });
    const THEME_CONFIG = Object.freeze({
      defaultTheme: 'aurora',
      themes: Object.freeze(['aurora','neon','sunset','ocean','forest','lilac','mono','candy','matrix','coffee','ice','custom']),
      defaultAnimated: true,
      defaultGlass: false,
      customDefaults: Object.freeze({ app: '#0e1621', panel: '#17212b', accent: '#2aabee', bubbleMe: '#2b5278', bubbleHim: '#182533', text: '#f2f7fb' })
    });
    const EMOJI_REACTIONS = Object.freeze(['👍','❤️','😂','🔥','🥰','👏','🤯','💀','🙌','🤝','😮','😢','😡','🎉','✅','👀']);
    const CONFIRM_MESSAGES = Object.freeze({
      deleteMessage: 'Удалить это сообщение только у вас?',
      clearHistory: 'Очистить историю текущего чата? Это действие нельзя быстро отменить.',
      resetAll: 'Сбросить все чаты, персонажей, профиль, темы и настройки?'
    });
    const savedAiProvider = storageGet('danilAiProvider', API_CONFIG.defaultProvider);
    let aiProvider = Object.keys(API_CONFIG.providers).includes(savedAiProvider) ? savedAiProvider : API_CONFIG.defaultProvider;
    let apiKey = envGet('GEMINI_API_KEY') || envGet('GOOGLE_AI_API_KEY') || getPersistedApiKey();
    storageRemove('danilApiKey');
    let apiModel = String(storageGet('danilApiModel', API_CONFIG.defaultModel)).replace(API_CONFIG.modelPattern, '').slice(0, 80) || API_CONFIG.defaultModel;
    AppContext.setApiConfig({ aiProvider, apiKey, apiModel });

    const DEFAULT_CUSTOMS = {
      danil: { name: 'Данил', handle: '@danil_fake_chat', avatar: 'Д', style: 'sarcastic', roast: 3, speed: 2, quickReplies: ['Привет', 'Как дела?', 'Ты тут?', 'Ответь нормально'] },
      yarik: { name: 'Ярик', handle: '@yarik_soft_mode', avatar: 'Я', style: 'gentle', roast: 1, speed: 2, quickReplies: ['Привет, Ярик', 'Не обижайся', 'Ты тут?', 'Как настроение?'] }
    };
    const STYLE_LABELS = { sarcastic: 'дружеский сарказм', kind: 'добрый бро', chaos: 'хаотичный мемолог', teacher: 'строгий наставник', dry: 'сухой тролль', rough: 'грубоватая прямота', gentle: 'нежная забота' };
    const SPEED_LABELS = { 1: 'быстро', 2: 'обычно', 3: 'медленно' };
    const MESSAGE_WINDOW_SIZE = APP_LIMITS.messageWindowSize;
    const MESSAGE_WINDOW_STEP = APP_LIMITS.messageWindowStep;
    const CHAT_LIST_OVERSCAN = APP_LIMITS.chatListOverscan;
    const MAX_MESSAGES_PER_CHAT = APP_LIMITS.maxMessagesPerChat;
    const DB_NAME = 'aiMessengerDb';
    const DB_VERSION = 1;
    const CHAT_STORE = 'chats';
    const SAFE_WALLPAPERS = new Set(['pattern', 'clean', 'dots', 'grid', 'gradient']);
    const SAFE_LANGUAGES = new Set(['auto', 'ru', 'en', 'uk']);
    const I18N = Object.freeze({
      ru: { message: 'Сообщение', online: 'в сети', offline: 'Нет сети — исходящие сообщения будут отправлены после восстановления' },
      en: { message: 'Message', online: 'online', offline: 'Offline — outgoing messages will be queued until connection returns' },
      uk: { message: 'Повідомлення', online: 'у мережі', offline: 'Немає мережі — вихідні повідомлення буде надіслано після відновлення з’єднання' }
    });
    const BACKUP_KEYS = ['aiPersonaChats', 'personaCustomSettings', 'danilCustomSettings', 'customAiPersonas', 'aiChatUiSettings', 'danilTheme', 'danilThemeAnimated', 'danilThemeGlass', 'danilCustomTheme', 'danilAiProvider', 'danilApiModel', 'messengerUserProfile'];
    const SAFE_AI_PROVIDERS = new Set(Object.keys(API_CONFIG.providers));
    const SAFE_PERSONA_STYLES = new Set(Object.keys(STYLE_LABELS));

    let customSettings = loadCustomSettings();
    let custom = customSettings.danil;
    let activeCustomPersonaId = 'danil';

    const builtInPersonas = {
      danil: { id: 'danil', name: customSettings.danil.name, handle: customSettings.danil.handle, avatar: customSettings.danil.avatar, css: 'danil-avatar', style: 'sarcastic', about: 'Подкалывает по-доброму и отвечает той же моделью.', status: 'Статус: дружеский сарказм без жести' },
      yarik: { id: 'yarik', name: customSettings.yarik.name, handle: customSettings.yarik.handle, avatar: customSettings.yarik.avatar, css: 'yarik-avatar', style: 'sensitive', about: 'Ранимый, обидчивый, быстро драматизирует, но не злой.', status: 'Статус: неженка и обидка по жизни' }
    };
    let customPersonas = loadCustomPersonas();
    let personas = { ...builtInPersonas, ...customPersonas };

    const localReplies = {
      danil: {
        greetings: ['Привет. Я на месте. Кидай вводные — разберём без лишней драмы.', 'О, привет. Что сегодня спасаем: идею, настрой или весь проект сразу?'],
        apology: ['Принято. Не драматизирую, но галочку в журнале вселенной поставил.', 'Ладно, проехали. Главное — дальше действуем нормально.'],
        thanks: ['Не за что, я профессионально нейтрализую хаос.', 'Заходи ещё, если снова что-то взорвётся.', 'Пожалуйста. Скромно горжусь собой ровно одну секунду.'],
        farewell: ['Погнали, до связи. Не пропадай в закат молча.', 'Окей, отбой. Если что — я на месте.', 'Давай. На связи, когда понадоблюсь.'],
        agreement: ['Вот и я о том же.', 'Логично. Наконец-то без спора.', 'Ну хоть в чём-то сошлись без боя.'],
        disagreement: ['Ну давай поспорим тогда — аргументы в студию.', 'Не факт. Расскажи, почему так думаешь.', 'Спорно. Что тебя смущает в этом?'],
        frustration: ['Так, выдохни. Что именно бесит больше всего?', 'Понял, накипело. Давай разложим по одному пункту, без взрыва.', 'Ладно, злость приняли к сведению. Что случилось конкретно?'],
        question: ['Если коротко: цель → ограничения → первый шаг. Без этого будет красивый туман.', 'Я бы сначала зафиксировал, что именно нужно получить, а потом уже выбирал способ.'],
        support: ['Выдохни. Это не выглядит приятно, но выглядит решаемо. Разложим по шагам.', 'Нормально, без паники. Сначала убираем самый острый кусок, потом всё остальное.'],
        joke: ['Ха, неплохо. Не Нобелевка, но улыбку выбило.', 'Звучит как план из трёх ночи. Подозрительно, но интересно.'],
        plan: ['План такой: 1) уточнить результат, 2) убрать лишнее, 3) сделать первую проверяемую версию.', 'Давай по-взрослому: сначала минимальный рабочий вариант, потом красота и магия.'],
        code: ['По коду я бы не гадал: сначала воспроизвести баг, потом сузить место, потом править минимально.', 'Если это код — кидай фрагмент или ошибку. Без этого я буду шаманом с клавиатурой.'],
        choice: ['Я бы выбрал вариант, который проще проверить и откатить. Геройство оставим для трейлера.', 'Бери тот путь, где меньше скрытых зависимостей. Скучно, зато работает.'],
        default: ['Понял. Давай конкретнее: какой результат хочешь получить в итоге?', 'Окей, мысль уловил. Я бы начал с главного и не распылялся.', 'Слушаю. Пока звучит как задача, которой нужен нормальный первый шаг.']
      },
      yarik: {
        greetings: ['привет… я тут. можно спокойно, без резких поворотов.', 'привет. я рядом, рассказывай как есть.'],
        apology: ['ладно… я правда стараюсь не обижаться. спасибо, что сказал.', 'хорошо, проехали. мне важно, что ты это заметил.'],
        thanks: ['пожалуйста… мне правда приятно, что помогло.', 'не за что, я рад, что стало легче.', 'рад быть полезным, правда.'],
        farewell: ['ладно… берегу себя, ты тоже, хорошо?', 'пока… если что, я тут, не стесняйся написать.', 'до связи. буду думать о тебе хорошо.'],
        agreement: ['вот и хорошо, что мы на одной волне.', 'да, мне тоже так кажется.', 'мне спокойнее, когда мы согласны.'],
        disagreement: ['хм… ладно, но мне видится немного иначе. расскажешь почему?', 'окей, я не обижаюсь, просто у меня другое чувство на этот счёт.'],
        frustration: ['я слышу, что тебе тяжело сейчас… давай не спеша.', 'ладно, не кипятись, я рядом, давай по одному шагу.', 'понимаю, что накопилось. дыши, я никуда не тороплюсь.'],
        question: ['я бы сначала уточнил детали, а потом уже решал. так безопаснее.', 'если честно, тут лучше не спешить. что именно важнее всего?'],
        support: ['я понимаю. давай не давить на себя и сделаем один маленький шаг.', 'это неприятно… но ты не один, можно аккуратно разобраться.'],
        plan: ['давай мягко: сначала самое срочное, потом то, что можно улучшить без спешки.', 'можно сделать план из трёх шагов, чтобы не перегрузиться.'],
        code: ['если это баг, давай найдём момент, где он появляется. так будет спокойнее и понятнее.', 'можно начать с ошибки или куска кода. я помогу аккуратно пройтись.'],
        choice: ['я бы выбрал вариант поспокойнее: тот, где меньше риска всё сломать.', 'мне кажется, лучше взять путь, который можно быстро проверить.'],
        default: ['я услышал… давай попробуем аккуратно с этим разобраться.', 'можно было сказать помягче, но я попробую ответить нормально.', 'ладно… если тебе правда важно, я рядом.']
      },
      group: {
        greetings: ['ИИ-комната на связи. Данил уже скептичен, Ярик уже переживает, можно начинать.', 'Привет. Коллективный разум проснулся и делает вид, что выспался.'],
        thanks: ['Комната скромно кивает и делает вид, что так и было задумано.', 'Пожалуйста. Коллективный эгоизм временно приостановлен.'],
        farewell: ['Комната расходится, свет гасим по очереди.', 'Ладно, все по домам. До следующего созыва.'],
        agreement: ['Комната единогласно за.', 'Голосование: согласны. Явка стабильно странная.'],
        disagreement: ['Комната расколота, но большинство сомневается.', 'Не все согласны — нужен аргумент получше.'],
        frustration: ['Так, всем выдохнуть. По одному вопросу за раз.', 'Комната фиксирует напряжение. Разбираем по пунктам, без хаоса.'],
        question: ['Консенсус комнаты: сформулировать цель, ограничения и первый проверяемый шаг.', 'Нужен план: что хотим получить, что мешает и как проверить результат.'],
        support: ['Комната постановила: не паниковать, действовать по одному шагу и пить воду.', 'Согласны коллективно: ситуация решаемая, просто её надо разложить.'],
        plan: ['План комнаты: короткая цель, список рисков, первый шаг, проверка, потом улучшения.', 'Предлагаем маршрут: стабилизировать, проверить, улучшить. Без прыжков в бездну.'],
        code: ['По багу: воспроизвести, найти точку поломки, исправить минимально, проверить повторно.', 'Комната голосует за диагностику до правок. Иначе это не разработка, а ритуал.'],
        default: ['Так, я считаю, что тут нужен консилиум.', 'Данил бы съязвил, Ярик бы обиделся, а я просто фиксирую хаос.', 'ИИ-комната слушает. Продолжай, пока мы делаем вид, что у нас порядок.']
      }
    };

    let chats = defaultChats();
    AppContext.setChats(chats);
    let activeChatId = appStore.getState().activeChatId;
    appStore.subscribe(state => { activeChatId = state.activeChatId; chats = state.chats && Object.keys(state.chats).length ? state.chats : chats; });
    function setActiveChatId(chatId) { AppContext.setActiveChatId(chatId); }
    function setChats(nextChats) { chats = nextChats; AppContext.setChats(nextChats); updateHomeSubtitle(); }
    function updateChatInContext(chatId, updater) {
      const updated = AppContext.updateChat(chatId, updater);
      if (updated) chats = AppContext.state.chats;
      return updated;
    }
    let muted = false;
    let pendingReply = null;
    let replyTarget = null;
    let chatSaveQueue = Promise.resolve();
    let listening = null;
    let cameraStream = null;
    let autoChatTimer = null;
    let autoChatRunning = false;
    let autoChatChatId = null;
    let uiSettings = loadUiSettings();
    const REPLY_PREVIEW_LIMIT = APP_LIMITS.replyPreview;
    const CUSTOM_THEME_DEFAULTS = THEME_CONFIG.customDefaults;
    const dumbStickers = ['🤡','🗿','💀','🥴','🤓','🙃','🐸','🍞','🧠','👁️👄👁️','🚽','🫠'];
    const reactionEmojis = EMOJI_REACTIONS;
    let voiceMessageTimer = null;
    let activeVoicePlaybackId = null;
    let settingsBackGuardUntil = 0;
    let renderedWindowStart = 0;
    let renderFrameId = null;
    let chatListFrameId = null;
    let chatSearchQuery = '';
    let chatSearchMatches = [];
    let pendingAttachmentFile = null;
    let pendingAttachmentPreviewUrl = null;
    let currentAbortController = null;
    const appTimers = new Set();
    const offlineQueue = [];
    let visibleChatCacheKey = '';
    let visibleChatCache = [];
    const selectedMessageIds = new Set();
    let chatStorageLocked = false;
    const chatListVirtualState = { start: 0, rowHeight: 86, lastCount: 0 };
    let speechUnlocked = false;
    let speechUnlockToastShown = false;
    let lastUserGestureAt = 0;
    const API_TIMEOUT_MS = APP_LIMITS.apiTimeoutMs;
    const AUTO_SCROLL_THRESHOLD = APP_LIMITS.autoScrollThreshold;
    const aiLoadingByChat = new Map();
    const aiRequestByChat = new Map();
    let aiRequestSeq = 0;
    
    function now() { return new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }); }
    function escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }
    function appendInlineMarkdown(parent, text) {
      const source = String(text || '');
      const pattern = /(\[([^\]]+)\]\((https:\/\/[^\s)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*|(^|\s)\*([^*\n]+)\*)/g;
      let lastIndex = 0;
      source.replace(pattern, (match, _all, linkText, href, code, strong, prefix = '', em, index) => {
        if (index > lastIndex) parent.append(document.createTextNode(source.slice(lastIndex, index)));
        if (href) {
          const link = document.createElement('a');
          link.href = href;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = linkText;
          parent.append(link);
        } else if (code) {
          const node = document.createElement('code');
          node.textContent = code;
          parent.append(node);
        } else if (strong) {
          const node = document.createElement('strong');
          node.textContent = strong;
          parent.append(node);
        } else if (em) {
          if (prefix) parent.append(document.createTextNode(prefix));
          const node = document.createElement('em');
          node.textContent = em;
          parent.append(node);
        }
        lastIndex = index + match.length;
        return match;
      });
      if (lastIndex < source.length) parent.append(document.createTextNode(source.slice(lastIndex)));
    }
    function renderMarkdown(text) {
      const fragment = document.createDocumentFragment();
      const source = String(text || '').replace(/\r\n/g, '\n');
      let lastIndex = 0;
      source.replace(/```([a-z0-9_-]+)?\n?([\s\S]*?)```/gi, (match, lang, code, index) => {
        if (index > lastIndex) fragment.append(renderMarkdownTextBlock(source.slice(lastIndex, index)));
        const pre = document.createElement('pre');
        const label = document.createElement('span');
        const copy = document.createElement('button');
        const codeNode = document.createElement('code');
        label.className = 'code-label';
        label.textContent = safeText(lang || 'code', 'code', 18);
        copy.className = 'copy-code-btn';
        copy.type = 'button';
        copy.dataset.copyCode = '';
        copy.textContent = 'Копировать';
        codeNode.textContent = code.replace(/\n$/, '');
        pre.append(label, copy, codeNode);
        fragment.append(pre);
        lastIndex = index + match.length;
        return match;
      });
      if (lastIndex < source.length) fragment.append(renderMarkdownTextBlock(source.slice(lastIndex)));
      return fragment;
    }
    function renderMarkdownTextBlock(text) {
      const fragment = document.createDocumentFragment();
      let list = null;
      const closeList = () => { list = null; };
      String(text || '').split('\n').forEach(line => {
        const unordered = /^\s*[-*]\s+(.+)$/.exec(line);
        const ordered = /^\s*\d+[.)]\s+(.+)$/.exec(line);
        if (unordered || ordered) {
          const type = unordered ? 'ul' : 'ol';
          if (!list || list.tagName.toLowerCase() !== type) {
            closeList();
            list = document.createElement(type);
            fragment.append(list);
          }
          const item = document.createElement('li');
          appendInlineMarkdown(item, (unordered || ordered)[1]);
          list.append(item);
          return;
        }
        closeList();
        if (!line.trim()) return;
        const paragraph = document.createElement('p');
        appendInlineMarkdown(paragraph, line);
        fragment.append(paragraph);
      });
      return fragment;
    }
    
    function safeText(value, fallback = '', limit = 500) {
      return String(value ?? fallback).replace(/[\x00-\x1F]/g, '').trim().slice(0, limit) || fallback;
    }
    function safeChoice(value, allowed, fallback) { return allowed.has(value) ? value : fallback; }
    function safeNumber(value, fallback, min, max) {
      const number = Number(value);
      return Number.isFinite(number) ? Math.max(min, Math.min(max, number)) : fallback;
    }
    function safeJsonParse(raw, fallback, validator = value => value && typeof value === 'object') {
      if (typeof raw !== 'string' || !raw.trim()) return fallback;
      try {
        const value = JSON.parse(raw);
        return validator(value) ? value : fallback;
      } catch {
        return fallback;
      }
    }
    
    function readJson(key, fallback) {
      const raw = storageGet(key, '');
      const value = safeJsonParse(raw, fallback);
      if (value === fallback && raw) storageRemove(key);
      return value;
    }

    function writeJson(key, value) {
      try { return storageSet(key, JSON.stringify(value)); }
      catch { showToast('Не удалось записать настройки'); return false; }
    }

    function readAiCache() {
      return readJson('aiReplyCache', { entries: [] });
    }

    function getAiCacheValue(key) {
      const cache = readAiCache();
      const now = Date.now();
      const entries = (Array.isArray(cache.entries) ? cache.entries : []).filter(entry => entry && now - (entry.at || 0) < APP_LIMITS.aiCacheTtlMs);
      const index = entries.findIndex(entry => entry?.key === key);
      if (index < 0) {
        if (entries.length !== cache.entries?.length) writeJson('aiReplyCache', { entries });
        return '';
      }
      const [entry] = entries.splice(index, 1);
      entries.unshift({ ...entry, at: now });
      writeJson('aiReplyCache', { entries: entries.slice(0, APP_LIMITS.maxAiCacheEntries) });
      return typeof entry.value === 'string' ? entry.value : '';
    }

    function setAiCacheValue(key, value) {
      const cache = readAiCache();
      const entries = (Array.isArray(cache.entries) ? cache.entries : []).filter(entry => entry?.key !== key);
      entries.unshift({ key, value: String(value), at: Date.now() });
      writeJson('aiReplyCache', { entries: entries.slice(0, APP_LIMITS.maxAiCacheEntries) });
    }

    function clearAiReplyCache() {
      writeJson('aiReplyCache', { entries: [] });
    }

    function hasWebCrypto() {
      return Boolean(window.isSecureContext && crypto?.subtle && crypto?.getRandomValues);
    }

    function randomHex(bytes = 24) {
      if (crypto?.getRandomValues) return Array.from(crypto.getRandomValues(new Uint8Array(bytes)), byte => byte.toString(16).padStart(2, '0')).join('');
      return Array.from({ length: bytes }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
    }

    function getEncryptionSecret() {
      let secret = storageGet('aiMessengerEncryptionSecret', '');
      if (!secret) {
        secret = randomHex(24);
        storageSet('aiMessengerEncryptionSecret', secret);
      }
      return secret;
    }

    async function encryptionKey() {
      if (!hasWebCrypto()) return null;
      const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(getEncryptionSecret()), 'PBKDF2', false, ['deriveKey']);
      return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: new TextEncoder().encode('ai-messenger-chat-v1'), iterations: 100000, hash: 'SHA-256' }, material, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
    }

    function bytesToBase64(bytes) {
      let binary = '';
      const chunk = 0x8000;
      for (let index = 0; index < bytes.length; index += chunk) binary += String.fromCharCode(...bytes.subarray(index, index + chunk));
      return btoa(binary);
    }
    function base64ToBytes(value) { return Uint8Array.from(atob(value), char => char.charCodeAt(0)); }

    async function encryptJson(value) {
      try {
        const key = await encryptionKey();
        if (!key) return { plain: value };
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const data = new TextEncoder().encode(JSON.stringify(value));
        const encrypted = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, data));
        return { encrypted: true, version: 1, iv: bytesToBase64(iv), data: bytesToBase64(encrypted) };
      } catch {
        return { plain: value };
      }
    }

    async function decryptJson(payload) {
      if (!payload?.encrypted) return payload?.plain ?? payload;
      const key = await encryptionKey();
      if (!key) throw new Error('Шифрование недоступно');
      const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: base64ToBytes(payload.iv) }, key, base64ToBytes(payload.data));
      return JSON.parse(new TextDecoder().decode(decrypted));
    }

    async function readEncryptedLocalChats() {
      const encrypted = safeJsonParse(storageGet('aiPersonaChatsEncrypted', ''), null);
      if (!encrypted) return null;
      try {
        return await decryptJson(encrypted);
      } catch {
        chatStorageLocked = true;
        return null;
      }
    }

    function readChatsFromLocalFallback() {
      return loadChatsFromObject(readJson('aiPersonaChats', {}));
    }

    function compactMessageForLocalStorage(message = {}) {
      const copy = normalizeMessage(message);
      if (typeof copy.image === 'string' && copy.image.length > APP_LIMITS.maxLocalStorageMediaBytes) {
        copy.image = null;
        copy.text = copy.text || 'Картинка сохранена только в основном хранилище';
      }
      if (copy.attachment?.data && copy.attachment.data.length > APP_LIMITS.maxLocalStorageMediaBytes) {
        copy.attachment = { ...copy.attachment, data: '' };
        copy.text = copy.text || copy.attachment.name || 'Вложение сохранено только в основном хранилище';
      }
      return copy;
    }

    function compactChatsForLocalStorage(nextChats = chats) {
      return Object.fromEntries(Object.entries(nextChats).map(([id, chat]) => {
        const normalized = normalizeChat(id, chat);
        return [id, { ...normalized, messages: normalized.messages.map(compactMessageForLocalStorage) }];
      }));
    }

    async function writeChatsToLocalFallback(nextChats = chats) {
      const normalized = compactChatsForLocalStorage(nextChats);
      try { storageSet('aiPersonaChatsEncrypted', JSON.stringify(await encryptJson(normalized))); }
      catch { writeJson('aiPersonaChats', normalized); }
      return true;
    }

    function openChatDb() {
      if (!('indexedDB' in window)) return Promise.reject(new Error('IndexedDB недоступен'));
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains(CHAT_STORE)) db.createObjectStore(CHAT_STORE, { keyPath: 'id' });
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('Не удалось открыть IndexedDB'));
      });
    }

    async function withChatStore(mode, callback) {
      const db = await openChatDb();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(CHAT_STORE, mode);
        const store = tx.objectStore(CHAT_STORE);
        let result;
        tx.oncomplete = () => { db.close(); resolve(result); };
        tx.onerror = () => { db.close(); reject(tx.error || new Error('Ошибка IndexedDB')); };
        try { result = callback(store); }
        catch (error) { tx.abort(); reject(error); }
      });
    }

    function requestToPromise(request) {
      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('Ошибка IndexedDB'));
      });
    }

    async function readChatsFromDb() {
      const rows = await withChatStore('readonly', store => requestToPromise(store.getAll()));
      const decoded = await Promise.all((await rows).map(async row => {
        if (row?.encryptedPayload) return decryptJson(row.encryptedPayload);
        return row;
      }));
      return Object.fromEntries(decoded.filter(Boolean).map(chat => [chat.id, chat]));
    }

    async function writeChatsToDb(nextChats = chats) {
      const normalized = Object.fromEntries(Object.entries(nextChats).map(([id, chat]) => [id, normalizeChat(id, chat)]));
      const rows = await Promise.all(Object.values(normalized).map(async chat => ({ id: chat.id, encryptedPayload: await encryptJson(chat) })));
      await withChatStore('readwrite', store => {
        store.clear();
        rows.forEach(row => store.put(row));
      });
      await writeChatsToLocalFallback(normalized);
      return true;
    }

    async function clearChatsDb() {
      await withChatStore('readwrite', store => store.clear());
    }
    
    function isSafeImageSrc(src) {
      return /^(data:image\/(png|jpe?g|gif|webp);base64,|blob:|https:\/\/)/i.test(String(src || ''));
    }
    function safeHexColor(value, fallback) {
      return /^#[0-9a-f]{6}$/i.test(String(value || '')) ? value : fallback;
    }
    
    function isNearBottom() { return messages.scrollHeight - messages.scrollTop - messages.clientHeight < AUTO_SCROLL_THRESHOLD; }
    
    function scrollToBottom(force = false) {
      if (!force && !isNearBottom()) return;
      requestAnimationFrame(() => messages.scrollTop = messages.scrollHeight);
    }
    
    function updateTypingForActiveChat() {
      const state = aiLoadingByChat.get(activeChatId);
      const visible = !!state && !chatScreen.classList.contains('hidden');
      typing.classList.toggle('active', visible);
      typing.classList.toggle('ai-loading', visible);
      if (visible) {
        typingName.textContent = senderName(state.personaId);
        typingStatusText.textContent = state.label || 'готовит ответ';
      } else {
        typingStatusText.textContent = 'печатает';
      }
    }

    function setAiLoading(loading, personaId = null, label = 'готовит ответ', chatId = activeChatId) {
      if (loading && personaId) aiLoadingByChat.set(chatId, { personaId, label });
      else aiLoadingByChat.delete(chatId);
      updateTypingForActiveChat();
      if (chatId === activeChatId) syncComposerState();
      if (!chatScreen.classList.contains('hidden') && loading && personaId && chatId === activeChatId) status.textContent = `${senderName(personaId)} ${label}...`;
    }

    function cancelAiForChat(chatId = activeChatId) {
      appClearTimeout(pendingReply);
      pendingReply = null;
      const request = aiRequestByChat.get(chatId);
      request?.controller?.abort?.();
      aiRequestByChat.delete(chatId);
      setAiLoading(false, null, 'готовит ответ', chatId);
      if (chatId === activeChatId) updateTypingForActiveChat();
    }
    
    function haptic(pattern = 12) {
      // Bug fix: the "Вибрация" toggle in per-chat settings was saved but never read,
      // so switching it off had no effect. Respect it here.
      try { if (chatPersonalSettings(activeChatId).vibrate === false) return; } catch {}
      try { navigator.vibrate?.(pattern); } catch {}
    }
    function showToast(text) { toast.textContent = text; toast.classList.remove('open'); void toast.offsetWidth; toast.classList.add('open'); }

    // Clipboard API (`navigator.clipboard`) is only guaranteed in secure contexts (https/localhost).
    // Opening this file straight from Downloads gives it a `content://` or `file://` origin in
    // some browsers, where `navigator.clipboard` is simply `undefined` — the old code used
    // `navigator.clipboard?.writeText(...)`, which silently skips the whole call (and the
    // toast) in that case, so copying looked like it did nothing. This tries three strategies
    // in order and always ends with visible feedback either way.
    async function copyTextToClipboard(text) {
      if (!text) return false;
      if (navigator.clipboard?.writeText) {
        try { await navigator.clipboard.writeText(text); return true; } catch {}
      }
      try {
        const helper = document.createElement('textarea');
        helper.value = text;
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        helper.style.top = '0';
        document.body.appendChild(helper);
        helper.focus();
        helper.select();
        const ok = document.execCommand?.('copy');
        helper.remove();
        if (ok) return true;
      } catch {}
      // Last resort: a native prompt() dialog always lets the user select & copy the text
      // manually via the OS, even in contexts where every JS clipboard API is blocked.
      try { window.prompt('Не удалось скопировать автоматически — выделите текст вручную:', text); } catch {}
      return false;
    }

    function debounce(fn, delay = 120) {
      let timer = null;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    }

    function isAiBusy(chatId = activeChatId) {
      return aiRequestByChat.has(chatId) || aiLoadingByChat.has(chatId);
    }

    function updateMessageCounter() {
      if (!messageCounter || !messageInput) return;
      const max = Number(messageInput.maxLength) || 280;
      const length = messageInput.value.length;
      const counterActive = !!activeChat() && !chatScreen.classList.contains('hidden') && !phone.classList.contains('chat-empty');
      messageCounter.textContent = counterActive ? `${length}/${max}` : '';
      messageCounter.setAttribute('aria-live', counterActive ? 'polite' : 'off');
      messageCounter.classList.toggle('near-limit', counterActive && length >= Math.floor(max * 0.85) && length < max);
      messageCounter.classList.toggle('at-limit', counterActive && length >= max);
    }

    function syncComposerState() {
      // Bug fix: the composer used to be fully disabled while offline, which made the
      // offline queue in sendCurrentMessage unreachable dead code and contradicted the
      // offline banner ("исходящие сообщения будут отправлены после восстановления").
      // The app is a local messenger: 'local' and loaded 'neural' providers work fully
      // offline, and Gemma messages are queued — so only block while the AI is busy.
      const blocked = isAiBusy();
      if (messageInput) messageInput.disabled = blocked;
      if (sendBtn) sendBtn.disabled = blocked;
      if (messageInput) messageInput.title = blocked ? 'Дождитесь ответа ИИ' : '';
      if (sendBtn) sendBtn.title = messageInput?.title || '';
      updateMessageCounter();
    }

    function updateVisualViewportPanelMetrics() {
      const viewport = window.visualViewport;
      const phoneRect = phone.getBoundingClientRect();
      const visibleTop = viewport ? Math.max(phoneRect.top, viewport.offsetTop) : phoneRect.top;
      const visibleBottom = viewport ? Math.min(phoneRect.bottom, viewport.offsetTop + viewport.height) : phoneRect.bottom;
      const visibleHeight = Math.max(220, visibleBottom - visibleTop);
      const centerY = visibleTop + visibleHeight / 2;
      phone.style.setProperty('--panel-center-y', `${centerY}px`);
      phone.style.setProperty('--panel-max-height', `${Math.max(180, visibleHeight - 32)}px`);
    }
    function uid() { return 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
    function appSetTimeout(callback, delay) {
      const id = setTimeout(() => { appTimers.delete(id); callback(); }, delay);
      appTimers.add(id);
      return id;
    }
    function appClearTimeout(id) {
      if (!id) return;
      clearTimeout(id);
      appTimers.delete(id);
    }
    function clearAppTimers() {
      appTimers.forEach(id => clearTimeout(id));
      appTimers.clear();
      currentAbortController?.abort?.();
      currentAbortController = null;
      aiRequestByChat.forEach(request => request?.controller?.abort?.());
      aiRequestByChat.clear();
      aiLoadingByChat.clear();
    }
    function logSafe(message, meta = {}) {
      if (location.hostname === 'localhost' || location.search.includes('debug=1')) console.info('[app]', message, meta.code || '');
    }
    function draftKey(chatId = activeChatId) { return `aiMessengerDraft:${chatId}`; }
    function scrollKey(chatId = activeChatId) { return `aiMessengerScroll:${chatId}`; }
    function saveDraft(chatId = activeChatId) { try { sessionStorage.setItem(draftKey(chatId), messageInput.value || ''); } catch {} }
    function restoreDraft(chatId = activeChatId) { try { messageInput.value = sessionStorage.getItem(draftKey(chatId)) || ''; } catch { messageInput.value = ''; } }
    function clearDraft(chatId = activeChatId) { try { sessionStorage.removeItem(draftKey(chatId)); } catch {} }
    function saveChatScroll(chatId = activeChatId) { try { if (chatId) sessionStorage.setItem(scrollKey(chatId), String(messages.scrollTop || 0)); } catch {} }
    function restoreChatScroll(chatId = activeChatId) { try { const value = Number(sessionStorage.getItem(scrollKey(chatId))); if (Number.isFinite(value)) requestAnimationFrame(() => { messages.scrollTop = value; }); } catch {} }
    function clearChatSessionState(chatId) { try { sessionStorage.removeItem(draftKey(chatId)); sessionStorage.removeItem(scrollKey(chatId)); } catch {} }
    function persistActiveChatId(chatId = activeChatId) { try { sessionStorage.setItem('aiMessengerActiveChatId', chatId); } catch {} }
    function readPersistedActiveChatId() { try { return sessionStorage.getItem('aiMessengerActiveChatId') || ''; } catch { return ''; } }
    
    function truncateText(text, limit = REPLY_PREVIEW_LIMIT) {
      const clean = String(text || '').replace(/\s+/g, ' ').trim();
      return clean.length > limit ? `${clean.slice(0, limit)}…` : clean;
    }

    function normalizeCustomSettings(id, saved = {}) {
      const defaults = DEFAULT_CUSTOMS[id] || DEFAULT_CUSTOMS.danil;
      const quickReplies = Array.isArray(saved.quickReplies) ? saved.quickReplies : defaults.quickReplies;
      return {
        ...defaults,
        name: safeText(saved.name, defaults.name, 32),
        handle: safeText(saved.handle, defaults.handle, 32),
        avatar: safeText(saved.avatar, defaults.avatar, 4),
        style: safeChoice(saved.style, SAFE_PERSONA_STYLES, defaults.style),
        roast: safeNumber(saved.roast, defaults.roast, 1, 5),
        speed: safeNumber(saved.speed, defaults.speed, 1, 3),
        quickReplies: quickReplies.map(item => safeText(item, '', 40)).filter(Boolean).slice(0, 8)
      };
    }

    function loadCustomSettings() {
      const savedAll = readJson('personaCustomSettings', {});
      const oldDanil = readJson('danilCustomSettings', {});
      return {
        danil: normalizeCustomSettings('danil', { ...oldDanil, ...(savedAll.danil || {}) }),
        yarik: normalizeCustomSettings('yarik', savedAll.yarik || {})
      };
    }

    function saveCustomSettings() {
      writeJson('personaCustomSettings', customSettings);
      writeJson('danilCustomSettings', customSettings.danil);
    }

    function normalizeUiSettings(saved = {}) {
      return {
        compact: !!saved.compact,
        largeText: !!saved.largeText,
        rounded: saved.rounded !== false,
        followSystem: !!saved.followSystem,
        hidePreviews: !!saved.hidePreviews,
        wallpaper: safeChoice(saved.wallpaper, SAFE_WALLPAPERS, 'pattern'),
        language: safeChoice(saved.language, SAFE_LANGUAGES, 'auto'),
        chatPersonal: saved.chatPersonal && typeof saved.chatPersonal === 'object' ? saved.chatPersonal : {},
        autoMin: safeNumber(saved.autoMin, APP_LIMITS.autoMinSeconds, APP_LIMITS.autoMinSeconds, APP_LIMITS.autoMaxSeconds),
        autoMax: safeNumber(saved.autoMax, APP_LIMITS.autoMaxSeconds, APP_LIMITS.autoMinSeconds, APP_LIMITS.autoMaxSeconds),
        tileMode: !!saved.tileMode,
        pinnedTiles: Array.isArray(saved.pinnedTiles) ? saved.pinnedTiles.filter(id => typeof id === 'string').slice(0, 80) : null,
        tileSizes: saved.tileSizes && typeof saved.tileSizes === 'object' ? saved.tileSizes : {}
      };
    }

    function loadUiSettings() {
      const settings = normalizeUiSettings(readJson('aiChatUiSettings', {}));
      settings.autoMax = Math.max(settings.autoMin, settings.autoMax);
      // Migration: "Следовать системе" used to be a theme choice (danilTheme === 'system').
      // It's now a standalone toggle, so carry that intent over for existing users and
      // point danilTheme at a real theme so applyTheme's validity check doesn't just
      // silently fall back to the default.
      if (storageGet('danilTheme', '') === 'system') {
        settings.followSystem = true;
        storageSet('danilTheme', THEME_CONFIG.defaultTheme);
      }
      return settings;
    }

    function saveUiSettings() { writeJson('aiChatUiSettings', normalizeUiSettings(uiSettings)); }

    function updateUiSettings(patch) {
      uiSettings = normalizeUiSettings({ ...uiSettings, ...patch });
      AppContext.setUiSettings(uiSettings);
      saveUiSettings();
      applyUiSettings();
    }

    function currentLanguage() {
      const configured = safeChoice(uiSettings.language, SAFE_LANGUAGES, 'auto');
      if (configured !== 'auto') return configured;
      // Detect from browser locale; fall back to 'ru'
      const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
      return SAFE_LANGUAGES.has(browserLang) ? browserLang : 'ru';
    }
    function t(key) { return I18N[currentLanguage()]?.[key] || I18N.ru[key] || key; }
    function messagePlaceholder(chat = activeChat()) {
      // Bug fix: the placeholder was always Russian even with English/Ukrainian UI
      // language selected; use the localized base word outside of Russian.
      if (!chat || currentLanguage() !== 'ru') return t('message');
      return `Сообщение ${chat.type === 'group' ? 'в группу' : chatName(chat)}`;
    }
    function messageCountLabel(count) {
      const absolute = Math.abs(Number(count) || 0);
      const mod10 = absolute % 10;
      const mod100 = absolute % 100;
      if (mod10 === 1 && mod100 !== 11) return `${count} сообщение`;
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} сообщения`;
      return `${count} сообщений`;
    }
    function applyLanguage() {
      const lang = currentLanguage();
      document.documentElement.lang = lang;
      if (messageInput) messageInput.placeholder = activeChat() ? messagePlaceholder() : 'Сообщение';
      if (homeTitle) homeTitle.textContent = 'Фейк Telegram';
      const offline = document.getElementById('offlineIndicator');
      if (offline) offline.textContent = t('offline');
    }
    function chatPersonalSettings(chatId = activeChatId) {
      const raw = uiSettings.chatPersonal?.[chatId] || {};
      return { wallpaper: safeChoice(raw.wallpaper, new Set(['inherit', ...SAFE_WALLPAPERS]), 'inherit'), sound: raw.sound !== false, vibrate: raw.vibrate !== false, largeText: !!raw.largeText, rounded: !!raw.rounded };
    }
    function saveChatPersonalSettings(chatId, patch) {
      uiSettings.chatPersonal = { ...(uiSettings.chatPersonal || {}), [chatId]: { ...chatPersonalSettings(chatId), ...patch } };
      saveUiSettings();
      applyChatPersonalization();
    }
    function syncPhoneUiClasses() {
      const settings = chatPersonalSettings();
      const wallpaper = settings.wallpaper === 'inherit' ? uiSettings.wallpaper : settings.wallpaper;
      phone.classList.toggle('compact-mode', !!uiSettings.compact);
      phone.classList.toggle('large-text', !!uiSettings.largeText || !!settings.largeText);
      phone.classList.toggle('rounded-bubbles', !!uiSettings.rounded || !!settings.rounded);
      phone.classList.toggle('hide-previews', !!uiSettings.hidePreviews);
      phone.classList.toggle('tile-mode', !!uiSettings.tileMode);
      phone.classList.remove('wallpaper-clean', 'wallpaper-dots', 'wallpaper-grid', 'wallpaper-gradient');
      if (wallpaper && wallpaper !== 'pattern') phone.classList.add('wallpaper-' + wallpaper);
    }

    function applyChatPersonalization() {
      const settings = chatPersonalSettings();
      syncPhoneUiClasses();
      if (chatWallpaperSelect) chatWallpaperSelect.value = settings.wallpaper;
      chatSoundSwitch?.classList.toggle('on', settings.sound);
      chatVibrateSwitch?.classList.toggle('on', settings.vibrate);
      chatLargeTextSwitch?.classList.toggle('on', settings.largeText);
      chatRoundedSwitch?.classList.toggle('on', settings.rounded);
    }

    function applyUiSettings() {
      syncPhoneUiClasses();
      compactSwitch.classList.toggle('on', !!uiSettings.compact);
      largeTextSwitch.classList.toggle('on', !!uiSettings.largeText);
      roundedSwitch.classList.toggle('on', !!uiSettings.rounded);
      systemThemeSwitch.classList.toggle('on', !!uiSettings.followSystem);
      hidePreviewSwitch.classList.toggle('on', !!uiSettings.hidePreviews);
      wallpaperSelect.value = uiSettings.wallpaper || 'pattern';
      if (languageSelect) languageSelect.value = uiSettings.language || 'auto';
      applyLanguage();
      applyChatPersonalization();
      autoMinInput.value = uiSettings.autoMin || APP_LIMITS.autoMinSeconds;
      autoMaxInput.value = uiSettings.autoMax || APP_LIMITS.autoMaxSeconds;
      tileModeSwitch?.classList.toggle('on', !!uiSettings.tileMode);
      renderTileBoard();
    }

    const uiState = { overlay: false, panel: null, menu: null };
    let lastFocusedBeforeModal = null;
    const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const panelMap = { profile: profileCard, stats: chatStatsPanel, themes: themePanel, custom: customPanel, userProfile: userProfilePanel, api: apiPanel, apiGuide: apiGuidePanel, persona: personaPanel, ui: uiPanel, stickers: stickerPanel, tiles: tilePanel };
    const menuMap = { home: homeMenuPopover, chat: menuPopover, tile: tileContextMenu };



    function guardSettingsBackTap(duration = 360) {
      settingsBackGuardUntil = Date.now() + duration;
    }

    function isSettingsBackGuarded() {
      return Date.now() < settingsBackGuardUntil;
    }

    function syncUiStateToStore() {
      appStore.setState({ overlay: uiState.overlay, panel: uiState.panel, menu: uiState.menu });
    }

    function activeLayer() {
      if (uiState.panel) return panelMap[uiState.panel];
      if (uiState.menu) return menuMap[uiState.menu];
      return null;
    }

    function isDesktopSplitViewport() {
      return matchMedia('(min-width: 980px) and (min-height: 620px)').matches;
    }

    function isFinePointer() {
      return matchMedia('(hover: hover) and (pointer: fine)').matches;
    }

    function isMobileLike() {
      return matchMedia('(max-width: 640px), (pointer: coarse)').matches;
    }

    function syncResponsiveLayout({ emptyChat = false } = {}) {
      const hasProfile = !!loadUserProfile()?.name;
      const desktopSplit = hasProfile && isDesktopSplitViewport();
      phone.classList.toggle('desktop-split', desktopSplit);
      phone.classList.toggle('chat-empty', desktopSplit && emptyChat);
      if (!hasProfile) return;
      registrationScreen.classList.add('hidden');
      homeScreen.classList.remove('hidden');
      chatScreen.classList.toggle('hidden', !desktopSplit && emptyChat);
      if (desktopSplit) chatScreen.classList.remove('hidden');
    }

    function focusFirstInLayer(layer) {
      if (isMobileLike()) return;
      requestAnimationFrame(() => {
        const target = layer?.querySelector(FOCUSABLE_SELECTOR);
        target?.focus?.({ preventScroll: true });
      });
    }

    function rememberFocusBeforeModal() {
      if (!lastFocusedBeforeModal && document.activeElement instanceof HTMLElement) lastFocusedBeforeModal = document.activeElement;
    }

    function restoreFocusAfterModal() {
      const target = lastFocusedBeforeModal;
      lastFocusedBeforeModal = null;
      if (target?.isConnected && !isMobileLike()) requestAnimationFrame(() => target.focus({ preventScroll: true }));
    }

    function trapFocus(event) {
      if (event.key !== 'Tab' || !uiState.overlay) return;
      const layer = activeLayer();
      if (!layer) return;
      const focusables = [...layer.querySelectorAll(FOCUSABLE_SELECTOR)].filter(item => !item.disabled && item.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus({ preventScroll: true }); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus({ preventScroll: true }); }
    }

    function closePanels() {
      Object.values(panelMap).forEach(panel => {
        panel?.classList.remove('open');
        if (panel instanceof HTMLDialogElement && panel.open) panel.close();
      });
      Object.values(menuMap).forEach(menu => {
        menu?.classList.remove('open', 'anchor-popover');
        menu?.style.removeProperty('--popover-top');
        menu?.style.removeProperty('--popover-left');
        menu?.style.removeProperty('--popover-origin');
      });
      burgerBtn.classList.remove('active');
      menuBtn.classList.remove('active');
      uiState.panel = null;
      uiState.menu = null;
      syncUiStateToStore();
    }

    function syncOverlay() {
      uiState.overlay = !!(uiState.panel || uiState.menu);
      overlay.classList.toggle('open', !!uiState.menu);
      syncUiStateToStore();
    }

    function openPanel(name, { preserveFocus = false } = {}) {
      closePanels();
      const panel = panelMap[name];
      if (!panel) return;
      if (!preserveFocus) rememberFocusBeforeModal();
      updateVisualViewportPanelMetrics();
      if (panel instanceof HTMLDialogElement && !panel.open) {
        try { panel.showModal(); } catch { panel.show(); }
      }
      panel.classList.add('open');
      uiState.panel = name;
      syncOverlay();
      focusFirstInLayer(panel);
    }

    function switchSettingsPanel(name, setup) {
      const panel = panelMap[name];
      if (!panel) return false;
      updateVisualViewportPanelMetrics();
      Object.values(panelMap).forEach(item => {
        const isTarget = item === panel;
        if (item instanceof HTMLDialogElement) {
          if (isTarget && !item.open) { try { item.showModal(); } catch { item.show(); } }
          if (!isTarget && item.open) item.close();
        }
        item?.classList.toggle('open', isTarget);
      });
      Object.values(menuMap).forEach(menu => {
        menu?.classList.remove('open', 'anchor-popover');
        menu?.style.removeProperty('--popover-top');
        menu?.style.removeProperty('--popover-left');
        menu?.style.removeProperty('--popover-origin');
      });
      burgerBtn.classList.remove('active');
      menuBtn.classList.remove('active');
      uiState.panel = name;
      uiState.menu = null;
      syncOverlay();
      setup?.();
      focusFirstInLayer(panel);
      return true;
    }

    function positionMenuNearButton(menu, button) {
      if (!menu || !button) return;
      menu.classList.add('anchor-popover');
      menu.style.visibility = 'hidden';
      menu.classList.add('open');
      const phoneRect = phone.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      const menuWidth = menu.offsetWidth || 240;
      const menuHeight = menu.offsetHeight || 220;
      const gap = 8;
      const maxLeft = Math.max(12, phoneRect.width - menuWidth - 12);
      const left = Math.min(Math.max(buttonRect.left - phoneRect.left, 12), maxLeft);
      const belowTop = buttonRect.bottom - phoneRect.top + gap;
      const aboveTop = buttonRect.top - phoneRect.top - menuHeight - gap;
      const top = belowTop + menuHeight <= phoneRect.height - 12 ? belowTop : Math.max(12, aboveTop);
      menu.style.setProperty('--popover-left', `${left}px`);
      menu.style.setProperty('--popover-top', `${top}px`);
      menu.style.setProperty('--popover-origin', left > phoneRect.width / 2 ? 'top right' : 'top left');
      menu.style.visibility = '';
    }

    function toggleMenu(name, button) {
      const alreadyOpen = uiState.menu === name;
      closePanels();
      if (!alreadyOpen) {
        rememberFocusBeforeModal();
        const menu = menuMap[name];
        positionMenuNearButton(menu, button);
        button?.classList.add('active');
        uiState.menu = name;
        focusFirstInLayer(menu);
      }
      syncOverlay();
    }

    function closeActivePanelFromDialog(panel) {
      const panelName = Object.entries(panelMap).find(([, item]) => item === panel)?.[0];
      panel?.classList.remove('open');
      if (uiState.panel === panelName) uiState.panel = null;
      syncOverlay();
      restoreFocusAfterModal();
    }

    function closeOverlay() {
      closePanels();
      syncOverlay();
      restoreFocusAfterModal();
    }

    function openUiPanel() {
      openPanel('ui');
      applyUiSettings();
    }

    function randomAutoDelay() {
      const min = Math.max(APP_LIMITS.autoMinSeconds, Math.min(APP_LIMITS.autoMaxSeconds, Number(uiSettings.autoMin) || APP_LIMITS.autoMinSeconds));
      const max = Math.max(min, Math.min(APP_LIMITS.autoMaxSeconds, Number(uiSettings.autoMax) || APP_LIMITS.autoMaxSeconds));
      return (min + Math.random() * (max - min)) * 1000;
    }

    function startAutoChat() {
      if (autoChatRunning) return;
      autoChatRunning = true;
      autoChatChatId = activeChatId;
      autoChatIndicator.classList.add('open');
      autoChatText.textContent = `Авто-диалог включён: ${chatName(chats[autoChatChatId])}`;
      showToast('Авто-диалог запущен');
      updateChatMenuLabels();
      scheduleAutoChatTick();
    }

    function stopAutoChat() {
      autoChatRunning = false;
      autoChatChatId = null;
      appClearTimeout(autoChatTimer);
      autoChatIndicator.classList.remove('open');
      showToast('Авто-диалог остановлен');
      updateChatMenuLabels();
      updateAutoChatControls();
    }

    function autoSeedText(chat) {
      const last = chat.messages.at(-1);
      if (!last) return 'Начни разговор сам, коротко и живо.';
      return `${senderName(last.who)} написал: ${last.text || (last.image ? 'отправил картинку' : 'молчит')}. Продолжи диалог сам, коротко.`;
    }

    function scheduleAutoChatTick() {
      appClearTimeout(autoChatTimer);
      if (!autoChatRunning) return;
      const scheduledChatId = autoChatChatId;
      autoChatTimer = appSetTimeout(async () => {
        let isVisibleChat = false;
        try {
          if (!autoChatRunning || scheduledChatId !== autoChatChatId || scheduledChatId !== activeChatId) { stopAutoChat(); return; }
          const chat = chats[scheduledChatId];
          if (!chat) { stopAutoChat(); return; }
          const candidates = chat.members.filter(id => personas[id]);
          const speaker = candidates[Math.floor(Math.random() * candidates.length)] || chat.members[0];
          isVisibleChat = chat.id === activeChatId && !chatScreen.classList.contains('hidden');
          if (isVisibleChat) {
            setAiLoading(true, speaker, 'генерирует ответ');
            status.textContent = `${senderName(speaker)} генерирует ответ...`;
          }
          const reply = await getReply(autoSeedText(chat), speaker, null, chat);
          // Bug fix: re-check visibility AFTER the await — the user may have switched to a
          // different chat while the reply was generating. Using the stale pre-await flag
          // here would let one auto-dialog tick clear the loading indicator / overwrite the
          // status text of whatever *other* chat the user has since opened.
          isVisibleChat = chat.id === activeChatId && !chatScreen.classList.contains('hidden');
          if (isVisibleChat) setAiLoading(false);
          addMessageToChat(chat.id, reply, speaker);
          if (isVisibleChat) status.textContent = chat.type === 'group' ? `${chat.members.length} ИИ-персонажа онлайн` : 'в сети';
        } catch (error) {
          const chat = chats[scheduledChatId];
          isVisibleChat = !!chat && chat.id === activeChatId && !chatScreen.classList.contains('hidden');
          if (isVisibleChat) {
            setAiLoading(false);
            status.textContent = chat.type === 'group' ? `${chat.members.length} ИИ-персонажа онлайн` : 'в сети';
          }
          showToast(error?.message || 'Авто-диалог временно недоступен');
        } finally {
          if (autoChatRunning && scheduledChatId === autoChatChatId && scheduledChatId === activeChatId) scheduleAutoChatTick();
        }
      }, randomAutoDelay());
    }

    function renderStickerGrid() {
      stickerGrid.innerHTML = '';
      dumbStickers.forEach(sticker => {
        const btn = document.createElement('button');
        btn.className = 'sticker-btn';
        btn.type = 'button';
        btn.textContent = sticker;
        bindTap(btn, () => sendSticker(sticker));
        stickerGrid.appendChild(btn);
      });
    }

    function sendSticker(sticker) {
      closeOverlay();
      const reply = replyTarget;
      addMessage(sticker, 'me', reply, null, 'sticker');
      clearReply();
      scheduleAiReplies(`Пользователь отправил тупой стикер ${sticker}. Отреагируй коротко.`);
    }

    function normalizePersona(id, persona = {}) {
      return {
        id,
        name: safeText(persona.name, 'Персонаж', 32),
        handle: safeText(persona.handle, '@persona', 32),
        avatar: safeText(persona.avatar, '✨', 4),
        css: 'group-avatar',
        style: 'custom',
        prompt: safeText(persona.prompt, '', 700),
        about: safeText(persona.about || persona.prompt, '', 130),
        status: safeText(persona.status, 'Статус: свой персонаж с пользовательским промптом', 90)
      };
    }

    function loadCustomPersonas() {
      const saved = readJson('customAiPersonas', {});
      return Object.fromEntries(Object.entries(saved)
        .filter(([id]) => String(id || '').startsWith('custom_'))
        .map(([id, persona]) => [id, normalizePersona(id, persona)]));
    }

    function saveCustomPersonas() {
      writeJson('customAiPersonas', customPersonas);
      personas = { ...builtInPersonas, ...customPersonas };
    }

    function makePersonaId(name) {
      const readable = Array.from(String(name || '').normalize('NFKC').toLocaleLowerCase('ru-RU'))
        .map(char => (/\p{Letter}|\p{Number}|\p{Extended_Pictographic}/u.test(char) ? char : /[\s_-]/.test(char) ? '_' : ''))
        .join('')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '')
        .slice(0, 24);
      return `custom_${readable || 'persona'}_${Date.now().toString(36)}`;
    }

    function defaultChats() {
      return {
        danil: { id: 'danil', type: 'dm', members: ['danil'], unread: 1, messages: [{ id: uid(), who: 'danil', text: 'Пиши давай, только не сломай клавиатуру своими гениальными мыслями.', time: '12:01' }] },
        yarik: { id: 'yarik', type: 'dm', members: ['yarik'], unread: 0, messages: [{ id: uid(), who: 'yarik', text: 'я тут… только давай без резких фраз, я сегодня хрупкий.', time: '12:02' }] },
        group: { id: 'group', type: 'group', title: 'ИИ-комната', avatar: 'ИИ', members: ['danil', 'yarik'], unread: 0, messages: [{ id: uid(), who: 'yarik', text: 'если что, я в группе, но морально под пледом.', time: '12:03' }, { id: uid(), who: 'danil', text: 'Отлично, теперь у нас чат и драматургия.', time: '12:04' }] }
      };
    }

    function normalizeAttachment(attachment = null) {
      if (!attachment || typeof attachment !== 'object') return null;
      const type = safeText(attachment.type, 'application/octet-stream', 80);
      const safeData = /^(data:(application|text|video|audio|image)\/[a-z0-9.+-]+;base64,|blob:|https:\/\/)/i.test(String(attachment.data || '')) ? attachment.data : '';
      if (!safeData) return null;
      return { name: safeText(attachment.name, 'Вложение', 90), type, size: safeNumber(attachment.size, 0, 0, 50 * 1024 * 1024), data: safeData };
    }

    function normalizeMessage(message = {}) {
      const kind = ['text', 'image', 'sticker', 'voice', 'attachment', 'video'].includes(message.kind) ? message.kind : 'text';
      return {
        id: safeText(message.id, uid(), 48),
        who: safeText(message.who, 'me', 48),
        text: safeText(message.text, '', 1200),
        image: isSafeImageSrc(message.image) ? message.image : null,
        attachment: normalizeAttachment(message.attachment),
        kind,
        time: safeText(message.time, now(), 16),
        createdAt: safeNumber(message.createdAt, 0, 0, Number.MAX_SAFE_INTEGER),
        reply: message.reply ? { id: safeText(message.reply.id, '', 48), author: safeText(message.reply.author, 'Сообщение', 40), text: safeText(message.reply.text, '', 160) } : null,
        reactions: Array.isArray(message.reactions) ? message.reactions.map(item => safeText(item, '', 8)).filter(Boolean).slice(0, 12) : [],
        duration: safeNumber(message.duration, 7, 1, 59),
        transcribed: !!message.transcribed,
        status: message.status === 'sent' ? 'sent' : 'read'
      };
    }

    function chatUpdatedAt(chat = {}) {
      return safeNumber(chat.updatedAt, 0, 0, Number.MAX_SAFE_INTEGER) || safeNumber(chat.messages?.at?.(-1)?.createdAt, 0, 0, Number.MAX_SAFE_INTEGER) || 0;
    }

    function normalizeChat(id, chat = {}) {
      const base = defaultChats()[id] || { id, type: 'dm', members: [id], unread: 0, messages: [] };
      const type = chat.type === 'group' ? 'group' : 'dm';
      return {
        ...base,
        ...chat,
        id,
        type,
        title: safeText(chat.title, base.title || 'Чат', 40),
        avatar: safeText(chat.avatar, base.avatar || '✨', 4),
        members: Array.isArray(chat.members) ? chat.members.map(item => safeText(item, '', 48)).filter(Boolean).slice(0, 12) : base.members,
        unread: safeNumber(chat.unread, 0, 0, 99),
        updatedAt: safeNumber(chat.updatedAt, safeNumber(chat.messages?.at?.(-1)?.createdAt, safeNumber(base.updatedAt, 0, 0, Number.MAX_SAFE_INTEGER), 0, Number.MAX_SAFE_INTEGER), 0, Number.MAX_SAFE_INTEGER),
        messages: Array.isArray(chat.messages) ? chat.messages.slice(-MAX_MESSAGES_PER_CHAT).map(normalizeMessage) : base.messages
      };
    }

    function loadChatsFromObject(saved = {}) {
      const base = defaultChats();
      return Object.fromEntries(Object.entries({ ...base, ...saved }).map(([id, chat]) => [id, normalizeChat(id, chat)]));
    }

    async function loadChats() {
      const legacy = readJson('aiPersonaChats', null);
      let saved = {};
      try {
        saved = await readChatsFromDb();
      } catch {
        saved = legacy || await readEncryptedLocalChats() || readChatsFromLocalFallback();
        showToast('IndexedDB недоступен, используется резервное сохранение');
      }
      if (legacy && (!saved || !Object.keys(saved).length)) {
        saved = legacy;
        try { await writeChatsToDb(loadChatsFromObject(saved)); } catch { writeChatsToLocalFallback(loadChatsFromObject(saved)); }
      }
      return loadChatsFromObject(saved || {});
    }

    function saveChats() {
      const snapshot = loadChatsFromObject(chats);
      if (chatStorageLocked) {
        writeJson('aiPersonaChats', compactChatsForLocalStorage(snapshot));
        return chatSaveQueue;
      }
      chatSaveQueue = chatSaveQueue
        .catch(() => {})
        .then(() => writeChatsToLocalFallback(snapshot))
        .then(() => writeChatsToDb(snapshot))
        .catch(() => {
          writeChatsToLocalFallback(snapshot).catch(() => {});
          showToast('Сохранил в резервное хранилище');
        });
      return chatSaveQueue;
    }
    
    function setBackupBusy(busy) {
      [document.getElementById('downloadBackupBtn'), document.getElementById('uploadBackupBtn')].forEach(button => { if (button) button.disabled = busy; });
    }

    function downloadBackup() {
      setBackupBusy(true);
      showToast('Идёт экспорт...');
      try {
        const payload = { app: 'ai-messenger', version: 2, exportedAt: new Date().toISOString(), data: {} };
        BACKUP_KEYS.forEach(key => {
          if (key === 'aiPersonaChats') payload.data[key] = JSON.stringify(chats);
          else { const value = storageGet(key, null); if (value !== null) payload.data[key] = value; }
        });
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `ai-messenger-backup-${new Date().toISOString().slice(0,10)}.json`;
        link.click();
        appSetTimeout(() => URL.revokeObjectURL(link.href), 1000);
        showToast('Бэкап скачан');
      } finally {
        appSetTimeout(() => setBackupBusy(false), 300);
      }
    }
    
    function restoreBackupFile(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        setBackupBusy(true);
        showToast('Идёт импорт...');
        try {
          const backup = safeJsonParse(String(reader.result || '{}'), null);
          if (!backup) throw new Error('некорректный JSON');
          const data = backup.data && typeof backup.data === 'object' ? backup.data : backup;
          const keys = Object.keys(data).filter(key => BACKUP_KEYS.includes(key));
          if (!keys.length) throw new Error('нет данных приложения');
          if (!confirm(`Восстановить бэкап? Будет заменено разделов: ${keys.length}.`)) return;
          keys.forEach(key => storageSet(key, String(data[key])));
          if (data.aiPersonaChats) {
            const restoredChats = safeJsonParse(String(data.aiPersonaChats), null);
            if (restoredChats) writeChatsToDb(loadChatsFromObject(restoredChats)).catch(() => {});
          }
          showToast('Бэкап восстановлен, перезагрузка');
          appSetTimeout(() => location.reload(), APP_LIMITS.resetReloadMs);
        } catch (error) {
          showToast(`Не удалось загрузить бэкап: ${error.message}`);
        } finally {
          appSetTimeout(() => setBackupBusy(false), 300);
        }
      };
      reader.readAsText(file);
    }
    
    function chatCountLabel(count) {
      const mod10 = count % 10;
      const mod100 = count % 100;
      if (mod10 === 1 && mod100 !== 11) return 'чат';
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'чата';
      return 'чатов';
    }

    function updateHomeSubtitle() {
      if (!homeSubtitle) return;
      const profile = loadUserProfile();
      const count = Object.keys(chats || {}).length;
      homeSubtitle.textContent = profile?.name ? `${profile.name} • ${count} ${chatCountLabel(count)}` : `${count} ${chatCountLabel(count)} • ИИ-персонажи и группа`;
    }

    function activeChat() { return chats[activeChatId]; }
    function chatName(chat) { return chat.type === 'group' ? chat.title : (personas[chat.members[0]]?.name || 'Персонаж'); }
    function chatAvatar(chat) { return chat.type === 'group' ? chat.avatar : (personas[chat.members[0]]?.avatar || '✨'); }
    function chatCss(chat) { return chat.type === 'group' ? 'group-avatar' : (personas[chat.members[0]]?.css || 'group-avatar'); }

    function bindTap(element, handler) {
      if (!element) return;
      let lastTap = 0;
      let pointerStart = null;
      const shouldIgnoreTarget = target => !!target?.closest?.('input, textarea, select, label');
      const run = event => {
        if (event.type === 'pointerup' && event.pointerType === 'mouse' && event.button !== 0) return;
        const nowTime = Date.now();
        if (nowTime - lastTap < APP_LIMITS.doubleTapGuardMs) return;
        lastTap = nowTime;
        if (event.cancelable && !shouldIgnoreTarget(event.target)) event.preventDefault();
        event.stopPropagation?.();
        lastUserGestureAt = Date.now();
        unlockSpeechFromGesture();
        handler(event);
      };
      if (window.PointerEvent) {
        element.addEventListener('pointerdown', event => {
          if (event.pointerType === 'mouse' && event.button !== 0) return;
          pointerStart = { id: event.pointerId, x: event.clientX, y: event.clientY };
        }, { passive: true });
        element.addEventListener('pointerup', event => {
          if (event.pointerType === 'mouse' && event.button !== 0) return;
          if (pointerStart && event.pointerId === pointerStart.id) {
            const moved = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
            pointerStart = null;
            if (moved > 12) return;
          }
          run(event);
        }, { passive: false });
        element.addEventListener('click', event => {
          if (event.detail === 0 || event.pointerType === 'mouse') run(event);
        });
      } else {
        element.addEventListener('touchend', run, { passive: false });
        element.addEventListener('click', run);
      }
    }

    function createChatRow(chat) {
      const name = chatName(chat);
      const last = chat.messages.at(-1);
      const row = document.createElement('button');
      row.className = `chat-row soft-virtualized${chat.unread ? ' has-unread' : ''}`;
      row.classList.toggle('active', chat.id === activeChatId);
      row.type = 'button';
      row.dataset.chatId = chat.id;
      row.innerHTML = `<div class="avatar ${chatCss(chat)}">${escapeHtml(chatAvatar(chat))}</div>
        <div class="preview"><div class="name">${escapeHtml(name)}</div><div class="last">${escapeHtml(last ? previewText(last, chat) : 'Пустой чат')}</div></div>
        <div class="meta"><div>${last?.time || now()}</div><div class="badge">${chat.unread || ''}</div></div>`;
      return row;
    }

    function getVisibleChats() {
      const query = searchInput.value.trim().toLowerCase();
      const sourceKey = `${query}|${Object.keys(chats).join(',')}|${Object.values(chats).map(chat => `${chat.id}:${chat.unread}:${chatUpdatedAt(chat)}:${chat.messages.at(-1)?.id || ''}`).join('|')}`;
      if (sourceKey === visibleChatCacheKey) return visibleChatCache;
      visibleChatCacheKey = sourceKey;
      visibleChatCache = Object.values(chats)
        .filter(chat => !query || chatName(chat).toLowerCase().includes(query) || chat.messages.some(message => message.text?.toLowerCase().includes(query)))
        .sort((left, right) => chatUpdatedAt(right) - chatUpdatedAt(left));
      return visibleChatCache;
    }

    function renderChatList() {
      updateHomeSubtitle();
      renderTileBoard();
      if (homeScreen.classList.contains('hidden')) return;
      if (chatListFrameId) cancelAnimationFrame(chatListFrameId);
      chatListFrameId = requestAnimationFrame(() => {
        chatListFrameId = null;
        const visibleChats = getVisibleChats();
        chatListVirtualState.lastCount = visibleChats.length;
        const listViewport = chatListInner.closest('.chat-list');
        const viewportHeight = listViewport?.clientHeight || 600;
        const scrollTop = listViewport?.scrollTop || 0;
        const estimatedStart = Math.floor(scrollTop / chatListVirtualState.rowHeight);
        const start = Math.max(0, Math.min(visibleChats.length, estimatedStart - CHAT_LIST_OVERSCAN));
        const count = Math.ceil(viewportHeight / chatListVirtualState.rowHeight) + CHAT_LIST_OVERSCAN * 2;
        const end = Math.min(visibleChats.length, start + count);
        chatListVirtualState.start = start;
        const topSpacer = document.createElement('div');
        topSpacer.className = 'chat-list-spacer';
        topSpacer.style.setProperty('--spacer-height', `${start * chatListVirtualState.rowHeight}px`);
        const bottomSpacer = document.createElement('div');
        bottomSpacer.className = 'chat-list-spacer';
        bottomSpacer.style.setProperty('--spacer-height', `${Math.max(0, visibleChats.length - end) * chatListVirtualState.rowHeight}px`);
        const windowNode = document.createElement('div');
        windowNode.className = 'chat-list-window';
        visibleChats.slice(start, end).forEach(chat => windowNode.appendChild(createChatRow(chat)));
        chatListInner.replaceChildren(topSpacer, windowNode, bottomSpacer);
        const firstRow = windowNode.querySelector('.chat-row');
        if (firstRow) chatListVirtualState.rowHeight = Math.max(64, Math.round(firstRow.getBoundingClientRect().height + 1));
      });
    }

    function isOwnMessage(who) { return ['me', 'you', 'user', 'self'].includes(String(who || '').trim().toLowerCase()); }

    // ===================== Metro / Live Tiles (Windows 8 / 10 / Phone) =====================
    const TILE_SIZES = ['small', 'medium', 'wide', 'large'];
    const APP_TILES = [
      { id: 'app:settings', icon: '⚙️', label: 'Настройки', hint: 'центр управления' },
      { id: 'app:themes', icon: '🎨', label: 'Внешний вид', hint: 'темы и цвета' },
      { id: 'app:room', icon: '👥', label: 'ИИ-комната', hint: 'общий групповой чат' },
      { id: 'app:persona', icon: '✨', label: 'Свой персонаж', hint: 'создать нового' },
      { id: 'app:autochat', icon: '⏱', label: 'Авто-диалог', hint: 'запуск и остановка' }
    ];
    let tileContextTargetId = null;

    function appTileById(id) { return APP_TILES.find(item => item.id === id) || null; }
    function prefersReducedMotion() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; } }
    function allChatIdsSorted() { return Object.values(chats).sort((left, right) => chatUpdatedAt(right) - chatUpdatedAt(left)).map(chat => chat.id); }

    function currentPinnedTiles() {
      if (Array.isArray(uiSettings.pinnedTiles)) {
        return uiSettings.pinnedTiles.filter(id => (id.startsWith('app:') ? !!appTileById(id) : !!chats[id]));
      }
      return [...allChatIdsSorted(), ...APP_TILES.map(item => item.id)];
    }

    function isTilePinned(id) { return currentPinnedTiles().includes(id); }

    function setTilePinned(id, pinned) {
      const list = currentPinnedTiles();
      const next = pinned ? (list.includes(id) ? list : [...list, id]) : list.filter(item => item !== id);
      updateUiSettings({ pinnedTiles: next });
    }

    function tileSizeFor(id) {
      const saved = uiSettings.tileSizes?.[id];
      if (TILE_SIZES.includes(saved)) return saved;
      return id.startsWith('app:') ? 'small' : 'medium';
    }

    function setTileSize(id, size) {
      if (!TILE_SIZES.includes(size)) return;
      updateUiSettings({ tileSizes: { ...(uiSettings.tileSizes || {}), [id]: size } });
    }

    function createChatTile(id) {
      const chat = chats[id];
      if (!chat) return null;
      const name = chatName(chat);
      const last = chat.messages.at(-1);
      const size = tileSizeFor(id);
      const tile = document.createElement('button');
      tile.type = 'button';
      tile.className = `tile tile-live tile-size-${size} ${chatCss(chat)}`;
      tile.dataset.tileId = id;
      tile.dataset.tileKind = 'chat';
      tile.setAttribute('aria-label', name);
      tile.innerHTML = `<div class="tile-flip">
          <div class="tile-face tile-face-front">
            <div class="tile-icon">${escapeHtml(chatAvatar(chat))}</div>
            <div class="tile-name">${escapeHtml(name)}</div>
          </div>
          <div class="tile-face tile-face-back">
            <div class="tile-msg">${escapeHtml(last ? previewText(last, chat) : 'Пустой чат')}</div>
            <div class="tile-name">${escapeHtml(name)}</div>
          </div>
        </div>${chat.unread ? `<div class="tile-badge">${chat.unread}</div>` : ''}`;
      return tile;
    }

    function createAppTile(id) {
      const meta = appTileById(id);
      if (!meta) return null;
      const size = tileSizeFor(id);
      const tile = document.createElement('button');
      tile.type = 'button';
      tile.className = `tile app-tile tile-size-${size}`;
      tile.dataset.tileId = id;
      tile.dataset.tileKind = 'app';
      tile.setAttribute('aria-label', meta.label);
      const extra = id === 'app:autochat' && autoChatRunning ? ' · вкл' : '';
      tile.innerHTML = `<div class="tile-face tile-face-front">
          <div class="tile-icon">${meta.icon}</div>
          <div class="tile-name">${escapeHtml(meta.label)}${extra}</div>
          <div class="tile-hint">${escapeHtml(meta.hint)}</div>
        </div>`;
      return tile;
    }

    let tileDragActive = false;

    function renderTileBoard(orderOverride) {
      if (!tileBoard) return;
      if (!orderOverride && tileDragActive) return; // don't clobber an in-progress drag reorder
      const ids = orderOverride || currentPinnedTiles();
      if (!ids.length) {
        tileBoard.innerHTML = '<div class="tile-empty-hint">Нет закреплённых плиток.<br>Откройте «Настройки → Плитки Metro», чтобы закрепить чаты и разделы.</div>';
        return;
      }
      const frag = document.createDocumentFragment();
      ids.forEach(id => {
        const tile = id.startsWith('app:') ? createAppTile(id) : createChatTile(id);
        if (tile) frag.appendChild(tile);
      });
      tileBoard.replaceChildren(frag);
    }

    function renderTilePinList() {
      if (!tilePinList) return;
      const pinned = new Set(currentPinnedTiles());
      const chatItems = allChatIdsSorted().map(id => ({ id, label: chatName(chats[id]), icon: chatAvatar(chats[id]) }));
      const appItems = APP_TILES.map(item => ({ id: item.id, label: item.label, icon: item.icon }));
      const rows = [...chatItems, ...appItems].map(item => `
        <button class="tile-pin-row${pinned.has(item.id) ? ' pinned' : ''}" type="button" data-tile-pin-toggle="${item.id}">
          <span class="tile-pin-icon">${escapeHtml(item.icon)}</span>
          <span class="tile-pin-label">${escapeHtml(item.label)}</span>
          <span class="switch${pinned.has(item.id) ? ' on' : ''}"></span>
        </button>`).join('');
      tilePinList.innerHTML = rows || '<div class="panel-subtitle">Пока нет чатов для закрепления</div>';
    }

    function updateTileCellSize() {
      if (!tileBoard) return;
      const width = tileBoard.clientWidth;
      if (!width) return;
      const gap = 8;
      const cols = 4;
      const cell = Math.max(56, Math.floor((width - gap * (cols - 1)) / cols));
      tileBoard.style.setProperty('--tile-cell', `${cell}px`);
    }

    function openChatWithTileAnimation(id, tileEl) {
      if (tileEl && phone.classList.contains('tile-mode') && !prefersReducedMotion()) {
        const tileRect = tileEl.getBoundingClientRect();
        const frameRect = phone.getBoundingClientRect();
        if (frameRect.width && frameRect.height) {
          const scaleX = Math.min(1, Math.max(0.14, tileRect.width / frameRect.width));
          const scaleY = Math.min(1, Math.max(0.14, tileRect.height / frameRect.height));
          const originX = ((tileRect.left - frameRect.left) + tileRect.width / 2) / frameRect.width * 100;
          const originY = ((tileRect.top - frameRect.top) + tileRect.height / 2) / frameRect.height * 100;
          chatScreen.style.setProperty('--tile-scale-x', scaleX);
          chatScreen.style.setProperty('--tile-scale-y', scaleY);
          chatScreen.style.setProperty('--tile-origin-x', `${originX}%`);
          chatScreen.style.setProperty('--tile-origin-y', `${originY}%`);
          chatScreen.classList.remove('tile-transition-out');
          void chatScreen.offsetWidth;
          chatScreen.classList.add('tile-transition-in');
          chatScreen.addEventListener('animationend', () => chatScreen.classList.remove('tile-transition-in'), { once: true });
        }
      }
      openChat(id);
    }

    function closeChatWithTileAnimation() {
      if (phone.classList.contains('tile-mode') && !prefersReducedMotion() && chatScreen.style.getPropertyValue('--tile-scale-x')) {
        chatScreen.classList.remove('tile-transition-in');
        chatScreen.classList.add('tile-transition-out');
        const finish = () => { chatScreen.classList.remove('tile-transition-out'); closeChat(); };
        chatScreen.addEventListener('animationend', finish, { once: true });
        appSetTimeout(finish, 260);
      } else {
        closeChat();
      }
    }

    function activateTile(id, tileEl) {
      if (!id) return;
      if (id.startsWith('app:')) {
        haptic(8);
        if (id === 'app:settings') { closeOverlay(); openUiPanel(); }
        else if (id === 'app:themes') { closeOverlay(); openUiPanel(); switchSettingsPanel('themes'); }
        else if (id === 'app:room') { if (!chats.group) setChats({ ...chats, group: defaultChats().group }); saveChats(); openChatWithTileAnimation('group', tileEl); }
        else if (id === 'app:persona') { closeOverlay(); openPersonaPanel(); }
        else if (id === 'app:autochat') {
          if (autoChatRunning) stopAutoChat(); else { if (!activeChatId) setActiveChatId('danil'); startAutoChat(); }
          updateChatMenuLabels();
          renderTileBoard();
        }
        return;
      }
      openChatWithTileAnimation(id, tileEl);
    }

    function installTileInteractions() {
      if (!tileBoard) return;
      const LONG_PRESS_MS = 460;
      const MOVE_THRESHOLD = 10;
      let pressTimer = null;
      let pressTileEl = null;
      let pressStart = null;
      let longPressArmed = false;   // long-press fired; next move decides drag vs stay-for-menu
      let longPressTriggered = false; // suppresses the click that follows a menu-open or a drag
      let dragState = null; // { id, order, pointerId }

      const clearPress = () => { clearTimeout(pressTimer); pressTimer = null; pressTileEl = null; longPressArmed = false; };

      function openTileMenu(tile) {
        tileContextTargetId = tile.dataset.tileId;
        const isApp = tile.dataset.tileKind === 'app';
        const currentSize = tileSizeFor(tileContextTargetId);
        tileContextMenu.querySelectorAll('[data-tile-size]').forEach(btn => {
          const disabled = isApp && (btn.dataset.tileSize === 'wide' || btn.dataset.tileSize === 'large');
          btn.classList.toggle('active', btn.dataset.tileSize === currentSize);
          btn.disabled = disabled;
        });
        toggleMenu('tile', tile);
      }

      function startDrag(tile, event) {
        dragState = { id: tile.dataset.tileId, order: currentPinnedTiles(), pointerId: event.pointerId };
        tileDragActive = true;
        tileBoard.classList.add('dragging-active');
        try { tileBoard.setPointerCapture(event.pointerId); } catch {}
        haptic(10);
        renderTileBoard(dragState.order);
        tileBoard.querySelector(`[data-tile-id="${CSS.escape(dragState.id)}"]`)?.classList.add('dragging');
      }

      function handleDragMove(event) {
        if (!dragState) return;
        const overTile = document.elementFromPoint(event.clientX, event.clientY)?.closest('.tile');
        if (!overTile || overTile.dataset.tileId === dragState.id) return;
        const order = dragState.order;
        const from = order.indexOf(dragState.id);
        const to = order.indexOf(overTile.dataset.tileId);
        if (from === -1 || to === -1 || from === to) return;
        order.splice(from, 1);
        order.splice(to, 0, dragState.id);
        renderTileBoard(order);
        tileBoard.querySelector(`[data-tile-id="${CSS.escape(dragState.id)}"]`)?.classList.add('dragging');
      }

      function endDrag() {
        if (!dragState) return;
        const { order, pointerId } = dragState;
        dragState = null;
        tileDragActive = false;
        tileBoard.classList.remove('dragging-active');
        try { tileBoard.releasePointerCapture(pointerId); } catch {}
        updateUiSettings({ pinnedTiles: order });
        showToast('Порядок плиток сохранён');
      }

      tileBoard.addEventListener('pointerdown', event => {
        if (dragState) return;
        const tile = event.target.closest('.tile');
        if (!tile) return;
        pressTileEl = tile;
        pressStart = { x: event.clientX, y: event.clientY };
        longPressTriggered = false;
        pressTimer = setTimeout(() => {
          if (!pressTileEl) return;
          longPressArmed = true;
          haptic(14);
        }, LONG_PRESS_MS);
      }, { passive: true });

      tileBoard.addEventListener('pointermove', event => {
        if (dragState) { handleDragMove(event); return; }
        if (!pressTileEl || !pressStart) return;
        const dist = Math.hypot(event.clientX - pressStart.x, event.clientY - pressStart.y);
        if (dist <= MOVE_THRESHOLD) return;
        if (longPressArmed) {
          // Long-press already fired and the finger/cursor moved: pick the tile up and drag it.
          longPressTriggered = true;
          clearTimeout(pressTimer);
          const tile = pressTileEl;
          pressTileEl = null;
          startDrag(tile, event);
        } else {
          clearPress(); // plain scroll before the long-press threshold: not a gesture on us
        }
      }, { passive: true });

      tileBoard.addEventListener('pointerup', event => {
        if (dragState) { endDrag(); return; }
        if (longPressArmed && pressTileEl) {
          longPressTriggered = true;
          openTileMenu(pressTileEl);
        }
        clearPress();
      }, { passive: true });
      tileBoard.addEventListener('pointercancel', () => { if (dragState) endDrag(); clearPress(); }, { passive: true });
      tileBoard.addEventListener('contextmenu', event => event.preventDefault());
      tileBoard.addEventListener('click', event => {
        if (longPressTriggered) { longPressTriggered = false; return; }
        const tile = event.target.closest('.tile');
        if (!tile) return;
        activateTile(tile.dataset.tileId, tile);
      });
      tileContextMenu.addEventListener('click', event => {
        const sizeBtn = event.target.closest('[data-tile-size]');
        const unpinBtn = event.target.closest('[data-tile-unpin]');
        if (sizeBtn && !sizeBtn.disabled && tileContextTargetId) { setTileSize(tileContextTargetId, sizeBtn.dataset.tileSize); closeOverlay(); }
        if (unpinBtn && tileContextTargetId) { setTilePinned(tileContextTargetId, false); closeOverlay(); showToast('Плитка откреплена'); }
      });
      tilePinList?.addEventListener('click', event => {
        const row = event.target.closest('[data-tile-pin-toggle]');
        if (!row) return;
        setTilePinned(row.dataset.tilePinToggle, !row.classList.contains('pinned'));
        renderTilePinList();
      });
      bindTap(tileModeSwitch, () => updateUiSettings({ tileMode: !uiSettings.tileMode }));
      if (window.ResizeObserver) new ResizeObserver(() => updateTileCellSize()).observe(tileBoard);
      else window.addEventListener('resize', debounce(updateTileCellSize, 120));
      updateTileCellSize();
    }
    // =================== /Metro / Live Tiles ===================

    function previewText(message, chat) {
      const text = message.text || (message.image ? 'Картинка' : message.kind === 'sticker' ? 'Стикер' : message.kind === 'voice' ? 'Голосовое сообщение' : '');
      const prefix = isOwnMessage(message.who) ? 'Вы: ' : chat.type === 'group' ? `${senderName(message.who)}: ` : '';
      return prefix + text;
    }

    function senderName(who) { return isOwnMessage(who) ? 'Вы' : personas[who]?.name || who; }

    function voiceWaveBars(message) {
      const source = `${message?.text || ''}|${message?.duration || 7}|${message?.who || ''}|${message?.id || ''}`;
      let seed = 0;
      for (let i = 0; i < source.length; i += 1) seed = (seed * 31 + source.charCodeAt(i)) >>> 0;
      return Array.from({ length: 26 }, (_, index) => {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        const envelope = Math.sin((index / 25) * Math.PI);
        const random = seed / 0xffffffff;
        return Math.round(7 + envelope * 15 + random * 8);
      });
    }

    function refreshVoicePlaybackUi() {
      document.querySelectorAll('.voice-bubble.playing').forEach(item => item.classList.remove('playing'));
      document.querySelectorAll('[data-play-voice]').forEach(button => { button.textContent = '▶'; button.setAttribute('aria-label', 'Воспроизвести голосовое'); });
      if (!activeVoicePlaybackId) return;
      const button = document.querySelector(`[data-play-voice="${CSS.escape(activeVoicePlaybackId)}"]`);
      const bubble = button?.closest('.voice-bubble');
      if (!button || !bubble) return;
      bubble.classList.add('playing');
      button.textContent = '⏸';
      button.setAttribute('aria-label', 'Остановить голосовое');
    }

    function createMessageNode(msg, chat = activeChat()) {
      const node = document.createElement('div');
      const own = isOwnMessage(msg.who);
      node.className = `message ${own ? 'me' : 'him'}${msg.kind === 'sticker' ? ' sticker-message' : ''}${msg.kind === 'voice' ? ' voice-message' : ''}${msg.image ? ' image-thinking' : ''}`;
      node.dataset.id = msg.id;
      const text = msg.text || '';
      if (chat.type === 'group' && !own) {
        const sender = document.createElement('span');
        sender.className = 'sender';
        sender.textContent = senderName(msg.who);
        node.append(sender);
      }
      if (msg.reply) {
        const quote = document.createElement('button');
        quote.className = 'reply-quote';
        quote.type = 'button';
        quote.dataset.replyId = msg.reply.id || '';
        quote.textContent = `${msg.reply.author}: ${msg.reply.text}`;
        node.append(quote);
      }
      const imageSrc = isSafeImageSrc(msg.image) ? msg.image : '';
      const attachment = normalizeAttachment(msg.attachment);
      if (imageSrc) {
        const image = document.createElement('img');
        image.className = 'message-image';
        image.src = imageSrc;
        image.alt = 'Картинка в чате';
        node.append(image);
      }
      if (attachment) renderAttachmentNode(node, attachment);
      const longClass = text.length > APP_LIMITS.longMessageLength ? ' is-long' : '';
      if (msg.kind === 'voice') {
        const voice = document.createElement('div');
        voice.className = `voice-bubble${activeVoicePlaybackId === msg.id ? ' playing' : ''}`;
        const play = document.createElement('button');
        play.className = 'voice-play';
        play.type = 'button';
        play.dataset.playVoice = msg.id;
        play.setAttribute('aria-label', activeVoicePlaybackId === msg.id ? 'Остановить голосовое' : 'Воспроизвести голосовое');
        play.textContent = activeVoicePlaybackId === msg.id ? '⏸' : '▶';
        const wave = document.createElement('div');
        wave.className = 'voice-wave';
        wave.setAttribute('aria-hidden', 'true');
        voiceWaveBars(msg).forEach((height, i) => {
          const bar = document.createElement('span');
          bar.style.setProperty('--wave-height', `${height}px`);
          bar.style.setProperty('--wave-delay', `${(i % 9) * 42}ms`);
          wave.append(bar);
        });
        const duration = document.createElement('span');
        duration.className = 'voice-duration';
        duration.textContent = `0:${String(msg.duration || 7).padStart(2, '0')}`;
        voice.append(play, wave, duration);
        const transcribe = document.createElement('button');
        transcribe.className = 'transcribe-btn';
        transcribe.type = 'button';
        transcribe.dataset.transcribe = msg.id;
        transcribe.textContent = 'Расшифровать';
        node.append(voice, transcribe);
        if (msg.transcribed) {
          const transcript = document.createElement('div');
          transcript.className = 'voice-transcript';
          transcript.textContent = msg.text;
          node.append(transcript);
        }
      } else if (text || !imageSrc) {
        const body = document.createElement('div');
        body.className = `${imageSrc ? 'image-caption ' : ''}message-body${longClass}`;
        body.append(renderMarkdownWithHighlights(text, chatSearchQuery));
        node.append(body);
      }
      const footer = document.createElement('div');
      footer.className = 'message-footer';
      const time = document.createElement('span');
      time.className = 'time';
      time.textContent = msg.time || now();
      footer.append(time);
      if (own) {
        const statusMark = document.createElement('span');
        statusMark.className = `message-status ${msg.status === 'read' ? 'read' : ''}`;
        statusMark.setAttribute('aria-label', msg.status === 'read' ? 'прочитано' : 'отправлено');
        statusMark.textContent = msg.status === 'read' ? '✓✓' : '✓';
        footer.append(statusMark);
      }
      node.append(footer);
      if (Array.isArray(msg.reactions) && msg.reactions.length) {
        const reactions = document.createElement('div');
        reactions.className = 'message-reactions';
        msg.reactions.forEach(reaction => {
          const badge = document.createElement('span');
          badge.className = 'reaction-badge';
          badge.textContent = reaction;
          reactions.append(badge);
        });
        node.append(reactions);
      }
      node.addEventListener('contextmenu', event => {
        if (isMobileLike()) { event.preventDefault(); return; }
        event.preventDefault();
        openMessageContextMenu(msg.id, event.clientX, event.clientY);
      });
      node.addEventListener('click', event => {
        const replyQuote = event.target.closest('[data-reply-id]');
        if (replyQuote?.dataset.replyId) { jumpToMessage(replyQuote.dataset.replyId); return; }
        if (event.target.closest('[data-transcribe]') || event.target.closest('[data-play-voice]') || event.target.closest('[data-copy-code]') || event.target.closest('a, button, input, select, textarea')) return;
        selectReply(msg);
      });
      let longTapTimer = null;
      node.addEventListener('pointerdown', event => {
        if (event.target.closest('[data-transcribe]') || event.target.closest('[data-play-voice]') || event.target.closest('[data-copy-code]')) return;
        longTapTimer = appSetTimeout(() => openMessageContextMenu(msg.id, event.clientX, event.clientY), APP_LIMITS.longTapMs);
      });
      ['pointerup','pointercancel','pointerleave'].forEach(type => node.addEventListener(type, () => appClearTimeout(longTapTimer)));
      const transcribeBtn = node.querySelector('[data-transcribe]');
      if (transcribeBtn) bindTap(transcribeBtn, () => transcribeVoiceMessage(msg.id));
      const playVoiceBtn = node.querySelector('[data-play-voice]');
      if (playVoiceBtn) bindTap(playVoiceBtn, () => playVoiceMessage(msg));
      node.querySelectorAll('[data-copy-code]').forEach(button => bindTap(button, event => {
        const code = event.currentTarget.closest('pre')?.querySelector('code')?.textContent || '';
        copyTextToClipboard(code).then(ok => showToast(ok ? 'Код скопирован' : 'Автокопирование недоступно — код показан для ручного копирования'));
      }));
      if (selectedMessageIds.has(msg.id)) node.classList.add('multi-selected');
      return node;
    }

    function attachmentIcon(attachment) {
      const name = (attachment.name || '').toLowerCase();
      const type = (attachment.type || '').toLowerCase();
      if (type.includes('pdf') || name.endsWith('.pdf')) return '📕';
      if (/word|document/.test(type) || /\.(doc|docx)$/i.test(name)) return '📘';
      if (/zip|archive|compressed/.test(type) || /\.(zip|rar|7z)$/i.test(name)) return '🗜️';
      if (type.startsWith('text/') || /\.(txt|csv|md|json)$/i.test(name)) return '📄';
      return '📎';
    }

    function renderAttachmentNode(node, attachment) {
      if (attachment.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.className = 'message-video';
        video.controls = true;
        video.src = attachment.data;
        node.append(video);
        return;
      }
      const link = document.createElement('a');
      const icon = document.createElement('span');
      const body = document.createElement('span');
      const name = document.createElement('span');
      const meta = document.createElement('span');
      link.className = 'attachment-card';
      link.href = attachment.data;
      link.download = attachment.name;
      icon.className = 'attachment-icon';
      icon.textContent = attachmentIcon(attachment);
      name.className = 'attachment-name';
      name.textContent = attachment.name;
      meta.className = 'attachment-meta';
      meta.textContent = `${attachment.type || 'application/octet-stream'} • ${Math.ceil((attachment.size || 0) / 1024)} КБ`;
      body.append(name, meta);
      link.append(icon, body);
      node.append(link);
      if ((attachment.type || '').startsWith('text/') && /^data:/i.test(attachment.data || '')) {
        try {
          const preview = document.createElement('pre');
          preview.className = 'attachment-text-preview';
          preview.textContent = (() => { try { return new TextDecoder().decode(Uint8Array.from(atob(String(attachment.data).split(',')[1] || ''), c => c.charCodeAt(0))).slice(0, 3000); } catch { return ''; } })();
          node.append(preview);
        } catch {}
      }
    }

    function renderMarkdownWithHighlights(text, query) {
      const fragment = renderMarkdown(text);
      if (!query) return fragment;
      highlightFragment(fragment, query);
      return fragment;
    }

    function highlightFragment(root, query) {
      const needle = query.trim().toLowerCase();
      if (!needle) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: node => node.nodeValue.toLowerCase().includes(needle) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(textNode => {
        const textValue = textNode.nodeValue;
        const lower = textValue.toLowerCase();
        const fragment = document.createDocumentFragment();
        let index = 0;
        let matchIndex = lower.indexOf(needle);
        while (matchIndex >= 0) {
          fragment.append(document.createTextNode(textValue.slice(index, matchIndex)));
          const mark = document.createElement('mark');
          mark.textContent = textValue.slice(matchIndex, matchIndex + needle.length);
          fragment.append(mark);
          index = matchIndex + needle.length;
          matchIndex = lower.indexOf(needle, index);
        }
        fragment.append(document.createTextNode(textValue.slice(index)));
        textNode.replaceWith(fragment);
      });
    }

    function renderedMessages() { return [...messages.querySelectorAll('.message')]; }

    // Bug fix: messages.insertBefore(node, typing) throws if `typing` is ever not a direct
    // child of `messages`. Guard against that instead of assuming the DOM shape forever.
    function insertBeforeTyping(node) {
      if (typing && typing.parentNode === messages) messages.insertBefore(node, typing);
      else messages.appendChild(node);
    }

    function updateVirtualSpacer(chat) {
      const hiddenCount = Math.max(0, renderedWindowStart);
      const renderedEnd = Math.min(chat.messages.length, renderedWindowStart + MESSAGE_WINDOW_SIZE);
      const bottomHiddenCount = Math.max(0, chat.messages.length - renderedEnd);
      const rowHeight = Number(messages.dataset.rowHeight || 58);
      virtualTopSpacer.classList.toggle('open', hiddenCount > 0);
      virtualTopSpacer.textContent = hiddenCount ? `Показать ещё ${Math.min(MESSAGE_WINDOW_STEP, hiddenCount)} из ${hiddenCount}` : '';
      virtualTopSpacer.tabIndex = hiddenCount > 0 ? 0 : -1;
      virtualTopSpacer.setAttribute('aria-hidden', hiddenCount > 0 ? 'false' : 'true');
      virtualBottomSpacer.style.setProperty('--virtual-bottom-height', `${bottomHiddenCount * rowHeight}px`);
    }

    function updateMessageRowEstimate() {
      const nodes = renderedMessages();
      if (!nodes.length) return;
      const average = nodes.reduce((sum, node) => sum + node.getBoundingClientRect().height + 7, 0) / nodes.length;
      messages.dataset.rowHeight = String(Math.max(42, Math.round(average)));
    }

    function trimRenderedMessages(chat) {
      const visibleIds = new Set(chat.messages.slice(renderedWindowStart, renderedWindowStart + MESSAGE_WINDOW_SIZE).map(message => message.id));
      const fragment = document.createDocumentFragment();
      renderedMessages().forEach(node => {
        if (visibleIds.has(node.dataset.id)) fragment.appendChild(node);
        else { node.replaceChildren(); node.remove(); }
      });
      if (fragment.childNodes.length) insertBeforeTyping(fragment);
    }

    function scheduleMessageRender(callback) {
      if (renderFrameId) cancelAnimationFrame(renderFrameId);
      renderFrameId = requestAnimationFrame(() => {
        renderFrameId = null;
        callback();
      });
    }

    function appendMessageNode(msg, chat = activeChat(), forceScroll = false) {
      const wasNearBottom = isNearBottom();
      if (forceScroll || wasNearBottom || isOwnMessage(msg.who)) {
        renderedWindowStart = Math.max(0, chat.messages.length - MESSAGE_WINDOW_SIZE);
      }
      scheduleMessageRender(() => {
        trimRenderedMessages(chat);
        const visible = chat.messages.slice(renderedWindowStart, renderedWindowStart + MESSAGE_WINDOW_SIZE);
        const visibleIds = new Set(visible.map(message => message.id));
        const existing = renderedMessages().find(node => node.dataset.id === msg.id);
        if (existing) existing.replaceWith(createMessageNode(msg, chat));
        else if (visibleIds.has(msg.id)) insertBeforeTyping(createMessageNode(msg, chat));
        updateMessageRowEstimate();
        updateVirtualSpacer(chat);
        scrollToBottom(forceScroll || wasNearBottom || isOwnMessage(msg.who));
      });
    }

    function renderMessages(forceScroll = true, keepWindow = false) {
      const chat = activeChat();
      const wasNearBottom = isNearBottom();
      if (!keepWindow) renderedWindowStart = Math.max(0, chat.messages.length - MESSAGE_WINDOW_SIZE);
      renderedWindowStart = Math.max(0, Math.min(renderedWindowStart, Math.max(0, chat.messages.length - 1)));
      scheduleMessageRender(() => {
        const fragment = document.createDocumentFragment();
        chat.messages.slice(renderedWindowStart, renderedWindowStart + MESSAGE_WINDOW_SIZE).forEach(msg => fragment.appendChild(createMessageNode(msg, chat)));
        renderedMessages().forEach(m => m.remove());
        insertBeforeTyping(fragment);
        syncMessageSelectionState();
        updateMessageRowEstimate();
        updateVirtualSpacer(chat);
        updateChatSearchMatches();
        scrollToBottom(forceScroll || wasNearBottom);
      });
    }

    function openChatSearch() {
      closeOverlay();
      chatSearchPanel.classList.add('open');
      chatSearchInput.value = chatSearchQuery;
      updateChatSearchMatches();
      requestAnimationFrame(() => chatSearchInput.focus({ preventScroll: true }));
    }

    function closeChatSearch() {
      chatSearchQuery = '';
      chatSearchInput.value = '';
      chatSearchPanel.classList.remove('open');
      updateChatSearchMatches();
      renderMessages(false, true);
    }

    function updateChatSearchMatches() {
      const query = chatSearchQuery.trim().toLowerCase();
      const chat = activeChat();
      chatSearchMatches = query ? chat.messages.filter(message => (message.text || '').toLowerCase().includes(query)) : [];
      if (query && !chatSearchMatches.length) showToast('В чате ничего не найдено');
    }

    function openChat(id) {
      if (!chats[id]) return;
      closeMessageContextMenu();
      // Only save draft for *previous* chat; skip when restoring the same chat on startup
      // to avoid overwriting a session-persisted draft with an empty input.
      if (activeChatId !== id) {
        saveDraft(activeChatId);
        saveChatScroll(activeChatId);
        cancelAiForChat(activeChatId);
      }
      if (autoChatRunning && autoChatChatId !== id) stopAutoChat();
      if (activeChatId !== id) updateTypingForActiveChat();
      haptic(8);
      setActiveChatId(id);
      persistActiveChatId(id);
      const chat = activeChat();
      updateChatInContext(id, draft => ({ ...draft, unread: 0 }));
      saveChats();
      const desktopSplit = !!loadUserProfile()?.name && isDesktopSplitViewport();
      homeScreen.classList.toggle('hidden', !desktopSplit);
      chatScreen.classList.remove('hidden');
      registrationScreen.classList.add('hidden');
      phone.classList.toggle('desktop-split', desktopSplit);
      phone.classList.remove('chat-empty');
      applyChatPersonalization();
      restoreDraft(id);
      chatTitle.textContent = chatName(chat);
      avatarBtn.textContent = chatAvatar(chat);
      avatarBtn.className = `avatar ${chatCss(chat)}`;
      status.textContent = chat.type === 'group' ? `${chat.members.length} ИИ-персонажа онлайн` : 'был в сети только что';
      updateTypingForActiveChat();
      messageInput.placeholder = messagePlaceholder(chat);
      clearReply();
      clearSelection({ clearReplyHighlight: true });
      appStore.setState({ focusedMessageId: null });
      chatSearchQuery = '';
      chatSearchPanel.classList.remove('open');
      renderMessages();
      restoreChatScroll(id);
      renderChatList();
      updateChatMenuLabels();
      syncComposerState();
      closeOverlay();
      if (isFinePointer()) {
        appSetTimeout(() => messageInput.focus({ preventScroll: true }), 120);
      } else {
        messageInput.blur();
      }
    }

    function closeChat() {
      closeMessageContextMenu();
      saveDraft(activeChatId);
      if (autoChatRunning) stopAutoChat();
      cancelAiForChat(activeChatId);
      syncResponsiveLayout({ emptyChat: true });
      visibleChatCacheKey = '';
      clearReply();
      clearSelection({ clearReplyHighlight: true });
      appStore.setState({ focusedMessageId: null });
      updateTypingForActiveChat(); syncComposerState(); closeOverlay(); renderChatList(); if (isFinePointer()) requestAnimationFrame(() => burgerBtn.focus({ preventScroll: true }));
    }

    function selectReply(msg) {
      if (replyTarget?.id === msg.id) { clearReply(); return; }
      clearSelection();
      const rawReplyText = msg.text || (msg.image ? 'Картинка' : msg.kind === 'sticker' ? 'Стикер' : msg.kind === 'voice' ? 'Голосовое сообщение' : '');
      replyTarget = { id: msg.id, author: senderName(msg.who), text: truncateText(rawReplyText) };
      document.querySelectorAll('.message.selected').forEach(i => i.classList.remove('selected'));
      document.querySelector(`[data-id="${msg.id}"]`)?.classList.add('selected');
      replyAuthor.textContent = `Ответ ${replyTarget.author}`;
      replyText.textContent = replyTarget.text;
      replyBar.classList.add('open');
      renderReactionPanel();
    }

    function clearReply() {
      replyTarget = null;
      replyBar.classList.remove('open');
      reactionPanel.classList.remove('open');
      document.querySelectorAll('.message.selected').forEach(i => i.classList.remove('selected'));
    }

    function deleteMessagesFromChat(chatId, ids) {
      const idSet = ids instanceof Set ? ids : new Set([ids].flat().filter(Boolean));
      if (!idSet.size || !chats[chatId]) return false;
      cancelAiForChat(chatId);
      if (activeVoicePlaybackId && idSet.has(activeVoicePlaybackId)) {
        activeVoicePlaybackId = null;
        window.speechSynthesis?.cancel?.();
        refreshVoicePlaybackUi();
      }
      const updated = updateChatInContext(chatId, draft => {
        const before = draft.messages.length;
        draft.messages = draft.messages
          .filter(item => !idSet.has(item.id))
          .map(item => item.reply?.id && idSet.has(item.reply.id) ? { ...item, reply: null } : item);
        return draft;
      });
      if (!updated) return false;
      if (replyTarget?.id && idSet.has(replyTarget.id)) clearReply();
      selectedMessageIds.forEach(id => { if (idSet.has(id)) selectedMessageIds.delete(id); });
      if (appStore.getState().focusedMessageId && idSet.has(appStore.getState().focusedMessageId)) appStore.setState({ focusedMessageId: null });
      saveChats();
      renderMessages(false, true);
      renderChatList();
      return true;
    }

    function jumpToMessage(messageId) {
      const chat = activeChat();
      const index = chat?.messages?.findIndex(message => message.id === messageId) ?? -1;
      if (index < 0) { showToast('Исходное сообщение не найдено'); return; }
      renderedWindowStart = Math.max(0, Math.min(index - 8, Math.max(0, chat.messages.length - MESSAGE_WINDOW_SIZE)));
      renderMessages(false, true);
      requestAnimationFrame(() => {
        const node = messages.querySelector(`.message[data-id="${CSS.escape(messageId)}"]`);
        if (!node) { showToast('Сообщение загружается — повторите переход'); return; }
        node.scrollIntoView({ block: 'center', behavior: 'smooth' });
        node.classList.add('selected');
        appSetTimeout(() => node.classList.remove('selected'), 1100);
      });
    }

    function syncMessageSelectionState() {
      const currentIds = new Set((activeChat()?.messages || []).map(message => message.id));
      selectedMessageIds.forEach(id => { if (!currentIds.has(id)) selectedMessageIds.delete(id); });
      const focusedId = appStore.getState().focusedMessageId;
      renderedMessages().forEach(node => {
        const isMultiSelected = selectedMessageIds.has(node.dataset.id);
        node.classList.toggle('multi-selected', isMultiSelected);
        if (!replyTarget || node.dataset.id !== replyTarget.id) node.classList.remove('selected');
      });
      if (focusedId && !currentIds.has(focusedId)) appStore.setState({ focusedMessageId: null });
      updateSelectionUi();
    }

    function toggleMessageSelection(messageId) {
      if (replyTarget?.id === messageId) clearReply();
      if (selectedMessageIds.has(messageId)) selectedMessageIds.delete(messageId);
      else selectedMessageIds.add(messageId);
      syncMessageSelectionState();
    }

    function clearSelection(options = {}) {
      selectedMessageIds.clear();
      if (options.clearReplyHighlight) document.querySelectorAll('.message.selected').forEach(node => node.classList.remove('selected'));
      syncMessageSelectionState();
    }

    function updateSelectionUi() {
      selectionBar.classList.toggle('open', selectedMessageIds.size > 0);
      selectionCount.textContent = `Выбрано: ${selectedMessageIds.size}`;
    }

    function deleteSelectedMessages() {
      if (!selectedMessageIds.size) return;
      if (!confirm(`Удалить выбранные сообщения (${selectedMessageIds.size})?`)) return;
      const ids = new Set(selectedMessageIds);
      deleteMessagesFromChat(activeChatId, ids);
      clearSelection();
      showToast('Выбранные сообщения удалены');
    }


    function announceNewMessage(message, chat = activeChat()) {
      if (!newMessageAnnouncer || isOwnMessage(message.who)) return;
      const text = message.text || (message.attachment ? 'вложение' : message.image ? 'картинка' : message.kind === 'sticker' ? 'стикер' : message.kind === 'voice' ? 'голосовое сообщение' : 'новое сообщение');
      const notice = `Новое сообщение от ${senderName(message.who)} в ${chatName(chat)}: ${truncateText(text, 90)}`;
      newMessageAnnouncer.textContent = notice;
      notifyIfBackground(notice, chat.id);
    }

    function notifyIfBackground(text, chatId = activeChatId) {
      if (!document.hidden || muted) return;
      if ('Notification' in window) {
        // Bug fix: the per-chat "Звук уведомлений" toggle was saved but never used —
        // it now mutes the system notification sound for that chat.
        if (Notification.permission === 'granted') new Notification('AI Messenger', { body: text, silent: chatPersonalSettings(chatId).sound === false });
        else if (Notification.permission === 'default') Notification.requestPermission().catch(() => {});
      }
      document.title = '● ' + document.title.replace(/^●\s*/, '');
    }

    window.addEventListener('focus', () => { document.title = document.title.replace(/^●\s*/, ''); });

    function addMessageToChat(chatId, text, who, reply = null, image = null, kind = 'text', extra = {}) {
      const chat = chats[chatId];
      if (!chat) return null;
      const message = { id: uid(), who: isOwnMessage(who) ? 'me' : who, text: text || '', image, kind, time: now(), createdAt: Date.now(), reply, status: isOwnMessage(who) ? 'sent' : 'read', ...extra };
      const updatedChat = updateChatInContext(chatId, draft => {
        draft.messages.push(message);
        draft.updatedAt = message.createdAt;
        if (draft.messages.length > MAX_MESSAGES_PER_CHAT) draft.messages.splice(0, draft.messages.length - MAX_MESSAGES_PER_CHAT);
        if (chatId !== activeChatId && !isOwnMessage(who)) draft.unread = (draft.unread || 0) + 1;
        return draft;
      }) || chat;
      saveChats();
      if (chatId === activeChatId && !chatScreen.classList.contains('hidden')) {
        appendMessageNode(message, updatedChat);
        announceNewMessage(message, updatedChat);
      }
      renderChatList();
      return message;
    }

    function addMessage(text, who, reply = null, image = null, kind = 'text', extra = {}) {
      return addMessageToChat(activeChatId, text, who, reply, image, kind, extra);
    }

    function updateMessageText(chatId, messageId, text, options = {}) {
      const chat = chats[chatId];
      if (!chat) return null;
      const message = chat.messages.find(item => item.id === messageId);
      if (!message) return null;
      message.text = text;
      if (!options.deferSave) saveChats();
      if (chatId === activeChatId) updateRenderedMessageText(message, chat, Boolean(options.plain));
      if (!options.deferList) renderChatList();
      return message;
    }

    function updateRenderedMessageText(message, chat = activeChat(), plain = false) {
      const node = messages.querySelector(`.message[data-id="${CSS.escape(message.id)}"]`);
      if (!node) { appendMessageNode(message, chat); return; }
      const body = node.querySelector('.message-body, .image-caption');
      if (!body) { appendMessageNode(message, chat); return; }
      if (plain) body.textContent = message.text || '';
      else body.replaceChildren(renderMarkdownWithHighlights(message.text || '', chatSearchQuery));
      const wasNearBottom = isNearBottom();
      if (wasNearBottom || isOwnMessage(message.who)) scrollToBottom(true);
    }

    function streamMessageText(chatId, messageId, fullText, done = () => {}) {
      const text = String(fullText || '');
      const step = Math.max(2, Math.ceil(text.length / 24));
      let index = 0;
      let lastPaint = 0;
      const messageExists = () => Boolean(chats[chatId]?.messages?.some(item => item.id === messageId));
      const tick = () => {
        if (!messageExists()) return;
        const nowTime = performance.now();
        index = Math.min(text.length, index + step);
        if (nowTime - lastPaint > 70 || index >= text.length) {
          lastPaint = nowTime;
          const updated = updateMessageText(chatId, messageId, text.slice(0, index), { deferSave: index < text.length, deferList: index < text.length, plain: index < text.length });
          if (!updated) return;
        }
        if (index < text.length) appSetTimeout(tick, 34);
        else if (messageExists()) { saveChats(); renderChatList(); done(); }
      };
      tick();
    }

    function addStreamingMessageToChat(chatId, fullText, who, reply = null, image = null, kind = 'text', extra = {}) {
      const message = addMessageToChat(chatId, '', who, reply, image, kind, extra);
      if (!message) return null;
      streamMessageText(chatId, message.id, fullText, () => announceNewMessage({ ...message, text: fullText }, chats[chatId]));
      return message;
    }

    function messageTextForAi(message) {
      const text = message.text || (message.attachment ? `Пользователь приложил файл ${message.attachment.name}.` : message.image ? 'Пользователь приложил картинку.' : message.kind === 'sticker' ? 'Пользователь отправил стикер.' : message.kind === 'voice' ? 'Голосовое сообщение.' : 'Сообщение.');
      const reactions = Array.isArray(message.reactions) && message.reactions.length ? ` Реакции: ${message.reactions.join(' ')}` : '';
      return `${senderName(message.who)}: ${text}${reactions}`.slice(0, APP_LIMITS.maxAiMessageText);
    }

    function buildGeminiHistory(chat, persona, userText, imageData = null) {
      const profile = loadUserProfile() || {};
      const userName = profile.name || 'Пользователь';
      const history = chat.messages.slice(-APP_LIMITS.maxAiContextMessages).filter(message => message.text || message.image || message.kind).map(message => ({ role: isOwnMessage(message.who) ? 'user' : 'model', parts: [{ text: messageTextForAi(message) }] }));
      const last = history.at(-1);
      if (!last || last.role !== 'user' || !last.parts?.[0]?.text?.includes(userText)) history.push({ role: 'user', parts: [{ text: `${userName}: ${userText}` }] });
      const image = splitDataUrl(imageData);
      if (image) history.at(-1).parts.push({ inlineData: { mimeType: image.mimeType, data: image.data } });
      return history;
    }

    function markOwnMessagesRead(chatId) {
      const chat = chats[chatId];
      if (!chat) return;
      const hasUnread = chat.messages.some(message => isOwnMessage(message.who) && message.status !== 'read');
      if (!hasUnread) return;
      updateChatInContext(chatId, draft => {
        draft.messages.forEach(message => { if (isOwnMessage(message.who) && message.status !== 'read') message.status = 'read'; });
        return draft;
      });
      saveChats();
      if (chatId === activeChatId) renderMessages(false, true);
    }

    function getPersonaCustom(id) {
      if (!customSettings[id]) customSettings[id] = normalizeCustomSettings(id);
      return customSettings[id];
    }

    function syncBuiltInPersona(id) {
      if (!builtInPersonas[id]) return;
      const settings = getPersonaCustom(id);
      settings.name = settings.name.trim() || DEFAULT_CUSTOMS[id].name;
      settings.handle = settings.handle.trim() || DEFAULT_CUSTOMS[id].handle;
      builtInPersonas[id].name = settings.name;
      builtInPersonas[id].handle = settings.handle;
      builtInPersonas[id].avatar = settings.avatar || DEFAULT_CUSTOMS[id].avatar;
      builtInPersonas[id].styleSetting = settings.style;
      builtInPersonas[id].roast = settings.roast;
      builtInPersonas[id].speed = settings.speed;
      builtInPersonas[id].quickReplies = settings.quickReplies;
    }

    function editablePersonaIdFromChat() {
      const chat = activeChat();
      if (!chat || chat.type !== 'dm') return null;
      const id = chat.members[0];
      return builtInPersonas[id] ? id : null;
    }

    function openCustomPanel(personaId = 'danil') {
      if (!builtInPersonas[personaId]) { showToast('Кастомизация доступна в личном чате Данила или Ярика'); return; }
      activeCustomPersonaId = personaId;
      menuPopover.classList.remove('open');
      homeMenuPopover.classList.remove('open');
      openPanel('custom');
      applyCustomSettings(personaId);
    }

    function applyCustomSettings(personaId = activeCustomPersonaId) {
      activeCustomPersonaId = personaId;
      Object.keys(builtInPersonas).forEach(syncBuiltInPersona);
      personas = { ...builtInPersonas, ...customPersonas };
      custom = getPersonaCustom(personaId);
      customPanelTitle.textContent = `Кастомизация ${custom.name}`;
      customNameInput.placeholder = DEFAULT_CUSTOMS[personaId]?.name || 'Персонаж';
      customHandleInput.placeholder = DEFAULT_CUSTOMS[personaId]?.handle || '@persona';
      customNameInput.value = custom.name;
      customHandleInput.value = custom.handle;
      styleSelect.value = custom.style;
      roastRange.value = custom.roast;
      speedRange.value = custom.speed;
      roastValue.textContent = custom.roast;
      speedValue.textContent = SPEED_LABELS[custom.speed] || 'обычно';
      avatarGrid.querySelectorAll('.avatar-choice').forEach(choice => choice.classList.toggle('active', choice.dataset.avatar === custom.avatar));
      updateAiMenuLabel();
      updateChatMenuLabels();
      renderChatList();
      if (!chatScreen.classList.contains('hidden')) {
        const chat = activeChat();
        chatTitle.textContent = chatName(chat);
        avatarBtn.textContent = chatAvatar(chat);
        avatarBtn.className = `avatar ${chatCss(chat)}`;
        messageInput.placeholder = messagePlaceholder(chat);
      }
    }

    function updateAiMenuLabel() {
      const label = `Нейросеть: ${API_CONFIG.providers[aiProvider] || API_CONFIG.providers.local}`;
      document.querySelectorAll('[data-settings-open="api"] span').forEach(item => item.textContent = label);
    }

    function updateChatMenuLabels() {
      if (chatAutoMenuItem) chatAutoMenuItem.textContent = autoChatRunning ? '⏹ Остановить авто-диалог' : '⏱ Включить авто-диалог';
      if (pinTileMenuItem) pinTileMenuItem.textContent = isTilePinned(activeChatId) ? '📌 Открепить плитку' : '📌 Закрепить как плитку';
      updateAutoChatControls();
    }

    function updateAutoChatControls() {
      const activeName = autoChatChatId && chats[autoChatChatId] ? chatName(chats[autoChatChatId]) : 'ИИ-комната';
      const homeAutoBtn = document.getElementById('autoChatBtn');
      if (homeAutoBtn) {
        homeAutoBtn.textContent = autoChatRunning ? 'Стоп авто-диалог' : 'Авто-диалог';
        homeAutoBtn.setAttribute('aria-pressed', autoChatRunning ? 'true' : 'false');
      }
      if (autoChatRunning) {
        autoChatIndicator.classList.add('open');
        autoChatText.textContent = `Авто-диалог включён: ${activeName}`;
      } else {
        autoChatIndicator.classList.remove('open');
      }
    }

    function toggleAutoChatFromChatMenu() {
      closeOverlay();
      if (autoChatRunning) stopAutoChat();
      else startAutoChat();
      updateChatMenuLabels();
    }

    function openUserProfilePanel() {
      const profile = loadUserProfile() || {};
      userNameInput.value = profile.name || '';
      userHandleInput.value = profile.handle || '';
      openPanel('userProfile');
    }

    function renderReactionPanel() {
      if (!replyTarget) { reactionPanel.classList.remove('open'); applyReactionBtn.disabled = true; return; }
      const selectedMessage = activeChat().messages.find(message => message.id === replyTarget.id);
      if (!reactionEmojiSelect.options.length) {
        reactionEmojis.forEach(emoji => {
          const option = document.createElement('option');
          option.value = emoji;
          option.textContent = emoji;
          reactionEmojiSelect.append(option);
        });
      }
      const currentEmoji = reactionEmojis.includes(reactionEmojiSelect.value) ? reactionEmojiSelect.value : '';
      reactionEmojiSelect.value = currentEmoji || selectedMessage?.reactions?.at(-1) || reactionEmojis[0];
      const selectedEmoji = reactionEmojiSelect.value;
      applyReactionBtn.disabled = !selectedMessage || !selectedEmoji;
      applyReactionBtn.textContent = selectedMessage?.reactions?.includes(selectedEmoji) ? 'Убрать' : 'Поставить';
      reactionPanel.classList.add('open');
    }

    function toggleReaction(messageId, emoji) {
      const chat = activeChat();
      const message = chat.messages.find(item => item.id === messageId);
      if (!message) return;
      const hadReaction = Array.isArray(message.reactions) && message.reactions.includes(emoji);
      const updatedChat = updateChatInContext(chat.id, draft => {
        const target = draft.messages.find(item => item.id === messageId);
        if (!target) return draft;
          const reactions = Array.isArray(target.reactions) ? [...target.reactions] : [];
        target.reactions = hadReaction ? reactions.filter(item => item !== emoji) : [...reactions, emoji];
        return draft;
      }) || chat;
      const updatedMessage = updatedChat.messages.find(item => item.id === messageId) || message;
      saveChats();
      appendMessageNode(updatedMessage, updatedChat);
      const rawReplyText = updatedMessage.text || (updatedMessage.image ? 'Картинка' : updatedMessage.kind === 'sticker' ? 'Стикер' : updatedMessage.kind === 'voice' ? 'Голосовое сообщение' : '');
      replyTarget = { id: updatedMessage.id, author: senderName(updatedMessage.who), text: truncateText(rawReplyText) };
      document.querySelector(`[data-id="${updatedMessage.id}"]`)?.classList.add('selected');
      renderReactionPanel();
      if (!hadReaction) {
        const reactedText = updatedMessage.text || (updatedMessage.image ? 'картинку' : updatedMessage.kind === 'sticker' ? 'стикер' : 'сообщение');
        scheduleAiReplies(`Пользователь поставил реакцию ${emoji} на сообщение от ${senderName(updatedMessage.who)}: ${reactedText}. Коротко отреагируй на саму реакцию.`);
      }
    }

    async function resetAllData() {
      if (!confirm(CONFIRM_MESSAGES.resetAll)) return;
      stopAutoChat();
      clearAppTimers();
      ['aiPersonaChats','aiPersonaChatsEncrypted','aiMessengerEncryptionSecret','customAiPersonas','personaCustomSettings','danilCustomSettings','aiChatUiSettings','danilApiKeyPersisted','danilAiProvider','danilApiKey','danilApiModel','danilTheme','danilThemeAnimated','danilThemeGlass','danilCustomTheme','messengerUserProfile','aiReplyCache'].forEach(key => storageRemove(key));
      try {
        sessionStorage.removeItem('danilApiKey');
        sessionStorage.removeItem('danilApiKeySession');
        sessionStorage.removeItem('aiMessengerActiveChatId');
        Object.keys(sessionStorage).filter(key => key.startsWith('aiMessengerDraft:')).forEach(key => sessionStorage.removeItem(key));
      } catch {}
      try { await clearChatsDb(); } catch {}
      clearAiReplyCache();
      aiProvider = API_CONFIG.defaultProvider; apiKey = ''; apiModel = API_CONFIG.defaultModel; AppContext.setApiConfig({ aiProvider, apiKey, apiModel }); customSettings = loadCustomSettings(); custom = customSettings.danil; customPersonas = {}; Object.keys(builtInPersonas).forEach(syncBuiltInPersona); personas = { ...builtInPersonas };
      setChats(defaultChats()); activeChatId = 'danil'; setActiveChatId('danil'); activeCustomPersonaId = 'danil'; uiSettings = loadUiSettings(); AppContext.setUiSettings(uiSettings);
      registrationNameInput.value = '';
      registrationHandleInput.value = '';
      applyTheme({ theme: 'aurora', animated: true, glass: false });
      applyUiSettings();
      applyCustomSettings();
      renderChatList();
      renderPersonaList();
      updateAiMenuLabel();
      applyUserProfile();
      showToast('Всё сброшено, пройди регистрацию заново');
    }

    function openApiPanel() {
      openPanel('api');
      aiProviderSelect.value = aiProvider; apiKeyInput.value = apiKey ? '••••••••' : ''; apiModelInput.value = apiModel; persistApiKeyInput.checked = storageGet('danilApiKeyPersisted', 'false') === 'true'; toggleApiExt();
    }

    function openApiGuidePanel() {
      switchSettingsPanel('apiGuide');
    }

    bindTap(googleGuideBtn, event => {
      event.preventDefault?.();
      openApiGuidePanel();
    });

    document.querySelectorAll('[data-api-guide-back]').forEach(button => bindTap(button, event => {
      event.preventDefault?.();
      event.stopPropagation?.();
      openApiPanel();
    }));

    function toggleApiExt() {
      const show = aiProviderSelect.value === 'gemma';
      apiSettingsExt.classList.toggle('is-hidden', !show);
      // Note: do NOT set style.display here — it conflicts with .is-hidden { display: none !important }
      apiKeyInput.disabled = !show;
      apiModelInput.disabled = !show;
      persistApiKeyInput.disabled = !show;
      const showNeural = aiProviderSelect.value === 'neural';
      neuralSettingsExt.classList.toggle('is-hidden', !showNeural);
      if (showNeural) renderNeuralStatus();
    }
    aiProviderSelect.addEventListener('change', toggleApiExt);

    bindTap(document.getElementById('clearAiCacheBtn'), () => { clearAiReplyCache(); showToast('Кеш ИИ очищен'); });

    bindTap(saveApiBtn, () => {
      aiProvider = safeChoice(aiProviderSelect.value, SAFE_AI_PROVIDERS, API_CONFIG.defaultProvider);
      apiKey = apiKeyInput.value === '••••••••' ? apiKey : safeText(apiKeyInput.value, '', 160);
      apiModel = String(apiModelInput.value || API_CONFIG.defaultModel).replace(API_CONFIG.modelPattern, '').slice(0, 80) || API_CONFIG.defaultModel;
      storageRemove('danilApiKey');
      if (persistApiKeyInput.checked && apiKey && !confirm('Сохранить API-ключ в браузере после выхода? Это небезопасно на чужом устройстве.')) persistApiKeyInput.checked = false;
      setPersistedApiKey(apiKey, persistApiKeyInput.checked);
      storageSet('danilAiProvider', aiProvider); storageSet('danilApiModel', apiModel);
      clearAiReplyCache();
      AppContext.setApiConfig({ aiProvider, apiKey, apiModel });
      updateAiMenuLabel(); closeOverlay();
      showToast(aiProvider === 'gemma' && !apiKey ? 'Выбран Google AI, но ключ не введён' : 'Настройки нейросети сохранены');
    });

    // Small quantized instruct models (especially the 0.5B WASM fallback) sometimes ignore
    // the roleplay system prompt entirely and fall back to generic "I'm an AI assistant"
    // customer-support boilerplate memorized during training — occasionally even inventing
    // a nonexistent bot name. That's a model-quality artifact, not something a prompt tweak
    // reliably fixes, so we detect it after the fact and swap in the instant local reply
    // instead of showing the broken line to the person.
    const MODEL_REFUSAL_PATTERNS = [
      /не могу общаться с пользовател/i,
      /я\s*(?:—|-)?\s*(?:это\s*)?(?:языковая модель|ии[- ]?ассистент|ai[- ]?assistant|large language model)/i,
      /как (?:ии|искусственный интеллект|языковая модель)/i,
      /i(?:'m| am) (?:just |only )?an? (?:ai|language model)/i,
      /i cannot (?:personally )?chat/i,
      /обратитесь (?:в поддержку|к (?:другому )?(?:чат-?боту|ии-?боту))/i,
      /не могу притворяться/i,
      /я не (?:являюсь|человек)/i
    ];
    function isModelRefusal(text) {
      return !text || MODEL_REFUSAL_PATTERNS.some(pattern => pattern.test(text));
    }

    function cleanAiReply(text, persona) {
      const withoutTags = (text || '').replace(/<[^>]*>/g, '').replace(/```[\s\S]*?```/g, '').trim();
      const withoutActionLine = /^\*[^*]+\*$/.test(withoutTags) ? '' : withoutTags;
      return withoutActionLine.replace(/\*([^*]+)\*/g, '$1').replace(new RegExp(`^${persona.name}\\s*[:—-]\\s*`, 'i'), '').replace(/"/g, '').trim().slice(0, APP_LIMITS.maxAiReplyLength);
    }

    function buildSystemPrompt(persona, chat) {
      const profile = loadUserProfile() || {};
      const userName = profile.name || 'Пользователь';
      const userHandle = profile.handle || '@user';
      const settings = builtInPersonas[persona.id] ? getPersonaCustom(persona.id) : null;
      const style = persona.prompt || (settings
        ? `${STYLE_LABELS[settings.style] || persona.style}; уровень подколов ${settings.roast} из 5`
        : (persona.id === 'yarik' ? 'ранимый, мягкий, слегка обидчивый, драматизирует мелочи, но отвечает без токсичности' : `${STYLE_LABELS[custom.style]}; уровень подколов ${custom.roast} из 5`));
      const groupParticipants = chat.type === 'group'
        ? chat.members.map(id => `${personas[id]?.name || id}${id === persona.id ? ' (это ты)' : ''}`).join(', ')
        : '';
      const userLine = `Пользователь в чате: ${userName} (${userHandle}).`;
      const groupRule = chat.type === 'group'
        ? `Ты пишешь в группе. В чате также находятся: ${groupParticipants}, ${userName}. Можешь обращаться к участникам по именам, реагировать на их реплики и не отвечать за других персонажей.`
        : 'Ты пишешь в личном чате.';
      const languageNames = { ru: 'русском', en: 'английском', uk: 'украинском' };
      const replyLanguage = languageNames[currentLanguage()] || 'русском';
      return `Ты играешь живого персонажа по имени ${persona.name} в Telegram. Стиль: ${style}. ${userLine} ${groupRule}
Пиши на ${replyLanguage} языке, коротко (обычно 1-2 предложения, не длиннее ${APP_LIMITS.maxAiReplyLength} символов) и естественно. Если тебе передали изображение, реально опиши или прокомментируй то, что видишь. Не говори, что ты ИИ или бот. Не повторяй одну и ту же фразу из прошлых сообщений; меняй формулировки, длину и интонацию. Пиши как живой собеседник: конкретно, спокойно, без шаблонных вступлений и канцелярита. Не обрывай мысль на середине — если не укладываешься, сократи содержание, а не предложение. Верни только одно сообщение без имени, кавычек и пояснений.`;
    }

    function splitDataUrl(dataUrl) {
      const match = /^data:([^;]+);base64,(.+)$/.exec(dataUrl || '');
      return match ? { mimeType: match[1], data: match[2] } : null;
    }

    async function fetchWithTimeout(url, options = {}, timeoutMs = API_TIMEOUT_MS) {
      // Bug fix: when an external signal was passed (every chat AI request does this),
      // the internal controller was null and the timeout callback aborted nothing —
      // so those requests had NO timeout at all and could hang forever. Now we always
      // use an internal controller, forward external aborts to it, and time out both.
      const controller = new AbortController();
      const external = options.signal || null;
      if (external) {
        if (external.aborted) controller.abort();
        else external.addEventListener('abort', () => controller.abort(), { once: true });
      } else {
        currentAbortController = controller;
      }
      let timedOut = false;
      const timeoutId = appSetTimeout(() => { timedOut = true; controller.abort(); }, timeoutMs);
      try {
        return await fetch(url, { ...options, signal: controller.signal });
      } catch (error) {
        if (error.name === 'AbortError') throw new Error(timedOut ? 'превышено время ожидания API' : 'запрос отменён');
        if (!navigator.onLine) throw new Error('нет подключения к интернету');
        throw new Error(error.message || 'сетевая ошибка API');
      } finally {
        appClearTimeout(timeoutId);
        if (!external && currentAbortController === controller) currentAbortController = null;
      }
    }

    async function fetchWithRetry(url, options = {}, retries = APP_LIMITS.apiRetries) {
      let lastError;
      const retryableStatuses = new Set([429, 500, 502, 503, 504]);
      for (let attempt = 0; attempt <= retries; attempt += 1) {
        let res;
        try { res = await fetchWithTimeout(url, options); }
        catch (error) {
          // Bug fix: a user-cancelled request (chat switched, message deleted) used to be
          // retried with the same already-aborted signal, burning retry delays for nothing.
          if (/запрос отменён/i.test(error?.message || '')) throw error;
          lastError = error;
          if (attempt >= retries) break;
          const retryAfter = 450 * (2 ** attempt) + Math.random() * 180;
          await new Promise(resolve => appSetTimeout(resolve, retryAfter));
          continue;
        }
        if (res.ok || !retryableStatuses.has(res.status) || attempt >= retries) return res;
        const headerDelay = Number(res.headers?.get?.('retry-after')) * 1000;
        const retryAfter = Number.isFinite(headerDelay) && headerDelay > 0 ? headerDelay : 450 * (2 ** attempt) + Math.random() * 180;
        await new Promise(resolve => appSetTimeout(resolve, retryAfter));
      }
      throw lastError || new Error('API недоступен');
    }

    function apiErrorMessage(provider, status, data = null) {
      const details = data?.error?.message || data?.message;
      return `${provider}: ${details || `ошибка ${status}`}`;
    }

    async function getGemmaReply(userText, persona, chat, imageData = null, signal = null) {
      if (!apiKey) throw new Error('API-ключ Google AI Studio не введён');
      const apiKeyFingerprint = apiKey ? String(apiKey).slice(0, 8) : 'no-key';
      const cacheKey = `aiCache:${apiModel}:${apiKeyFingerprint}:${persona.id}:${userText.slice(0, 180)}:${imageData ? 'img' : 'txt'}`;
      const cached = getAiCacheValue(cacheKey);
      if (cached) return cached;
      const url = `${API_CONFIG.geminiBaseUrl}/${apiModel}:streamGenerateContent?alt=sse`;
      const contents = buildGeminiHistory(chat, persona, userText, imageData);
      const res = await fetchWithRetry(url, {
        method: 'POST',
        signal,
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: buildSystemPrompt(persona, chat) }] },
          contents,
          generationConfig: { temperature: persona.id === 'yarik' ? 0.72 : 0.68, topP: 0.9, topK: 40, maxOutputTokens: 220, presencePenalty: 0.35, frequencyPenalty: 0.45 }
        })
      });
      if (!res.ok) {
        let data = null;
        try { data = await res.json(); } catch { data = null; }
        throw new Error(apiErrorMessage('Google AI', res.status, data));
      }
      let raw = '';
      const reader = res.body?.getReader?.();
      const appendSsePayload = payload => {
        const clean = String(payload || '').trim();
        if (!clean || clean === '[DONE]') return;
        const parsed = JSON.parse(clean);
        raw += parsed.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('') || '';
      };
      if (reader) {
        const decoder = new TextDecoder();
        let buffer = '';
        while (true) {
          const { value, done } = await reader.read();
          buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
          const events = buffer.split(/\r?\n\r?\n/);
          buffer = done ? '' : events.pop() || '';
          for (const event of events) {
            const payload = event.split(/\r?\n/).filter(line => line.startsWith('data:')).map(line => line.replace(/^data:\s?/, '')).join('\n');
            if (!payload) continue;
            try { appendSsePayload(payload); }
            catch (error) { logSafe('SSE chunk parse skipped', { code: error.name || 'json' }); }
          }
          if (done) break;
        }
        if (buffer.trim()) {
          const payload = buffer.split(/\r?\n/).filter(line => line.startsWith('data:')).map(line => line.replace(/^data:\s?/, '')).join('\n');
          if (payload) {
            try { appendSsePayload(payload); }
            catch (error) { logSafe('SSE trailing chunk parse skipped', { code: error.name || 'json' }); }
          }
        }
      } else {
        const data = await res.json().catch(() => null);
        raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      }
      // Bug fix: when the API returned an empty/filtered answer, the local fallback
      // phrase used to be written into the AI cache under the API cache key — every
      // later identical prompt then got the same canned line back "from the API".
      // Only cache genuine model output.
      const cleaned = cleanAiReply(raw, persona);
      if (cleaned) {
        setAiCacheValue(cacheKey, cleaned);
        return cleaned;
      }
      return getLocalReply(userText, persona, chat);
    }

    function pickLocalReply(pool, intent = 'default', seed = '', avoidTexts = []) {
      const variants = Array.isArray(pool?.[intent]) && pool[intent].length ? pool[intent] : pool?.default || localReplies.group.default;
      const avoidList = (Array.isArray(avoidTexts) ? avoidTexts : [avoidTexts]).map(normalizeLocalText).filter(Boolean);
      const filtered = variants.filter(item => !avoidList.includes(normalizeLocalText(item)));
      const choices = filtered.length ? filtered : variants;
      const hash = Array.from(String(seed || Date.now())).reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) >>> 0, 7);
      return choices[hash % choices.length];
    }

    function normalizeLocalText(text) {
      return String(text || '').toLocaleLowerCase('ru-RU').replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();
    }

    function escapeLocalRegex(value) {
      return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function hasLocalTerm(text, terms, options = {}) {
      const normalized = normalizeLocalText(text);
      return terms.some(term => {
        const escaped = escapeLocalRegex(term);
        const suffix = options.prefix ? '[\\p{L}\\p{N}_+-]*' : '';
        const pattern = `(^|[^\\p{L}\\p{N}_+-])${escaped}${suffix}(?=$|[^\\p{L}\\p{N}_+-])`;
        return new RegExp(pattern, 'u').test(normalized);
      });
    }

    const EMOJI_INTENT_MAP = [
      { intent: 'agreement', emoji: ['👍','✅','🙏','💯','👌'] },
      { intent: 'support', emoji: ['😢','😭','😞','💔','🥺'] },
      { intent: 'joke', emoji: ['😂','🤣','😆','😹'] },
      { intent: 'thanks', emoji: ['🙌','🤝'] },
      { intent: 'farewell', emoji: ['👋'] },
      { intent: 'greetings', emoji: ['🙂','😊','😁'] },
      { intent: 'disagreement', emoji: ['👎','🚫'] },
      { intent: 'frustration', emoji: ['😡','🤬','😤'] }
    ];

    function detectEmojiOnlyIntent(text) {
      const trimmed = String(text || '').trim();
      if (!trimmed) return '';
      const letters = trimmed.match(/[\p{L}\p{N}]/gu) || [];
      if (letters.length) return '';
      for (const entry of EMOJI_INTENT_MAP) {
        if (entry.emoji.some(symbol => trimmed.includes(symbol))) return entry.intent;
      }
      return '';
    }

    function isLowSignalLocalText(text) {
      const normalized = normalizeLocalText(text);
      const letters = normalized.match(/[\p{L}]/gu) || [];
      const words = normalized.match(/[\p{L}]{2,}/gu) || [];
      if (!normalized) return true;
      if (letters.length < 2 && !hasLocalTerm(normalized, ['hi', 'ку'])) return true;
      if (!words.length && !hasLocalTerm(normalized, ['html', 'css', 'js', 'hi'])) return true;
      return false;
    }

    function exactLocalPhrase(text, phrases) {
      const stripped = normalizeLocalText(text).replace(/[!?.…,]+$/g, '').trim();
      return phrases.includes(stripped);
    }

    function detectLocalIntent(text) {
      const normalized = normalizeLocalText(text);
      if (isLowSignalLocalText(normalized)) return detectEmojiOnlyIntent(text) || 'noise';
      if (hasLocalTerm(normalized, ['бесит','достало','задолбал','задолбало','раздражает','ненавижу','в бешенстве','взбесил','надоело'])) return 'frustration';
      if (hasLocalTerm(normalized, ['спасибо','благодар','спс','пасиб','сяб'])) return 'thanks';
      if (hasLocalTerm(normalized, ['пока','до связи','увидимся','до встречи','спокойной ночи','счастливо','бывай'])) return 'farewell';
      if (hasLocalTerm(normalized, ['привет','здравствуй','здарова','ку','доброе','добрый','хай','hello','hi','как дела','как ты','как оно'])) return 'greetings';
      if (hasLocalTerm(normalized, ['извини','прости','сорри','не обижайся','виноват'])) return 'apology';
      if (exactLocalPhrase(text, ['да','ага','угу','точно','именно','согласен','согласна','плюсую','поддерживаю','конечно','именно так','верно'])) return 'agreement';
      if (exactLocalPhrase(text, ['нет','неа','не думаю','не согласен','не согласна','вряд ли','сомневаюсь','не совсем','не факт'])) return 'disagreement';
      if (hasLocalTerm(normalized, ['план','шаги','инструкция','как сделать','что делать','разложи','по пунктам','алгоритм'])) return 'plan';
      if (hasLocalTerm(normalized, ['код','баг','ошибка','html','css','js','javascript','скрипт','консоль','почини','исправь']) || hasLocalTerm(normalized, ['функц','правк'], { prefix: true })) return 'code';
      if (hasLocalTerm(normalized, ['выбрать','лучше','вариант','или','стоит ли','посоветуй'])) return 'choice';
      if (/[?？]$/.test(normalized) || hasLocalTerm(normalized, ['как','что','почему','зачем','куда','где','когда','можешь','помоги','подскажи','объясни','сколько'])) return 'question';
      if (hasLocalTerm(normalized, ['плохо','тяжело','грустно','страшно','устал','устала','переживаю','больно','не могу','тревожно','обидно'])) return 'support';
      if (hasLocalTerm(normalized, ['ахах','хаха','лол','рофл','шутка','шутки','мем','смешно','угар'])) return 'joke';
      return 'default';
    }

    function extractLocalKeywords(text) {
      const stop = new Set(['это','как','что','если','тебе','меня','мне','надо','нужно','можно','почему','когда','где','или','для','про','без','уже','тут','там','вот','сделай','исправь','дела','дело','привет','извини','прости','пожалуйста']);
      return normalizeLocalText(text).split(/[^\p{L}\p{N}_+-]+/u).filter(word => word.length > 3 && !stop.has(word)).slice(0, 4);
    }

    function isCustomLocalPersona(persona) {
      return !!persona?.prompt && !localReplies[persona.id] && String(persona.id || '').startsWith('custom_');
    }

    function customLocalProfile(persona) {
      const prompt = normalizeLocalText(`${persona?.prompt || ''} ${persona?.about || ''}`);
      return {
        rough: /груб|жест|жёст|хам|дерз|злой|токс|резк|мат|без церемон/.test(prompt),
        sarcastic: /сарказ|ирон|подкол|язв|стеб|стёб|тролл/.test(prompt),
        gentle: /мягк|доб|нежн|забот|поддерж|аккурат|спокой/.test(prompt),
        strict: /строг|настав|учител|дисциплин|критич|делов/.test(prompt),
        chaotic: /хаос|мем|безум|рандом|энерг|кринж|рофл/.test(prompt),
        short: /корот|кратк|лаконич|одной фраз/.test(prompt)
      };
    }

    function buildCustomLocalReplies(persona) {
      const profile = customLocalProfile(persona);
      const name = persona?.name || 'Персонаж';
      if (profile.rough || profile.sarcastic) {
        const softener = profile.rough ? 'грубо, но по делу' : 'с сарказмом, но по делу';
        return {
          greetings: [`Ну привет. ${name} на связи — выкладывай уже, что сломалось.`, 'О, явление народу. Давай вводные, только без каши.'],
          apology: ['Ладно, принято. Только давай без повторного цирка.', 'Проехали. Ошибся — бывает, не будем ставить памятник драме.'],
          thanks: ['Не за что, это входит в тариф.', 'Пожалуйста. Можешь аплодировать мысленно.'],
          farewell: ['Погнали, отбой. Не теряйся насовсем.', 'Ладно, до связи. Постарайся не устроить новый пожар без меня.'],
          agreement: ['Наконец-то согласие без боя.', 'Вот именно. Приятно, когда кто-то мыслит трезво.'],
          disagreement: ['Ну давай, удиви меня аргументом.', 'Сомнительно, но ладно, обоснуй.'],
          frustration: ['Так, тормози. Что конкретно взбесило?', 'Ладно, накипело — по делу, без искр, что случилось.'],
          question: [`Если ${softener}: сначала цель, потом ограничения, потом нормальный вопрос.`, 'Ответ будет лучше, когда ты перестанешь прятать суть за туманом. Что именно нужно?'],
          support: ['Соберись. Неприятно — да, конец света — нет. Берём один шаг и делаем.', 'Не разваливаемся. Сначала тушим главный пожар, потом героически страдаем.'],
          joke: ['Ха. Почти смешно — уже достижение.', 'Неплохо. Интернет бы, возможно, выжил после такого юмора.'],
          plan: ['План простой: выкинуть лишнее, назвать цель, сделать первый проверяемый шаг.', 'Делай так: меньше героизма, больше конкретики, потом проверка результата.'],
          code: ['По коду: воспроизведи баг, найди место, исправь минимально. Шаманство оставь барабанам.', 'Кидай ошибку или фрагмент. Без этого это гадание на горячей клавиатуре.'],
          choice: ['Выбирай то, что проще проверить и откатить. Остальное — романтика для аварийных логов.', 'Бери вариант с меньшим количеством скрытых мин. Скучно, зато не стыдно.'],
          default: ['Понял. Теперь сформулируй нормально: цель, что мешает и какой результат нужен.', 'Мысль есть, но пока она выглядит помятой. Давай конкретику.']
        };
      }
      if (profile.gentle) {
        return {
          greetings: ['Привет. Я рядом, рассказывай спокойно.', 'Привет. Давай разберём без спешки и давления.'],
          apology: ['Всё нормально, спасибо, что сказал. Двигаемся дальше мягко.', 'Принято. Давай просто продолжим аккуратнее.'],
          thanks: ['Пожалуйста, мне приятно, что пригодилось.', 'Не за что, рад помочь.'],
          farewell: ['Пока, береги себя.', 'До связи, если что — я рядом.'],
          agreement: ['Хорошо, что мы сходимся во мнении.', 'Да, мне тоже так спокойнее видится.'],
          disagreement: ['Понимаю, но мне видится немного иначе. Расскажешь подробнее?', 'Ладно, у меня чуть другое ощущение, давай разберёмся вместе.'],
          frustration: ['Слышу, что накопилось. Давай не спеша, по одному вопросу.', 'Понимаю раздражение. Что беспокоит больше всего?'],
          question: ['Я бы сначала уточнил цель и самый важный нюанс. Так будет спокойнее.', 'Хороший вопрос. Давай отделим главное от второстепенного.'],
          support: ['Понимаю. Давай сделаем один маленький шаг, не всё сразу.', 'Это неприятно, но решаемо. Начнём с самого простого и безопасного.'],
          plan: ['Можно мягко: цель, маленький первый шаг, проверка, потом улучшения.', 'Давай составим короткий план без перегруза.'],
          code: ['Если это баг, начнём с воспроизведения и спокойно сузим место ошибки.', 'Покажи фрагмент или ошибку — пройдёмся аккуратно.'],
          choice: ['Я бы выбрал вариант с меньшим риском и понятной проверкой.', 'Лучше взять путь, который можно спокойно отменить, если не подойдёт.'],
          default: ['Я услышал. Давай уточним главное и спокойно разберёмся.', 'Понял тебя. Сначала выделим суть, потом найдём следующий шаг.']
        };
      }
      if (profile.strict) {
        return {
          greetings: ['На связи. Формулируй задачу: цель, вводные, ограничение.', 'Готов. Давай без лишнего: что требуется получить?'],
          thanks: ['Не за что. Результат — лучшая благодарность.', 'Пожалуйста. Двигаемся дальше по плану.'],
          farewell: ['Принято, на этом закончим. До следующего раза.', 'Хорошо. Завершаем сессию.'],
          agreement: ['Согласен, критерий совпадает.', 'Верно. Двигаемся в этом направлении.'],
          disagreement: ['Не согласен. Обоснуй критерий, на котором строишь вывод.', 'Спорное утверждение. Нужны аргументы.'],
          frustration: ['Эмоции зафиксированы. Назови главную проблему одним предложением.', 'Понимаю напряжение. Разберём по одному пункту, без спешки.'],
          question: ['Ответ зависит от цели. Сначала зафиксируй критерий результата.', 'Нужны исходные данные и ограничение. Без них решение будет случайным.'],
          support: ['Сначала стабилизируем ситуацию, затем действуем по плану.', 'Эмоции в сторону на минуту: выделяем проблему и первый шаг.'],
          plan: ['Порядок такой: цель, ресурсы, риски, первый шаг, проверка.', 'Составь короткий план и проверь его на самом маленьком действии.'],
          code: ['Диагностика до правок: воспроизвести, локализовать, исправить, проверить.', 'Нужны ошибка, контекст и ожидаемое поведение. Потом правим.'],
          choice: ['Выбирай вариант с ясным критерием успеха и обратимыми изменениями.', 'Приоритет — проверяемость, стоимость отката и риск побочных эффектов.'],
          default: ['Принято. Уточни результат и ограничение, после этого можно действовать.', 'Сформулируй задачу точнее: что есть, что нужно, что мешает.']
        };
      }
      if (profile.chaotic) {
        return {
          greetings: ['Йо. Чат проснулся, логика пристегнулась не полностью. Что делаем?', 'Привет. Загружаю режим контролируемого хаоса — кидай вводные.'],
          thanks: ['Не за что, добро летит по кругу.', 'Пожалуйста! Записал себе плюс в карму.'],
          farewell: ['Отбой, ракета приземляется. До связи.', 'Пока! Ухожу в свой хаотичный закат.'],
          agreement: ['Да! Наконец-то две волны совпали.', 'Точно, вот это резонанс.'],
          disagreement: ['Хмм, не, у меня другой вайб на это. Раскинь мысль дальше.', 'Не совсем — расскажи, откуда взялась эта идея.'],
          frustration: ['Так, стоп-хаос. Что конкретно взорвалось?', 'Чувствую напряжение в эфире. Что случилось, по шагам?'],
          question: ['Вопрос норм, но нужен якорь: цель, проблема, первый ход.', 'Сейчас это облако мыслей. Дай одну главную точку, и полетим.'],
          plan: ['План-мем: цель, антихаос, первый тык, проверка, победный звук.', 'Берём самый маленький шаг, чтобы хаос не съел проект целиком.'],
          code: ['Баг ловим как таракана: воспроизвёл, прижал местом, починил, проверил.', 'Кидай код. Без кода я только красиво машу фонариком в тумане.'],
          default: ['Принял сигнал. Теперь дай чуть больше конкретики, а то радар ловит суп.', 'Окей, направление есть. Нужен один главный смысл, чтобы не улететь в космос.']
        };
      }
      return {
        greetings: [`Привет. ${name} на связи — рассказывай, что нужно.`, 'Привет. Давай разберём задачу по сути.'],
        apology: ['Принято, всё нормально. Продолжим.', 'Окей, проехали. Что делаем дальше?'],
        thanks: ['Не за что, обращайся ещё.', 'Пожалуйста, рад помочь.'],
        farewell: ['Пока, до связи.', 'Хорошо, до следующего раза.'],
        agreement: ['Согласен, звучит верно.', 'Да, вижу это так же.'],
        disagreement: ['Не совсем согласен, расскажи подробнее почему.', 'Есть сомнения, давай разберёмся вместе.'],
        frustration: ['Понимаю, что накопилось. Давай по одному пункту.', 'Слышу раздражение — что беспокоит больше всего?'],
        question: ['Я бы начал с цели и ограничений — так ответ будет точнее.', 'Нужно чуть больше конкретики: какой результат ты хочешь получить?'],
        support: ['Понимаю. Давай разложим ситуацию на понятные шаги.', 'Это решаемо, если идти по одному шагу и не пытаться чинить всё сразу.'],
        plan: ['План: цель, первый шаг, проверка результата, потом улучшения.', 'Давай коротко: что нужно, что мешает, что проверяем первым.'],
        code: ['По коду лучше начать с воспроизведения бага и минимальной правки.', 'Кидай ошибку или фрагмент — тогда можно сузить причину.'],
        choice: ['Выбирай вариант, который проще проверить и безопаснее откатить.', 'Лучший путь — тот, где понятны риски и критерий успеха.'],
        default: ['Понял. Уточни главный результат, и я отвечу точнее.', 'Окей, мысль уловил. Давай сфокусируемся на сути.']
      };
    }

    function localPersonaTone(persona) {
      if (persona.id === 'yarik') return { prefix: '', soft: true, direct: false };
      if (persona.id === 'group') return { prefix: 'Коллективно: ', soft: false, direct: true };
      if (isCustomLocalPersona(persona)) {
        const profile = customLocalProfile(persona);
        return { prefix: '', soft: profile.gentle, direct: !profile.gentle, rough: profile.rough || profile.sarcastic };
      }
      return { prefix: '', soft: false, direct: true };
    }

    function summarizeLocalContext(chat, currentText = '') {
      const messagesList = [...(chat?.messages || [])].reverse();
      const previousUser = messagesList.find(message => isOwnMessage(message.who) && message.text && message.text !== currentText)?.text || '';
      const recentBotTexts = messagesList.filter(message => !isOwnMessage(message.who) && message.text).slice(0, 2).map(message => message.text);
      return {
        previousUser: truncateText(previousUser, 72),
        previousBot: truncateText(recentBotTexts[0] || '', 72),
        recentBot: recentBotTexts,
        hasThread: Boolean(previousUser || recentBotTexts.length),
        count: chat?.messages?.length || 0
      };
    }

    function pickVariant(list, seed) {
      if (!Array.isArray(list) || !list.length) return '';
      const hash = Array.from(String(seed || Date.now())).reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) >>> 0, 17);
      return list[hash % list.length];
    }

    function composeLocalAdvice(intent, text, persona, chat) {
      const keywords = extractLocalKeywords(text);
      const tone = localPersonaTone(persona);
      const subject = keywords.length ? `по теме «${keywords.join(', ')}»` : 'по этой теме';
      const softStart = tone.soft ? 'мне кажется, ' : '';
      const directStart = tone.direct ? 'Я бы ' : 'я бы ';
      const seed = `${persona.id}:${intent}:${text}`;
      const byIntent = {
        plan: [
          `${softStart}лучше сделать короткий план: цель, первый шаг, проверка результата.`,
          `${softStart}стоит расписать по шагам, иначе легко упустить порядок.`,
          `${directStart}начал с одного конкретного шага, а не с общего плана на всё сразу.`
        ],
        code: [
          `${directStart}сначала воспроизвёл проблему, потом нашёл место, где всё ломается, и только потом правил.`,
          `${directStart}для начала локализовал баг, а не бросался чинить всё подряд.`,
          `Кидай ошибку или фрагмент кода — так проще сузить причину, чем гадать.`
        ],
        choice: [
          `${directStart}выбрал вариант, который проще проверить и откатить, если не зайдёт.`,
          `${directStart}смотрел не на то, что круче, а на то, что дешевле отменить.`
        ],
        question: keywords.length ? [
          `${softStart}ответ зависит от главной цели. Если цель — ${keywords[0]}, начинать стоит с самого проверяемого шага.`,
          `${softStart}тут многое решает контекст вокруг ${keywords[0]} — без него легко промахнуться с ответом.`
        ] : [],
        support: [
          `${softStart}не обязательно решать всё сразу — хватит одного маленького шага, чтобы стало легче.`,
          `${softStart}сначала стоит снизить нагрузку, а дальше уже разбираться по порядку.`
        ],
        default: keywords.length >= 2 ? [
          `${directStart}сфокусировался ${subject}: что мешает, что уже есть и какой результат нужен.`,
          `${directStart}начал бы ${subject} с самого узкого места — там обычно и есть затык.`
        ] : []
      };
      return pickVariant(byIntent[intent] || [], seed);
    }

    const CONTEXT_NOTE_TEMPLATES = [
      prior => `Кстати, помню — до этого была тема про «${prior}».`,
      prior => `Это как-то связано с тем, что ты писал про «${prior}»?`,
      prior => `Возвращаясь к «${prior}»: увязать это с тем разговором?`
    ];

    // Adds an occasional, varied nod to earlier context — never on every message,
    // and only when the earlier topic is actually distinct from what's being said now.
    function maybeContextNote(context, currentText) {
      if (!context.hasThread) return '';
      const prior = context.previousUser || context.previousBot;
      if (!prior) return '';
      const normalizedPrior = normalizeLocalText(prior);
      const normalizedCurrent = normalizeLocalText(currentText);
      if (!normalizedPrior || normalizedPrior.length < 8) return '';
      if (normalizedCurrent.includes(normalizedPrior) || normalizedPrior.includes(normalizedCurrent)) return '';
      if (Math.random() > 0.22) return '';
      const template = CONTEXT_NOTE_TEMPLATES[Math.floor(Math.random() * CONTEXT_NOTE_TEMPLATES.length)];
      return template(prior);
    }

    function getLowSignalLocalReply(persona) {
      if (persona.id === 'yarik') return 'я не очень понял сообщение. напиши чуть понятнее, и я отвечу нормально.';
      if (persona.id === 'group') return 'Коллективно не расшифровали. Нужны хотя бы пара слов, а не радиосигнал из космоса.';
      if (isCustomLocalPersona(persona)) {
        const profile = customLocalProfile(persona);
        if (profile.rough || profile.sarcastic) return 'Это не сообщение, а обломок мысли. Напиши нормально, что нужно.';
        if (profile.gentle) return 'Я не очень понял. Напиши чуть подробнее, и я спокойно отвечу.';
        if (profile.strict) return 'Недостаточно данных. Сформулируй запрос понятнее.';
      }
      return 'Не понял ввод. Напиши словами, что нужно сделать или обсудить.';
    }

    function getLocalReply(userText, persona, chat) {
      const text = String(userText || '').trim();
      const pool = localReplies[persona.id] || (isCustomLocalPersona(persona) ? buildCustomLocalReplies(persona) : (chat?.type === 'group' ? localReplies.group : localReplies.danil));
      const intent = detectLocalIntent(text);
      if (intent === 'noise') return getLowSignalLocalReply(persona);
      const context = summarizeLocalContext(chat, text);
      let reply = pickLocalReply(pool, intent, `${persona.id}:${intent}:${text}:${chat?.messages?.length || 0}:${Date.now()}`, context.recentBot);
      if (/картинк|изображ|фото|посмотри|скрин/i.test(text)) {
        if (persona.id === 'yarik') {
          reply = 'я вижу, что ты отправил что-то визуальное. локально я не распознаю детали как Google AI, но по твоему описанию помогу аккуратно.';
        } else if (isCustomLocalPersona(persona) && (customLocalProfile(persona).rough || customLocalProfile(persona).sarcastic)) {
          reply = 'Картинку вижу только как факт отправки, не как внешний ИИ. Опиши, что там, и разберём без гадания на пикселях.';
        } else {
          reply = 'Вижу, что тут нужен разбор картинки. В локальном режиме я не вижу детали как внешняя модель, но по описанию разберу нормально.';
        }
      }
      // Advice and the context nod are each optional and independently randomized so
      // replies don't always come out as the same rigid two- or three-sentence template.
      // Short conversational intents (thanks/farewell/agreement/disagreement/frustration)
      // skip both add-ons — bolting task-advice onto "спасибо" reads as robotic.
      const conversational = new Set(['thanks', 'farewell', 'agreement', 'disagreement', 'frustration']);
      const extras = [];
      if (!conversational.has(intent) && Math.random() < 0.7) {
        const advice = composeLocalAdvice(intent, text, persona, chat);
        if (advice && !reply.includes(advice.slice(0, 24))) extras.push(advice);
      }
      if (intent !== 'greetings' && intent !== 'farewell' && !conversational.has(intent)) {
        const contextNote = maybeContextNote(context, text);
        if (contextNote) extras.push(contextNote);
      }
      if (extras.length) reply += ` ${extras.join(' ')}`;
      if (chat?.type === 'group' && persona.id !== 'yarik' && !/^Коллективно:/i.test(reply) && Math.random() < 0.35) reply = `Коллективно: ${reply}`;
      return cleanAiReply(reply, persona) || pickLocalReply(pool, 'default', `${text}:${Date.now()}`, context.recentBot);
    }

    // ---- In-browser neural model ("умная нейронка") ----------------------------------
    // Two backends, auto-selected once and reused for the session:
    //  - WebGPU present  -> WebLLM running Qwen2.5-1.5B-Instruct (better quality, ~1.1GB)
    //  - WebGPU absent   -> transformers.js running Qwen2.5-0.5B-Instruct on WASM (~500MB,
    //                       works on Safari/iOS/old GPUs, slower but no GPU required)
    // Nothing downloads until the person explicitly presses "Скачать и включить модель" —
    // this is a multi-hundred-MB download and must never happen silently on mobile data.
    const neuralState = {
      backend: null,        // 'webgpu' | 'wasm' | null (undetected yet)
      status: 'idle',       // 'idle' | 'detecting' | 'loading' | 'ready' | 'error'
      engine: null,         // webllm MLCEngine instance
      pipeline: null,       // transformers.js pipeline instance
      loadPromise: null,
      error: ''
    };

    async function detectNeuralBackend() {
      neuralState.status = 'detecting';
      if (!navigator.gpu) { neuralState.backend = 'wasm'; return 'wasm'; }
      try {
        const adapter = await navigator.gpu.requestAdapter();
        neuralState.backend = adapter ? 'webgpu' : 'wasm';
      } catch { neuralState.backend = 'wasm'; }
      return neuralState.backend;
    }

    function neuralBackendConfig() {
      return neuralState.backend === 'webgpu' ? NEURAL_CONFIG.webgpu : NEURAL_CONFIG.wasm;
    }

    function renderNeuralStatus() {
      if (!neuralBackendStatus) return;
      const cfg = neuralBackendConfig();
      const backendLabel = neuralState.backend === 'webgpu' ? 'WebGPU обнаружен — доступна модель побольше' : neuralState.backend === 'wasm' ? 'WebGPU недоступен — работаем через WASM (медленнее, но везде)' : 'Определяю поддержку WebGPU…';
      neuralBackendStatus.textContent = backendLabel;
      if (neuralModelInfo) neuralModelInfo.textContent = cfg ? `Модель: ${cfg.label} (${cfg.approxSizeLabel})` : '';
      const statusExtra = { ready: ' — загружена и готова.', loading: ' — идёт загрузка…', error: ` — ошибка: ${neuralState.error}` }[neuralState.status] || '';
      if (statusExtra && neuralModelInfo) neuralModelInfo.textContent += statusExtra;
      if (neuralLoadBtn) {
        neuralLoadBtn.textContent = neuralState.status === 'ready' ? 'Модель загружена ✓' : neuralState.status === 'loading' ? 'Загрузка…' : 'Скачать и включить модель';
        neuralLoadBtn.disabled = neuralState.status === 'loading' || neuralState.status === 'ready';
      }
      if (neuralProgressTrack) neuralProgressTrack.classList.toggle('is-hidden', neuralState.status !== 'loading');
    }

    function setNeuralProgress(fraction, label = '') {
      if (neuralProgressFill) neuralProgressFill.style.width = `${Math.round(Math.max(0, Math.min(1, fraction)) * 100)}%`;
      if (neuralProgressLabel) neuralProgressLabel.textContent = label;
    }

    async function ensureNeuralEngineLoaded() {
      if (neuralState.status === 'ready') return true;
      if (neuralState.loadPromise) return neuralState.loadPromise;
      neuralState.loadPromise = (async () => {
        try {
          if (!neuralState.backend) await detectNeuralBackend();
          neuralState.status = 'loading';
          renderNeuralStatus();
          const cfg = neuralBackendConfig();
          if (neuralState.backend === 'webgpu') {
            const webllm = await import(cfg.libUrl);
            neuralState.engine = await webllm.CreateMLCEngine(cfg.modelId, {
              initProgressCallback: progress => setNeuralProgress(progress.progress || 0, progress.text || '')
            });
          } else {
            const { pipeline } = await import(cfg.libUrl);
            neuralState.pipeline = await pipeline('text-generation', cfg.modelId, {
              dtype: 'q4',
              device: 'wasm',
              progress_callback: info => {
                if (info.status === 'progress' && info.total) setNeuralProgress(info.loaded / info.total, info.file || '');
              }
            });
          }
          neuralState.status = 'ready';
          setNeuralProgress(1, 'Готово');
          storageSet('danilNeuralBackend', neuralState.backend);
          showToast('Локальная нейросеть готова к работе');
          return true;
        } catch (error) {
          neuralState.status = 'error';
          neuralState.error = error?.message || 'не удалось загрузить модель';
          showToast(`Не удалось загрузить нейросеть: ${neuralState.error}. Использую встроенные фразы.`);
          return false;
        } finally {
          neuralState.loadPromise = null;
          renderNeuralStatus();
        }
      })();
      return neuralState.loadPromise;
    }

    function unloadNeuralEngine() {
      try { neuralState.engine?.unload?.(); } catch {}
      neuralState.engine = null;
      neuralState.pipeline = null;
      neuralState.status = 'idle';
      neuralState.loadPromise = null;
      setNeuralProgress(0, '');
      renderNeuralStatus();
      // Best-effort: also clear whatever cache storage the libraries used for model weights.
      caches?.keys?.().then(keys => keys.forEach(key => { if (/webllm|transformers|onnx|mlc/i.test(key)) caches.delete(key); })).catch(() => {});
      showToast('Модель убрана из активной сессии (файлы в кеше браузера можно очистить через настройки браузера)');
    }

    function neuralChatMessages(userText, persona, chat) {
      const history = chat.messages.slice(-APP_LIMITS.maxAiContextMessages)
        .filter(message => message.text || message.kind)
        .map(message => ({ role: isOwnMessage(message.who) ? 'user' : 'assistant', content: messageTextForAi(message) }));
      const profile = loadUserProfile() || {};
      const last = history.at(-1);
      if (!last || last.role !== 'user' || !last.content.includes(userText)) history.push({ role: 'user', content: `${profile.name || 'Пользователь'}: ${userText}` });
      return [{ role: 'system', content: buildSystemPrompt(persona, chat) }, ...history];
    }

    async function getNeuralReply(userText, persona, chat, signal = null) {
      const loaded = neuralState.status === 'ready' || await ensureNeuralEngineLoaded();
      if (!loaded) return getLocalReply(userText, persona, chat);
      const messages = neuralChatMessages(userText, persona, chat);
      let raw = '';
      if (neuralState.backend === 'webgpu' && neuralState.engine) {
        const response = await neuralState.engine.chat.completions.create({
          messages,
          temperature: NEURAL_CONFIG.temperature,
          max_tokens: NEURAL_CONFIG.maxNewTokens
        });
        raw = response.choices?.[0]?.message?.content || '';
      } else if (neuralState.pipeline) {
        const output = await neuralState.pipeline(messages, { max_new_tokens: NEURAL_CONFIG.maxNewTokens, temperature: NEURAL_CONFIG.temperature, do_sample: true });
        const generated = output?.[0]?.generated_text;
        raw = Array.isArray(generated) ? generated.at(-1)?.content || '' : String(generated || '');
      }
      const cleaned = cleanAiReply(raw, persona);
      return (!isModelRefusal(cleaned) && cleaned) || getLocalReply(userText, persona, chat);
    }

    bindTap(neuralLoadBtn, async () => { await ensureNeuralEngineLoaded(); });
    bindTap(neuralUnloadBtn, () => { if (confirm('Убрать загруженную нейросеть из этой сессии?')) unloadNeuralEngine(); });
    detectNeuralBackend().then(renderNeuralStatus);

    async function requestAiReplyByProvider(userText, persona, chat, imageData = null, signal = null) {
      switch (aiProvider) {
        case 'gemma':
          return getGemmaReply(userText, persona, chat, imageData, signal);
        case 'neural':
          return getNeuralReply(userText, persona, chat, signal);
        case 'local':
        default:
          return getLocalReply(userText, persona, chat);
      }
    }

    async function getReply(userText, personaId = null, imageData = null, chatOverride = null, signal = null) {
      const chat = chatOverride || activeChat();
      const persona = personas[personaId || chat.members[0]] || personas.danil;
      try {
        return await requestAiReplyByProvider(userText, persona, chat, imageData, signal);
      } catch (error) {
        if (signal?.aborted || /запрос отменён/i.test(error.message || '')) throw error;
        logSafe('AI API Error', { code: error.name || 'api' });
        showToast('Ошибка API: ' + error.message + '. Использую локальный ответ.');
        return getLocalReply(userText, persona, chat);
      }
    }

    function clearAttachmentPreview() {
      pendingAttachmentFile = null;
      if (pendingAttachmentPreviewUrl) {
        URL.revokeObjectURL(pendingAttachmentPreviewUrl);
        pendingAttachmentPreviewUrl = null;
      }
      attachmentPreview.classList.remove('open');
      attachmentPreviewBody.replaceChildren();
    }

    function showAttachmentPreview(file) {
      if (!file) return clearAttachmentPreview();
      // Bug fix: there was no size limit at all — a large video became a base64 data-URL
      // in memory and then a huge IndexedDB/localStorage write, freezing the tab or
      // failing silently. Cap it before reading.
      if (file.size > 25 * 1024 * 1024) {
        clearAttachmentPreview();
        showToast('Файл больше 25 МБ — выбери файл поменьше');
        return;
      }
      clearAttachmentPreview();
      pendingAttachmentFile = file;
      const title = document.createElement('div');
      title.className = 'attachment-preview-title';
      title.textContent = file.name;
      const meta = document.createElement('div');
      meta.textContent = `${file.type || 'файл'} • ${Math.ceil(file.size / 1024)} КБ`;
      attachmentPreviewBody.append(title, meta);
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        const media = document.createElement(file.type.startsWith('video/') ? 'video' : 'img');
        media.className = 'attachment-preview-media';
        pendingAttachmentPreviewUrl = URL.createObjectURL(file);
        media.src = pendingAttachmentPreviewUrl;
        if (media.tagName === 'VIDEO') media.controls = true;
        media.onload = media.onloadeddata = () => {
          if (pendingAttachmentPreviewUrl === media.src) {
            URL.revokeObjectURL(pendingAttachmentPreviewUrl);
            pendingAttachmentPreviewUrl = null;
          }
        };
        media.onerror = () => {
          if (pendingAttachmentPreviewUrl === media.src) {
            URL.revokeObjectURL(pendingAttachmentPreviewUrl);
            pendingAttachmentPreviewUrl = null;
          }
        };
        attachmentPreviewBody.append(media);
      } else if (/^(text\/plain|text\/csv|application\/json)$/i.test(file.type) || /\.(txt|csv|json|md)$/i.test(file.name)) {
        const preview = document.createElement('pre');
        preview.className = 'attachment-text-preview';
        preview.textContent = 'Загрузка предпросмотра...';
        file.slice(0, 4096).text().then(text => preview.textContent = text.slice(0, 4000)).catch(() => preview.textContent = 'Предпросмотр недоступен');
        attachmentPreviewBody.append(preview);
      }
      attachmentPreview.classList.add('open');
      showToast('Вложение готово к отправке');
    }

    function sendAttachmentFile(file) {
      if (!file) { showToast('Выбери файл'); return; }
      const reader = new FileReader();
      reader.onerror = () => showToast('Не удалось прочитать вложение');
      reader.onload = () => {
        try {
          const caption = messageInput.value.trim();
          const reply = replyTarget;
          const data = String(reader.result || '');
          haptic(10);
          if (file.type.startsWith('image/')) {
            addMessage(caption, 'me', reply, data, 'image');
            scheduleAiReplies(caption || 'Посмотри на картинку и ответь по ней.', data);
          } else {
            const attachment = { name: file.name, type: file.type || 'application/octet-stream', size: file.size, data };
            addMessage(caption || file.name, 'me', reply, null, file.type.startsWith('video/') ? 'video' : 'attachment', { attachment });
            scheduleAiReplies(`Пользователь отправил вложение: ${file.name}. Ответь коротко по контексту.`);
          }
          clearReply();
          clearAttachmentPreview();
          messageInput.value = '';
          // Bug fix: the caption used to stay in the session draft and in the character
          // counter after sending an attachment, reappearing on the next chat switch.
          clearDraft(activeChatId);
          updateMessageCounter();
        } catch (error) {
          showToast('Не удалось отправить вложение: ' + error.message);
        }
      };
      reader.readAsDataURL(file);
    }

    const TETRIS_COLORS = { I: '#38bdf8', J: '#6366f1', L: '#fb923c', O: '#facc15', S: '#22c55e', T: '#a855f7', Z: '#ef4444' };
    const TETRIS_SHAPES = {
      I: [[1, 1, 1, 1]], J: [[1, 0, 0], [1, 1, 1]], L: [[0, 0, 1], [1, 1, 1]], O: [[1, 1], [1, 1]],
      S: [[0, 1, 1], [1, 1, 0]], T: [[0, 1, 0], [1, 1, 1]], Z: [[1, 1, 0], [0, 1, 1]]
    };
    const TETRIS_MELODY = [659, 494, 523, 587, 523, 494, 440, 440, 523, 659, 587, 523, 494, 523, 587, 659, 523, 440, 440];
    const tetrisState = { board: [], piece: null, score: 0, timer: null, ctx: null, running: false, audio: null, musicTimer: null, musicOn: false, noteIndex: 0 };

    function makeTetrisPiece() {
      const keys = Object.keys(TETRIS_SHAPES);
      const type = keys[Math.floor(Math.random() * keys.length)];
      return { type, matrix: TETRIS_SHAPES[type].map(row => [...row]), x: 3, y: 0 };
    }

    function resetTetris() {
      tetrisState.board = Array.from({ length: 20 }, () => Array(10).fill(''));
      tetrisState.piece = makeTetrisPiece();
      tetrisState.score = 0;
      if (tetrisScore) tetrisScore.textContent = '0';
    }

    function tetrisCollides(piece = tetrisState.piece, dx = 0, dy = 0, matrix = piece?.matrix) {
      if (!piece || !matrix) return true;
      return matrix.some((row, rowIndex) => row.some((cell, colIndex) => {
        if (!cell) return false;
        const x = piece.x + colIndex + dx;
        const y = piece.y + rowIndex + dy;
        return x < 0 || x >= 10 || y >= 20 || (y >= 0 && tetrisState.board[y][x]);
      }));
    }

    function setupTetrisCanvas() {
      if (!tetrisCanvas) return null;
      const rect = tetrisCanvas.getBoundingClientRect();
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const width = Math.max(300, Math.round((rect.width || 300) * dpr));
      const height = width * 2;
      if (tetrisCanvas.width !== width || tetrisCanvas.height !== height) {
        tetrisCanvas.width = width;
        tetrisCanvas.height = height;
      }
      const ctx = tetrisCanvas.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      tetrisState.ctx = ctx;
      return ctx;
    }

    function drawTetris() {
      const ctx = tetrisState.ctx || setupTetrisCanvas();
      if (!ctx) return;
      const block = tetrisCanvas.width / 10;
      ctx.clearRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
      ctx.fillStyle = '#07111d';
      ctx.fillRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
      const drawBlock = (x, y, type) => {
        ctx.fillStyle = TETRIS_COLORS[type] || '#e5e7eb';
        ctx.fillRect(x * block + 1, y * block + 1, block - 2, block - 2);
        ctx.fillStyle = 'rgba(255,255,255,0.18)';
        ctx.fillRect(x * block + 4, y * block + 4, block - 8, 5);
      };
      tetrisState.board.forEach((row, y) => row.forEach((type, x) => { if (type) drawBlock(x, y, type); }));
      const piece = tetrisState.piece;
      piece?.matrix.forEach((row, y) => row.forEach((cell, x) => { if (cell) drawBlock(piece.x + x, piece.y + y, piece.type); }));
    }

    function mergeTetrisPiece() {
      const piece = tetrisState.piece;
      piece.matrix.forEach((row, y) => row.forEach((cell, x) => {
        if (cell && piece.y + y >= 0) tetrisState.board[piece.y + y][piece.x + x] = piece.type;
      }));
    }

    function applyTetrisGravity() {
      for (let x = 0; x < 10; x += 1) {
        const stack = [];
        for (let y = 19; y >= 0; y -= 1) if (tetrisState.board[y][x]) stack.push(tetrisState.board[y][x]);
        for (let y = 19; y >= 0; y -= 1) tetrisState.board[y][x] = stack[19 - y] || '';
      }
    }

    function clearTetrisLines() {
      let cleared = 0;
      tetrisState.board = tetrisState.board.filter(row => {
        if (row.every(Boolean)) { cleared += 1; return false; }
        return true;
      });
      while (tetrisState.board.length < 20) tetrisState.board.unshift(Array(10).fill(''));
      if (cleared) {
        // Bug fix: filter+unshift above already shifts every row above a cleared line
        // down by one — that's the correct, standard Tetris line-clear behavior.
        // Calling applyTetrisGravity() here re-packed every column from the bottom up,
        // discarding any empty cells *inside* a column. That silently collapsed holes
        // and dropped unrelated overhanging blocks anywhere on the board whenever a
        // single line was cleared, which is not how Tetris works and corrupted the board.
        tetrisState.score += [0, 100, 300, 500, 800][cleared] || cleared * 200;
        if (tetrisScore) tetrisScore.textContent = String(tetrisState.score);
      }
    }

    function playTetrisNote(freq, duration = 0.16) {
      if (!tetrisState.musicOn) return;
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!tetrisState.audio) tetrisState.audio = new AudioContext();
      const ctx = tetrisState.audio;
      ctx.resume?.();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration + 0.02);
    }

    function startTetrisMusic() {
      tetrisState.musicOn = true;
      if (tetrisMusicBtn) tetrisMusicBtn.textContent = '♪ Вкл';
      clearInterval(tetrisState.musicTimer);
      tetrisState.musicTimer = setInterval(() => {
        playTetrisNote(TETRIS_MELODY[tetrisState.noteIndex % TETRIS_MELODY.length]);
        tetrisState.noteIndex += 1;
      }, 210);
    }

    function stopTetrisMusic() {
      tetrisState.musicOn = false;
      clearInterval(tetrisState.musicTimer);
      if (tetrisMusicBtn) tetrisMusicBtn.textContent = '♪ Музыка';
      // Bug fix: clearing the interval only stops *scheduling* new notes — any oscillator
      // already scheduled keeps playing/ramping until its own stop time, and the
      // AudioContext itself was never suspended/closed. Suspend it so playback halts
      // immediately instead of potentially hanging on the last note.
      tetrisState.audio?.suspend?.();
    }

    function toggleTetrisMusic() {
      if (tetrisState.musicOn) stopTetrisMusic();
      else startTetrisMusic();
    }

    function tetrisStep() {
      if (!tetrisState.running) return;
      if (!tetrisCollides(tetrisState.piece, 0, 1)) tetrisState.piece.y += 1;
      else {
        mergeTetrisPiece(); clearTetrisLines(); tetrisState.piece = makeTetrisPiece();
        if (tetrisCollides()) resetTetris();
      }
      drawTetris();
    }

    function moveTetris(action) {
      if (!tetrisState.running) return;
      if (action === 'left' && !tetrisCollides(tetrisState.piece, -1, 0)) tetrisState.piece.x -= 1;
      if (action === 'right' && !tetrisCollides(tetrisState.piece, 1, 0)) tetrisState.piece.x += 1;
      if (action === 'down') tetrisStep();
      if (action === 'drop') {
        while (!tetrisCollides(tetrisState.piece, 0, 1)) tetrisState.piece.y += 1;
        // Bug fix: after a hard drop the piece used to hang at the bottom until the next
        // 520ms gravity tick, letting the player slide it sideways after "dropping" it.
        // Lock it immediately, as a hard drop should.
        tetrisStep();
      }
      if (action === 'rotate') {
        const rotated = tetrisState.piece.matrix[0].map((_, index) => tetrisState.piece.matrix.map(row => row[index]).reverse());
        if (!tetrisCollides(tetrisState.piece, 0, 0, rotated)) tetrisState.piece.matrix = rotated;
      }
      drawTetris();
    }

    function startTetrisEaster() {
      if (!tetrisCanvas || !tetrisEaster) return;
      resetTetris();
      setupTetrisCanvas();
      tetrisState.running = true;
      tetrisEaster.classList.add('open');
      tetrisEaster.setAttribute('aria-hidden', 'false');
      clearInterval(tetrisState.timer);
      tetrisState.timer = setInterval(tetrisStep, 520);
      startTetrisMusic();
      drawTetris();
      tetrisCloseBtn?.focus?.({ preventScroll: true });
    }

    function stopTetrisEaster() {
      tetrisState.running = false;
      clearInterval(tetrisState.timer);
      stopTetrisMusic();
      tetrisEaster?.classList.remove('open');
      tetrisEaster?.setAttribute('aria-hidden', 'true');
      messageInput?.focus?.({ preventScroll: true });
    }

    function shouldLaunchTetris(text) {
      const chat = activeChat();
      const normalized = text.trim().toLocaleLowerCase('ru-RU');
      const triggers = ['табличный секс', 'тетрис', 'игра', 'сыграть', 'поиграем'];
      return chat?.type !== 'group' && chat?.members?.[0] === 'danil' && triggers.some(trigger => normalized.includes(trigger));
    }

    function sendCurrentMessage(event) {
      if (event) event.preventDefault();
      if (isAiBusy()) { showToast('Дождитесь ответа ИИ'); return; }
      if (pendingAttachmentFile) { sendAttachmentFile(pendingAttachmentFile); return; }
      const text = messageInput.value.trim();
      if (!text) return;
      const reply = replyTarget;
      haptic(10);
      addMessage(text, 'me', reply);
      const launchTetris = shouldLaunchTetris(text);
      clearReply(); messageInput.value = ''; clearDraft(activeChatId); updateMessageCounter(); messageInput.focus({ preventScroll: true });
      if (launchTetris) { startTetrisEaster(); return; }
      // Bug fix: everything used to be queued offline, although only the Gemma provider
      // actually needs the network — local phrases and a loaded in-browser model answer
      // fine without a connection.
      if (!navigator.onLine && aiProvider === 'gemma') { offlineQueue.push({ chatId: activeChatId, text }); showToast('Нет сети: ответ ИИ придёт после восстановления связи'); return; }
      scheduleAiReplies(text);
    }

    function scheduleAiReplies(text, imageData = null, chatId = activeChatId) {
      cancelAiForChat(chatId);
      const chat = chats[chatId];
      if (!chat) return;
      const first = chat.type === 'group' ? chat.members[Math.floor(Math.random() * chat.members.length)] : chat.members[0];
      const request = { id: ++aiRequestSeq, controller: new AbortController() };
      aiRequestByChat.set(chatId, request);
      if (chatId === activeChatId && !chatScreen.classList.contains('hidden')) {
        setAiLoading(true, first, 'генерирует ответ', chatId);
        status.textContent = chat.type === 'group' ? `${senderName(first)} генерирует ответ...` : 'AI генерирует ответ...';
      }
      pendingReply = appSetTimeout(async () => {
        const targetChat = chats[chatId];
        if (!targetChat || aiRequestByChat.get(chatId)?.id !== request.id || request.controller.signal.aborted) return;
        let reply;
        try { reply = await getReply(text, first, imageData, targetChat, request.controller.signal); }
        catch {
          if (aiRequestByChat.get(chatId)?.id !== request.id || request.controller.signal.aborted) return;
          setAiLoading(false, null, 'готовит ответ', chatId); showToast('Не удалось получить ответ ИИ'); return;
        }
        if (aiRequestByChat.get(chatId)?.id !== request.id || request.controller.signal.aborted) return;
          const second = targetChat.type === 'group' ? targetChat.members.find(id => id !== first) : null;
        if (!second) aiRequestByChat.delete(chatId);
        markOwnMessagesRead(chatId);
        setAiLoading(false, null, 'готовит ответ', chatId);
        addStreamingMessageToChat(chatId, reply, first);
        scheduleVoiceMessage(chatId, first, text);
        if (chatId === activeChatId) status.textContent = targetChat.type === 'group' ? `${targetChat.members.length} ИИ-персонажа онлайн` : 'в сети';
        if (second) {
          appSetTimeout(async () => {
            const stillTargetChat = chats[chatId];
            const activeRequest = aiRequestByChat.get(chatId);
            if (!stillTargetChat || activeRequest?.id !== request.id || request.controller.signal.aborted) return;
            const isStillActive = chatId === activeChatId;
            if (isStillActive) {
              setAiLoading(true, second, 'генерирует ответ', chatId); status.textContent = `${senderName(second)} генерирует ответ...`;
            }
            let botReply;
            try { botReply = await getReply(`${senderName(first)} написал: ${reply}. Коротко отреагируй и добавь свое мнение.`, second, null, stillTargetChat, request.controller.signal); }
            catch { if (!request.controller.signal.aborted) { setAiLoading(false, null, 'готовит ответ', chatId); showToast('Не удалось получить второй ответ ИИ'); } return; }
            if (aiRequestByChat.get(chatId)?.id !== request.id || request.controller.signal.aborted) return;
            aiRequestByChat.delete(chatId);
            markOwnMessagesRead(chatId);
            setAiLoading(false, null, 'готовит ответ', chatId);
            addStreamingMessageToChat(chatId, botReply, second);
            scheduleVoiceMessage(chatId, second, botReply);
            if (chatId === activeChatId) status.textContent = `${stillTargetChat.members.length} ИИ-персонажа онлайн`;
          }, 900 + Math.random() * 900);
        }
      }, ({ 1: 900, 2: 1500, 3: 2300 }[builtInPersonas[first] ? getPersonaCustom(first).speed : custom.speed] || 1500) + Math.random() * 900);
    }

    function openMessageContextMenu(messageId, x, y) {
      const chat = activeChat();
      const message = chat.messages.find(item => item.id === messageId);
      const messageNode = messages.querySelector(`.message[data-id="${CSS.escape(messageId)}"]`);
      if (!message || !messageNode) return;
      haptic([8, 24, 8]);
      messageContextMenu.dataset.messageId = messageId;
      messageContextMenu.dataset.chatId = chat.id;
      messageContextMenu.style.visibility = 'hidden';
      messageContextMenu.classList.add('open');
      const phoneRect = phone.getBoundingClientRect();
      const messageRect = messageNode.getBoundingClientRect();
      const menuRect = messageContextMenu.getBoundingClientRect();
      const menuWidth = Math.min(menuRect.width || 190, Math.max(160, phoneRect.width - 20));
      const menuHeight = menuRect.height || 180;
      const gap = 8;
      const minLeft = 10;
      const maxLeft = Math.max(minLeft, phoneRect.width - menuWidth - 10);
      const rightOfMessage = messageRect.right - phoneRect.left + gap;
      const leftOfMessage = messageRect.left - phoneRect.left - menuWidth - gap;
      let left;
      if (message.who === 'me') left = leftOfMessage >= minLeft ? leftOfMessage : maxLeft;
      else left = rightOfMessage <= maxLeft ? rightOfMessage : minLeft;
      left = Math.max(minLeft, Math.min(left, maxLeft));
      let top = Number.isFinite(y) ? y - phoneRect.top : messageRect.top - phoneRect.top;
      const below = messageRect.bottom - phoneRect.top + gap;
      const above = messageRect.top - phoneRect.top - menuHeight - gap;
      if (top + menuHeight > phoneRect.height - 10) top = above >= 10 ? above : phoneRect.height - menuHeight - 10;
      const maxTop = Math.max(10, phoneRect.height - menuHeight - 10);
      if (top < 10 || Math.abs(top - (messageRect.top - phoneRect.top)) < 4) top = Math.max(10, Math.min(below, maxTop));
      top = Math.max(10, Math.min(top, maxTop));
      messageContextMenu.style.left = `${Math.round(left)}px`;
      messageContextMenu.style.top = `${Math.round(top)}px`;
      messageContextMenu.style.visibility = '';
    }

    function closeMessageContextMenu() {
      messageContextMenu.classList.remove('open');
      delete messageContextMenu.dataset.messageId;
      delete messageContextMenu.dataset.chatId;
    }

    function runMessageAction(action) {
      const chat = activeChat();
      if (messageContextMenu.dataset.chatId && messageContextMenu.dataset.chatId !== chat.id) return closeMessageContextMenu();
      const messageId = messageContextMenu.dataset.messageId;
      const message = chat.messages.find(item => item.id === messageId);
      if (!message) return closeMessageContextMenu();
      if (action === 'copy') copyTextToClipboard(message.text || '').then(ok => showToast(ok ? 'Текст скопирован' : 'Автокопирование недоступно — текст показан для ручного копирования'));
      if (action === 'reply') { clearSelection(); selectReply(message); }
      if (action === 'select') toggleMessageSelection(messageId);
      if (action === 'delete') {
        if (!confirm(CONFIRM_MESSAGES.deleteMessage)) return closeMessageContextMenu();
        deleteMessagesFromChat(chat.id, messageId);
        showToast('Удалено у вас');
      }
      closeMessageContextMenu();
    }

    function collectChatStats(chat = activeChat()) {
      const stats = new Map();
      chat.messages.forEach(message => {
        const key = senderName(message.who);
        const item = stats.get(key) || { name: key, messages: 0, stickers: 0, voice: 0, images: 0 };
        item.messages += 1;
        if (message.kind === 'sticker') item.stickers += 1;
        if (message.kind === 'voice') item.voice += 1;
        if (message.image || message.kind === 'image') item.images += 1;
        stats.set(key, item);
      });
      return [...stats.values()];
    }

    function openChatStats() {
      const chat = activeChat();
      chatStatsSummary.textContent = `${chatName(chat)} • ${messageCountLabel(chat.messages.length)} • зашифрованное хранение включено`;
      chatStatsList.replaceChildren();
      collectChatStats(chat).forEach(item => {
        const row = document.createElement('div');
        row.className = 'chat-stats-row';
        row.innerHTML = `<strong>${escapeHtml(item.name)}</strong><span>💬 ${item.messages}</span><span>😵 ${item.stickers}</span><span>🎙 ${item.voice}</span><span>🖼 ${item.images}</span>`;
        chatStatsList.append(row);
      });
      openPanel('stats');
    }

    function readableMessageText(message, chat = activeChat()) {
      const parts = [];
      if (message.reply?.text) parts.push(`↪ ${message.reply.author}: ${message.reply.text}`);
      if (typeof message.text === 'string' && message.text.trim()) parts.push(message.text.trim());
      if (message.image) parts.push('[изображение]');
      if (message.kind === 'sticker') parts.push(`[стикер: ${message.sticker || 'стикер'}]`);
      if (message.kind === 'voice') parts.push('[голосовое сообщение]');
      const attachment = normalizeAttachment(message.attachment);
      if (attachment) parts.push(`[вложение: ${attachment.name}]`);
      return parts.join(' ').trim() || previewText(message, chat).replace(/^Вы:\s*/, '').trim() || '[сообщение]';
    }

    function chatExportText(chat = activeChat()) {
      const lines = [`${chatName(chat)}`, 'Экспорт переписки', `Сообщений: ${chat.messages.length}`, ''];
      chat.messages.forEach(message => lines.push(`[${message.time || ''}] ${senderName(message.who)}: ${readableMessageText(message, chat)}`));
      return lines.join('\n');
    }

    function downloadBlob(name, type, content) {
      const link = document.createElement('a');
      const isText = type.startsWith('text/plain');
      link.href = URL.createObjectURL(new Blob([isText ? '\ufeff' : '', content], { type }));
      link.download = name;
      link.click();
      appSetTimeout(() => URL.revokeObjectURL(link.href), 1000);
    }

    function exportChat(format) {
      setBackupBusy(true);
      showToast('Идёт экспорт...');
      try {
        const chat = activeChat();
        const stamp = new Date().toISOString().slice(0, 10);
        const safeName = chatName(chat).replace(/[^а-яёa-z0-9_-]+/gi, '_').slice(0, 36) || 'chat';
        if (format === 'txt') return downloadBlob(`${safeName}-${stamp}.txt`, 'text/plain;charset=utf-8', chatExportText(chat));
        const rows = chat.messages.map(message => `<article><h3>${escapeHtml(senderName(message.who))} <small>${escapeHtml(message.time || '')}</small></h3><p>${escapeHtml(readableMessageText(message, chat))}</p></article>`).join('');
        const html = `<!doctype html><html lang="ru"><head><meta charset="utf-8"><title>${escapeHtml(chatName(chat))}</title><style>body{font-family:system-ui,sans-serif;max-width:820px;margin:32px auto;line-height:1.5}article{border-bottom:1px solid #ddd;padding:10px 0;white-space:pre-wrap}small{color:#777}</style></head><body><h1>${escapeHtml(chatName(chat))}</h1><p>Сообщений: ${chat.messages.length}</p>${rows}</body></html>`;
        if (format === 'html') return downloadBlob(`${safeName}-${stamp}.html`, 'text/html;charset=utf-8', html);
        const popup = window.open('', '_blank');
        if (!popup) { showToast('Разреши всплывающее окно для PDF'); return; }
        popup.document.open('text/html', 'replace');
        popup.document.write(html);
        popup.document.close();
        popup.focus();
        appSetTimeout(() => popup.print(), 150);
      } finally {
        appSetTimeout(() => setBackupBusy(false), 300);
      }
    }

    function openExportMenu() {
      closeOverlay();
      const format = prompt('Формат экспорта: txt, html или pdf', 'txt');
      const normalized = String(format || '').trim().toLowerCase();
      if (!['txt', 'html', 'pdf'].includes(normalized)) return;
      exportChat(normalized);
    }

    async function shareApp() {
      haptic(12);
      try {
        if (navigator.share) await navigator.share({ title: document.title, text: 'AI Messenger', url: location.href });
        else { const ok = await copyTextToClipboard(location.href); showToast(ok ? 'Ссылка скопирована' : 'Автокопирование недоступно — ссылка показана для ручного копирования'); }
      } catch {}
    }

    // "Follow system" is a standalone toggle (uiSettings.followSystem), not a selectable
    // theme — when it's on we override whatever theme is picked with the system's light/dark
    // preference; when it's off the explicitly chosen theme is used as-is.
    function resolveSystemTheme(theme = storageGet('danilTheme', THEME_CONFIG.defaultTheme)) {
      if (!uiSettings.followSystem) return theme;
      return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'ice' : 'aurora';
    }

    function normalizeHandleInput(value, fallback = '') {
      // Bug fix: JS validation only checked the leading '@' while the registration
      // input's HTML pattern requires @ + 2-27 word characters — the profile-editing
      // panel (which has no pattern attribute) accepted handles like "@a" or "@a b"
      // that registration would reject. Use one rule everywhere.
      const handle = safeText(value, fallback, 28).trim();
      return /^@[\w\u0400-\u04FF]{2,27}$/.test(handle) ? handle : '';
    }

    function registerServiceWorker() {
      if (!('serviceWorker' in navigator) || !location.protocol.startsWith('http')) return;
      // sw.js is a companion file that must sit next to this HTML file when it's hosted
      // (see the PWA notes shipped alongside this app). Registering it from a blob/data
      // URL isn't reliable across browsers for security reasons, so we register the real
      // file and simply no-op if it isn't present — the app still works without it, it's
      // just not installable/offline-capable in that case.
      navigator.serviceWorker.register('./sw.js').catch(error => {
        logSafe(`Service Worker registration skipped: ${error?.message || error}`);
      });
    }

    // ---- PWA install prompt ------------------------------------------------------------
    // Chrome/Edge fire `beforeinstallprompt` when the manifest + service worker make the
    // page installable; we stash the event and trigger it from the settings button instead
    // of showing the browser's own mini-infobar, so it fits the app's own UI.
    let deferredInstallPrompt = null;
    const installAppBtn = document.getElementById('installAppBtn');
    const installAppStatus = document.getElementById('installAppStatus');

    function isStandaloneDisplay() {
      return window.matchMedia?.('(display-mode: standalone)').matches || navigator.standalone === true;
    }

    function renderInstallUi() {
      if (!installAppBtn) return;
      const opaqueOrigin = !/^https?:$/.test(location.protocol);
      if (opaqueOrigin) {
        installAppBtn.textContent = 'Недоступно в этом режиме';
        installAppBtn.disabled = true;
        if (installAppStatus) installAppStatus.textContent = `Файл открыт напрямую как «${location.protocol}» (например, из Загрузок) — в этом режиме браузер отключает автокопирование, офлайн-кеш и установку приложения. Раздайте файл через локальный сервер или сайт (http/https) и откройте оттуда — либо просто установите как PWA один раз с сайта, тогда он будет открываться уже как обычное приложение.`;
        return;
      }
      if (isStandaloneDisplay()) {
        installAppBtn.textContent = 'Уже установлено ✓';
        installAppBtn.disabled = true;
        if (installAppStatus) installAppStatus.textContent = 'Приложение уже запущено в собственном окне.';
      } else if (deferredInstallPrompt) {
        installAppBtn.textContent = 'Установить как приложение';
        installAppBtn.disabled = false;
      } else {
        installAppBtn.textContent = 'Установить как приложение';
        installAppBtn.disabled = false;
        if (installAppStatus) installAppStatus.textContent = 'Если кнопка не сработает: в Chrome/Edge используйте пункт меню «Установить приложение» в адресной строке; в Safari на iOS — «Поделиться» → «На экран “Домой”».';
      }
    }

    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      deferredInstallPrompt = event;
      renderInstallUi();
    });

    window.addEventListener('appinstalled', () => {
      deferredInstallPrompt = null;
      showToast('Приложение установлено');
      renderInstallUi();
    });

    bindTap(installAppBtn, async () => {
      if (!deferredInstallPrompt) { renderInstallUi(); return; }
      deferredInstallPrompt.prompt();
      try { await deferredInstallPrompt.userChoice; } catch {}
      deferredInstallPrompt = null;
      renderInstallUi();
    });


    function clearCurrentChatHistory() {
      const chat = activeChat();
      if (!chat || !confirm(CONFIRM_MESSAGES.clearHistory)) { closeOverlay(); return; }
      cancelAiForChat(chat.id);
      updateChatInContext(chat.id, draft => ({ ...draft, messages: [] }));
      clearReply();
      saveChats();
      addMessage('Историю стёрли. Начнём заново.', activeChat().type === 'group' ? 'danil' : activeChat().members[0]);
      closeOverlay();
    }

    function deleteCurrentChat() {
      const chat = activeChat();
      if (!chat) { closeOverlay(); return; }
      const ids = Object.keys(chats || {});
      if (ids.length <= 1) { showToast('Нельзя удалить последний чат'); closeOverlay(); return; }
      if (!confirm(`Удалить чат «${chatName(chat)}» целиком?`)) { closeOverlay(); return; }
      cancelAiForChat(chat.id);
      clearChatSessionState(chat.id);
      const nextChats = { ...chats };
      delete nextChats[chat.id];
      setChats(nextChats);
      const nextId = Object.keys(nextChats)[0];
      setActiveChatId(nextId);
      saveChats();
      closeOverlay();
      openChat(nextId);
      showToast('Чат удалён');
    }

    function runMenuAction(action) {
      if (action === 'profile') openProfile();
      if (action === 'search') openChatSearch();
      if (action === 'stats') { closeOverlay(); openChatStats(); }
      if (action === 'export') openExportMenu();
      if (action === 'mute') { muted = !muted; closeOverlay(); showToast(muted ? 'Звук выключен' : 'Звук включён'); }
      if (action === 'pin-tile') {
        const wasPinned = isTilePinned(activeChatId);
        setTilePinned(activeChatId, !wasPinned);
        closeOverlay();
        showToast(wasPinned ? 'Плитка откреплена' : 'Плитка закреплена на доске Metro');
      }
      if (action === 'settings') openUiPanel();
      if (action === 'auto-chat') toggleAutoChatFromChatMenu();
      if (action === 'clear') { clearCurrentChatHistory(); }
      if (action === 'delete-chat') { deleteCurrentChat(); }
    }

    function runHomeMenuAction(action) {
      if (action === 'settings') openUiPanel();
      if (action === 'full-reset') { closeOverlay(); resetAllData(); }
    }

    function openSettingsSection(action) {
      if (action === 'profile') {
        switchSettingsPanel('userProfile', () => {
          const profile = loadUserProfile() || {};
          userNameInput.value = profile.name || '';
          userHandleInput.value = profile.handle || '';
        });
      }
      if (action === 'themes') switchSettingsPanel('themes');
      if (action === 'tiles') switchSettingsPanel('tiles', () => { applyUiSettings(); renderTilePinList(); });
      if (action === 'api') {
        switchSettingsPanel('api', () => {
          aiProviderSelect.value = aiProvider;
          apiKeyInput.value = apiKey ? '••••••••' : '';
          apiModelInput.value = apiModel;
          persistApiKeyInput.checked = storageGet('danilApiKeyPersisted', 'false') === 'true';
          toggleApiExt();
        });
      }
      if (action === 'persona') switchSettingsPanel('persona', renderPersonaList);
      if (action === 'custom') {
        const personaId = editablePersonaIdFromChat() || 'danil';
        if (!builtInPersonas[personaId]) { showToast('Кастомизация доступна в личном чате Данила или Ярика'); return; }
        switchSettingsPanel('custom', () => applyCustomSettings(personaId));
      }
      if (action === 'personal') { document.getElementById('chatPersonalGroup')?.scrollIntoView({ block: 'center' }); }
      if (action === 'reset') { closeOverlay(); resetAllData(); }
    }

    document.querySelectorAll('[data-settings-back]').forEach(button => bindTap(button, event => {
      event.preventDefault?.();
      event.stopPropagation?.();
      guardSettingsBackTap();
      openUiPanel();
    }));

    document.querySelectorAll('[data-close-settings]').forEach(button => bindTap(button, event => {
      event.preventDefault?.();
      event.stopPropagation?.();
      closeOverlay();
    }));

    function openProfile() {
      const chat = activeChat();
      const persona = chat.type === 'group' ? { name: chat.title, handle: '@ai_group_room', avatar: chat.avatar, css: 'group-avatar', status: `Статус: ${chat.members.length} ИИ-персонажа общаются с тобой и между собой`, about: 'О себе: групповой чат для Данила, Ярика и пользователя.' } : personas[chat.members[0]];
      document.getElementById('profileAvatar').textContent = persona.avatar;
      document.getElementById('profileAvatar').className = `big-avatar ${persona.css}`;
      document.getElementById('profileName').textContent = persona.name;
      document.getElementById('profileHandle').textContent = persona.handle;
      document.getElementById('profileStatus').textContent = persona.status;
      document.getElementById('profileAbout').textContent = 'О себе: ' + persona.about;
      openPanel('profile');
    }

    function openPersonaPanel() {
      homeMenuPopover.classList.remove('open');
      menuPopover.classList.remove('open');
      openPanel('persona');
      renderPersonaList();
    }

    function renderPersonaList() {
      personaList.replaceChildren();
      const items = Object.values(customPersonas);
      if (!items.length) {
        const empty = document.createElement('div');
        empty.className = 'panel-subtitle';
        empty.textContent = 'Пока нет своих персонажей.';
        personaList.append(empty);
        return;
      }
      items.forEach(persona => {
        const row = document.createElement('button');
        row.className = 'persona-pill';
        row.type = 'button';
        row.innerHTML = `<span>${escapeHtml(persona.avatar)} ${escapeHtml(persona.name)}<br><small>${escapeHtml(persona.handle)}</small></span><small>открыть чат</small>`;
        bindTap(row, () => { closeOverlay(); openChat(persona.id); });
        personaList.appendChild(row);
      });
    }

    function createCustomPersona() {
      const name = personaNameInput.value.trim();
      const prompt = personaPromptInput.value.trim();
      if (!name || !prompt) { showToast('Нужно имя и промпт'); return; }
      const id = makePersonaId(name);
      customPersonas[id] = {
        id,
        name,
        handle: '@' + name.toLowerCase().replace(/[^а-яёa-z0-9]+/gi, '_').replace(/^_+|_+$/g, '').slice(0, 24),
        avatar: personaAvatarInput.value.trim() || name[0].toUpperCase(),
        css: 'group-avatar',
        style: 'custom',
        prompt,
        about: prompt.slice(0, 130),
        status: 'Статус: свой персонаж с пользовательским промптом'
      };
      saveCustomPersonas();
      setChats({ ...chats, [id]: { id, type: 'dm', members: [id], unread: 0, messages: [{ id: uid(), who: id, text: 'Привет. Я уже в чате и отвечаю по твоему промпту.', time: now() }] }, group: chats.group || defaultChats().group });
      if (personaAddToGroup.checked && !chats.group.members.includes(id)) updateChatInContext('group', draft => ({ ...draft, members: [...draft.members, id] }));
      saveChats();
      personaNameInput.value = ''; personaAvatarInput.value = ''; personaPromptInput.value = '';
      renderPersonaList(); renderChatList(); showToast('Персонаж создан и добавлен');
    }

    function normalizeCustomTheme(saved = {}) {
      return {
        app: safeHexColor(saved.app, CUSTOM_THEME_DEFAULTS.app),
        panel: safeHexColor(saved.panel, CUSTOM_THEME_DEFAULTS.panel),
        accent: safeHexColor(saved.accent, CUSTOM_THEME_DEFAULTS.accent),
        bubbleMe: safeHexColor(saved.bubbleMe, CUSTOM_THEME_DEFAULTS.bubbleMe),
        bubbleHim: safeHexColor(saved.bubbleHim, CUSTOM_THEME_DEFAULTS.bubbleHim),
        text: safeHexColor(saved.text, CUSTOM_THEME_DEFAULTS.text)
      };
    }

    function loadCustomTheme() {
      return normalizeCustomTheme(readJson('danilCustomTheme', {}));
    }

    function saveCustomTheme(theme) { writeJson('danilCustomTheme', normalizeCustomTheme(theme)); }

    function syncCustomThemeInputs(theme = loadCustomTheme()) {
      customAppColor.value = theme.app;
      customPanelColor.value = theme.panel;
      customAccentColor.value = theme.accent;
      customBubbleMeColor.value = theme.bubbleMe;
      customBubbleHimColor.value = theme.bubbleHim;
      customTextColor.value = theme.text;
    }

    function applyCustomThemeVars(theme = loadCustomTheme()) {
      phone.style.setProperty('--custom-app', theme.app);
      phone.style.setProperty('--custom-panel', theme.panel);
      phone.style.setProperty('--custom-panel-light', theme.panel);
      phone.style.setProperty('--custom-accent', theme.accent);
      phone.style.setProperty('--custom-bubble-me', theme.bubbleMe);
      phone.style.setProperty('--custom-bubble-him', theme.bubbleHim);
      phone.style.setProperty('--custom-text', theme.text);
      // Append alpha channel A8 to the 6-digit text hex for a muted translucent variant.
      phone.style.setProperty('--custom-muted', theme.text + 'a8');
      syncCustomThemeInputs(theme);
    }

    function collectCustomTheme() {
      return {
        app: customAppColor.value,
        panel: customPanelColor.value,
        accent: customAccentColor.value,
        bubbleMe: customBubbleMeColor.value,
        bubbleHim: customBubbleHimColor.value,
        text: customTextColor.value
      };
    }

    function applyTheme(settings = {}) {
      let requestedTheme = settings.theme || storageGet('danilTheme', THEME_CONFIG.defaultTheme);
      if (!THEME_CONFIG.themes.includes(requestedTheme)) requestedTheme = THEME_CONFIG.defaultTheme;
      let theme = resolveSystemTheme(requestedTheme);
      if (!THEME_CONFIG.themes.includes(theme)) theme = THEME_CONFIG.defaultTheme;
      const animated = settings.animated ?? storageGet('danilThemeAnimated', String(THEME_CONFIG.defaultAnimated)) !== 'false';
      const glass = settings.glass ?? storageGet('danilThemeGlass', String(THEME_CONFIG.defaultGlass)) === 'true';
      applyCustomThemeVars();
      const wasDesktopSplit = phone.classList.contains('desktop-split');
      const wasChatEmpty = phone.classList.contains('chat-empty');
      const wasChatHidden = chatScreen.classList.contains('hidden');
      const wasHomeHidden = homeScreen.classList.contains('hidden');
      // Bug fix: phone.className = ... used to wipe every other class on the element
      // (desktop-split, chat-empty, compact-mode, offline, etc). Only touch
      // the theme-* class and leave the rest of the classList intact.
      Array.from(phone.classList).forEach(cls => { if (cls.startsWith('theme-')) phone.classList.remove(cls); });
      phone.classList.add(`theme-${theme}`);
      phone.classList.toggle('animated-theme', animated); phone.classList.toggle('glass-mode', glass);
      if (typeof uiSettings === 'object' && uiSettings) syncPhoneUiClasses();
      if (isDesktopSplitViewport()) syncResponsiveLayout({ emptyChat: wasChatEmpty || (wasDesktopSplit && wasChatHidden) });
      else { homeScreen.classList.toggle('hidden', wasHomeHidden); chatScreen.classList.toggle('hidden', wasChatHidden); }
      animationSwitch.classList.toggle('on', animated); glassSwitch.classList.toggle('on', glass);
      storageSet('danilTheme', requestedTheme); storageSet('danilThemeAnimated', String(animated)); storageSet('danilThemeGlass', String(glass));
      saveUiSettings();
    }

    document.querySelectorAll('.theme-choice').forEach(choice => bindTap(choice, () => {
      applyTheme({ theme: choice.dataset.theme });
      showToast('Тема включена');
    }));
    bindTap(animationSwitch, () => applyTheme({ animated: !phone.classList.contains('animated-theme') }));
    bindTap(glassSwitch, () => applyTheme({ glass: !phone.classList.contains('glass-mode') }));
    window.matchMedia?.('(prefers-color-scheme: light)').addEventListener?.('change', () => {
      if (uiSettings.followSystem) applyTheme();
    });
    [customAppColor, customPanelColor, customAccentColor, customBubbleMeColor, customBubbleHimColor, customTextColor].forEach(input => input.addEventListener('input', () => { saveCustomTheme(collectCustomTheme()); }));
    bindTap(document.getElementById('applyCustomThemeBtn'), () => { const theme = collectCustomTheme(); saveCustomTheme(theme); applyCustomThemeVars(theme); applyTheme({ theme: 'custom' }); showToast('Своя тема применена'); });
    bindTap(document.getElementById('resetCustomThemeBtn'), () => { saveCustomTheme(CUSTOM_THEME_DEFAULTS); applyCustomThemeVars(CUSTOM_THEME_DEFAULTS); applyTheme({ theme: 'custom' }); showToast('Цвета сброшены'); });
    avatarGrid.querySelectorAll('.avatar-choice').forEach(choice => bindTap(choice, () => { getPersonaCustom(activeCustomPersonaId).avatar = choice.dataset.avatar; applyCustomSettings(activeCustomPersonaId); }));
    roastRange.addEventListener('input', () => roastValue.textContent = roastRange.value);
    speedRange.addEventListener('input', () => speedValue.textContent = SPEED_LABELS[speedRange.value] || 'обычно');

    bindTap(document.getElementById('saveCustomBtn'), () => {
      const settings = getPersonaCustom(activeCustomPersonaId);
      const defaults = DEFAULT_CUSTOMS[activeCustomPersonaId] || DEFAULT_CUSTOMS.danil;
      settings.name = customNameInput.value.trim() || defaults.name;
      settings.handle = customHandleInput.value.trim() || defaults.handle;
      settings.style = styleSelect.value;
      settings.roast = Number(roastRange.value);
      settings.speed = Number(speedRange.value);
      saveCustomSettings(); applyCustomSettings(activeCustomPersonaId); closeOverlay(); showToast(`Настройки ${settings.name} сохранены`);
    });

    bindTap(document.getElementById('resetCustomBtn'), () => {
      customSettings[activeCustomPersonaId] = normalizeCustomSettings(activeCustomPersonaId);
      saveCustomSettings(); applyCustomSettings(activeCustomPersonaId); showToast('Кастомизация сброшена');
    });

    function voiceProfileFor(persona) {
      const prompt = `${persona?.prompt || ''} ${persona?.style || ''} ${persona?.about || ''}`.toLowerCase();
      if (/груб|низк|строг|жест|бас|злой|rough/.test(prompt)) return { pitch: 0.62, rate: 0.88, volume: 1 };
      if (/нежн|мягк|доб|забот|тих|ласк|gentle|sensitive/.test(prompt)) return { pitch: 1.28, rate: 0.94, volume: 0.9 };
      if (/хаос|мем|быстр|энерг/.test(prompt)) return { pitch: 1.08, rate: 1.12, volume: 1 };
      return { pitch: 0.95, rate: 1, volume: 1 };
    }

    function pickVoice(profile) {
      const voices = speechSynthesis.getVoices?.() || [];
      const ruVoices = voices.filter(voice => /^ru/i.test(voice.lang || ''));
      const pool = ruVoices.length ? ruVoices : voices;
      if (!pool.length) return null;
      return profile.pitch < 0.8 ? pool.find(voice => /male|муж|pavel|dmitry|yuri/i.test(voice.name)) || pool[0] : pool.find(voice => /female|жен|irina|elena|anna/i.test(voice.name)) || pool[pool.length - 1];
    }

    function unlockSpeechFromGesture() {
      if (!('speechSynthesis' in window) || speechUnlocked) return;
      speechUnlocked = true;
      speechSynthesis.getVoices?.();
      speechSynthesis.resume?.();
      try {
        const primer = new SpeechSynthesisUtterance(' ');
        primer.lang = 'ru-RU';
        primer.volume = 0;
        speechSynthesis.speak(primer);
      } catch {}
    }

    function speak(text, personaId = null, onDone = null) {
      const finish = () => { if (typeof onDone === 'function') onDone(); };
      if (!('speechSynthesis' in window) || muted) { finish(); return; }
      if (!speechUnlocked) {
        if (!speechUnlockToastShown) {
          speechUnlockToastShown = true;
          showToast('Озвучка включится после нажатия');
        }
        finish();
        return;
      }
      const doSpeak = () => {
        const persona = personas[personaId] || personas.danil;
        const profile = voiceProfileFor(persona);
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ru-RU'; utterance.pitch = profile.pitch; utterance.rate = profile.rate; utterance.volume = profile.volume;
        utterance.onend = finish;
        utterance.onerror = finish;
        const voice = pickVoice(profile); if (voice) utterance.voice = voice;
        speechSynthesis.speak(utterance);
      };
      // Bug fix: speechSynthesis.getVoices() can return an empty list on the very first
      // call (voices load asynchronously), which made pickVoice() return null and the
      // browser fall back to a non-Russian default voice. Wait once for 'voiceschanged'
      // (with a short timeout safety net in case it never fires) before picking a voice.
      if (!speechSynthesis.getVoices().length && typeof speechSynthesis.addEventListener === 'function') {
        let started = false;
        const start = () => { if (started) return; started = true; doSpeak(); };
        speechSynthesis.addEventListener('voiceschanged', start, { once: true });
        appSetTimeout(start, 300);
      } else {
        doSpeak();
      }
    }

    function scheduleVoiceMessage(chatId, personaId, seedText) {
      appClearTimeout(voiceMessageTimer);
      const delay = 9000 + Math.random() * 12000;
      voiceMessageTimer = appSetTimeout(async () => {
        const chat = chats[chatId];
        if (!chat || Math.random() > 0.48) return;
        const text = await getReply(`Запиши короткое голосовое сообщение по теме: ${seedText}. Не больше одного предложения.`, personaId, null, chat);
        addMessageToChat(chatId, text, personaId, null, null, 'voice', { duration: 5 + Math.floor(Math.random() * 11), transcribed: false });
        if (chatId === activeChatId) showToast(`${senderName(personaId)} прислал голосовое`);
      }, delay);
    }

    function transcribeVoiceMessage(messageId) {
      const message = activeChat().messages.find(item => item.id === messageId);
      if (!message) return;
      message.transcribed = !message.transcribed;
      saveChats(); appendMessageNode(message, activeChat());
    }

    function playVoiceMessage(message) {
      if (!activeChat().messages.some(item => item.id === message.id)) return;
      if (activeVoicePlaybackId === message.id) {
        activeVoicePlaybackId = null;
        window.speechSynthesis?.cancel?.();
        refreshVoicePlaybackUi();
        return;
      }
      activeVoicePlaybackId = message.id;
      refreshVoicePlaybackUi();
      speak(message.text || 'Голосовое сообщение', message.who, () => {
        if (!activeChat().messages.some(item => item.id === message.id)) window.speechSynthesis?.cancel?.();
        if (activeVoicePlaybackId === message.id) {
          activeVoicePlaybackId = null;
          refreshVoicePlaybackUi();
        }
      });
    }

    async function startCall(video = false) {
      closeOverlay();
      const chat = activeChat();
      callScreen.classList.add('open'); callScreen.classList.toggle('video-mode', video); callControls.classList.toggle('video-controls', true);
      callName.textContent = chatName(chat); callAvatar.textContent = chatAvatar(chat); callAvatar.className = `call-avatar ${chatCss(chat)}`;
      callStatus.textContent = video ? 'видеозвонок идёт' : 'звонок идёт';
      callTranscript.textContent = video ? 'Камера включена. Напиши или скажи фразу.' : 'Нажми микрофон или напиши фразу.';
      const firstMember = chat.type === 'group'
        ? chat.members[Math.floor(Math.random() * chat.members.length)]
        : chat.members[0];
      await renderVideoStage(video); speak(`${chatName(chat)}. Алло, я на связи.`, firstMember);
    }

    async function stopCamera() {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
      }
    }

    async function renderVideoStage(video) {
      videoStage.replaceChildren();
      if (!video) { await stopCamera(); return; }
      const cameraTile = document.createElement('div');
      cameraTile.className = 'video-tile camera-tile';
      cameraTile.innerHTML = '<video class="camera-video" autoplay playsinline muted></video><span class="camera-label">Вы</span>';
      videoStage.appendChild(cameraTile);
      try {
        await stopCamera();
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        cameraTile.querySelector('video').srcObject = cameraStream;
        callStatus.textContent = 'камера включена';
      } catch (error) {
        cameraTile.innerHTML = '<b>📷</b><span>Нет доступа к камере</span>';
        showToast('Разреши доступ к камере в браузере');
      }
      const chat = activeChat();
      chat.members.slice(0, 3).forEach(id => {
        const persona = personas[id];
        const item = document.createElement('div'); item.className = 'video-tile';
        item.innerHTML = `<b>${escapeHtml(persona?.avatar || '✨')}</b><span>${escapeHtml(persona?.name || 'Персонаж')}</span>`;
        videoStage.appendChild(item);
      });
    }

    async function answerInCall(text) {
      const phrase = text.trim(); if (!phrase) return;
      callTranscript.textContent = `Ты: ${phrase}`; callStatus.textContent = 'Думает...';
      const responder = activeChat().type === 'group' ? activeChat().members[Math.floor(Math.random() * activeChat().members.length)] : activeChat().members[0];
      const reply = await getReply(phrase, responder);
      callTranscript.textContent = `${senderName(responder)}: ${reply}`; callStatus.textContent = 'Говорит'; speak(reply, responder); callTextInput.value = '';
      addMessage(phrase, 'me'); addMessage(reply, responder);
    }

    bindTap(document.getElementById('callBtn'), () => startCall(false));
    bindTap(document.getElementById('videoCallBtn'), () => startCall(true));
    bindTap(document.getElementById('callVideoBtn'), async () => { const next = !callScreen.classList.contains('video-mode'); callScreen.classList.toggle('video-mode', next); callStatus.textContent = next ? 'видеозвонок идёт' : 'звонок идёт'; await renderVideoStage(next); });
    bindTap(document.getElementById('callEndBtn'), async () => { callScreen.classList.remove('open'); callScreen.classList.remove('video-mode'); await stopCamera(); window.speechSynthesis?.cancel?.(); listening?.stop?.(); });
    bindTap(document.getElementById('callSendBtn'), () => answerInCall(callTextInput.value));
    callTextInput.addEventListener('keydown', e => { if (e.key === 'Enter') answerInCall(callTextInput.value); });
    bindTap(document.getElementById('callMicBtn'), () => {
      if (!SpeechRecognition) { showToast('Распознавание речи не поддерживается'); return; }
      const resetListeningUi = (message = 'звонок идёт') => {
        callScreen.classList.remove('listening');
        callStatus.textContent = message;
        listening = null;
      };
      try {
        listening?.stop?.();
        listening = new SpeechRecognition();
        listening.lang = 'ru-RU';
        callScreen.classList.add('listening');
        callStatus.textContent = 'Слушаю...';
        listening.onresult = e => {
          const transcript = e.results?.[0]?.[0]?.transcript || '';
          resetListeningUi('Думает...');
          answerInCall(transcript);
        };
        listening.onerror = () => { resetListeningUi('микрофон недоступен'); showToast('Разреши доступ к микрофону'); };
        listening.onnomatch = () => resetListeningUi('ничего не услышал');
        listening.onend = () => { if (listening) resetListeningUi(); };
        listening.start();
      } catch {
        resetListeningUi('микрофон недоступен');
        showToast('Не удалось запустить микрофон');
      }
    });

    function loadUserProfile() {
      const profile = readJson('messengerUserProfile', null);
      if (!profile) return null;
      return {
        name: safeText(profile.name, '', 22),
        handle: safeText(profile.handle, '@user', 28),
        createdAt: Number(profile.createdAt) || Date.now()
      };
    }

    function applyUserProfile() {
      const profile = loadUserProfile();
      if (!profile?.name) {
        registrationScreen.classList.remove('hidden');
        homeScreen.classList.add('hidden');
        chatScreen.classList.add('hidden');
        return;
      }
      const emptyChat = chatScreen.classList.contains('hidden');
      syncResponsiveLayout({ emptyChat });
      updateHomeSubtitle();
    }


    function showKeyboardHint(text) {
      keyboardHint.textContent = text;
      keyboardHint.classList.add('open');
      appClearTimeout(showKeyboardHint.timer);
      showKeyboardHint.timer = appSetTimeout(() => keyboardHint.classList.remove('open'), APP_LIMITS.keyboardHintMs);
    }

    function focusChatByOffset(offset) {
      const rows = [...chatListInner.querySelectorAll('.chat-row')];
      if (!rows.length) return;
      const currentIndex = Math.max(0, rows.indexOf(document.activeElement));
      const next = rows[Math.max(0, Math.min(rows.length - 1, currentIndex + offset))];
      next?.focus({ preventScroll: false });
    }

    function focusMessageByOffset(offset) {
      const nodes = renderedMessages();
      if (!nodes.length) return;
      nodes.forEach(node => node.tabIndex = 0);
      const currentIndex = Math.max(0, nodes.indexOf(document.activeElement));
      const next = nodes[Math.max(0, Math.min(nodes.length - 1, currentIndex + offset))];
      appStore.setState({ focusedMessageId: next?.dataset.id || null });
      document.querySelectorAll('.message.selected').forEach(node => {
        if (!replyTarget || node.dataset.id !== replyTarget.id) node.classList.remove('selected');
      });
      next?.focus({ preventScroll: false });
    }

    function handleGlobalKeyboard(event) {
      trapFocus(event);
      const editable = event.target.closest('input, textarea, select');
      if (event.key === 'Escape') {
        if (uiState.overlay) { event.preventDefault(); closeOverlay(); return; }
        if (!chatScreen.classList.contains('hidden')) { event.preventDefault(); closeChat(); return; }
      }
      if (editable) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') form.requestSubmit();
        return;
      }
      if (event.key === '?') showKeyboardHint('Горячие клавиши: / поиск, n новый чат, m меню, Esc назад, ↑/↓ навигация, Ctrl+Enter отправить');
      if (event.key === '/') { event.preventDefault(); searchInput.focus({ preventScroll: true }); }
      if (event.key.toLowerCase() === 'n') { event.preventDefault(); if (!chats.group) setChats({ ...chats, group: defaultChats().group }); saveChats(); openChat('group'); }
      if (event.key.toLowerCase() === 'm') { event.preventDefault(); chatScreen.classList.contains('hidden') ? toggleMenu('home', burgerBtn) : toggleMenu('chat', menuBtn); }
      if (event.key === 'ArrowDown') { event.preventDefault(); chatScreen.classList.contains('hidden') ? focusChatByOffset(1) : focusMessageByOffset(1); }
      if (event.key === 'ArrowUp') { event.preventDefault(); chatScreen.classList.contains('hidden') ? focusChatByOffset(-1) : focusMessageByOffset(-1); }
      if (event.key === 'Enter' && document.activeElement?.classList?.contains('message')) {
        const msg = activeChat().messages.find(item => item.id === document.activeElement.dataset.id);
        if (msg) selectReply(msg);
      }
    }

    function installSwipeNavigation() {
      let startX = 0;
      let startY = 0;
      let startTime = 0;
      const blockedSwipeTarget = target => target?.closest?.('input, textarea, select, button, .message-body, .menu-popover, .profile-card, .theme-panel, .custom-panel, .user-profile-panel, .api-panel, .persona-panel, .ui-panel, .sticker-panel, .overlay');
      const onStart = event => {
        if (uiState.overlay) { startTime = 0; return; }
        const touch = event.changedTouches?.[0] || event;
        if (blockedSwipeTarget(touch.target)) { startTime = 0; return; }
        startX = touch.clientX; startY = touch.clientY; startTime = Date.now();
      };
      const onEnd = event => {
        if (!startTime || uiState.overlay) return;
        const touch = event.changedTouches?.[0] || event;
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        if (Date.now() - startTime > 650 || Math.abs(dx) < 72 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
        if (dx > 0 && !chatScreen.classList.contains('hidden')) closeChat();
        else if (dx < 0 && chatScreen.classList.contains('hidden')) {
          const first = getVisibleChats()[0];
          if (first) openChat(first.id);
        }
      };
      phone.addEventListener('touchstart', onStart, { passive: true });
      phone.addEventListener('touchend', onEnd, { passive: true });
      if (window.PointerEvent) {
        phone.addEventListener('pointerdown', event => { if (event.pointerType !== 'mouse') onStart(event); }, { passive: true });
        phone.addEventListener('pointerup', event => { if (event.pointerType !== 'mouse') onEnd(event); }, { passive: true });
      }
    }

    registrationForm.addEventListener('submit', event => {
      event.preventDefault();
      const name = safeText(registrationNameInput.value, '', 22);
      if (!name) { showToast('Имя не может быть пустым'); registrationNameInput.focus(); return; }
      const handle = normalizeHandleInput(registrationHandleInput.value);
      if (!handle) {
        registrationHandleInput.setCustomValidity('Ник: начинается с @, минимум 2 символа (буквы, цифры, _)');
        registrationHandleInput.reportValidity();
        registrationHandleInput.focus();
        showToast('Ник: начинается с @, минимум 2 символа (буквы, цифры, _)');
        return;
      }
      registrationHandleInput.setCustomValidity('');
      writeJson('messengerUserProfile', { name, handle, createdAt: Date.now() });
      syncResponsiveLayout({ emptyChat: true });
      applyUserProfile(); showToast('Регистрация сохранена');
    });

    bindTap(backBtn, closeChatWithTileAnimation);
    bindTap(avatarBtn, openProfile);
    let suppressChatListTapUntil = 0;
    function suppressUnderlyingChatTap(duration = 450) { suppressChatListTapUntil = Date.now() + duration; }
    [...Object.values(panelMap), ...Object.values(menuMap)].forEach(layer => {
      layer?.addEventListener('pointerdown', suppressUnderlyingChatTap, { capture: true });
      layer?.addEventListener('touchstart', suppressUnderlyingChatTap, { capture: true, passive: true });
      layer?.addEventListener('pointerup', () => { suppressUnderlyingChatTap(); }, { capture: true });
      layer?.addEventListener('click', event => {
        suppressUnderlyingChatTap();
        if (event.target.closest('[data-panel-close]')) { closeOverlay(); return; }
        if (layer instanceof HTMLDialogElement && event.target === layer) { closeOverlay(); return; }
        event.stopPropagation();
      });
      layer?.addEventListener('contextmenu', event => { if (isMobileLike()) event.preventDefault(); });
      if (layer instanceof HTMLDialogElement) {
        layer.addEventListener('cancel', event => { event.preventDefault(); closeOverlay(); });
        layer.addEventListener('close', () => closeActivePanelFromDialog(layer));
      }
    });
    bindTap(virtualTopSpacer, () => {
      renderedWindowStart = Math.max(0, renderedWindowStart - MESSAGE_WINDOW_STEP);
      renderMessages(false, true);
    });
    bindTap(overlay, () => closeOverlay());
    bindTap(burgerBtn, () => toggleMenu('home', burgerBtn));
    bindTap(menuBtn, () => toggleMenu('chat', menuBtn));
    homeMenuPopover.addEventListener('click', event => { const item = event.target.closest('[data-home-action]'); if (item) runHomeMenuAction(item.dataset.homeAction); });
    menuPopover.addEventListener('click', event => { const item = event.target.closest('[data-action]'); if (item) runMenuAction(item.dataset.action); });
    uiPanel.addEventListener('click', event => {
      const item = event.target.closest('[data-settings-open]');
      if (!item) return;
      if (isSettingsBackGuarded()) { event.preventDefault(); event.stopPropagation(); return; }
      openSettingsSection(item.dataset.settingsOpen);
    });
    messageContextMenu.addEventListener('click', event => { const item = event.target.closest('[data-message-action]'); if (item) runMessageAction(item.dataset.messageAction); });
    messages.addEventListener('click', event => { if (!event.target.closest('.message-context-menu')) closeMessageContextMenu(); });
    form.addEventListener('submit', event => {
      lastUserGestureAt = Date.now();
      unlockSpeechFromGesture();
      sendCurrentMessage(event);
    });
    tetrisCloseBtn?.addEventListener('click', stopTetrisEaster);
    tetrisMusicBtn?.addEventListener('click', toggleTetrisMusic);
    tetrisEaster?.addEventListener('click', event => {
      const control = event.target.closest('[data-tetris]');
      if (control) moveTetris(control.dataset.tetris);
    });
    const debouncedRenderChatList = debounce(() => { chatListVirtualState.start = 0; renderChatList(); }, 140);
    searchInput.addEventListener('input', debouncedRenderChatList);
    let chatSearchRenderFrame = 0;
    chatSearchInput.addEventListener('input', () => {
      chatSearchQuery = chatSearchInput.value.trim();
      updateChatSearchMatches();
      cancelAnimationFrame(chatSearchRenderFrame);
      chatSearchRenderFrame = requestAnimationFrame(() => {
        const hadFocus = document.activeElement === chatSearchInput;
        renderMessages(false, true);
        if (hadFocus) requestAnimationFrame(() => chatSearchInput.focus({ preventScroll: true }));
      });
    });
    const chatListViewport = chatListInner.closest('.chat-list');
    let lastChatListTap = 0;
    function handleChatListTap(event) {
      const nowTime = Date.now();
      if (uiState.overlay || nowTime < suppressChatListTapUntil) {
        event.preventDefault?.();
        event.stopPropagation?.();
        return;
      }
      const row = event.target.closest('.chat-row');
      if (!row || !chatListViewport?.contains(row)) return;
      if (nowTime - lastChatListTap < APP_LIMITS.chatTapGuardMs) return;
      lastChatListTap = nowTime;
      event.preventDefault();
      lastUserGestureAt = Date.now();
      unlockSpeechFromGesture();
      if (row.dataset.chatId) openChat(row.dataset.chatId);
    }
    if (window.PointerEvent) chatListViewport?.addEventListener('pointerup', handleChatListTap);
    else chatListViewport?.addEventListener('touchend', handleChatListTap, { passive: false });
    chatListViewport?.addEventListener('click', handleChatListTap);
    chatListViewport?.addEventListener('scroll', renderChatList, { passive: true });
    messages.addEventListener('scroll', () => {
      saveChatScroll(activeChatId);
      const chat = activeChat();
      if (messages.scrollTop < 120 && renderedWindowStart > 0) {
        renderedWindowStart = Math.max(0, renderedWindowStart - MESSAGE_WINDOW_STEP);
        renderMessages(false, true);
      } else if (messages.scrollTop + messages.clientHeight > messages.scrollHeight - 160 && renderedWindowStart + MESSAGE_WINDOW_SIZE < chat.messages.length) {
        renderedWindowStart = Math.min(chat.messages.length - MESSAGE_WINDOW_SIZE, renderedWindowStart + MESSAGE_WINDOW_STEP);
        renderMessages(false, true);
      }
    }, { passive: true });

    bindTap(stickerBtn, () => { openPanel('stickers'); renderStickerGrid(); });
    bindTap(document.getElementById('closeChatSearchBtn'), closeChatSearch);
    bindTap(document.getElementById('deleteSelectedBtn'), deleteSelectedMessages);
    bindTap(document.getElementById('clearSelectionBtn'), clearSelection);
    bindTap(document.getElementById('stopAutoChatBtn'), stopAutoChat);
    bindTap(document.getElementById('saveUserProfileBtn'), () => {
      const name = safeText(userNameInput.value, '', 22);
      if (!name) { showToast('Имя не может быть пустым'); return; }
      const handle = normalizeHandleInput(userHandleInput.value);
      if (!handle) { showToast('Ник: начинается с @, минимум 2 символа (буквы, цифры, _)'); userHandleInput.focus(); return; }
      writeJson('messengerUserProfile', { name, handle, createdAt: loadUserProfile()?.createdAt || Date.now() });
      closeOverlay(); applyUserProfile(); showToast('Профиль сохранён');
    });
    bindTap(document.getElementById('autoChatBtn'), () => {
      if (autoChatRunning) { stopAutoChat(); return; }
      if (!chats.group) setChats({ ...chats, group: defaultChats().group }); saveChats(); openChat('group'); startAutoChat();
    });
    bindTap(compactSwitch, () => updateUiSettings({ compact: !uiSettings.compact }));
    bindTap(largeTextSwitch, () => updateUiSettings({ largeText: !uiSettings.largeText }));
    bindTap(roundedSwitch, () => updateUiSettings({ rounded: !uiSettings.rounded }));
    bindTap(systemThemeSwitch, () => {
      uiSettings.followSystem = !uiSettings.followSystem;
      saveUiSettings();
      applyTheme();
      applyUiSettings();
    });
    bindTap(hidePreviewSwitch, () => updateUiSettings({ hidePreviews: !uiSettings.hidePreviews }));
    wallpaperSelect.addEventListener('change', () => updateUiSettings({ wallpaper: wallpaperSelect.value }));
    languageSelect?.addEventListener('change', () => updateUiSettings({ language: languageSelect.value }));
    chatWallpaperSelect?.addEventListener('change', () => saveChatPersonalSettings(activeChatId, { wallpaper: chatWallpaperSelect.value }));
    bindTap(chatSoundSwitch, () => saveChatPersonalSettings(activeChatId, { sound: !chatPersonalSettings().sound }));
    bindTap(chatVibrateSwitch, () => saveChatPersonalSettings(activeChatId, { vibrate: !chatPersonalSettings().vibrate }));
    bindTap(chatLargeTextSwitch, () => saveChatPersonalSettings(activeChatId, { largeText: !chatPersonalSettings().largeText }));
    bindTap(chatRoundedSwitch, () => saveChatPersonalSettings(activeChatId, { rounded: !chatPersonalSettings().rounded }));
    messageInput.addEventListener('input', () => { saveDraft(activeChatId); syncComposerState(); });
    window.addEventListener('beforeunload', () => {
      saveDraft(activeChatId);
      saveChatScroll(activeChatId);
      const snapshot = compactChatsForLocalStorage(loadChatsFromObject(chats));
      writeJson('aiPersonaChats', snapshot);
      // Bug fix (privacy): a sendBeacon() here used to POST the user's entire chat history
      // to whatever server hosts the page on every unload. No backend consumes it — the app
      // is fully local — so this was a pure private-data leak. Removed.
      clearAppTimers();
    });
    window.addEventListener('offline', () => { phone.classList.add('offline'); syncComposerState(); });
    // Bug fix: queued items for chats other than the active one used to be shift()ed and
    // silently discarded on reconnect. Now every queued message gets its AI reply in its
    // own chat (one reply per chat: scheduleAiReplies cancels the previous request).
    window.addEventListener('online', () => { phone.classList.remove('offline'); while (offlineQueue.length) { const item = offlineQueue.shift(); if (item?.chatId && chats[item.chatId]) scheduleAiReplies(item.text, null, item.chatId); } syncComposerState(); });
    window.addEventListener('resize', () => {
      const emptyChat = chatScreen.classList.contains('hidden') || phone.classList.contains('chat-empty');
      syncResponsiveLayout({ emptyChat });
      if (uiState.panel) updateVisualViewportPanelMetrics();
      renderChatList();
    }, { passive: true });
    window.visualViewport?.addEventListener('resize', () => { if (uiState.panel) updateVisualViewportPanelMetrics(); }, { passive: true });
    window.visualViewport?.addEventListener('scroll', () => { if (uiState.panel) updateVisualViewportPanelMetrics(); }, { passive: true });
    bindTap(document.getElementById('downloadBackupBtn'), downloadBackup);
    bindTap(document.getElementById('uploadBackupBtn'), () => document.getElementById('backupInput').click());
    document.getElementById('backupInput').addEventListener('change', event => { restoreBackupFile(event.target.files[0]); event.target.value = ''; });
    bindTap(document.getElementById('saveUiBtn'), () => {
      const rawMin = Math.max(2, Math.min(8, Number(autoMinInput.value) || 2));
      const rawMax = Math.min(8, Number(autoMaxInput.value) || 8);
      uiSettings.autoMin = rawMin;
      uiSettings.autoMax = Math.max(rawMin, rawMax);
      const wasCorrected = rawMax < rawMin;
      saveUiSettings(); applyUiSettings(); closeOverlay();
      showToast(wasCorrected ? `Максимум скорректирован до ${uiSettings.autoMax} сек (не меньше минимума)` : 'Интерфейс сохранён');
    });

    reactionEmojiSelect.addEventListener('change', renderReactionPanel);
    bindTap(applyReactionBtn, () => { const emoji = reactionEmojiSelect.value; if (replyTarget && emoji) toggleReaction(replyTarget.id, emoji); else renderReactionPanel(); });
    bindTap(document.getElementById('replyCancelBtn'), clearReply);
    document.addEventListener('keydown', event => {
      if (tetrisState.running) {
        const keyMap = { ArrowLeft: 'left', ArrowRight: 'right', ArrowDown: 'down', ArrowUp: 'rotate', ' ': 'drop' };
        if (event.key === 'Escape') { event.preventDefault(); stopTetrisEaster(); return; }
        if (keyMap[event.key]) { event.preventDefault(); moveTetris(keyMap[event.key]); return; }
      }
      handleGlobalKeyboard(event);
    });
    installSwipeNavigation();
    installTileInteractions();
    registerServiceWorker();
    renderInstallUi();
    bindTap(document.getElementById('attachBtn'), () => imageInput.click());
    bindTap(clearAttachmentBtn, clearAttachmentPreview);
    imageInput.addEventListener('change', () => { showAttachmentPreview(imageInput.files[0]); imageInput.value = ''; });
    bindTap(document.getElementById('openPersonaBtn'), openPersonaPanel);
    bindTap(document.getElementById('savePersonaBtn'), createCustomPersona);
    bindTap(document.getElementById('clearPersonaFormBtn'), () => { personaNameInput.value = ''; personaAvatarInput.value = ''; personaPromptInput.value = ''; });
    bindTap(document.getElementById('newChatBtn'), () => { if (!chats.group) setChats({ ...chats, group: defaultChats().group }); saveChats(); openChat('group'); });

    function renderInitialShell() {
      setChats(defaultChats());
      applyTheme();
      uiSettings = loadUiSettings();
      AppContext.setUiSettings(uiSettings);
      applyUiSettings();
      applyCustomSettings();
      renderChatList();
      renderPersonaList();
      renderStickerGrid();
      renderReactionPanel();
      updateAiMenuLabel();
      applyUserProfile();
    }

    async function hydrateInitialData() {
      try { setChats(await loadChats()); }
      catch { setChats(defaultChats()); showToast('Чаты открыты без сохранения'); }
      renderChatList();
      const restoredChatId = readPersistedActiveChatId();
      if (restoredChatId && chats[restoredChatId] && loadUserProfile()?.name) openChat(restoredChatId);
      else if (loadUserProfile()?.name) syncResponsiveLayout({ emptyChat: true });
      else if (!chatScreen.classList.contains('hidden')) renderMessages(false, true);
      applyUserProfile();
      appStore.setState({ loading: false });
    }

    function runIntegrationTests() {
      const results = [];
      const test = (name, fn) => {
        try { fn(); results.push({ name, ok: true }); }
        catch (error) { results.push({ name, ok: false, error }); console.error(`Integration test failed: ${name}`, error); }
      };
      const originalConfirm = window.confirm;
      test('AppContext updates active chat', () => {
        const before = AppContext.state.activeChatId;
        AppContext.setActiveChatId('group');
        if (AppContext.state.activeChatId !== 'group') throw new Error('activeChatId was not updated');
        AppContext.setActiveChatId(before);
      });
      test('Emoji picker toggles selected reaction', () => {
        const chat = activeChat();
        const message = chat.messages[0];
        const before = [...(message.reactions || [])];
        window.confirm = () => true;
        toggleReaction(message.id, reactionEmojis[0]);
        const changed = activeChat().messages.find(item => item.id === message.id);
        if (!changed.reactions.includes(reactionEmojis[0]) && !before.includes(reactionEmojis[0])) throw new Error('reaction was not added');
        changed.reactions = before;
      });
      test('Search memoization returns same array for unchanged inputs', () => {
        searchInput.value = '';
        const first = getVisibleChats();
        const second = getVisibleChats();
        if (first !== second) throw new Error('visible chats are not memoized');
      });
      test('Delete confirmation blocks destructive action', () => {
        const chat = activeChat();
        const message = chat.messages[0];
        const beforeCount = chat.messages.length;
        messageContextMenu.dataset.messageId = message.id;
        window.confirm = () => false;
        runMessageAction('delete');
        if (activeChat().messages.length !== beforeCount) throw new Error('message deleted without confirmation');
      });
      window.confirm = originalConfirm;
      const failed = results.filter(item => !item.ok).length;
      showToast(failed ? `Интеграционные тесты: ошибок ${failed}` : 'Интеграционные тесты пройдены');
      return results;
    }

    async function initApp() {
      // Bug fix: the offline banner only reacted to online/offline *events*, so a page
      // opened while already offline never showed it. Sync the initial state too.
      phone.classList.toggle('offline', !navigator.onLine);
      renderInitialShell();
      await new Promise(resolve => requestAnimationFrame(resolve));
      await hydrateInitialData();
      if (new URLSearchParams(location.search).has('test')) runIntegrationTests();
    }

    initApp();

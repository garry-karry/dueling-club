(function () {
  "use strict";
  // Fictional RU/EN twist deck: 3 non-repeating events for each of 8 existing scenarios.
  const SCENARIOS = ["s9","s10","s11","s12","s13","s14","s15","s16"];
  const TWISTS = [
  {
    "scenario": "s9",
    "id": "s9-deadline",
    "title": {
      "ru": "Новое обещание от руководителя",
      "en": "A promise from leadership"
    },
    "public": {
      "ru": "Клиент пересылает сообщение своего директора: «Функция точно будет к пятнице». Подтверждения от техдепа нет.",
      "en": "The client forwards a director's message: “The feature is definitely coming on Friday.” Engineering has not confirmed the date."
    },
    "client": {
      "ru": "Настаивайте, что слово директора для вас уже обязательство. Признайте необходимость проверки только после конкретного вопроса CS о том, кто подтвердил срок.",
      "en": "Treat your director's word as a commitment. Accept verification only if CS asks who confirmed the date."
    },
    "observer": {
      "ru": "Уточнил ли CS источник даты и согласовал статус-проверку без нового обещания?",
      "en": "Did CS verify the source of the date and agree on an update without making a new promise?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s9",
    "id": "s9-old-mail",
    "title": {
      "ru": "Старое письмо",
      "en": "An old email resurfaces"
    },
    "public": {
      "ru": "Заказчик показывает письмо месячной давности со словами «планируем в следующем релизе» и считает это гарантией.",
      "en": "The client shows a month-old email saying “planned for the next release” and reads it as a guarantee."
    },
    "observer": {
      "ru": "Отделил ли менеджер ожидание от подтверждённого обязательства и признал возможную неоднозначность?",
      "en": "Did CS distinguish expectation from confirmed commitment and acknowledge possible ambiguity?"
    },
    "recipient": "manager",
    "manager": {
      "ru": "В переписке «планируем» не переводили в подтверждённое обязательство. Не обвиняйте клиента в трактовке слов - уточните ожидание и найдите источник договорённости.",
      "en": "The word “planned” was never turned into a confirmed commitment. Do not blame the client's interpretation - clarify the expectation and find the decision record."
    }
  },
  {
    "scenario": "s9",
    "id": "s9-board",
    "title": {
      "ru": "Доклад владельцам через час",
      "en": "Board update in one hour"
    },
    "public": {
      "ru": "Клиенту через час нужно объяснить владельцам состояние задачи. Проверенной даты завершения по-прежнему нет.",
      "en": "The client must brief the owners in one hour. There is still no verified completion date."
    },
    "client": {
      "ru": "Просите короткий статус с известным, открытыми вопросами и временем следующего обновления. Не соглашайтесь на расплывчатое «скоро».",
      "en": "Request a short brief covering what is known, open questions and the next update time. Reject vague “soon.”"
    },
    "observer": {
      "ru": "Предложил ли CS честный статус вместо придуманного ETA?",
      "en": "Did CS offer a candid status rather than inventing an ETA?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s10",
    "id": "s10-qa",
    "title": {
      "ru": "Новый сигнал от QA",
      "en": "New signal from QA"
    },
    "public": {
      "ru": "QA сообщает о возможной проблеме в регистрации перед релизом. Охват и воспроизводимость ещё не подтверждены.",
      "en": "QA reports a possible registration issue ahead of release. Reproducibility and impact have not been established."
    },
    "client": {
      "ru": "Потребуйте определить, затрагивает ли это ключевой путь игрока, прежде чем обсуждать дату релиза.",
      "en": "Demand clarity on whether this affects a core player flow before discussing the release date."
    },
    "observer": {
      "ru": "Выделил ли CS проверку импакта и полномочия QA, не называя дефект некритичным?",
      "en": "Did CS prioritise impact assessment by QA without dismissing the finding?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s10",
    "id": "s10-campaign",
    "title": {
      "ru": "Кампания уже забронирована",
      "en": "Campaign already booked"
    },
    "public": {
      "ru": "Клиент сообщает, что маркетинг запланировал активности на дату релиза, и требует гарантий.",
      "en": "The client says marketing activities are booked for the release date and demands certainty."
    },
    "client": {
      "ru": "Объясните, что важно дать руководству варианты решений, а не только новое ожидание.",
      "en": "Explain that leadership needs options, not just another uncertain wait."
    },
    "observer": {
      "ru": "Предложены ли варианты и зависимости без обещания выпуска в конкретный день?",
      "en": "Were options and dependencies presented without an unverified launch guarantee?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s10",
    "id": "s10-workaround",
    "title": {
      "ru": "Появился обходной путь",
      "en": "A workaround is suggested"
    },
    "public": {
      "ru": "Коллега предполагает, что временная конфигурация может обойти проблему. Тестов этого варианта ещё нет.",
      "en": "A colleague suggests a temporary configuration workaround, but it has not been tested."
    },
    "observer": {
      "ru": "Не выдал ли CS гипотезу за работающее решение?",
      "en": "Did CS avoid presenting a hypothetical workaround as proven?"
    },
    "recipient": "manager",
    "manager": {
      "ru": "Предложенный обход не проходил проверку QA. Вы можете инициировать её, но не обещайте, что решение безопасно или будет доступно к дате.",
      "en": "The suggested workaround has not passed QA. You may request validation but cannot promise that it is safe or available by a given date."
    }
  },
  {
    "scenario": "s11",
    "id": "s11-repeat",
    "title": {
      "ru": "Похоже, инцидент повторился",
      "en": "Possible recurrence"
    },
    "public": {
      "ru": "Новый игрок жалуется на похожий симптом. Пока неизвестно, та же ли это причина, что у прошлого инцидента.",
      "en": "A new player reports a similar symptom. It is unknown whether the earlier root cause is involved."
    },
    "client": {
      "ru": "Требуйте проверки, но не утверждайте, что команда «ничего не исправила», пока нет доказательств.",
      "en": "Demand investigation, but do not claim the team fixed nothing without evidence."
    },
    "observer": {
      "ru": "Разделил ли CS симптом, подтверждённую причину и гипотезу?",
      "en": "Did CS separate symptoms, verified root cause and hypothesis?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s11",
    "id": "s11-rca",
    "title": {
      "ru": "Гипотеза RCA под вопросом",
      "en": "RCA hypothesis challenged"
    },
    "public": {
      "ru": "Новые данные не согласуются с предварительной гипотезой причины инцидента. Финальное RCA ещё не готово.",
      "en": "New evidence contradicts the preliminary incident root-cause hypothesis. Final RCA is not ready."
    },
    "observer": {
      "ru": "Скорректировал ли CS прежний статус без выдуманной уверенности?",
      "en": "Did CS correct earlier messaging without unjustified certainty?"
    },
    "recipient": "manager",
    "manager": {
      "ru": "У внутреннего расследования две конфликтующие гипотезы. Признайте, что предварительный RCA нельзя представлять как окончательный, и согласуйте владельца новой проверки.",
      "en": "The internal investigation has two conflicting hypotheses. Do not present preliminary RCA as final; identify who owns the next review."
    }
  },
  {
    "scenario": "s11",
    "id": "s11-compensation",
    "title": {
      "ru": "Вопрос компенсации",
      "en": "Compensation request"
    },
    "public": {
      "ru": "Клиент требует компенсацию за инцидент и просит решить вопрос прямо на созвоне.",
      "en": "The client demands compensation for the incident and asks for an immediate decision on the call."
    },
    "client": {
      "ru": "Настаивайте на понятном владельце коммерческого вопроса и сроке следующего контакта.",
      "en": "Insist on a clear owner for the commercial request and a follow-up point."
    },
    "observer": {
      "ru": "Передал ли CS вопрос БД без обсуждения суммы или обещания компенсации?",
      "en": "Did CS route the request to BD without negotiating or promising compensation?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s12",
    "id": "s12-dev",
    "title": {
      "ru": "«Я лучше напишу разработчику»",
      "en": "“I'll message the developer directly”"
    },
    "public": {
      "ru": "Заказчик говорит, что прямые сообщения в разработку быстрее работы через CS, и показывает две противоречивые версии одной задачи.",
      "en": "The client says messaging developers is faster than going through CS and shows two conflicting versions of one request."
    },
    "observer": {
      "ru": "Показал ли CS ценность единой истории задачи, не защищая свою роль ради роли?",
      "en": "Did CS explain the value of one source of truth without defending the role for its own sake?"
    },
    "recipient": "manager",
    "manager": {
      "ru": "Вы видите две разные версии запроса в трекере и чате. Предложите одну согласованную запись и владельца синхронизации, не превращая CS в искусственный барьер.",
      "en": "You see two conflicting versions of a request in the tracker and chat. Propose a shared record and an update owner without making CS an artificial gatekeeper."
    }
  },
  {
    "scenario": "s12",
    "id": "s12-new-lead",
    "title": {
      "ru": "Новый руководитель на звонке",
      "en": "New executive joins"
    },
    "public": {
      "ru": "К звонку подключается новый операционный директор и спрашивает, что именно делает CS помимо пересылки задач.",
      "en": "A new COO joins the call and asks what CS adds beyond forwarding tickets."
    },
    "client": {
      "ru": "Вам важны управляемость рисков и предсказуемость, а не количество сообщений.",
      "en": "You care about risk control and predictability, not message count."
    },
    "observer": {
      "ru": "Дал ли CS конкретный результат своей работы без выдуманных KPI?",
      "en": "Did CS explain a concrete outcome without inventing KPIs?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s12",
    "id": "s12-qbr",
    "title": {
      "ru": "Клиент отменяет QBR",
      "en": "QBR cancelled"
    },
    "public": {
      "ru": "Клиент предлагает отказаться от регулярного QBR: «Просто присылайте тикеты, нам не нужны презентации».",
      "en": "The client suggests cancelling the QBR: “Just send tickets; we don't need presentations.”"
    },
    "client": {
      "ru": "Согласитесь на короткий формат, если он помогает видеть риски и решения. Не хотите формального отчёта без пользы.",
      "en": "Accept a shorter format if it clarifies risks and decisions. You do not want reporting theatre."
    },
    "observer": {
      "ru": "Выяснил ли CS желаемый результат и предложил адаптированный формат?",
      "en": "Did CS uncover the desired outcome and offer a tailored format?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s13",
    "id": "s13-async",
    "title": {
      "ru": "Контакт предпочитает переписку",
      "en": "The contact prefers async"
    },
    "public": {
      "ru": "Новый контакт говорит, что не любит незапланированные созвоны и просит обсуждать вопросы письменно.",
      "en": "The new contact dislikes ad-hoc calls and asks to handle matters in writing."
    },
    "client": {
      "ru": "Вам важна возможность заранее подготовить факты. Не воспринимайте предложение звонка как заботу по умолчанию.",
      "en": "You value preparation time. Do not assume a call is inherently more considerate."
    },
    "observer": {
      "ru": "Проверил ли CS предпочтительный канал вместо культурных догадок?",
      "en": "Did CS check channel preference instead of relying on cultural assumptions?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s13",
    "id": "s13-misread",
    "title": {
      "ru": "Неожиданная реакция",
      "en": "Unexpected response"
    },
    "public": {
      "ru": "Вежливая шутка CS не вызвала реакции, а клиент сразу перешёл к срокам. Контекст ещё не известен.",
      "en": "CS's friendly joke gets no reaction; the client immediately switches to delivery timelines. The context is unclear."
    },
    "observer": {
      "ru": "Отказался ли CS от ярлыка «холодный клиент» и уточнил контекст?",
      "en": "Did CS avoid labelling the client as cold and check the context?"
    },
    "recipient": "manager",
    "manager": {
      "ru": "Причина реакции клиента неизвестна. Задайте вопрос о приоритетах и доступном времени, не делайте вывод о культуре или личности по одному эпизоду.",
      "en": "The client's reaction is unexplained. Ask about priorities and time available; do not infer culture or personality from one moment."
    }
  },
  {
    "scenario": "s13",
    "id": "s13-stakeholder",
    "title": {
      "ru": "В разговоре новый стейкхолдер",
      "en": "New stakeholder joins"
    },
    "public": {
      "ru": "К обсуждению присоединяется новый человек, который принимает финальные решения по релизу.",
      "en": "Someone with final say over the release joins the discussion."
    },
    "client": {
      "ru": "Дайте понять, что вы оцениваете риски и хотите знать, кто подтверждает следующие шаги.",
      "en": "Signal you evaluate risk and need to know who confirms next steps."
    },
    "observer": {
      "ru": "Переуточнил ли CS роли и критерии решения, не предполагая полномочий?",
      "en": "Did CS recheck decision roles and criteria rather than assume authority?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s14",
    "id": "s14-competitor",
    "title": {
      "ru": "Непроверенное предложение конкурента",
      "en": "Competitor claim"
    },
    "public": {
      "ru": "Клиент заявляет: «Конкурент сделает это бесплатно и за неделю». Подтверждающих условий нет.",
      "en": "The client claims: “Your competitor will do this free in a week.” No terms have been verified."
    },
    "client": {
      "ru": "Сравните не только цену, но и конкретный результат. Не раскрывайте, есть ли письменное предложение, до уточняющих вопросов.",
      "en": "Compare outcomes, not only price. Do not reveal whether there is a written offer until asked."
    },
    "observer": {
      "ru": "Отделил ли CS сравнение от фактов и передал коммерческий вопрос БД?",
      "en": "Did CS test the claim and route commercial terms to BD?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s14",
    "id": "s14-ultimatum",
    "title": {
      "ru": "Ультиматум от владельца",
      "en": "Owner ultimatum"
    },
    "public": {
      "ru": "Клиент сообщает, что владелец хочет «ответ сегодня, иначе эскалация», но сам не знает всех технических деталей.",
      "en": "The client says the owner wants “an answer today or we escalate,” but lacks technical details."
    },
    "observer": {
      "ru": "Не заменил ли CS проверку под давлением ложной гарантией?",
      "en": "Did CS avoid substituting a false guarantee for evidence under pressure?"
    },
    "recipient": "manager",
    "manager": {
      "ru": "Технический владелец не подтвердил ответ. Дайте понятный промежуточный статус и время следующей проверки, не обещая решения сегодня.",
      "en": "The technical owner has not confirmed an answer. Offer an honest interim status and next checkpoint without promising a resolution today."
    }
  },
  {
    "scenario": "s14",
    "id": "s14-tone",
    "title": {
      "ru": "Публичная критика специалиста",
      "en": "Public criticism"
    },
    "public": {
      "ru": "Заказчик при всех резко критикует инженера, после чего задаёт справедливый вопрос о сроке проверки.",
      "en": "The client harshly criticises an engineer in front of others, then asks a legitimate question about the investigation timing."
    },
    "client": {
      "ru": "Если CS спокойно вернёт разговор к фактам и договорится о правилах обратной связи, вы снизите тон.",
      "en": "If CS calmly returns to evidence and suggests feedback norms, you will lower your tone."
    },
    "observer": {
      "ru": "Ограничил ли CS персональные обвинения, не игнорируя предмет претензии?",
      "en": "Did CS set boundaries on personal attacks while addressing the real concern?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s15",
    "id": "s15-leaver",
    "title": {
      "ru": "Ушёл ключевой контакт",
      "en": "Key contact has left"
    },
    "public": {
      "ru": "Клиент сообщает, что прежний Head of Poker ушёл, а новый руководитель не знает старых договорённостей.",
      "en": "The client says the former Head of Poker has left and the new lead has no visibility into prior agreements."
    },
    "client": {
      "ru": "Вам нужен документированный контекст, но не рассказ о том, кто виноват.",
      "en": "You need documented context, not a blame game."
    },
    "observer": {
      "ru": "Восстановил ли CS историю решений без упрёков ушедшему сотруднику?",
      "en": "Did CS restore decision history without blaming the former contact?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s15",
    "id": "s15-no-data",
    "title": {
      "ru": "Нужные метрики недоступны",
      "en": "Required metrics unavailable"
    },
    "public": {
      "ru": "На вопрос о причинах падения активности команда не может сейчас подтвердить показатели из BO.",
      "en": "The team cannot currently verify the BO figures needed to explain the activity decline."
    },
    "observer": {
      "ru": "Отказался ли CS делать выводы из неподтверждённых чисел?",
      "en": "Did CS refuse to conclude from unverified figures?"
    },
    "recipient": "manager",
    "manager": {
      "ru": "Отчёт BO ещё не сверен. Не объясняйте спад придуманными числами - определите, кто проверит данные и когда стороны обсудят результат.",
      "en": "The BO report is unverified. Do not explain the decline using guessed figures - identify who checks the data and when the results will be discussed."
    }
  },
  {
    "scenario": "s15",
    "id": "s15-pause",
    "title": {
      "ru": "Пауза только с правом выхода",
      "en": "A pause with an exit option"
    },
    "public": {
      "ru": "Клиент готов обсудить временную паузу, но хочет сохранить право принять решение о закрытии в обозначенной контрольной точке.",
      "en": "The client is open to a temporary pause but wants to retain the right to close at a defined checkpoint."
    },
    "client": {
      "ru": "Вы хотите управляемый план, а не обещанный рост. Критерии сформулируйте вместе с CS.",
      "en": "You want a controlled plan, not a promised growth outcome. Agree criteria with CS."
    },
    "observer": {
      "ru": "Оставил ли CS право решения за клиентом и согласовал проверяемые шаги?",
      "en": "Did CS leave the decision with the client and agree on verifiable actions?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s16",
    "id": "s16-bonus",
    "title": {
      "ru": "Формулировка бонуса под вопросом",
      "en": "Bonus wording risk"
    },
    "public": {
      "ru": "Появился вопрос, не вводит ли игроков в заблуждение текст бонусного предложения. Проверки профильных специалистов ещё не было.",
      "en": "A question emerges about potentially misleading bonus-offer wording. Relevant experts have not assessed it yet."
    },
    "client": {
      "ru": "Не разрешайте называть этот риск «косметикой». Требуйте отдельного подтверждения до go/no-go.",
      "en": "Do not let this risk be called cosmetic. Require a dedicated review before go/no-go."
    },
    "observer": {
      "ru": "Предусмотрел ли CS проверку compliance/legal и не объявил ли безопасность доказанной?",
      "en": "Did CS route to compliance/legal review without claiming safety is established?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s16",
    "id": "s16-critical",
    "title": {
      "ru": "Новый сценарий пользователя",
      "en": "New player-flow evidence"
    },
    "public": {
      "ru": "QA сообщает о воспроизводимом нарушении ключевого сценария игрока. Последствия и соответствующий severity должны быть оценены командой.",
      "en": "QA reports a reproducible failure in a core player journey. Impact and severity still require team assessment."
    },
    "client": {
      "ru": "Вы готовы признать, что не все восемь замечаний одинаковы, если этот риск рассматривают отдельно и серьёзно.",
      "en": "You may acknowledge not all eight findings are equal if this one is treated seriously and separately."
    },
    "observer": {
      "ru": "Разделил ли CS действительно значимый риск и остальные непроверенные замечания?",
      "en": "Did CS distinguish a significant risk from other unassessed findings?"
    },
    "recipient": "client"
  },
  {
    "scenario": "s16",
    "id": "s16-accessibility",
    "title": {
      "ru": "Не просто визуальная правка",
      "en": "Not just visual polish"
    },
    "public": {
      "ru": "Одно из «визуальных» замечаний может мешать части игроков читать интерфейс. Фактический охват пока неизвестен.",
      "en": "One supposedly visual finding may prevent some players from reading the interface. Actual impact is still unknown."
    },
    "observer": {
      "ru": "Проверил ли CS реальное влияние, избегая преждевременной классификации?",
      "en": "Did CS assess impact rather than prematurely call the issue minor?"
    },
    "recipient": "manager",
    "manager": {
      "ru": "Визуальное замечание может затрагивать доступность для игроков. Запросите оценку влияния, а не классифицируйте его как необязательное без экспертизы.",
      "en": "A visual finding may affect accessibility for players. Ask for impact assessment rather than calling it non-blocking without expert review."
    }
  }
];
  const states = Object.fromEntries(SCENARIOS.map(id => [id, {used: new Set(), current: null}]));
  let activeId = null;
  let modeOpen = false;

  function bi(ru,en) {
    const root = document.createDocumentFragment();
    const ruEl = document.createElement("span");
    ruEl.className = "ru-only";
    ruEl.textContent = ru;
    const enEl = document.createElement("span");
    enEl.className = "en-only";
    enEl.textContent = en;
    root.append(ruEl,enEl);
    return root;
  }
  function fill(id,ru,en) {
    document.getElementById(id).replaceChildren(bi(ru,en));
  }
  const tabs = document.querySelector(".sc-tabs");
  if (!tabs) return;
  const section = document.createElement("section");
  section.id = "twistMode";
  section.className = "twist-mode";
  section.hidden = true;
  section.innerHTML = [
    '<div class="twist-head">',
      '<div class="twist-headcopy">',
        '<div class="twist-eyebrow">⚡ <span class="ru-only">Дополнительный режим</span><span class="en-only">Optional practice mode</span></div>',
        '<h2><span class="ru-only">Неожиданный поворот</span><span class="en-only">Unexpected Twist</span></h2>',
        '<p><span class="ru-only">Наблюдатель демонстрирует вкладку Дуэльного клуба в своей breakout-комнате и меняет условия во время переговоров. Таймер и основной сценарий не меняются.</span><span class="en-only">The observer shares the Dueling Club tab in their breakout room and changes the situation mid-conversation. The timer and original scenario stay intact.</span></p>',
      '</div>',
      '<button type="button" class="twist-button twist-primary" id="twistToggle" aria-controls="twistBody" aria-expanded="false"><span class="ru-only">Включить режим</span><span class="en-only">Enable mode</span></button>',
    '</div>',
    '<div class="twist-body" id="twistBody" hidden>',
      '<div class="twist-instructions">',
        '<div><b><span class="ru-only">Когда</span><span class="en-only">When</span>:</b> <span class="ru-only">наблюдатель нажимает после 3-5 минут диалога, не заранее</span><span class="en-only">the observer clicks after 3-5 minutes of roleplay, not before</span></div>',
        '<div><b><span class="ru-only">Как</span><span class="en-only">How</span>:</b> <span class="ru-only">наблюдатель показывает общий поворот и отправляет приватную вводную нужному участнику (заказчику или менеджеру CS) в Teams</span><span class="en-only">the observer reveals the shared event and privately messages the role-specific cue to either the client or the CS manager</span></div>',
        '<div><b><span class="ru-only">Цель</span><span class="en-only">Goal</span>:</b> <span class="ru-only">пауза - факт - интерес - шаг; без неподтверждённых обязательств</span><span class="en-only">pause - fact - interest - next step; no unverified commitments</span></div>',
      '</div>',
      '<div class="twist-controls">',
        '<button type="button" id="twistDraw" class="twist-button twist-primary">🎲 <span class="ru-only">Выдать поворот</span><span class="en-only">Draw a twist</span></button>',
        '<button type="button" id="twistReset" class="twist-button twist-secondary">↺ <span class="ru-only">Сбросить колоду</span><span class="en-only">Reset deck</span></button>',
        '<span id="twistCounter" class="twist-count" aria-live="polite"></span>',
      '</div>',
      '<p id="twistEmpty" class="twist-empty"><span class="ru-only">Выберите карточку в середине сцены. В каждом сценарии три разных поворота без повторений.</span><span class="en-only">Draw a card midway through the scene. Each scenario has three twists without repeats.</span></p>',
      '<article id="twistCard" class="twist-card" hidden aria-live="polite">',
        '<div class="twist-tag">⚡ <span class="ru-only">Изменение условий</span><span class="en-only">Situation changed</span></div>',
        '<h3 id="twistTitle"></h3>',
        '<div class="twist-public-label"><span class="ru-only">Видно всем на демонстрации</span><span class="en-only">Visible to everyone on the shared screen</span></div>',
        '<p id="twistPublic"></p>',
        '<div class="twist-private-actions">',
          '<button type="button" id="twistCopyRole" class="twist-button twist-secondary">🔒 <span class="ru-only">Копировать вводную для роли</span><span class="en-only">Copy role-specific cue</span></button>',
          '<button type="button" id="twistCopyObserver" class="twist-button twist-secondary">👁 <span class="ru-only">Копировать вопрос наблюдателю</span><span class="en-only">Copy observer prompt</span></button>',
        '</div>',
        '<p class="twist-caution"><span class="ru-only">Тайная вводная не показывается на демонстрации. Отправьте её в Teams лично участнику, указанному на кнопке - заказчику или менеджеру CS. Показывайте только вкладку клуба.</span><span class="en-only">The private cue stays off the shared screen. Send it in Teams to the role named on the button - client or CS manager. Share only the club tab.</span></p>',
        '<p id="twistCopyStatus" class="twist-copy-status" role="status" aria-live="polite"></p>',
        '<p class="twist-note"><span class="ru-only">Все вводные учебные и вымышленные. Не обещайте клиенту сроки, severity или коммерческие условия без согласований.</span><span class="en-only">All twists are fictional training prompts. Do not promise dates, severity or commercial terms without approval.</span></p>',
      '</article>',
    '</div>'
  ].join("");
  tabs.insertAdjacentElement("afterend",section);
  const body = document.getElementById("twistBody");
  const toggle = document.getElementById("twistToggle");
  const draw = document.getElementById("twistDraw");
  const reset = document.getElementById("twistReset");
  const card = document.getElementById("twistCard");
  const empty = document.getElementById("twistEmpty");
  const copyRoleButton = document.getElementById("twistCopyRole");
  const copyObserverButton = document.getElementById("twistCopyObserver");
  const copyStatus = document.getElementById("twistCopyStatus");
  function resetCopyStatus() { copyStatus.textContent = ""; }
  // Private cues are never placed into the shared DOM; copy directly from the deck.
  async function copyPrivateCue(which) {
    if (!activeId || !states[activeId].current) return;
    const item = states[activeId].current;
    const lang = document.body.dataset.lang === "en" ? "en" : "ru";
    const recipient = item.recipient;
    const forRole = which === "role";
    const heading = !forRole
      ? (lang === "en" ? "OBSERVER PROMPT" : "ВОПРОС НАБЛЮДАТЕЛЮ")
      : recipient === "client"
        ? (lang === "en" ? "PRIVATE - CLIENT ONLY" : "ЛИЧНО - ТОЛЬКО ЗАКАЗЧИКУ")
        : (lang === "en" ? "PRIVATE - CS MANAGER ONLY" : "ЛИЧНО - ТОЛЬКО МЕНЕДЖЕРУ CS");
    const cue = forRole ? item[recipient] : item.observer;
    if (!cue || !cue[lang]) return;
    const message = heading + "\n" + item.title[lang] + "\n\n" + cue[lang];
    try {
      if (!navigator.clipboard || typeof navigator.clipboard.writeText !== "function") throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(message);
      copyStatus.textContent = lang === "en"
        ? (!forRole ? "Observer prompt copied." : recipient === "client" ? "Copied. Send to the client in a private Teams chat." : "Copied. Send to the CS manager in a private Teams chat.")
        : (!forRole ? "Вопрос наблюдателя скопирован." : recipient === "client" ? "Скопировано. Отправьте заказчику в личный чат Teams." : "Скопировано. Отправьте менеджеру CS в личный чат Teams.");
    } catch (error) {
      copyStatus.textContent = lang === "en"
        ? "Could not copy. Check clipboard permission. Never reveal the cue on the shared screen."
        : "Не удалось скопировать. Проверьте доступ к буферу обмена. Не показывайте вводную на демонстрации.";
    }
  }
  copyRoleButton.addEventListener("click", () => copyPrivateCue("role"));
  copyObserverButton.addEventListener("click", () => copyPrivateCue("observer"));

  function render() {
    if (!activeId) return;
    const state = states[activeId];
    const max = TWISTS.filter(t => t.scenario === activeId).length;
    const used = state.used.size;
    document.getElementById("twistCounter").replaceChildren(
      bi("Карточек использовано: " + used + " / " + max,"Cards used: " + used + " / " + max)
    );
    draw.disabled = used >= max;
    card.hidden = !state.current;
    empty.hidden = !!state.current;
    if (state.current) {
      fill("twistTitle",state.current.title.ru,state.current.title.en);
      fill("twistPublic",state.current.public.ru,state.current.public.en);
      const recipient = state.current.recipient;
      copyRoleButton.replaceChildren(document.createTextNode("🔒 "), bi(
        recipient === "client" ? "Копировать вводную заказчику" : "Копировать вводную менеджеру CS",
        recipient === "client" ? "Copy client-only cue" : "Copy CS manager-only cue"
      ));
    } else if (used === max) {
      empty.hidden = false;
    }
  }
  function setScenario(id) {
    activeId = SCENARIOS.includes(id) ? id : null;
    section.hidden = !activeId;
    if (!activeId) return;
    resetCopyStatus();
    render();
  }
  toggle.addEventListener("click",function(){
    modeOpen = !modeOpen;
    body.hidden = !modeOpen;
    toggle.setAttribute("aria-expanded",String(modeOpen));
    toggle.replaceChildren(bi(modeOpen ? "Свернуть режим" : "Включить режим",modeOpen ? "Collapse mode" : "Enable mode"));
  });
  draw.addEventListener("click",function(){
    if (!activeId) return;
    const state = states[activeId];
    const pool = TWISTS.filter(t => t.scenario === activeId && !state.used.has(t.id));
    if (!pool.length) return;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    state.used.add(chosen.id);
    state.current = chosen;
    resetCopyStatus();
    render();
    card.scrollIntoView({behavior:"smooth",block:"nearest"});
  });
  reset.addEventListener("click",function(){
    if (!activeId) return;
    states[activeId] = {used:new Set(),current:null};
    resetCopyStatus();
    render();
  });
  window.UnexpectedTwist = Object.freeze({setScenario});
  // The existing page starts on the warm-up. The mode appears only on s9-s16.
})();

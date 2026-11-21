
(function () {
  "use strict";
  const packs = [
  {
    "id": "rewrite",
    "icon": "✍️",
    "label": {
      "ru": "Исправь фразу CS",
      "en": "Rewrite a CS reply"
    },
    "items": [
      {
        "question": {
          "ru": "«Разработка точно всё исправит к пятнице». Переформулируйте без неподтверждённого срока.",
          "en": "“Engineering will definitely fix everything by Friday.” Rewrite without an unverified deadline."
        },
        "hint": {
          "ru": "«Я уточню у технического владельца оценку и сообщу, когда получим подтверждённый план».",
          "en": "“I'll check the estimate with the technical owner and update you when we have a verified plan.”"
        }
      },
      {
        "question": {
          "ru": "«Это не наша проблема, это платёжный отдел». Возьмите коммуникацию в свои руки.",
          "en": "“That's not our problem, it's the payments team.” Take ownership of communication."
        },
        "hint": {
          "ru": "«Я передам вопрос ответственным за платежи и вернусь с проверенным статусом».",
          "en": "“I'll involve the payments owners and come back with a verified status.”"
        }
      },
      {
        "question": {
          "ru": "«Не переживайте, у всех операторов так бывает». Не обесценивайте риск.",
          "en": "“Don't worry, all operators get that sometimes.” Don't minimise the risk."
        },
        "hint": {
          "ru": "«Вижу, что это влияет на вашу операцию. Давайте уточним масштаб и нужный следующий шаг».",
          "en": "“I can see the operational impact. Let's confirm the scope and next step.”"
        }
      },
      {
        "question": {
          "ru": "«Это не баг, просто у вас неверные настройки». Уберите предположения.",
          "en": "“This isn't a bug; your setup is wrong.” Remove assumptions."
        },
        "hint": {
          "ru": "«Нужно проверить поведение и конфигурацию. Давайте зафиксируем пример и передадим на проверку».",
          "en": "“We need to check the behaviour and configuration. Let's capture an example for review.”"
        }
      },
      {
        "question": {
          "ru": "«Я вас понимаю, но вы сами не уточнили требование». Замените защитную формулировку.",
          "en": "“I understand, but you didn't clarify the requirement.” Remove defensiveness."
        },
        "hint": {
          "ru": "«Похоже, мы по-разному поняли результат. Давайте зафиксируем ожидаемую механику и проверим расхождение».",
          "en": "“It seems we understood the outcome differently. Let's document the expected behaviour and review the gap.”"
        }
      },
      {
        "question": {
          "ru": "«Вы уже трижды меняли требования». Сместите разговор с обвинений на решение.",
          "en": "“You've changed your requirements three times.” Focus on a solution, not blame."
        },
        "hint": {
          "ru": "«Сейчас есть несколько версий запроса. Предлагаю согласовать одну актуальную формулировку».",
          "en": "“We have several versions of the request. Let's agree on one current specification.”"
        }
      }
    ]
  },
  {
    "id": "quick",
    "icon": "⚡",
    "label": {
      "ru": "Ответ за 15 секунд",
      "en": "15-second response"
    },
    "items": [
      {
        "question": {
          "ru": "Клиент: «Спасибо, что наконец ответили». Ответьте без сарказма.",
          "en": "Client: “Thanks for finally getting back to me.” Reply without sarcasm."
        },
        "hint": {
          "ru": "«Извините за задержку. По вашему вопросу сейчас подтверждено следующее…»",
          "en": "“Sorry for the delay. Here is what we have confirmed so far…”"
        }
      },
      {
        "question": {
          "ru": "Клиент: «Опять ничего не работает!» Начните с уточнения факта.",
          "en": "Client: “Nothing works again!” Start by clarifying the facts."
        },
        "hint": {
          "ru": "«Понимаю, что ситуация срочная. Какое действие игрока сейчас не проходит?»",
          "en": "“I understand this is urgent. Which player action is failing right now?”"
        }
      },
      {
        "question": {
          "ru": "Клиент: «Из-за вас мой турнир под угрозой». Не обещайте починку.",
          "en": "Client: “My tournament is at risk because of you.” Don't promise a fix."
        },
        "hint": {
          "ru": "«Вижу риск для турнира. Что критично для решения о его проведении и когда нужен подтверждённый статус?»",
          "en": "“I see the tournament risk. What is critical to the go/no-go decision, and when do you need a verified status?”"
        }
      },
      {
        "question": {
          "ru": "Клиент: «Через час отчёт CEO. Дайте дату». Не придумывайте ETA.",
          "en": "Client: “I report to the CEO in an hour. Give me a date.” Don't invent an ETA."
        },
        "hint": {
          "ru": "«Подтверждённой даты пока нет. Могу сейчас выделить факты, открытые вопросы и следующий контрольный шаг».",
          "en": "“There isn't a confirmed date yet. I can outline the verified facts, open questions and next checkpoint.”"
        }
      },
      {
        "question": {
          "ru": "Клиент: «Конкурент обещает запуск за неделю». Не спорьте с неподтверждённым сравнением.",
          "en": "Client: “A competitor promises launch within a week.” Don't argue with an unverified claim."
        },
        "hint": {
          "ru": "«Что входит в их предложение и какой результат важнее всего для вашего решения?»",
          "en": "“What exactly is included in their offer, and which outcome matters most for your decision?”"
        }
      },
      {
        "question": {
          "ru": "Клиент: «Сделайте это бесплатно, иначе уйдём». Не меняйте условия за БД.",
          "en": "Client: “Do it for free or we leave.” Don't negotiate BD terms."
        },
        "hint": {
          "ru": "«Понимаю важность решения. Давайте уточним цель запроса; коммерческую часть обсудим с ответственным коллегой».",
          "en": "“I understand the importance of the decision. Let's clarify the goal and involve the commercial owner for terms.”"
        }
      }
    ]
  },
  {
    "id": "fact",
    "icon": "🔎",
    "label": {
      "ru": "Факт или интерпретация?",
      "en": "Fact or interpretation?"
    },
    "items": [
      {
        "question": {
          "ru": "«Никто не занимается нашим тикетом»: в трекере не было обновления несколько дней. Где факт, где вывод?",
          "en": "“Nobody is working on our ticket”: the tracker has not been updated for several days. What's fact and what's inference?"
        },
        "hint": {
          "ru": "Факт - нет обновления. «Никто не занимается» - вывод, который нужно проверить у владельца.",
          "en": "Fact - no update. “Nobody is working on it” - an inference to verify with the owner."
        }
      },
      {
        "question": {
          "ru": "«У нас упала вся активность игроков»: отчёт BO ещё не сверяли. Что можно утверждать?",
          "en": "“All player activity is down”: the BO report has not been verified. What can you claim?"
        },
        "hint": {
          "ru": "Есть жалоба клиента, но нет подтверждённой динамики. Сначала проверяем данные и период.",
          "en": "The client expressed concern, but the trend is not verified. Check the data and time window first."
        }
      },
      {
        "question": {
          "ru": "«Клиент токсичный»: он дважды написал капслоком. Как отделить наблюдение от оценки?",
          "en": "“The client is toxic”: they used ALL CAPS twice. Separate observation from judgement."
        },
        "hint": {
          "ru": "Капслок в двух сообщениях - наблюдение; «токсичный» - ярлык. Уточняем сам вопрос.",
          "en": "Two all-caps messages are observable; “toxic” is a label. Clarify the substance."
        }
      },
      {
        "question": {
          "ru": "«Релиз будет во вторник»: техническая команда называла предварительную оценку. Это обещание?",
          "en": "“The release is on Tuesday”: engineering mentioned a preliminary estimate. Is it a commitment?"
        },
        "hint": {
          "ru": "Предварительная оценка не равна подтверждённой дате. Нужны статус и владелец подтверждения.",
          "en": "A provisional estimate is not a confirmed commitment. Check approval and ownership."
        }
      },
      {
        "question": {
          "ru": "«Заказчику не нужны QBR»: он отменил одну встречу. Что известно точно?",
          "en": "“The client doesn't value QBRs”: they cancelled one meeting. What do we actually know?"
        },
        "hint": {
          "ru": "Известна одна отмена. Причины и формат будущих встреч нужно уточнить.",
          "en": "One meeting was cancelled. Ask about the reason and preferred format."
        }
      },
      {
        "question": {
          "ru": "«Баг затрагивает всех»: есть один пользовательский репорт. Как описать ситуацию?",
          "en": "“The bug affects everyone”: one player reported it. How do you describe it?"
        },
        "hint": {
          "ru": "Подтверждён один сигнал. Охват и воспроизводимость требуют проверки.",
          "en": "One report is confirmed. Scope and reproducibility need verification."
        }
      }
    ]
  },
  {
    "id": "question",
    "icon": "❓",
    "label": {
      "ru": "Какой вопрос задашь?",
      "en": "What would you ask?"
    },
    "items": [
      {
        "question": {
          "ru": "Клиент требует запуск до кампании. Как выявить реальный критерий решения?",
          "en": "The client demands a launch before the campaign. What question reveals the decision criterion?"
        },
        "hint": {
          "ru": "«Какой сценарий игрока обязательно должен работать, чтобы кампания состоялась?»",
          "en": "“Which player journey must work for the campaign to go ahead?”"
        }
      },
      {
        "question": {
          "ru": "«Вы нас игнорируете». Как не спорить с оценкой?",
          "en": "“You're ignoring us.” How can you avoid debating the accusation?"
        },
        "hint": {
          "ru": "«Какой вопрос остался без ответа и какое решение сейчас заблокировано?»",
          "en": "“Which question is still unanswered, and what decision is blocked?”"
        }
      },
      {
        "question": {
          "ru": "«Дайте скидку или мы уйдём». Что спросить до передачи БД?",
          "en": "“Give us a discount or we'll leave.” What should you ask before involving BD?"
        },
        "hint": {
          "ru": "«Что именно в текущем сотрудничестве не даёт получить нужный результат?»",
          "en": "“What about the current partnership prevents the outcome you need?”"
        }
      },
      {
        "question": {
          "ru": "«Мы не доверяем QA». Как перевести эмоцию в проверяемые критерии?",
          "en": "“We don't trust QA.” How do you turn this into testable criteria?"
        },
        "hint": {
          "ru": "«Какие проверки или доказательства помогли бы вам принять решение?»",
          "en": "“What checks or evidence would help you make the decision?”"
        }
      },
      {
        "question": {
          "ru": "Новый контакт очень лаконичен в переписке. Как не приписывать ему культурный стереотип?",
          "en": "A new stakeholder is very brief in writing. How do you avoid cultural stereotyping?"
        },
        "hint": {
          "ru": "«В каком формате и с какой периодичностью вам удобнее получать обновления?»",
          "en": "“Which update format and cadence would work best for you?”"
        }
      },
      {
        "question": {
          "ru": "«Эти QBR ничего не дают». Как выяснить нужный результат?",
          "en": "“These QBRs add no value.” How do you learn the desired outcome?"
        },
        "hint": {
          "ru": "«Какие решения вы хотите принимать на таких встречах и чего сейчас не хватает?»",
          "en": "“Which decisions should these meetings help you make, and what's missing today?”"
        }
      }
    ]
  }
];
  const root = document.getElementById("warmupLab");
  if (!root) return;
  const bi = (ru,en) => { const d=document.createDocumentFragment(); for(const [k,s] of [["ru",ru],["en",en]]) {const el=document.createElement("span");el.className=k+"-only";el.textContent=s;d.append(el);}return d; };
  const states = Object.fromEntries(packs.map(p=>[p.id,{used:new Set(),current:null,revealed:false}]));
  let selected = packs[0].id;
  root.innerHTML = [
    '<div class="pm-switches" id="warmupPacks" role="group" aria-label="Warm-up categories"></div>',
    '<div class="pm-actions">',
      '<button type="button" class="pm-btn pm-primary" id="warmupNext">🎲 <span class="ru-only">Новая карточка</span><span class="en-only">New card</span></button>',
      '<button type="button" class="pm-btn" id="warmupReset">↺ <span class="ru-only">Сбросить набор</span><span class="en-only">Reset set</span></button>',
      '<span class="pm-counter" id="warmupCount" aria-live="polite"></span>',
    '</div>',
    '<div class="pm-current" id="warmupCurrent" hidden>',
      '<div class="pm-eyebrow"><span class="ru-only">Вопрос на общий звонок</span><span class="en-only">Question for the group call</span></div>',
      '<h3 id="warmupQuestion"></h3>',
      '<button type="button" class="pm-btn pm-reveal" id="warmupReveal">💡 <span class="ru-only">Показать ориентир после ответов</span><span class="en-only">Reveal reference after responses</span></button>',
      '<div class="pm-reference" id="warmupReference" hidden><h4><span class="ru-only">Один из возможных ответов</span><span class="en-only">One possible answer</span></h4><p id="warmupRefText"></p></div>',
    '</div>',
    '<p class="pm-hint" id="warmupPlaceholder"><span class="ru-only">Выберите тип разминки и нажмите «Новая карточка». Пусть ответят несколько человек - без рейтинга и оценок.</span><span class="en-only">Choose a warm-up type and draw a card. Invite a few people to answer, without scoring or rankings.</span></p>'
  ].join("");
  const switches=document.getElementById("warmupPacks");
  const next=document.getElementById("warmupNext");
  const reset=document.getElementById("warmupReset");
  const current=document.getElementById("warmupCurrent");
  const placeholder=document.getElementById("warmupPlaceholder");
  const reference=document.getElementById("warmupReference");
  const reveal=document.getElementById("warmupReveal");
  function refresh(){
    const state=states[selected];
    const total=packs.find(p=>p.id===selected).items.length;
    document.getElementById("warmupCount").replaceChildren(bi(state.used.size+" / "+total+" заданий",state.used.size+" / "+total+" cards"));
    next.disabled=state.used.size>=total;
    switches.querySelectorAll("button").forEach(b=>{const on=b.dataset.pack===selected;b.classList.toggle("selected",on);b.setAttribute("aria-pressed",String(on));});
    current.hidden=!state.current;
    placeholder.hidden=!!state.current;
    if(!state.current)return;
    document.getElementById("warmupQuestion").replaceChildren(bi(state.current.question.ru,state.current.question.en));
    document.getElementById("warmupRefText").replaceChildren(bi(state.current.hint.ru,state.current.hint.en));
    reference.hidden=!state.revealed;
    reveal.hidden=state.revealed;
  }
  for(const pack of packs) {
    const button=document.createElement("button");
    button.type="button";button.className="pm-category";button.dataset.pack=pack.id;
    button.append(document.createTextNode(pack.icon+" "),bi(pack.label.ru,pack.label.en));
    button.addEventListener("click",()=>{selected=pack.id;refresh();});
    switches.append(button);
  }
  next.addEventListener("click",()=>{
    const pack=packs.find(p=>p.id===selected),state=states[selected];
    const available=pack.items.filter((_,i)=>!state.used.has(i));
    if(!available.length)return;
    const index=pack.items.indexOf(available[Math.floor(Math.random()*available.length)]);
    state.used.add(index);state.current=pack.items[index];state.revealed=false;refresh();
  });
  reset.addEventListener("click",()=>{states[selected]={used:new Set(),current:null,revealed:false};refresh();});
  reveal.addEventListener("click",()=>{states[selected].revealed=true;refresh();});
  refresh();
})();

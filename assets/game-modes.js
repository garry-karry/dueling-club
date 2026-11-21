(function(){
"use strict";
const CASES=[
  {
    "kind": "detective",
    "title": {
      "ru": "Турнир под угрозой",
      "en": "Tournament at risk"
    },
    "context": {
      "ru": "Оператор требует новую бонусную механику перед турниром. Её объём не оценён, а клиент говорит: «Без этого мы не запускаемся». Выберите два вопроса для выяснения интереса.",
      "en": "An operator demands a new bonus mechanic before a tournament. Scope is unestimated; the client says: “We cannot launch without it.” Choose two questions to explore the interest."
    },
    "options": [
      {
        "text": {
          "ru": "Какое решение вам нужно принять до анонса?",
          "en": "Which decision do you need to make before the announcement?"
        },
        "good": true,
        "feedback": {
          "ru": "Нужно решить, можно ли проводить турнир с текущими возможностями.",
          "en": "They need to decide whether the tournament can go ahead with existing functionality."
        }
      },
      {
        "text": {
          "ru": "Что игроки должны понимать о бонусе?",
          "en": "What do players need to understand about the bonus?"
        },
        "good": true,
        "feedback": {
          "ru": "Проблема связана с понятностью условий для игроков.",
          "en": "The concern is about clarity of the offer to players."
        }
      },
      {
        "text": {
          "ru": "Почему вы поздно сообщили об этом?",
          "en": "Why did you raise this so late?"
        },
        "good": false,
        "feedback": {
          "ru": "Обвинение не раскрывает критерии запуска.",
          "en": "Blame does not reveal launch criteria."
        }
      },
      {
        "text": {
          "ru": "Подтвердите, что доплатите за функцию?",
          "en": "Can you confirm payment for the feature?"
        },
        "good": false,
        "feedback": {
          "ru": "Коммерческое обсуждение преждевременно и требует BD.",
          "en": "Commercial discussion is premature and belongs to BD."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: провести турнир без путаницы в бонусных правилах. Сначала согласуйте критерии запуска, затем запросите оценку вариантов у владельцев.",
      "en": "Likely interest: launch without confusing bonus rules. Agree on criteria before asking owners to assess options."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "Где обещанная дата?",
      "en": "Where is the promised date?"
    },
    "context": {
      "ru": "Клиент требует точную дату исправления re-entry. Проверенной оценки пока нет. Заказчик говорит: «Решение мне нужно сегодня». Выберите два полезных вопроса.",
      "en": "A client demands an exact fix date for re-entry, but there is no verified estimate. The client says: “I need a decision today.” Select two useful questions."
    },
    "options": [
      {
        "text": {
          "ru": "К какому решению привязан ваш дедлайн?",
          "en": "What decision depends on your deadline?"
        },
        "good": true,
        "feedback": {
          "ru": "Руководство принимает решение по анонсу и рекламе.",
          "en": "Leadership must decide on announcements and marketing."
        }
      },
      {
        "text": {
          "ru": "Когда крайний срок для go/no-go по турниру?",
          "en": "When is the tournament go/no-go deadline?"
        },
        "good": true,
        "feedback": {
          "ru": "Клиенту может быть нужнее статус для решения, чем фиксация прямо сегодня.",
          "en": "A verified status for decision-making may matter more than a fix today."
        }
      },
      {
        "text": {
          "ru": "Может, назовём пятницу?",
          "en": "Should we say Friday?"
        },
        "good": false,
        "feedback": {
          "ru": "Срок не подтверждён технической командой.",
          "en": "Engineering has not confirmed any date."
        }
      },
      {
        "text": {
          "ru": "Почему вы так нервничаете?",
          "en": "Why are you so nervous?"
        },
        "good": false,
        "feedback": {
          "ru": "Оценка эмоций не проясняет интересы.",
          "en": "Judging emotion does not clarify interests."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: принять решение по турниру до маркетингового дедлайна. Договоритесь о достоверном статусе и контрольной точке.",
      "en": "Likely interest: decide on the tournament before the marketing deadline. Agree on a verified status and checkpoint."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "Не нужен QBR",
      "en": "QBR not wanted"
    },
    "context": {
      "ru": "Новый Head of Product отменил QBR: «Мне не нужна презентация, пришлите тикеты». Выберите два вопроса, которые помогают выяснить, какой формат ему полезен.",
      "en": "A new Head of Product cancels QBR: “I don't need a presentation, just send tickets.” Choose two questions to explore what would be useful."
    },
    "options": [
      {
        "text": {
          "ru": "Какие решения должны поддерживать наши встречи?",
          "en": "Which decisions should our meetings support?"
        },
        "good": true,
        "feedback": {
          "ru": "Интерес - решения по приоритетам, а не список выполненных задач.",
          "en": "The interest is priority decisions, not a list of completed tasks."
        }
      },
      {
        "text": {
          "ru": "Кого стоит подключать к обсуждению рисков?",
          "en": "Who should be involved in risk discussions?"
        },
        "good": true,
        "feedback": {
          "ru": "Определяются роли и участники принятия решений.",
          "en": "Clarifies stakeholders and decision ownership."
        }
      },
      {
        "text": {
          "ru": "Почему вам не нравится QBR?",
          "en": "Why don't you like QBRs?"
        },
        "good": false,
        "feedback": {
          "ru": "Вопрос может звучать как защита привычного ритуала.",
          "en": "Can sound like defending the existing ritual."
        }
      },
      {
        "text": {
          "ru": "Давайте вообще отменим все встречи?",
          "en": "Shall we cancel all meetings?"
        },
        "good": false,
        "feedback": {
          "ru": "Не выясняет нужный формат взаимодействия.",
          "en": "Does not clarify the desired collaboration model."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: короткое обсуждение рисков и решений вместо формального отчёта. Договоритесь о цели и повестке.",
      "en": "Likely interest: brief discussion of decisions and risks instead of ceremonial reporting. Agree on agenda and outcome."
    }
  },
  {
    "kind": "chat",
    "title": {
      "ru": "Колкость в чате",
      "en": "A jab in chat"
    },
    "context": {
      "ru": "Вы - CS. Напишите короткий ответ заказчику в Teams, без несуществующих дат и без ответного сарказма.",
      "en": "You are CS. Write a short Teams reply without inventing dates or mirroring sarcasm."
    },
    "incoming": {
      "ru": "«О, наконец-то ответили. Я думал, вы забыли, что у нас завтра турнир».",
      "en": "“Oh, you finally replied. I thought you'd forgotten our tournament is tomorrow.”"
    },
    "facts": {
      "ru": "Подтверждённой даты исправления пока нет. Техническая оценка запрошена.",
      "en": "There is no confirmed fix date. Engineering assessment has been requested."
    },
    "rubric": [
      {
        "ru": "Признал ожидание и бизнес-риски",
        "en": "Acknowledged the wait and business risk"
      },
      {
        "ru": "Ответил по сути, не на тон",
        "en": "Responded to substance, not tone"
      },
      {
        "ru": "Не обещал неутверждённую дату",
        "en": "Avoided unapproved deadline"
      }
    ],
    "sample": {
      "ru": "«Извините за задержку с ответом. Понимаю риск для завтрашнего турнира. Подтверждённой даты исправления пока нет. Уточню статус оценки и вернусь с проверенным обновлением».",
      "en": "“Sorry for the delayed response. I understand the risk to tomorrow's tournament. There is no confirmed fix date yet. I'll check the assessment status and come back with a verified update.”"
    }
  },
  {
    "kind": "chat",
    "title": {
      "ru": "Коммерческий ультиматум",
      "en": "Commercial ultimatum"
    },
    "context": {
      "ru": "Напишите ответ заказчику, не обещая скидок и бесплатных доработок за BD.",
      "en": "Write a reply without offering discounts or free development on BD's behalf."
    },
    "incoming": {
      "ru": "«Либо делаете эту настройку бесплатно, либо будем искать другую платформу».",
      "en": "“Either you provide this configuration free of charge, or we'll look for another platform.”"
    },
    "facts": {
      "ru": "Объём работ пока не оценён. Коммерческие решения принимает BD.",
      "en": "The effort is not estimated. Commercial decisions belong to BD."
    },
    "rubric": [
      {
        "ru": "Признал важность запроса",
        "en": "Acknowledged the importance of the request"
      },
      {
        "ru": "Уточнил результат и объём",
        "en": "Clarified outcome and scope"
      },
      {
        "ru": "Передал коммерческую часть владельцу",
        "en": "Routed commercial terms to the owner"
      }
    ],
    "sample": {
      "ru": "«Понимаю, что вопрос важен для решения о партнёрстве. Давайте уточним ожидаемый результат и объём изменений, чтобы оценить варианты. Коммерческие условия обсудим с ответственным коллегой из BD».",
      "en": "“I understand this affects your partnership decision. Let's clarify the expected outcome and scope so we can assess options. We'll involve the BD owner for commercial terms.”"
    }
  },
  {
    "kind": "chat",
    "title": {
      "ru": "Критика QA",
      "en": "QA criticised"
    },
    "context": {
      "ru": "Ответьте на критическое сообщение о бонусном тексте; статус проверки пока неизвестен.",
      "en": "Respond to criticism of bonus wording; the review status is still unknown."
    },
    "incoming": {
      "ru": "«QA вообще читает, что выкладывает? Бонусный текст может вводить игроков в заблуждение!»",
      "en": "“Does QA even read what they release? The bonus wording could mislead players!”"
    },
    "facts": {
      "ru": "Вопрос о формулировке требует оценки QA и профильных специалистов. Вывод о compliance не сделан.",
      "en": "The wording needs review by QA and relevant specialists. Compliance has not concluded."
    },
    "rubric": [
      {
        "ru": "Не перешёл на личности",
        "en": "Avoided personal attacks"
      },
      {
        "ru": "Не объявил отсутствие риска доказанным",
        "en": "Did not assume there is no risk"
      },
      {
        "ru": "Согласовал проверку и владельца",
        "en": "Agreed on an assessment and owner"
      }
    ],
    "sample": {
      "ru": "«Спасибо, что обратили внимание на формулировку. Согласен, влияние на игроков важно проверить. Передам вопрос QA и профильным специалистам, чтобы уточнить риск и дальнейшие действия».",
      "en": "“Thank you for flagging the wording. We need to assess its potential player impact. I'll refer it to QA and the relevant specialists to clarify the risk and next steps.”"
    }
  }
];
const root=document.getElementById("gameModesLab");if(!root)return;
const L=()=>document.body.dataset.lang==="en"?"en":"ru";
const bi=(ru,en)=>{const f=document.createDocumentFragment();for(const [c,v] of [["ru",ru],["en",en]]){const el=document.createElement("span");el.className=c+"-only";el.textContent=v;f.append(el);}return f;};
const text=(el,obj)=>el.replaceChildren(bi(obj.ru,obj.en));
const detective=CASES.filter(x=>x.kind==="detective"),chat=CASES.filter(x=>x.kind==="chat");
const pools={detective:{used:new Set(),current:null,chosen:new Set(),revealed:false},chat:{used:new Set(),current:null,revealed:false,reply:""}};
let mode="detective";
root.innerHTML=[
'<div class="pm-switches"><button type="button" class="pm-category selected" data-mode="detective">🔎 <span class="ru-only">Детектив интересов</span><span class="en-only">Interest Detective</span></button><button type="button" class="pm-category" data-mode="chat">💬 <span class="ru-only">Чат-дуэль</span><span class="en-only">Chat Duel</span></button></div>',
'<p class="pm-hint"><span class="ru-only">Для практики в breakout-комнате. Обсудите ответы втроём, после возвращения поделитесь приёмами, которые сработали.</span><span class="en-only">For breakout-room practice. Discuss as a trio, then share successful techniques on the main call.</span></p>',
'<div class="pm-actions"><button type="button" class="pm-btn pm-primary" id="gameNext">🎲 <span class="ru-only">Новая ситуация</span><span class="en-only">New situation</span></button><button type="button" class="pm-btn" id="gameReset">↺ <span class="ru-only">Сбросить</span><span class="en-only">Reset</span></button><span class="pm-counter" id="gameCount"></span></div>',
'<article class="pm-current" id="gameCard" hidden><div class="pm-eyebrow" id="gameType"></div><h3 id="gameTitle"></h3><p class="pm-context" id="gameContext"></p><div id="gameArea"></div></article>'
].join("");
const next=document.getElementById("gameNext"),reset=document.getElementById("gameReset"),card=document.getElementById("gameCard"),area=document.getElementById("gameArea");
function el(tag,className){const x=document.createElement(tag);if(className)x.className=className;return x;}
function add(tag,cls,obj,parent){const x=el(tag,cls);if(obj)text(x,obj);parent.append(x);return x;}
function renderDetective(c,state){
 add("p","pm-eyebrow",{ru:"Выберите два вопроса, которые проясняют интерес",en:"Pick two questions that clarify the interest"},area);
 for(let i=0;i<c.options.length;i++){
  const o=c.options[i],b=el("button","pm-option");b.type="button";b.setAttribute("aria-pressed",String(state.chosen.has(i)));
  b.append(bi(o.text.ru,o.text.en));
  if(state.chosen.has(i))b.classList.add("selected");
  b.disabled=state.revealed||(!state.chosen.has(i)&&state.chosen.size>=2);
  b.addEventListener("click",()=>{if(state.chosen.has(i))state.chosen.delete(i);else if(state.chosen.size<2)state.chosen.add(i);render();});
  area.append(b);
 }
 const btn=el("button","pm-btn pm-primary");btn.type="button";btn.disabled=state.chosen.size!==2||state.revealed;btn.append(bi("Обсудить выбор","Review choices"));
 btn.addEventListener("click",()=>{state.revealed=true;render();});area.append(btn);
 if(state.revealed){
  const tips=el("div","pm-reference");
  for(let i=0;i<c.options.length;i++){const q=c.options[i];add("p","pm-feedback",q.feedback,tips);}
  add("p","pm-result",c.reveal,tips);area.append(tips);
 }
}
function renderChat(c,state){
 add("p","pm-message",c.incoming,area);
 add("p","pm-context",c.facts,area);
 const label=add("label","pm-eyebrow",{ru:"Напишите ответ CS (не отправляется на сервер)",en:"Write a CS reply (saved only in this page)"},area);
 label.htmlFor="gameReply";const input=el("textarea","pm-textarea");input.id="gameReply";input.rows=4;input.value=state.reply;
 input.disabled=state.revealed;input.addEventListener("input",()=>{state.reply=input.value;});area.append(input);
 const btn=el("button","pm-btn pm-primary");btn.type="button";btn.disabled=state.revealed;btn.append(bi("Открыть критерии для разбора","Reveal debrief checklist"));
 btn.addEventListener("click",()=>{state.reply=input.value;state.revealed=true;render();});area.append(btn);
 if(state.revealed){
  const block=el("div","pm-reference");add("h4","",{ru:"Проверьте ответ вместе с наблюдателем",en:"Review with the observer"},block);
  for(const q of c.rubric){const row=el("label","pm-check");const ch=el("input");ch.type="checkbox";row.append(ch);row.append(bi(q.ru,q.en));block.append(row);}
  add("h4","",{ru:"Один из допустимых вариантов (не эталон)",en:"One possible reply (not the only right one)"},block);
  add("p","",c.sample,block);area.append(block);
 }
}
function render(){
 const state=pools[mode],deck=mode==="detective"?detective:chat;
 document.querySelectorAll("#gameModesLab [data-mode]").forEach(b=>{const on=b.dataset.mode===mode;b.classList.toggle("selected",on);b.setAttribute("aria-pressed",String(on));});
 document.getElementById("gameCount").replaceChildren(bi(state.used.size+" / "+deck.length+" ситуаций",state.used.size+" / "+deck.length+" situations"));
 next.disabled=state.used.size>=deck.length;
 card.hidden=!state.current;if(!state.current)return;
 const c=state.current; text(document.getElementById("gameTitle"),c.title);
 text(document.getElementById("gameContext"),c.context);
 text(document.getElementById("gameType"),mode==="detective"?{ru:"Детектив интересов · 5-7 минут",en:"Interest Detective · 5-7 min"}:{ru:"Чат-дуэль · 5 минут",en:"Chat Duel · 5 min"});
 area.replaceChildren();if(mode==="detective")renderDetective(c,state);else renderChat(c,state);
}
root.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>{mode=b.dataset.mode;render();}));
next.addEventListener("click",()=>{const state=pools[mode],deck=mode==="detective"?detective:chat;
 const possibilities=deck.filter((_,i)=>!state.used.has(i));if(!possibilities.length)return;
 const c=possibilities[Math.floor(Math.random()*possibilities.length)];state.used.add(deck.indexOf(c));state.current=c;state.revealed=false;state.chosen=new Set();state.reply="";render();
});
reset.addEventListener("click",()=>{pools[mode]={used:new Set(),current:null,chosen:new Set(),revealed:false,reply:""};render();});
render();
})();
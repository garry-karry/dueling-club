// Nine additional fictional Interest Detective cases. Loaded before game-modes.js.
window.ExtraPracticeCases = [
  {
    "kind": "detective",
    "title": {
      "ru": "Приоритет: «Для нас это show-stopper»",
      "en": "Priority: “This is a show-stopper”"
    },
    "context": {
      "ru": "Клиент возмущён приоритетом normal для проблемы с оплатой входа в турнир. QA ещё проверяет масштаб. Выберите два вопроса, которые помогут понять влияние.",
      "en": "A client challenges a normal-priority ticket about tournament buy-in payment. QA is still assessing impact. Choose two questions that clarify the impact."
    },
    "options": [
      {
        "text": {
          "ru": "Какие действия игроков сейчас не проходят и можете ли прислать примеры?",
          "en": "Which player actions fail, and can you share examples?"
        },
        "good": true,
        "feedback": {
          "ru": "Помогает оценить воспроизводимость и затронутый сценарий.",
          "en": "Helps assess reproducibility and the affected flow."
        }
      },
      {
        "text": {
          "ru": "Какой бизнес-процесс или ближайшее решение зависит от этой проблемы?",
          "en": "Which business process or upcoming decision depends on this issue?"
        },
        "good": true,
        "feedback": {
          "ru": "Уточняет влияние и срочность без самовольного severity.",
          "en": "Clarifies impact and urgency without assigning severity."
        }
      },
      {
        "text": {
          "ru": "Может, просто поставим critical, чтобы ускорить?",
          "en": "Shall we just mark it critical to speed things up?"
        },
        "good": false,
        "feedback": {
          "ru": "Приоритет назначают по критериям, а не в ответ на давление.",
          "en": "Priority follows agreed criteria, not pressure."
        }
      },
      {
        "text": {
          "ru": "Почему вы считаете, что normal - это плохо?",
          "en": "Why do you think normal is bad?"
        },
        "good": false,
        "feedback": {
          "ru": "Защищает ярлык вместо сбора фактов.",
          "en": "Defends a label instead of gathering evidence."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: защитить критичный путь игрока и продемонстрировать руководству, что риск оценён. Передайте подтверждённые факты QA и владельцу приоритета.",
      "en": "Likely interest: protect a core player journey and demonstrate that risk was assessed. Share verified evidence with QA and the priority owner."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "Запуск в новой стране",
      "en": "Launching in a new market"
    },
    "context": {
      "ru": "Оператор настаивает на быстром включении нового гео. Локальные требования и статус согласований неизвестны. Найдите два вопроса, раскрывающих цель запуска без выдуманных разрешений.",
      "en": "An operator pushes for fast activation in a new market. Local requirements and approvals are unknown. Find two questions to explore the launch goal without inventing clearance."
    },
    "options": [
      {
        "text": {
          "ru": "Какой продуктовый сценарий и какая аудитория важны для первой фазы?",
          "en": "Which player journey and audience matter in the first phase?"
        },
        "good": true,
        "feedback": {
          "ru": "Помогает понять требуемый объём и приоритеты.",
          "en": "Clarifies required scope and priorities."
        }
      },
      {
        "text": {
          "ru": "Какие ограничения и обязательные проверки уже зафиксированы вашей юридической командой?",
          "en": "What restrictions and required reviews has your legal team documented?"
        },
        "good": true,
        "feedback": {
          "ru": "Показывает необходимые зависимости, не делает вывод о соответствии.",
          "en": "Surfaces dependencies without assuming compliance."
        }
      },
      {
        "text": {
          "ru": "Можем считать рынок открытым, если конкуренты уже там?",
          "en": "Can we assume the market is cleared if competitors operate there?"
        },
        "good": false,
        "feedback": {
          "ru": "Действия конкурентов не подтверждают допустимость запуска.",
          "en": "Competitor activity does not establish launch eligibility."
        }
      },
      {
        "text": {
          "ru": "Можно запустить сейчас, а документы проверить потом?",
          "en": "Can we launch first and review documents later?"
        },
        "good": false,
        "feedback": {
          "ru": "Обходит обязательную проверку и создаёт риск.",
          "en": "Bypasses required review and creates risk."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: быстрее проверить потенциал рынка. Договоритесь о границах первой фазы, затем подтвердите требования с legal/compliance и владельцами продукта.",
      "en": "Likely interest: test market potential sooner. Agree first-phase scope, then confirm requirements with legal/compliance and product owners."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "«Это же маленькая правка»",
      "en": "“It is only a tiny change”"
    },
    "context": {
      "ru": "Клиент просит добавить ещё один пункт в уже согласованный релиз. Оценки влияния на объём нет. Найдите вопросы о настоящем критерии успеха.",
      "en": "A client requests one more item for an agreed release, with no impact assessment yet. Find questions about the actual success criterion."
    },
    "options": [
      {
        "text": {
          "ru": "Какое пользовательское действие станет возможным благодаря этому изменению?",
          "en": "Which user action will this change enable?"
        },
        "good": true,
        "feedback": {
          "ru": "Переводит разговор с «мелкой правки» на бизнес-результат.",
          "en": "Moves from a “small change” to a user outcome."
        }
      },
      {
        "text": {
          "ru": "Без этого пункта какое решение о релизе вы не сможете принять?",
          "en": "Without this item, which release decision would you be unable to make?"
        },
        "good": true,
        "feedback": {
          "ru": "Позволяет выявить обязательный и необязательный объём.",
          "en": "Separates must-haves from optional scope."
        }
      },
      {
        "text": {
          "ru": "Раз мелочь, зачем её вообще обсуждать?",
          "en": "If it is tiny, why discuss it at all?"
        },
        "good": false,
        "feedback": {
          "ru": "Обесценивает запрос и не проясняет результат.",
          "en": "Dismisses the request without clarifying the outcome."
        }
      },
      {
        "text": {
          "ru": "Пусть разработка добавит без обновления задачи?",
          "en": "Should engineering add it without updating the ticket?"
        },
        "good": false,
        "feedback": {
          "ru": "Размывает согласованный объём и историю решения.",
          "en": "Undermines agreed scope and the decision record."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: успеть закрыть конкретную потребность игрока. Зафиксируйте результат и запросите оценку объёма в YouTrack прежде, чем менять план.",
      "en": "Likely interest: meet a specific player need in time. Document the outcome and request scoped assessment in YouTrack before changing the plan."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "«Антифрод - чёрный ящик»",
      "en": "“Anti-fraud is a black box”"
    },
    "context": {
      "ru": "Заказчик требует объяснить каждую блокировку аккаунта. Часть сведений может быть чувствительной; формат доступного отчёта неизвестен. Выберите два вопроса об интересе клиента.",
      "en": "The operator demands an explanation for every account block. Some details may be sensitive, and reporting options are unknown. Pick two questions about the client's need."
    },
    "options": [
      {
        "text": {
          "ru": "Какое решение вы хотите принимать на основе этой информации?",
          "en": "What decision do you need this information to support?"
        },
        "good": true,
        "feedback": {
          "ru": "Определяет потребность в данных без преждевременного раскрытия внутренних правил.",
          "en": "Defines the data need without exposing internal rules."
        }
      },
      {
        "text": {
          "ru": "Какие категории кейсов чаще всего вызывают вопросы у вашей поддержки?",
          "en": "Which categories of cases most often trigger queries to your support?"
        },
        "good": true,
        "feedback": {
          "ru": "Помогает уточнить тип информации и назначение отчёта.",
          "en": "Clarifies the needed information and reporting purpose."
        }
      },
      {
        "text": {
          "ru": "Можем открыть весь алгоритм, чтобы вы нам доверяли?",
          "en": "Should we disclose the full algorithm to build trust?"
        },
        "good": false,
        "feedback": {
          "ru": "Обещает доступ к потенциально ограниченной информации.",
          "en": "Promises access to potentially restricted information."
        }
      },
      {
        "text": {
          "ru": "Вам достаточно знать, что система работает?",
          "en": "Isn't it enough to know the system works?"
        },
        "good": false,
        "feedback": {
          "ru": "Не отвечает на потребность в проверяемой прозрачности.",
          "en": "Ignores the need for verifiable transparency."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: объяснять решения игрокам и контролировать ложные срабатывания. Уточните допустимый уровень прозрачности с профильными владельцами.",
      "en": "Likely interest: explain outcomes to players and assess false positives. Check what transparency is permitted with the relevant owners."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "Срок уже назвал BD",
      "en": "BD already promised a date"
    },
    "context": {
      "ru": "Клиент прислал письмо BD с датой разработки. У технической команды нет подтверждённой оценки. Выберите два вопроса для восстановления ожиданий.",
      "en": "The client forwards a BD email with a delivery date. Engineering has not confirmed an estimate. Choose two questions to clarify expectations."
    },
    "options": [
      {
        "text": {
          "ru": "Для какого решения или события вам необходим этот срок?",
          "en": "Which decision or event depends on that date?"
        },
        "good": true,
        "feedback": {
          "ru": "Раскрывает зависимость клиента от даты.",
          "en": "Clarifies the client's dependency on the date."
        }
      },
      {
        "text": {
          "ru": "Что из обещанного критично для первой версии, а что может подождать?",
          "en": "Which promised parts are critical to version one, and what can wait?"
        },
        "good": true,
        "feedback": {
          "ru": "Позволяет обсуждать границы приоритетов до оценки.",
          "en": "Enables scope prioritisation before assessment."
        }
      },
      {
        "text": {
          "ru": "Может, оставим дату, чтобы не расстраивать клиента?",
          "en": "Should we keep the date so the client stays happy?"
        },
        "good": false,
        "feedback": {
          "ru": "Закрепляет непроверенное обязательство.",
          "en": "Reinforces an unverified commitment."
        }
      },
      {
        "text": {
          "ru": "Почему вы поверили BD, а не нам?",
          "en": "Why did you believe BD instead of us?"
        },
        "good": false,
        "feedback": {
          "ru": "Переводит разговор в обвинение коллег.",
          "en": "Shifts the conversation toward blaming colleagues."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: выполнить обязательство перед собственным руководством. Сверьте факты с BD и техкомандой, затем согласуйте единую коммуникацию.",
      "en": "Likely interest: meet the operator's own commitments to leadership. Check facts with BD and engineering, then align one message."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "«Гарантируйте, что не повторится»",
      "en": "“Guarantee it never happens again”"
    },
    "context": {
      "ru": "После сбоя заказчик требует гарантию отсутствия повторений. RCA ещё не завершён. Выберите два вопроса, которые выявляют необходимую уверенность.",
      "en": "After an incident, the client demands a guarantee of no recurrence. RCA is incomplete. Pick two questions that reveal what reassurance is needed."
    },
    "options": [
      {
        "text": {
          "ru": "Какая информация нужна вашему руководству для оценки риска повторения?",
          "en": "What information does leadership need to assess recurrence risk?"
        },
        "good": true,
        "feedback": {
          "ru": "Выясняет критерии доверия, а не обещает невозможное.",
          "en": "Clarifies trust criteria without an impossible promise."
        }
      },
      {
        "text": {
          "ru": "Какие контрольные точки помогут вам видеть ход расследования и проверок?",
          "en": "Which checkpoints would help you follow the investigation and validation?"
        },
        "good": true,
        "feedback": {
          "ru": "Фокусирует договорённость на проверяемом процессе.",
          "en": "Focuses the agreement on a verifiable process."
        }
      },
      {
        "text": {
          "ru": "Вы требуете невозможного, давайте сменим тему?",
          "en": "You are asking the impossible; can we move on?"
        },
        "good": false,
        "feedback": {
          "ru": "Отсекает законную тревогу клиента.",
          "en": "Dismisses a legitimate client concern."
        }
      },
      {
        "text": {
          "ru": "Можем гарантировать 100%, раз уже всё восстановилось?",
          "en": "Can we guarantee 100% because service is restored?"
        },
        "good": false,
        "feedback": {
          "ru": "Восстановление не доказывает отсутствие повторных рисков.",
          "en": "Recovery does not prove zero recurrence risk."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: предсказуемость и прозрачное управление риском. Предложите проверяемые точки RCA без абсолютных гарантий.",
      "en": "Likely interest: predictability and visible risk management. Offer verifiable RCA checkpoints without absolute guarantees."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "«Мы хотим закрыть покер»",
      "en": "“We want to close poker”"
    },
    "context": {
      "ru": "Покерный оператор обсуждает закрытие продукта из-за слабого результата, но подтверждённой аналитики ещё нет. Выберите два вопроса, помогающие понять критерии решения.",
      "en": "A poker operator considers exiting the product after disappointing performance, but verified analytics are not available yet. Choose two questions to understand the decision criteria."
    },
    "options": [
      {
        "text": {
          "ru": "Какой результат вы ожидали получить и за какой период?",
          "en": "What outcome did you expect, and over what period?"
        },
        "good": true,
        "feedback": {
          "ru": "Позволяет определить критерии без выдуманных KPI.",
          "en": "Clarifies criteria without inventing KPIs."
        }
      },
      {
        "text": {
          "ru": "Есть ли контрольная дата, когда решение о закрытии станет окончательным?",
          "en": "Is there a checkpoint when the closure decision becomes final?"
        },
        "good": true,
        "feedback": {
          "ru": "Проясняет окно для проверяемых действий.",
          "en": "Clarifies the window for verifiable actions."
        }
      },
      {
        "text": {
          "ru": "Может, просто пообещаем рост после обновления?",
          "en": "Should we promise growth after an update?"
        },
        "good": false,
        "feedback": {
          "ru": "Нельзя обещать бизнес-результат без оснований.",
          "en": "Business outcomes cannot be guaranteed without evidence."
        }
      },
      {
        "text": {
          "ru": "Почему вы так быстро сдаётесь?",
          "en": "Why are you giving up so quickly?"
        },
        "good": false,
        "feedback": {
          "ru": "Обесценивает решение клиента.",
          "en": "Dismisses the client's decision."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: снизить потери и принять обоснованное решение. Обсудите данные, варианты и право клиента на окончательный выбор.",
      "en": "Likely interest: limit losses and reach an informed decision. Discuss evidence, options and the client's final decision right."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "«Кто компенсирует рекламную кампанию?»",
      "en": "“Who will compensate our campaign?”"
    },
    "context": {
      "ru": "Оператор понёс расходы на рекламную кампанию к ожидаемой функции и требует компенсацию. CS не уполномочен обсуждать денежные условия. Выберите два вопроса.",
      "en": "An operator incurred campaign costs around an expected feature and requests compensation. CS cannot negotiate commercial terms. Choose two questions."
    },
    "options": [
      {
        "text": {
          "ru": "Какие операционные решения сейчас необходимо принять из-за сдвига?",
          "en": "Which operational decisions now depend on this change?"
        },
        "good": true,
        "feedback": {
          "ru": "Помогает CS работать с риском запуска, не обсуждая сумму.",
          "en": "Lets CS address launch impact without negotiating an amount."
        }
      },
      {
        "text": {
          "ru": "Какой контекст важно передать BD для рассмотрения коммерческого запроса?",
          "en": "What context should BD receive about the commercial request?"
        },
        "good": true,
        "feedback": {
          "ru": "Готовит корректную передачу вопроса владельцу.",
          "en": "Prepares a useful handover to the commercial owner."
        }
      },
      {
        "text": {
          "ru": "А какую скидку вы считаете справедливой?",
          "en": "What discount do you think would be fair?"
        },
        "good": false,
        "feedback": {
          "ru": "Переводит CS в обсуждение условий BD.",
          "en": "Draws CS into BD's commercial remit."
        }
      },
      {
        "text": {
          "ru": "Вы сами закупили рекламу, почему это наша проблема?",
          "en": "You bought the ads; why is it our problem?"
        },
        "good": false,
        "feedback": {
          "ru": "Перекладывает ответственность и закрывает диалог.",
          "en": "Shifts blame and shuts down dialogue."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: минимизировать убытки и понять варианты. CS обсуждает операционные шаги, а BD принимает коммерческий запрос.",
      "en": "Likely interest: minimise losses and understand options. CS handles operational next steps, while BD owns commercial requests."
    }
  },
  {
    "kind": "detective",
    "title": {
      "ru": "«Посмотрим» после встречи",
      "en": "“We'll see” after the meeting"
    },
    "context": {
      "ru": "После предложения плана новый стейкхолдер отвечает «посмотрим» и перестаёт комментировать. Причина неизвестна. Выберите два вопроса без культурных догадок.",
      "en": "After a proposed plan, a new stakeholder says “we'll see” and becomes quiet. The reason is unknown. Choose two questions without cultural assumptions."
    },
    "options": [
      {
        "text": {
          "ru": "Какая информация или согласование нужны, прежде чем вы сможете принять решение?",
          "en": "What information or approval do you need before deciding?"
        },
        "good": true,
        "feedback": {
          "ru": "Проясняет этап принятия решения.",
          "en": "Clarifies the decision stage."
        }
      },
      {
        "text": {
          "ru": "В каком формате вам удобнее вернуться к вопросу и с кем его обсудить?",
          "en": "What follow-up format would work best, and who needs to join?"
        },
        "good": true,
        "feedback": {
          "ru": "Учитывает коммуникационные предпочтения и роли.",
          "en": "Respects communication preferences and stakeholder roles."
        }
      },
      {
        "text": {
          "ru": "У вас принято так отказывать, верно?",
          "en": "People in your culture say this when they mean no, right?"
        },
        "good": false,
        "feedback": {
          "ru": "Приписывает мотивы по стереотипу.",
          "en": "Assumes intent based on a stereotype."
        }
      },
      {
        "text": {
          "ru": "Если молчите, значит согласны?",
          "en": "If you're silent, can I take that as agreement?"
        },
        "good": false,
        "feedback": {
          "ru": "Создаёт несуществующее согласие.",
          "en": "Treats silence as consent."
        }
      }
    ],
    "reveal": {
      "ru": "Возможный интерес: получить время или поддержку перед решением. Уточните, что необходимо для ответа, и зафиксируйте взаимно согласованный follow-up.",
      "en": "Likely interest: obtain time or input before deciding. Clarify what is needed and agree on a follow-up together."
    }
  }
];

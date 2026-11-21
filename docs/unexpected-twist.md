# Unexpected Twist / Неожиданный поворот

**Type:** optional observer-led breakout-room practice mode for the internal Customer Success Dueling Club.

**Scope:** existing scenarios 1-8 (`s9`-`s16`), in RU and EN. This is **not** a ninth scenario and does not replace the scenario generator, warm-up, roles or timer.

## How to run / Как провести

1. Each trio enters a Teams breakout room: CS / client / observer. **The observer shares only the Dueling Club browser tab**, not the desktop, so a separate private chat will never be broadcast.
2. The observer opens the selected scenario and enables **Unexpected Twist / Неожиданный поворот** below the scenario tabs. The normal scenario and timer continue.
3. After approximately 3-5 minutes of dialogue, **the observer** clicks **Draw a twist / Выдать поворот**.
4. The public change appears on the shared browser tab. The button identifies the recipient for that card: **Copy client-only cue / Копировать вводную заказчику** or **Copy CS manager-only cue / Копировать вводную менеджеру CS**. The observer copies the cue and sends it via **private Teams DM only to that role player**. Never paste it in the breakout-room group chat.
5. The observer may also click **Copy observer prompt / Копировать вопрос наблюдателю** for private notes. The CS player adapts the conversation; the observer records factual behaviour for debrief.
6. Three cards are available for each scenario without repeats until **Reset deck / Сбросить колоду**. Deck states are independent and held only in the current browser session. Each breakout-room observer operates their own deck.

### RU quick start / Порядок для наблюдателя

1. В breakout-комнате **наблюдатель демонстрирует только вкладку клуба**.
2. Через 3-5 минут наблюдатель нажимает **«Выдать поворот»**.
3. Все видят общую вводную. Кнопка указывает адресата: **«Копировать вводную заказчику»** или **«Копировать вводную менеджеру CS»**. Наблюдатель отправляет скопированный текст **в личный чат Teams именно выбранному участнику**, а не в общий чат комнаты.
4. CS продолжает разговор; наблюдатель может скопировать вопрос для себя. После сцены группа разбирает решения и новый риск.

**Privacy reminder:** copying a cue does not display it on the shared page. If the observer shares the whole screen, opening Teams to send a private message can reveal it to everyone. Share **only the browser tab**. Clipboard copying requires browser clipboard permission and an HTTPS context.

## Learning outcomes

- Practice **Pause - Fact - Interest - Next step / Пауза - факт - интерес - шаг** (source: `Карта CS.docx`, version 28 Oct 2026).
- Acknowledge the objection, clarify its basis, and offer grounded alternatives without bypassing the client or the internal decision owner (`Чек-лист переговоров CS.docx`, version 27 Oct 2026).
- Do not promise an unconfirmed development deadline, severity, production status, compensation, or commercial condition.
- Commercial issues go to BD; technical assessments to the responsible experts. The exercise **does not** reward unsupported assurances.

## Implementation

- `assets/twist-mode.js`: 24 bilingual fictional twist cards with role-specific routing (16 client cues, 8 CS manager cues), observer controls, clipboard copy and independent per-scenario decks.
- `assets/twist-mode.css`: scoped styles and mobile layout.
- `index.html`: external CSS/JS links and one call to `UnexpectedTwist.setScenario(id)` in the existing scenario navigation function.
- No external services, AI calls, database, or persistence are used.
- All original scenarios are preserved.

## Review checklist (browser)

- [ ] RU and EN toggle localizes all labels, public events and clipboard text for both recipient roles.
- [ ] Mode appears on each of s9-s16 and is absent from Theory, Warm-up and Generator.
- [ ] Mode does not start automatically and the first twist is hidden until the breakout-room observer draws.
- [ ] A private cue never renders on the shared page. Button label identifies client or CS manager; observer copies and sends to that role in a private Teams DM.
- [ ] Drawing three times returns distinct cards; fourth draw is disabled; reset re-enables drawing.
- [ ] Switching to another scenario uses its own deck, returning retains the previous deck, and no stale card leaks between scenarios.
- [ ] Existing timers, pair assignments, quizzes, archives and generator still work.
- [ ] On a narrow mobile viewport, the mode controls remain operable.
- [ ] The old eight scenarios remain intact.

**Safety note:** Private cues live in the JavaScript training data (not access-controlled) but do not render on the shared page. This is a cooperative training tool. Share only the club browser tab; sharing the desktop can expose Teams DMs.

**Sources:** current club repository; `Карта CS.docx` (28.10.2026); `Чек-лист переговоров CS.docx` (27.10.2026). Twist cases are fictional and are not validated customer production data.

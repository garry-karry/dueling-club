# Unexpected Twist / Неожиданный поворот

**Type:** optional facilitator-led practice mode for the internal Customer Success Dueling Club.

**Scope:** existing scenarios 1-8 (`s9`-`s16`), in RU and EN. This is **not** a ninth scenario and does not replace the scenario generator, warm-up, roles or timer.

## How to run / Как провести

1. Open an existing scenario and form a trio (CS / client / observer). Leave the regular scenario and timer running.
2. The facilitator enables **Unexpected Twist / Неожиданный поворот** in the panel directly below the scenario tabs.
3. After approximately 3-5 minutes of the live roleplay, click **Draw a twist / Выдать поворот**.
4. Read the public event aloud to everybody. **Only the client** opens the private role cue, preferably on their own device. The observer may open the observer prompt.
5. Allow the CS player to clarify facts, interests and what has changed; agree on a next step within verified authority. Discuss in the existing debrief.
6. Three cards are available for each scenario, sampled without repetition until **Reset deck / Сбросить колоду**. The used set is separate for every scenario and lasts for the current page session only.

## Learning outcomes

- Practice **Pause - Fact - Interest - Next step / Пауза - факт - интерес - шаг** (source: `Карта CS.docx`, version 28 Oct 2026).
- Acknowledge the objection, clarify its basis, and offer grounded alternatives without bypassing the client or the internal decision owner (`Чек-лист переговоров CS.docx`, version 27 Oct 2026).
- Do not promise an unconfirmed development deadline, severity, production status, compensation, or commercial condition.
- Commercial issues go to BD; technical assessments to the responsible experts. The exercise **does not** reward unsupported assurances.

## Implementation

- `assets/twist-mode.js`: mode state, 24 bilingual fictional twist cards, controls, independent per-scenario non-repeating decks.
- `assets/twist-mode.css`: scoped styles and mobile layout.
- `index.html`: external CSS/JS links and one call to `UnexpectedTwist.setScenario(id)` in the existing scenario navigation function.
- No external services, AI calls, database, or persistence are used.
- All original scenarios are preserved.

## Review checklist (browser)

- [ ] RU and EN toggle localizes labels, public event, hidden client cue and observer cue.
- [ ] Mode appears on each of s9-s16 and is absent from Theory, Warm-up and Generator.
- [ ] Mode does not start automatically and the first twist is hidden until the facilitator draws.
- [ ] Revealing the event does not expose the client's private cue automatically.
- [ ] Drawing three times returns distinct cards; fourth draw is disabled; reset re-enables drawing.
- [ ] Switching to another scenario uses its own deck, returning retains the previous deck, and no stale card leaks between scenarios.
- [ ] Existing timers, pair assignments, quizzes, archives and generator still work.
- [ ] On a narrow mobile viewport, the mode controls remain operable.
- [ ] The old eight scenarios remain intact.

**Safety note:** Role secrets are only hidden visually via a disclosure widget, not access-controlled. This is intended for a cooperative internal training room, not for adversarial secrecy or sharing a single projected screen with both roles.

**Sources:** current club repository; `Карта CS.docx` (28.10.2026); `Чек-лист переговоров CS.docx` (27.10.2026). Twist cases are fictional and are not validated customer production data.

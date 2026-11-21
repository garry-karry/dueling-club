# Новые форматы Дуэльного клуба / Dueling Club practice modes

**Scope:** internal EvenBetter Customer Success training only, not public AM Academy.
**Updated:** 2026-11-21.

## Start of the call / Разминка (5 min)

At the start of the group call, select a pack in the Warm-up tab and ask participants to answer out loud. Draw 1-3 cards; show the reference only after responses. Cards don't repeat until their pack resets.

Four packs, six bilingual cards each:
- «Исправь фразу CS» / Rewrite a CS reply
- «Ответ за 15 секунд» / 15-second response
- «Факт или интерпретация?» / Fact or interpretation?
- «Ловушка или хороший ход?» / Trap or good move? - participants choose a classification and get a short explanation.

Avoid personal scoring, unverified launch dates, commercial promises or fabricated production states.

## Breakout rooms / Игровые режимы (5-7 min)

Each room has a client, CS and observer. The new **Игровые режимы / Game modes** tab offers two modes, each with twelve fictional RU/EN situations.

### Детектив интересов / Interest Detective
1. The team receives a client situation.
2. Choose **two** questions that reveal the actual interest, not just the client's position.
3. Click Review choices. Discuss why the questions clarify business decisions and why the alternatives don't.
4. Return to the group call and share the insight - not individual rankings.

### Чат-дуэль / Chat Duel
1. Read a provocative Teams-style customer message and verified facts.
2. Write a short CS response in the built-in text box. **It is not sent to a server**.
3. Reveal the observer checklist and a possible sample reply (not the only correct reply).
4. Discuss which technique worked, how obligations were handled and what to improve. No automated scoring.

## Discussion after returning / Обсуждение после возвращения

Scenario mini-quizzes «Trap or good move?» are deliberately removed from the 8 scenarios; their observer checklists and common debrief questions remain. The main call focuses on:
- Which technique was tried and how it helped.
- Which assumption or interest changed after asking a question.
- What the group would try differently next time.

## Implementation / Технически

- `assets/warmup-deck.js`: independent packs, no-repeat draw, interactive Trap/Good buttons, answer references.
- `assets/game-modes.js`: Interest Detective and Chat Duel, session-only state (no network requests), scenario-independent exercises.
- `assets/game-cases-extra.js`: nine new RU/EN cases per mode, loaded before game-modes.js. Total: 12 per mode (24).
- `assets/practice-modes.css`: scoped responsive layout.
- `index.html`: group warm-up replacement, new tab/panel, remove eight scenario mini-quizzes while retaining group debriefs; the **whole footer archive is collapsed by default** in one native details panel.
- Existing scenarios `s9` to `s16`, Theory, generator, timer, participant pairing, archives and Unexpected Twist remain in place.
- Default timer selection: Warm-up 5 minutes; Game modes 7 minutes; existing scenario timer phases preserved.

## Review checklist

- [ ] RU/EN toggle affects warm-up, Detective and Chat Duel.
- [ ] Warm-up has four packs, six cards each, no repeats per pack until reset.
- [ ] Trap/Good selection reveals an explanation and the controls reset on next card.
- [ ] Detective requires exactly two questions before revealing feedback.
- [ ] Chat Duel accepts text, shows a rubric after reveal, and never uploads responses.
- [ ] Twelve cards per game mode without repeats until reset. Confirm all 24 cards have RU/EN text, unique titles and valid content.
- [ ] Entire footer archive is initially collapsed; opening it reveals all 12 historical scenarios, with individual entries still expandable.
- [ ] Existing 8 scenario panels, observer checklists, group discussions and Unexpected Twist still work.
- [ ] Warm-up 5min and Game modes 7min timer presets do not break 20min scenario phases.
- [ ] Browser visual smoke-test on desktop and mobile.

## Training sources

- `Карта CS.docx` (28.10.2026)
- `Переговоры в работе CS.pptx` (17.11.2026)
- `Чек-лист переговоров CS.docx` (27.10.2026)
- `Пассивная агрессия в работе.pptx` (version date not confirmed)

All roleplay examples are fictional training material; no production status or commercial terms are asserted.

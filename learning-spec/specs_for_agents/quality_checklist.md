# Quality Checklist for Learning Content

Use this checklist to evaluate lesson quality before submission. Every item should be verified.

---

## 1. Structure & Completeness

### Lesson Structure
- [ ] Lesson follows the exact 7-step pattern: hook → concept → example → guided practice → challenge → reflection → quiz
- [ ] All required YAML/JSON files are present and properly named
- [ ] Folder structure matches the specification exactly
- [ ] File paths in `lesson.yaml` match actual files
- [ ] All steps are listed in the correct order in `lesson.yaml`

### File Validity
- [ ] All YAML files parse without errors
- [ ] All JSON files are syntactically valid
- [ ] All Markdown files include valid frontmatter
- [ ] Required fields in schemas are all present
- [ ] Data types match schema specifications (strings, numbers, arrays, etc.)

### Metadata Accuracy
- [ ] `estimated_minutes` for entire lesson totals 20-60 minutes
- [ ] `level` is appropriate for content difficulty
- [ ] `tags` are relevant and specific
- [ ] `prerequisites` accurately reflect required prior knowledge
- [ ] `objectives` are clear, concrete, and measurable

---

## 2. Learning Objectives

### Clarity
- [ ] Objectives use specific action verbs (explain, calculate, apply, etc.)
- [ ] Each objective is concrete and testable
- [ ] Objectives are appropriate for the stated level
- [ ] Objectives are achievable within the lesson time

### Alignment
- [ ] Content directly addresses every stated objective
- [ ] Quiz questions test the stated objectives
- [ ] No significant content exists that doesn't relate to an objective
- [ ] Objectives align with broader module and program outcomes

---

## 3. Hook Quality

### Engagement
- [ ] Opens with a concrete, relatable scenario
- [ ] Captures attention in the first 2 sentences
- [ ] Clearly answers "why should I care?"
- [ ] Creates curiosity or motivation to learn

### Content
- [ ] Uses specific examples, not abstract ideas
- [ ] Connects to real-world applications
- [ ] Appropriate length (3-5 minutes reading time)
- [ ] Transitions naturally to concept section
- [ ] No jargon or unexplained technical terms

---

## 4. Concept Section Quality

### Clarity
- [ ] Explains concepts in plain language
- [ ] Defines every new term explicitly
- [ ] Breaks complex ideas into manageable pieces
- [ ] Uses short paragraphs and frequent headings
- [ ] Includes formatting (bold, lists) to aid comprehension

### Completeness
- [ ] Covers all necessary foundational knowledge
- [ ] Builds clear mental models
- [ ] Uses analogies or diagrams where helpful
- [ ] Addresses common misconceptions
- [ ] Doesn't assume knowledge beyond prerequisites

### Pedagogy
- [ ] Progresses logically from simple to complex
- [ ] Provides multiple explanations (definition, analogy, example)
- [ ] Distinguishes similar or confusing concepts
- [ ] Appropriate length (7-10 minutes reading time)

---

## 5. Example Quality

### Clarity
- [ ] Problem statement is clear and concrete
- [ ] Solution shows every step explicitly
- [ ] Each step includes explanatory narration
- [ ] Uses formatting to separate steps visually
- [ ] No steps are skipped or assumed obvious

### Pedagogy
- [ ] Explains WHY each step is taken, not just WHAT
- [ ] Connects steps back to concepts
- [ ] Includes verification or sanity check
- [ ] Points out common mistakes when relevant
- [ ] Appropriate complexity for lesson level

### Completeness
- [ ] Example(s) directly demonstrate the concepts taught
- [ ] At least one complete worked example is shown
- [ ] Multiple approaches shown when valuable
- [ ] Key takeaway is explicitly stated

---

## 6. Guided Practice Quality

### Question Design
- [ ] 3-5 questions included
- [ ] Questions are easy to medium difficulty
- [ ] Each question tests understanding, not just recall
- [ ] Questions directly practice lesson concepts
- [ ] Wording is clear and unambiguous

### Support
- [ ] Every question has a detailed explanation
- [ ] Explanations teach, not just verify answers
- [ ] Hints are provided and actually helpful
- [ ] Explanations show work/reasoning
- [ ] Wrong answers are acknowledged when helpful

### Technical Quality
- [ ] All JSON fields are present and correct
- [ ] `answer_index` correctly identifies the right option
- [ ] Options are plausible and well-distributed
- [ ] No obvious giveaways in option structure

---

## 7. Challenge Quality

### Difficulty
- [ ] 1-3 questions included
- [ ] Questions are appropriately challenging
- [ ] Requires synthesis, application, or deeper reasoning
- [ ] Still solvable with lesson knowledge
- [ ] Difficulty is marked as "challenge" in metadata

### Fairness
- [ ] Doesn't test concepts not covered in lesson
- [ ] Doesn't rely on tricks or gotchas
- [ ] Challenge is interesting, not frustrating
- [ ] Explanations help learners understand complexity

---

## 8. Reflection Quality

### Content
- [ ] Includes 3-5 open-ended reflection questions
- [ ] Questions prompt metacognition
- [ ] Asks about surprises, struggles, or insights
- [ ] Connects to real-world applications
- [ ] No right or wrong answers expected

### Tone
- [ ] Encouraging and non-judgmental
- [ ] Normalizes struggle and effort
- [ ] Frames learning as ongoing journey
- [ ] Looks forward to next steps
- [ ] Appropriate length (3-5 minutes)

---

## 9. Quiz Quality

### Alignment
- [ ] 3-5 questions included
- [ ] Questions directly test stated objectives
- [ ] Covers the most important concepts
- [ ] Represents balanced coverage of lesson content
- [ ] No trivial or tangential questions

### Design
- [ ] Questions test understanding, not memorization
- [ ] Wording is clear and unambiguous
- [ ] Only one answer is clearly correct
- [ ] Options are plausible and parallel in structure
- [ ] Explanations teach and reinforce

---

## 10. Writing Quality

### Reading Level
- [ ] Appropriate for motivated adult learners
- [ ] Assumes no prior expertise beyond prerequisites
- [ ] Avoids unnecessary jargon
- [ ] Defines technical terms when first used
- [ ] Sentences are clear and concise

### Tone
- [ ] Conversational but professional
- [ ] Encouraging and confidence-building
- [ ] Inclusive (uses "you" and "we")
- [ ] Enthusiastic but not over-the-top
- [ ] Respectful of learner's intelligence

### Style
- [ ] Short paragraphs (2-4 sentences)
- [ ] Frequent headings and subheadings
- [ ] Bulleted lists for related points
- [ ] Bold for key terms (used sparingly)
- [ ] Active voice predominates

### Mechanics
- [ ] No spelling errors
- [ ] No grammatical errors
- [ ] Consistent formatting throughout
- [ ] Markdown renders correctly
- [ ] Code blocks formatted properly if applicable

---

## 11. Pedagogical Effectiveness

### Learning Design
- [ ] Hook creates genuine motivation
- [ ] Concept builds clear mental models
- [ ] Examples demonstrate effectively
- [ ] Practice scaffolds from easy to hard
- [ ] Reflection promotes consolidation
- [ ] Quiz verifies objective achievement

### Cognitive Load
- [ ] Information is chunked appropriately
- [ ] New concepts introduced gradually
- [ ] Examples don't introduce too many ideas at once
- [ ] Total lesson length is reasonable (20-60 min)
- [ ] Each step has manageable scope

### Engagement
- [ ] Content maintains interest throughout
- [ ] Examples are relevant and relatable
- [ ] Questions are thoughtfully designed
- [ ] Variety in presentation (text, questions, reflection)
- [ ] Feels like a journey, not a lecture

---

## 12. Completeness

### Self-Contained
- [ ] Lesson can be understood independently
- [ ] All necessary concepts are explained
- [ ] External resources aren't required
- [ ] Examples don't reference unseen content

### Connected
- [ ] Links to program-level outcomes
- [ ] Prerequisites are honored
- [ ] Prepares for subsequent lessons
- [ ] Real-world application is clear

---

## 13. Technical Accuracy

### Correctness
- [ ] All factual information is accurate
- [ ] Examples solve correctly
- [ ] Quiz answers are indisputably correct
- [ ] Explanations are sound
- [ ] No misleading information

### Precision
- [ ] Technical terms used correctly
- [ ] Definitions are precise
- [ ] No oversimplifications that mislead
- [ ] Edge cases acknowledged when relevant

---

## 14. Accessibility

### Inclusive Design
- [ ] Examples use diverse contexts and characters
- [ ] Scenarios are culturally neutral or diverse
- [ ] No assumptions about background beyond prerequisites
- [ ] Language is welcoming to all learners

### Multiple Representations
- [ ] Concepts explained in multiple ways
- [ ] Visual aids when helpful (diagrams, code blocks)
- [ ] Concrete and abstract representations both present
- [ ] Different learning preferences accommodated

---

## Final Review Questions

Before submission, honestly answer these questions:

1. **Would a learner with stated prerequisites be able to complete this lesson independently?**
2. **Does every question have a clear, educational explanation?**
3. **Are the objectives concrete enough that you could measure whether they were achieved?**
4. **Is the content engaging enough to hold attention for 30-60 minutes?**
5. **Does the quiz actually test what the lesson taught?**
6. **Is the language clear enough for a motivated non-expert?**
7. **Would this lesson make a learner feel more confident, not less?**
8. **Is every step necessary, or is there fluff?**
9. **Does this lesson contribute meaningfully to program outcomes?**
10. **Would you be proud to put your name on this?**

If you answered "no" to any question, revise before submission.

---

## Quality Standards Summary

**Excellent lesson:**
- Clear objectives achieved through well-designed content
- Engaging and motivating from start to finish
- Appropriate difficulty with good scaffolding
- Detailed explanations that teach, not just verify
- Clean writing accessible to target audience
- Technically accurate and pedagogically sound

**Needs improvement:**
- Objectives unclear or not achieved
- Content boring or poorly explained
- Difficulty inappropriate (too hard or too easy)
- Minimal explanations or missing support
- Confusing writing or unexplained jargon
- Factual errors or pedagogical problems

---

**Remember**: Quality takes time. It's better to create one excellent lesson than three mediocre ones. Every lesson should be something you're proud of—something that genuinely helps a learner grow.

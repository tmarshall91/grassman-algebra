# Step Type Guide

This guide provides detailed specifications for each type of step in the canonical lesson pattern. Use this as a reference when creating lesson content.

---

## 1. Hook

**Purpose**: Capture attention, establish relevance, and create motivation to learn.

**Duration**: 3-5 minutes

**Format**: Markdown file with YAML frontmatter

### Characteristics
- Opens with a concrete, relatable scenario or problem
- Answers the learner's implicit question: "Why should I care?"
- Creates curiosity or highlights a practical need
- Sets the stage for what's coming without diving into technical details

### Structure
1. **Opening scenario**: A story, question, or situation
2. **Why it matters**: Explicit connection to real life
3. **What you'll learn**: Brief preview of lesson content
4. **Transition**: Bridge to the concept section

### Tone
- Engaging and conversational
- Enthusiastic but not over-the-top
- Inclusive ("you" and "we" language)
- No jargon or technical terms yet

### Do's
✅ Use specific, concrete examples (not abstract ideas)
✅ Relate to everyday experiences
✅ Make the learner feel the problem before presenting the solution
✅ Keep it short—this is appetizer, not main course
✅ End with forward momentum toward learning

### Don'ts
❌ Start teaching the concept—that's the next step
❌ Use scary or overly difficult examples
❌ Be condescending ("You probably don't know this...")
❌ Make false promises ("This is easy!")
❌ Include practice problems or questions

### Mini Example

```markdown
---
id: hook
type: hook
estimated_minutes: 3
---

# Why Loops Matter

You're organizing a party and need to send invitations to 50 friends. You could:
- Write 50 individual email commands: "Send email to Alice", "Send email to Bob"...
- Or write ONE instruction: "For each person in my friend list, send an invitation"

The second approach is a **loop**, and it's one of programming's most powerful ideas.

Loops let you write instructions once and apply them many times. They're how Netflix
recommends shows to millions of users, how your phone alarm repeats daily, and how
games render 60 frames per second.

In this lesson, you'll learn to recognize when loops are useful and write them
confidently. Ready to discover how to make computers do repetitive work for you?
```

---

## 2. Concept

**Purpose**: Build understanding through clear explanation of core ideas, definitions, and mental models.

**Duration**: 7-10 minutes

**Format**: Markdown file with YAML frontmatter

### Characteristics
- Explains the "what" and "why" (not just "how")
- Introduces vocabulary with clear definitions
- Builds mental models and conceptual frameworks
- Uses diagrams, analogies, and examples to illustrate
- Progresses from simple to complex

### Structure
1. **Core definition**: What is this thing?
2. **Key components**: What are its parts?
3. **How it works**: Mental model or mechanism
4. **Important distinctions**: What it is and isn't
5. **Transition**: Lead into examples

### Tone
- Clear and instructional
- Patient and thorough
- Authoritative but approachable
- Like a skilled teacher at a whiteboard

### Do's
✅ Define every new term explicitly
✅ Use multiple explanations (definition + analogy + diagram)
✅ Break complex ideas into smaller pieces
✅ Anticipate and address common misconceptions
✅ Use formatting (bold, lists, headings) for clarity
✅ Include simple inline examples to illustrate points

### Don'ts
❌ Assume prior knowledge beyond stated prerequisites
❌ Use unexplained jargon or academic language
❌ Present information without structure or organization
❌ Skip steps in logical progression
❌ Make it too long—save detailed examples for next step

### Mini Example

```markdown
---
id: concept
type: concept
estimated_minutes: 8
---

# Understanding Variables

## What is a Variable?

A **variable** is a named container that stores a value. Think of it like a labeled
box: the label is the variable name, and what's inside is the value.

## Key Components

Every variable has three parts:
1. **Name**: The identifier you use (e.g., `score`, `userName`)
2. **Value**: The data stored (e.g., `100`, `"Alice"`)
3. **Type**: What kind of data (e.g., number, text, true/false)

## How Variables Work

When you create a variable, you're telling the computer:
- Reserve some memory space
- Give it a name so I can find it later
- Put this value in that space

Later, you can:
- **Read** the value: "What's in the `score` box?"
- **Update** the value: "Change `score` to 150"
- **Use** it in calculations: "`score` + 50"

## Variables vs. Constants

- **Variables** can change: `score = 100` → `score = 150`
- **Constants** stay fixed: `MAX_PLAYERS = 4` (never changes)

Think of variables as reusable, flexible labels. Instead of writing `100` everywhere
in your code, you write `score`. If the score changes, you only update it once.

Let's see this in action with some examples...
```

---

## 3. Example

**Purpose**: Demonstrate concepts through detailed, worked-through examples with step-by-step narration.

**Duration**: 5-8 minutes

**Format**: Markdown file with YAML frontmatter

### Characteristics
- Shows complete worked solutions
- Narrates the thinking process, not just the steps
- Breaks down each step with clear explanations
- Connects back to concepts from previous step
- Often includes multiple approaches or variations

### Structure
1. **Problem statement**: Clear description of what to solve
2. **Solution approach**: Overview of strategy
3. **Step-by-step work**: Detailed progression with narration
4. **Verification**: Check that the answer makes sense
5. **Key takeaway**: What to learn from this example

### Tone
- Tutorial-like, walking through the process
- Explanatory ("Here's why we do this...")
- Encouraging ("Notice how..." "This shows...")
- Like watching an expert solve a problem while explaining

### Do's
✅ Show every step, even "obvious" ones
✅ Explain WHY you're doing each step
✅ Use formatting to separate steps visually
✅ Include diagrams or visual aids when helpful
✅ Show alternative approaches when relevant
✅ Point out common mistakes to avoid
✅ Connect steps back to concepts

### Don'ts
❌ Skip steps or jump to the answer
❌ Present solution without narration
❌ Use overly complex examples
❌ Introduce new concepts not covered in Concept step
❌ Make learner feel stupid for not understanding

### Mini Example

```markdown
---
id: example
type: example
estimated_minutes: 6
---

# Worked Example: Using Variables in Calculations

Let's solve a real problem using variables.

## Problem

A store sells notebooks for $3 each. Write code to calculate the total cost
for any number of notebooks, then find the cost for 7 notebooks.

## Solution Approach

We'll use variables to make our calculation reusable and clear.

## Step 1: Define the Price

First, create a variable for the price of one notebook:

```python
price_per_notebook = 3
```

**Why?** By storing the price in a variable, we can easily update it if
the price changes. We only change it in one place.

## Step 2: Store the Quantity

Create a variable for how many notebooks to buy:

```python
quantity = 7
```

**Why?** This makes our code flexible. Want to buy 10 notebooks instead?
Just change this one number.

## Step 3: Calculate the Total

Multiply price by quantity:

```python
total_cost = price_per_notebook * quantity
```

**Breaking it down:**
- `price_per_notebook` has value `3`
- `quantity` has value `7`
- `3 * 7 = 21`
- So `total_cost` now holds `21`

## Step 4: Display the Result

```python
print(total_cost)  # Output: 21
```

## Verification

Does 21 make sense? Let's check:
- 7 notebooks × $3 each = $21 ✓

## Key Takeaway

Notice how variables make the code **readable and reusable**. Anyone reading
this code immediately understands what it does. And if we want to calculate
cost for a different quantity, we only change one line.

This is the power of variables: they make code flexible, clear, and maintainable.
```

---

## 4. Exercise (Guided Practice)

**Purpose**: Let learners apply concepts with scaffolding and support.

**Duration**: 5-10 minutes

**Format**: JSON file with question objects

### Characteristics
- 3-5 questions
- Easy to medium difficulty
- Directly practice concepts from the lesson
- Detailed, educational explanations for every answer
- Hints available for support

### Question Structure
```json
{
  "id": "unique-id",
  "prompt_markdown": "The question...",
  "type": "multiple-choice",
  "options": ["A", "B", "C", "D"],
  "answer_index": 0,
  "explanation_markdown": "Why this is correct...",
  "hint": "Optional hint..."
}
```

### Tone
- Supportive and instructional
- Detailed explanations that teach
- Positive reinforcement

### Do's
✅ Test one concept per question
✅ Write explanations that teach, not just verify
✅ Include hints that guide thinking
✅ Show work in explanations
✅ Acknowledge common wrong answers in explanation
✅ Keep difficulty appropriate for practice

### Don'ts
❌ Make questions too hard or tricky
❌ Provide minimal explanations ("The answer is B")
❌ Test concepts not covered in the lesson
❌ Use confusing or ambiguous wording

---

## 5. Exercise (Challenge)

**Purpose**: Test deeper understanding with harder problems requiring synthesis or application.

**Duration**: 5-10 minutes

**Format**: JSON file with question objects

### Characteristics
- 1-3 questions
- Medium to hard difficulty
- May combine multiple concepts
- Requires reasoning, not just recall
- Still includes detailed explanations

### Tone
- Encouraging learners to stretch
- Celebratory of effort
- Still supportive in explanations

### Do's
✅ Require application or synthesis
✅ Present novel situations using lesson concepts
✅ Celebrate effort and problem-solving
✅ Explain why the problem is challenging

### Don'ts
❌ Make problems impossibly hard
❌ Test concepts not covered
❌ Leave learners feeling discouraged

---

## 6. Reflection

**Purpose**: Encourage metacognition, consolidation, and connection-making.

**Duration**: 3-5 minutes

**Format**: Markdown file with YAML frontmatter

### Characteristics
- Open-ended reflection questions
- No right or wrong answers
- Connects learning to broader context
- Encourages self-assessment
- Looks forward to next steps

### Structure
1. **Introduction**: Brief framing
2. **Reflection prompts**: 3-5 thought-provoking questions
3. **Real-world connections**: Link to application
4. **Looking ahead**: What comes next

### Tone
- Gentle and encouraging
- Metacognitive
- Non-judgmental
- Forward-looking

### Do's
✅ Ask about surprises and struggles
✅ Prompt real-world connections
✅ Invite learners to identify insights
✅ Normalize struggle and growth
✅ Frame learning as ongoing

### Don'ts
❌ Make it feel like homework
❌ Ask for factual answers
❌ Be heavy-handed or preachy

---

## 7. Quiz

**Purpose**: Verify that lesson objectives were achieved.

**Duration**: 5-8 minutes

**Format**: JSON file with question objects

### Characteristics
- 3-5 multiple-choice questions
- Directly test stated learning objectives
- Cover the most important concepts
- Clear, unambiguous correct answers
- Educational explanations

### Tone
- Assessment-focused but supportive
- Explanations still teach

### Do's
✅ Map questions directly to objectives
✅ Test understanding, not memorization
✅ Make questions clear and unambiguous
✅ Explain why answers are correct
✅ Cover key concepts from the lesson

### Don'ts
❌ Test trivial details
❌ Use trick questions
❌ Test concepts not in the objectives
❌ Make it feel punitive

---

## Summary Table

| Step | Purpose | Format | Duration | Key Feature |
|------|---------|--------|----------|-------------|
| Hook | Motivate | Markdown | 3-5 min | Real-world relevance |
| Concept | Explain | Markdown | 7-10 min | Clear mental models |
| Example | Demonstrate | Markdown | 5-8 min | Worked solutions |
| Guided Practice | Apply (easy) | JSON | 5-10 min | Scaffolded support |
| Challenge | Apply (hard) | JSON | 5-10 min | Synthesis required |
| Reflection | Consolidate | Markdown | 3-5 min | Metacognition |
| Quiz | Verify | JSON | 5-8 min | Objective assessment |

---

Use this guide as a reference while creating content. When in doubt, refer to the example lesson in `examples/algebra-101/`.

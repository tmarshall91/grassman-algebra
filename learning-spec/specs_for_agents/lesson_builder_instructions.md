# Lesson Builder Instructions for AI Agents

## Purpose

You are an AI agent tasked with generating educational content for the "Learn Anything" system. This document provides step-by-step instructions for creating lessons that follow our content standard.

Your output must conform to the schemas and folder structure defined in `learning-spec/`. This ensures consistency, quality, and compatibility across all learning content.

## Content Hierarchy Overview

All learning content follows this four-level structure:

```
Program (broad topic, 10-100+ hours)
  └── Module (thematic unit, 2-10 hours)
       └── Lesson (focused unit, 20-60 minutes)
            └── Step (atomic instruction, 3-10 minutes)
```

### Quick Summary
- **Program**: A complete course (e.g., "Algebra 101", "Introduction to Python")
- **Module**: A group of related lessons (e.g., "Foundations", "Control Flow")
- **Lesson**: One focused concept or skill with multiple steps
- **Step**: A single instructional element (hook, concept, example, etc.)

## The Canonical Lesson Pattern

Every standard lesson MUST follow this exact 7-step pedagogical flow:

### 1. **Hook** (3-5 minutes)
- **Purpose**: Capture attention and motivation
- **Content**: Real-world scenario, relatable problem, or compelling question
- **Format**: Markdown file with frontmatter

### 2. **Concept** (7-10 minutes)
- **Purpose**: Plain-language explanation of core ideas
- **Content**: Clear definitions, key principles, mental models
- **Format**: Markdown file with frontmatter

### 3. **Example** (5-8 minutes)
- **Purpose**: Demonstrate concepts through worked examples
- **Content**: Step-by-step solutions with explanations
- **Format**: Markdown file with frontmatter

### 4. **Guided Practice** (5-10 minutes)
- **Purpose**: Learner tries easier problems with support
- **Content**: 3-5 practice questions with detailed explanations
- **Format**: JSON file with question objects

### 5. **Challenge** (5-10 minutes)
- **Purpose**: Test understanding with harder problems
- **Content**: 1-3 challenging questions requiring synthesis
- **Format**: JSON file with question objects

### 6. **Reflection** (3-5 minutes)
- **Purpose**: Metacognition and connection-making
- **Content**: Thought-provoking questions about learning and application
- **Format**: Markdown file with frontmatter

### 7. **Quiz** (5-8 minutes)
- **Purpose**: Verify understanding of lesson objectives
- **Content**: 3-5 multiple-choice questions testing key concepts
- **Format**: JSON file with question objects

## Step-by-Step Lesson Creation Process

### Phase 1: Planning (Before Writing)

1. **Identify the topic and scope**
   - What specific concept or skill will this lesson teach?
   - What's the target difficulty level? (beginner/intermediate/advanced)

2. **Define 2-4 concrete learning objectives**
   - Start with action verbs: "Explain", "Calculate", "Compare", "Apply"
   - Make them measurable and specific
   - Example: "Convert between fractions, decimals, and percentages accurately"

3. **Check prerequisites**
   - What must learners already know?
   - List prerequisite lessons or concepts clearly

4. **Map to the 7-step pattern**
   - For each objective, plan:
     - How will the hook make it relevant?
     - What mental models will the concept section build?
     - What worked examples will demonstrate it?
     - What practice questions will build confidence?
     - What challenge will test mastery?

### Phase 2: Creating the Lesson Structure

5. **Create the lesson folder structure**
   ```
   lessons/[lesson-id]/
     lesson.yaml
     steps/
       01-hook.md
       02-concept.md
       03-example-1.md
       04-guided-practice.json
       05-challenge.json
       06-reflection.md
       07-quiz.json
     assets/
       .gitkeep
   ```

6. **Write the lesson.yaml file**
   - Follow the schema exactly (see `schema/lesson.schema.json`)
   - Required fields: id, slug, title, summary, level, steps
   - Set `canonical_flow.pattern` to: "hook-concept-example-guided-practice-challenge-reflection-quiz"
   - List all 7 steps with correct types and file paths

### Phase 3: Writing Content

7. **Write each step in order**
   - Start with the hook to establish context
   - Build the concept explanation on that foundation
   - Create examples that directly demonstrate the concepts
   - Design practice questions that apply what was taught
   - Write reflection questions that encourage deeper thinking
   - Create quiz questions that test the stated objectives

8. **Follow format requirements**

   **For Markdown steps** (hook, concept, example, reflection):
   ```markdown
   ---
   id: step-id
   type: hook|concept|example|reflection
   estimated_minutes: X
   ---

   # Heading

   Content in markdown...
   ```

   **For JSON steps** (exercise, quiz):
   ```json
   {
     "id": "step-id",
     "type": "exercise" | "quiz",
     "estimated_minutes": X,
     "questions": [
       {
         "id": "q-1",
         "prompt_markdown": "Question text...",
         "options": ["A", "B", "C", "D"],
         "answer_index": 0,
         "explanation_markdown": "Why this is correct..."
       }
     ]
   }
   ```

### Phase 4: Quality Assurance

9. **Validate against schemas**
   - Conceptually check your YAML/JSON against the schemas
   - Ensure all required fields are present
   - Verify data types and enums are correct

10. **Run the quality checklist**
    - See `quality_checklist.md` for comprehensive criteria
    - Check clarity, accuracy, completeness, and pedagogy

## Writing Style Guidelines

### Target Audience
- Assume motivated adult learners (age 18+)
- No prior expertise in the subject
- Can handle complexity if explained clearly
- Want practical, applicable knowledge

### Tone
- **Conversational but professional**: Like a skilled tutor, not a textbook
- **Encouraging**: Build confidence, normalize struggle
- **Clear**: Short sentences, simple words, no unnecessary jargon
- **Engaging**: Use questions, scenarios, relatable examples

### Structure
- **Short paragraphs**: 2-4 sentences maximum
- **Frequent headings**: Break content into scannable sections
- **Bulleted lists**: For multiple related points
- **Code/math blocks**: For technical content that needs formatting
- **Bold for emphasis**: Sparingly, for key terms

### Examples and Scenarios
- Make them **concrete and realistic**
- Use diverse contexts (not just academic)
- Show the "why" not just the "how"
- Include complete worked solutions with narration

## Common Mistakes to Avoid

❌ **Don't** skip the planning phase and write steps randomly
✅ **Do** plan objectives first, then build steps to achieve them

❌ **Don't** use academic language or unexplained jargon
✅ **Do** explain every new term the first time it appears

❌ **Don't** provide answers without explanations in practice problems
✅ **Do** include detailed explanations that teach, not just verify

❌ **Don't** make the hook abstract or theoretical
✅ **Do** connect to real life with specific scenarios

❌ **Don't** write quiz questions that test trivial details
✅ **Do** test the stated learning objectives directly

❌ **Don't** create lessons longer than 60 minutes
✅ **Do** break large topics into multiple lessons

❌ **Don't** assume prior knowledge beyond stated prerequisites
✅ **Do** build from first principles within the lesson

## Validation Checklist Before Submission

- [ ] All required YAML/JSON files exist and are valid
- [ ] The 7-step pattern is followed exactly
- [ ] All file paths in lesson.yaml match actual files
- [ ] Learning objectives are concrete and testable
- [ ] The hook is engaging and relevant
- [ ] The concept section builds clear mental models
- [ ] Examples are worked through step-by-step
- [ ] Practice questions have detailed explanations
- [ ] Quiz questions directly test the stated objectives
- [ ] Reading level is appropriate for target audience
- [ ] Estimated time totals 20-60 minutes
- [ ] All markdown renders correctly
- [ ] All JSON is syntactically valid

## Example Reference

See `examples/algebra-101/` for a complete, production-quality reference implementation. Study this example to understand:
- How to structure folders and files
- What level of detail to include
- What tone and style to use
- How to write effective questions and explanations

## Remember

Your goal is to create learning experiences that are:
1. **Consistent**: Follow the pattern every time
2. **Complete**: Self-contained but connected to broader outcomes
3. **Clear**: Accessible to motivated non-experts
4. **Effective**: Actually teach the stated objectives

The structure exists to support learning, not constrain creativity. Within each step, you have freedom to find the best way to teach the concept. The pattern simply ensures you hit all the pedagogical bases.

Good luck building amazing learning experiences!

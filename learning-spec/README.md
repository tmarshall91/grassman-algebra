# Learning Spec

## Purpose

This repository defines the **content standard** for the "Learn Anything" system. It serves as a contract for how learning content should be structured, enabling AI agents and content creators to generate courses in a consistent, interoperable format.

The learning-spec is designed to:
- Provide a clear, machine-readable structure for educational content
- Enable AI agents (LLMs) to generate high-quality, consistent learning experiences
- Ensure content can be consumed by any compliant learning platform
- Maintain quality and pedagogical best practices across all topics

## Content Hierarchy

Learning content follows a four-level hierarchy:

```
Program (e.g., "Algebra 101")
  └── Module (e.g., "Foundations")
       └── Lesson (e.g., "Number Sense")
            └── Step (e.g., Hook, Concept, Example, etc.)
```

### Program
A complete learning program covering a broad topic or skill area. Programs contain multiple modules and represent 10-100+ hours of learning.

### Module
A thematic unit within a program, grouping related lessons. Modules provide structure and progression through a program.

### Lesson
A focused learning unit covering a specific concept or skill, typically 20-60 minutes. Each lesson follows a canonical pedagogical flow through multiple steps.

### Step
An atomic unit of instruction. Steps come in specific types (hook, concept, example, exercise, quiz, reflection) that form a proven learning pattern.

## Repository Structure

```
learning-spec/
├── README.md                          # This file
├── schema/                            # JSON Schema definitions
│   ├── program.schema.json           # Program metadata structure
│   ├── module.schema.json            # Module metadata structure
│   ├── lesson.schema.json            # Lesson metadata structure
│   └── step.schema.json              # Step content structure
├── examples/                          # Reference implementations
│   └── algebra-101/                  # Complete example course
│       ├── program.yaml
│       └── modules/
│           └── 01-foundations/
│               ├── module.yaml
│               └── lessons/
│                   └── 01-number-sense/
│                       ├── lesson.yaml
│                       ├── steps/
│                       └── assets/
└── specs_for_agents/                  # Instructions for content generators
    ├── lesson_builder_instructions.md # How to create lessons
    ├── step_type_guide.md            # Guide to each step type
    └── quality_checklist.md          # Quality assurance criteria
```

## Schemas

The `schema/` directory contains JSON Schema definitions for each content level. These schemas:
- Define required and optional fields
- Specify data types and validation rules
- Document the expected structure for programs, modules, lessons, and steps
- Enable automated validation of content

## Examples

The `examples/` directory contains complete, production-quality reference courses. These serve as:
- Templates for new content creation
- Validation that the schemas support real-world use cases
- Demonstrations of best practices in instructional design

Start with `examples/algebra-101/` to see a complete program structure.

## Agent Instructions

The `specs_for_agents/` directory contains detailed instructions for AI systems generating content:
- **lesson_builder_instructions.md**: Step-by-step guide to creating lessons
- **step_type_guide.md**: Detailed description of each step type
- **quality_checklist.md**: Quality criteria for content evaluation

These documents translate the schemas into actionable guidance for content generation.

## Getting Started

### For Content Creators
1. Review the example course in `examples/algebra-101/`
2. Study the schemas in `schema/` to understand required fields
3. Follow the `specs_for_agents/` instructions to maintain consistency
4. Validate your content against the schemas

### For Platform Developers
1. Implement loaders that can parse YAML and Markdown/JSON content
2. Use the schemas to validate incoming content
3. Support the canonical step flow for consistent user experience
4. See the `learning-app` sibling repository for a reference implementation

### For AI Agents
1. Read all files in `specs_for_agents/` before generating content
2. Follow the canonical lesson pattern strictly
3. Use the examples as templates for structure and tone
4. Validate output against the schemas conceptually

## Design Principles

1. **Consistency**: All lessons follow the same pedagogical pattern
2. **Modularity**: Content is composable and reusable
3. **Accessibility**: Plain language, clear structure, suitable for adult learners
4. **Completeness**: Each lesson is self-contained but links to broader outcomes
5. **Machine-Readable**: Structured data enables automation and tooling
6. **Human-Friendly**: YAML and Markdown are easy to read and edit

## License

[Specify your license here]

## Contributing

[Specify contribution guidelines here]

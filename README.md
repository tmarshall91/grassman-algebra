# Learn Anything - Monorepo

A complete "learn anything" system designed to make high-quality education accessible, consistent, and AI-generatable. This monorepo contains two main components:

1. **learning-spec** - The content standard that defines how learning content should be structured
2. **learning-app** - A Next.js application that renders content following the learning-spec standard

## 🎯 Vision

Create a world where:
- AI agents can generate high-quality courses on any topic by following a proven pedagogical pattern
- All learning content follows a consistent, effective structure
- Learners get a reliable, step-by-step experience regardless of subject matter
- Content is portable and can be consumed by any compliant learning platform

## 📁 Repository Structure

```
/
├── learning-spec/           # Content standard and examples
│   ├── schema/             # JSON schemas for validation
│   ├── examples/           # Reference courses (e.g., algebra-101)
│   ├── specs_for_agents/   # Instructions for AI content generation
│   └── README.md
│
└── learning-app/           # Next.js reader application
    ├── src/
    │   ├── app/           # Next.js 13+ App Router pages
    │   ├── lib/           # Loaders, parsers, models, sequencing
    │   └── components/    # React components for rendering
    ├── content/           # Learning content (follows learning-spec)
    └── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Running the Learning App

1. Navigate to the learning-app directory:
```bash
cd learning-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

You should see the "Algebra 101" example program available!

### Building for Production

```bash
cd learning-app
npm run build
npm start
```

## 📚 The Learning-Spec Standard

The `learning-spec/` directory defines a four-level content hierarchy:

### Hierarchy

```
Program → Module → Lesson → Step
```

- **Program**: A complete course (e.g., "Algebra 101", "Introduction to Python")
- **Module**: A thematic grouping of related lessons
- **Lesson**: A focused 20-60 minute learning unit
- **Step**: An atomic instructional element

### The Canonical 7-Step Lesson Pattern

Every lesson follows this proven pedagogical flow:

1. **Hook** - Capture attention and establish relevance (3-5 min)
2. **Concept** - Explain core ideas with clear mental models (7-10 min)
3. **Example** - Demonstrate through worked examples (5-8 min)
4. **Guided Practice** - Learner tries easier problems with support (5-10 min)
5. **Challenge** - Test deeper understanding (5-10 min)
6. **Reflection** - Metacognitive consolidation (3-5 min)
7. **Quiz** - Verify objective achievement (5-8 min)

This pattern ensures:
- Consistent quality across all topics
- Proven pedagogical effectiveness
- Clear, measurable learning outcomes
- Engaging, step-by-step progression

### For Content Creators

See `learning-spec/README.md` and `learning-spec/specs_for_agents/` for detailed instructions on:
- How to structure content
- What each step type should contain
- Quality standards and checklists
- Complete examples to follow

### For AI Agents

Read the agent instruction documents in `learning-spec/specs_for_agents/`:
- `lesson_builder_instructions.md` - Complete creation workflow
- `step_type_guide.md` - Detailed specs for each step type
- `quality_checklist.md` - Quality assurance criteria

## 🏗️ Architecture

### Content Loading Flow

1. **File System** - YAML/Markdown/JSON files in `content/` directory
2. **Loaders** - Read files and parse into raw data
3. **Parsers** - Convert raw data into typed TypeScript objects
4. **Models** - Strongly-typed Program/Module/Lesson/Step interfaces
5. **Components** - React components render steps based on type
6. **Pages** - Next.js App Router pages orchestrate everything

### Key Design Decisions

- **Static content** - All content is loaded from the filesystem (can be easily adapted for CMS/database)
- **Server-side loading** - Content is loaded server-side for SEO and performance
- **Type safety** - Full TypeScript coverage for content models
- **Extensible** - Easy to add new step types or modify existing ones
- **Standards-based** - JSON Schema validation ensures consistency

## 🎨 Customization

### Adding New Content

1. Create a new program directory in `learning-app/content/examples/`
2. Follow the structure from `learning-spec/examples/algebra-101/`
3. Ensure all YAML/JSON matches the schemas in `learning-spec/schema/`
4. Restart the dev server - your program will appear automatically!

### Styling

Edit `learning-app/src/app/globals.css` to customize the appearance. The current styling is minimal and functional - perfect for extending with your brand.

### Adding New Step Types

1. Add the new type to `StepType` in `src/lib/models/program.ts`
2. Create a new component in `src/app/components/steps/`
3. Update `StepRenderer.tsx` to handle the new type
4. Update the schemas in `learning-spec/schema/step.schema.json`

## 📊 Example Content

The repository includes a complete example program: **Algebra 101**

- **Program**: Algebra 101 (beginner level, 12 hours)
- **Module**: Foundations
- **Lesson**: Number Sense (30 minutes)
- **Steps**: Full 7-step pattern with real content

Browse through `learning-spec/examples/algebra-101/` to see:
- How content is structured
- What quality looks like
- How to write engaging, educational content

## 🔮 Future Enhancements

This is a foundation that can grow in many directions:

### Content Features
- [ ] User progress tracking and completion status
- [ ] Bookmarking and note-taking
- [ ] Downloadable resources and assets
- [ ] Video and interactive embed support
- [ ] Discussion forums per lesson

### Platform Features
- [ ] User authentication and profiles
- [ ] Certificate generation
- [ ] Adaptive learning paths
- [ ] Real-time collaboration
- [ ] Mobile app versions

### Content Creation
- [ ] Web-based content editor
- [ ] AI-assisted content generation
- [ ] Content versioning and updates
- [ ] Multi-language support
- [ ] Automated quality validation

### Analytics
- [ ] Learning analytics dashboard
- [ ] A/B testing different lesson structures
- [ ] Completion rate tracking
- [ ] Knowledge retention metrics

## 🤝 Contributing

This system is designed to be extended! Potential contributions:

1. **New example programs** in different subject areas
2. **Improved styling** and UI/UX enhancements
3. **Additional step types** for different learning modalities
4. **Testing infrastructure** for content validation
5. **Documentation** and tutorials

## 📄 License

[Specify your license here]

## 🙏 Acknowledgments

This system is built on research-backed pedagogical principles:
- Constructivist learning theory
- Cognitive load theory
- Deliberate practice
- Metacognitive development
- Mastery-based learning

## 📞 Support

For questions, issues, or feature requests, please [open an issue](../../issues).

---

**Built with:**
- Next.js 14
- React 18
- TypeScript 5
- YAML & Markdown for content authoring
- Love for education and learning ❤️

**Remember:** The goal isn't just to teach content, but to create confident, capable learners who can tackle any challenge.

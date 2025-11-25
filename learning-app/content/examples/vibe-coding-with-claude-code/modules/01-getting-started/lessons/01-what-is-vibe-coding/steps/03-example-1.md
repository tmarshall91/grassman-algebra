---
id: example
type: example
estimated_minutes: 7
---

# Vibe Coding in Action: Building a Feature

Let's compare how the same feature gets built with traditional coding versus vibe coding.

## The Task

Build a user profile page that:
- Fetches user data from an API
- Displays profile information with avatar
- Shows loading and error states
- Is responsive and accessible

## Traditional Coding Approach

**9:00 AM** - Start working

1. **Setup** (15 min): Create component file, import dependencies, set up state management
2. **Google** (10 min): "How to fetch data in React with error handling"
3. **Implementation** (25 min): Write fetch logic, useState, useEffect
4. **Error** (5 min): "Cannot read property of undefined"
5. **Debug** (15 min): Ah, data wasn't loaded yet
6. **Styling** (30 min): Set up CSS, make it responsive
7. **Google again** (10 min): "React loading spinner best practices"
8. **Testing** (20 min): Manual testing, fix edge cases
9. **Accessibility** (15 min): Add ARIA labels... wait, what's the right pattern?
10. **Google more** (10 min): Read accessibility docs

**Total time: ~2.5 hours** (lots of context switching, research interruptions)

## Vibe Coding Approach

**9:00 AM** - Start working with Claude Code

### **Iteration 1: High-level intent** (2 min)

**You**: "Create a user profile component that fetches data from /api/user/:id, shows avatar and info, handles loading and errors, make it accessible"

**Claude**: *Generates complete component with:*
- Proper data fetching with error handling
- Loading states
- Responsive layout
- Basic accessibility attributes

### **Iteration 2: Review and refine** (3 min)

**You**: "This looks good! Can you add a skeleton loader instead of a spinner, and make sure keyboard navigation works?"

**Claude**: *Updates component with skeleton UI and improved focus management*

### **Iteration 3: Style polish** (5 min)

**You**: "The layout needs some work. Make the avatar larger, add a card design with shadow, and use a grid for the info fields"

**Claude**: *Refines styling with modern design patterns*

### **Iteration 4: Testing** (5 min)

**You**: "Generate tests for this component including error cases"

**Claude**: *Creates comprehensive test suite*

### **Final review** (5 min)

You read through the code, verify it makes sense, test it locally, make minor tweaks.

**Total time: ~20 minutes** (stayed in flow, no context switching)

## Key Differences

| Aspect | Traditional | Vibe Coding |
|--------|------------|-------------|
| **Mental mode** | Syntax and implementation details | Architecture and requirements |
| **Time spent** | 60% coding, 40% researching/debugging | 20% prompting, 30% reviewing, 50% thinking/designing |
| **Context switches** | Constant (code → Google → docs → code) | Minimal (stay in conversation) |
| **Flow state** | Interrupted frequently | Maintained throughout |
| **Learning** | Slow (read docs, try, fail, retry) | Fast (see examples, get explanations) |

## Real Developer Example

Here's what a real vibe coding session looks like:

```
You: "I need to refactor this UserService class to use dependency
injection and make it testable"

Claude: *Refactors entire class, adds interfaces, updates all
call sites, generates mock implementations*

You: "Perfect! Now write unit tests for each method"

Claude: *Creates comprehensive test suite*

You: "The loadUserPreferences method seems complex. Can you explain
what it's doing and if there's a simpler approach?"

Claude: *Explains the logic, suggests a cleaner implementation using
a strategy pattern*

You: "I like that! Let's use the strategy pattern. Also update the
tests to cover the new approach."

Claude: *Implements the pattern, updates all tests*

You: "Great! Commit this with a clear message about the refactor"

Claude: *Stages changes and creates well-formatted commit*
```

**Result**: A major refactor that would take hours happened in 10 minutes. But more importantly, you **learned** the strategy pattern by seeing it applied to your actual code.

## The Vibe Coding Rhythm

Notice the pattern:

1. **Express intent** clearly
2. **Review** what was generated
3. **Ask questions** to understand
4. **Refine** through iteration
5. **Verify** the result makes sense

You're not just getting code faster—you're **thinking more clearly** about what you're building.

## Why This Works

Vibe coding works because:

- **No mental stack overflow**: AI holds implementation details, you hold architecture
- **Immediate feedback**: See results instantly, stay in flow
- **Learning loop**: Every interaction teaches you something
- **Creative freedom**: Try bold ideas without fear of time waste
- **Energy conservation**: Save mental energy for hard problems

Next, you'll practice this rhythm yourself!

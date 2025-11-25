/**
 * Prerequisites checking logic
 *
 * For now, this is a simple stub that assumes completion based on lesson order.
 * In a real implementation, this would integrate with a user progress tracking system.
 */

import { Program, Lesson } from '../models/program';

/**
 * Check if a lesson's prerequisites are met
 *
 * Current implementation: Returns true if all prerequisite lessons come before
 * this lesson in the program structure (simple ordering check).
 *
 * @param program The program containing the lesson
 * @param lessonId The lesson to check
 * @returns true if prerequisites are met
 */
export function arePrerequisitesMet(program: Program, lessonId: string): boolean {
  // Find the lesson in the program
  let targetLesson: Lesson | null = null;
  let targetModuleIndex = -1;
  let targetLessonIndex = -1;

  for (let i = 0; i < program.modules.length; i++) {
    const module = program.modules[i];
    const lessonIndex = module.lessons.findIndex(
      (l) => l.id === lessonId || l.slug === lessonId
    );

    if (lessonIndex !== -1) {
      targetLesson = module.lessons[lessonIndex];
      targetModuleIndex = i;
      targetLessonIndex = lessonIndex;
      break;
    }
  }

  if (!targetLesson) {
    return false; // Lesson not found
  }

  // If no prerequisites specified, consider them met
  if (!targetLesson.prerequisites || targetLesson.prerequisites.length === 0) {
    return true;
  }

  // Check each prerequisite
  for (const prereqId of targetLesson.prerequisites) {
    // Find the prerequisite lesson
    let prereqFound = false;
    let prereqComesFirst = false;

    for (let i = 0; i < program.modules.length; i++) {
      const module = program.modules[i];
      for (let j = 0; j < module.lessons.length; j++) {
        const lesson = module.lessons[j];

        if (lesson.id === prereqId || lesson.slug === prereqId) {
          prereqFound = true;

          // Check if this prerequisite comes before the target lesson
          if (i < targetModuleIndex) {
            prereqComesFirst = true;
          } else if (i === targetModuleIndex && j < targetLessonIndex) {
            prereqComesFirst = true;
          }

          break;
        }
      }

      if (prereqFound) break;
    }

    // If prerequisite not found or doesn't come first, requirements not met
    if (!prereqFound || !prereqComesFirst) {
      // For external prerequisites (not in this program), assume they're met
      if (!prereqFound) {
        continue;
      }
      return false;
    }
  }

  return true;
}

/**
 * Get the list of incomplete prerequisites for a lesson
 *
 * @param program The program containing the lesson
 * @param lessonId The lesson to check
 * @returns Array of prerequisite lesson IDs that are not yet met
 */
export function getIncompletePrerequisites(program: Program, lessonId: string): string[] {
  const lesson = findLessonInProgram(program, lessonId);

  if (!lesson || !lesson.prerequisites) {
    return [];
  }

  // In a real implementation, this would check actual completion status
  // For now, just return empty array (assume all are complete)
  return [];
}

/**
 * Helper function to find a lesson in a program
 */
function findLessonInProgram(program: Program, lessonId: string): Lesson | null {
  for (const module of program.modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId || l.slug === lessonId);
    if (lesson) {
      return lesson;
    }
  }
  return null;
}

/**
 * Get recommended next lesson based on prerequisites and order
 *
 * @param program The program
 * @param currentLessonId The current lesson (optional)
 * @returns The next recommended lesson, or null if none available
 */
export function getRecommendedNextLesson(
  program: Program,
  currentLessonId?: string
): Lesson | null {
  if (!currentLessonId) {
    // Return first lesson in first module
    if (program.modules.length > 0 && program.modules[0].lessons.length > 0) {
      return program.modules[0].lessons[0];
    }
    return null;
  }

  // Find current lesson
  let currentModuleIndex = -1;
  let currentLessonIndex = -1;

  for (let i = 0; i < program.modules.length; i++) {
    const lessonIndex = program.modules[i].lessons.findIndex(
      (l) => l.id === currentLessonId || l.slug === currentLessonId
    );

    if (lessonIndex !== -1) {
      currentModuleIndex = i;
      currentLessonIndex = lessonIndex;
      break;
    }
  }

  if (currentModuleIndex === -1) {
    return null;
  }

  const currentModule = program.modules[currentModuleIndex];

  // Try next lesson in current module
  if (currentLessonIndex < currentModule.lessons.length - 1) {
    return currentModule.lessons[currentLessonIndex + 1];
  }

  // Try first lesson in next module
  if (currentModuleIndex < program.modules.length - 1) {
    const nextModule = program.modules[currentModuleIndex + 1];
    if (nextModule.lessons.length > 0) {
      return nextModule.lessons[0];
    }
  }

  return null;
}

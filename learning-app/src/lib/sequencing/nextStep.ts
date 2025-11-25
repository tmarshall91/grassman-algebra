/**
 * Step sequencing and navigation logic
 */

import { Program, StepNavigation } from '../models/program';

/**
 * Get the next step in the program
 */
export function getNextStep(
  program: Program,
  currentModuleId: string,
  currentLessonId: string,
  currentStepId: string
): StepNavigation | null {
  // Find current module
  const moduleIndex = program.modules.findIndex((m) => m.id === currentModuleId);
  if (moduleIndex === -1) return null;

  const currentModule = program.modules[moduleIndex];

  // Find current lesson
  const lessonIndex = currentModule.lessons.findIndex(
    (l) => l.id === currentLessonId || l.slug === currentLessonId
  );
  if (lessonIndex === -1) return null;

  const currentLesson = currentModule.lessons[lessonIndex];

  // Find current step
  const stepIndex = currentLesson.steps.findIndex((s) => s.id === currentStepId);
  if (stepIndex === -1) return null;

  // Try next step in current lesson
  if (stepIndex < currentLesson.steps.length - 1) {
    const nextStep = currentLesson.steps[stepIndex + 1];
    return {
      moduleId: currentModule.id,
      lessonId: currentLesson.id,
      stepId: nextStep.id,
      stepIndex: stepIndex + 1,
    };
  }

  // Try first step of next lesson in current module
  if (lessonIndex < currentModule.lessons.length - 1) {
    const nextLesson = currentModule.lessons[lessonIndex + 1];
    if (nextLesson.steps.length > 0) {
      return {
        moduleId: currentModule.id,
        lessonId: nextLesson.id,
        stepId: nextLesson.steps[0].id,
        stepIndex: 0,
      };
    }
  }

  // Try first step of first lesson in next module
  if (moduleIndex < program.modules.length - 1) {
    const nextModule = program.modules[moduleIndex + 1];
    if (nextModule.lessons.length > 0) {
      const firstLesson = nextModule.lessons[0];
      if (firstLesson.steps.length > 0) {
        return {
          moduleId: nextModule.id,
          lessonId: firstLesson.id,
          stepId: firstLesson.steps[0].id,
          stepIndex: 0,
        };
      }
    }
  }

  // No next step available
  return null;
}

/**
 * Get the previous step in the program
 */
export function getPreviousStep(
  program: Program,
  currentModuleId: string,
  currentLessonId: string,
  currentStepId: string
): StepNavigation | null {
  // Find current module
  const moduleIndex = program.modules.findIndex((m) => m.id === currentModuleId);
  if (moduleIndex === -1) return null;

  const currentModule = program.modules[moduleIndex];

  // Find current lesson
  const lessonIndex = currentModule.lessons.findIndex(
    (l) => l.id === currentLessonId || l.slug === currentLessonId
  );
  if (lessonIndex === -1) return null;

  const currentLesson = currentModule.lessons[lessonIndex];

  // Find current step
  const stepIndex = currentLesson.steps.findIndex((s) => s.id === currentStepId);
  if (stepIndex === -1) return null;

  // Try previous step in current lesson
  if (stepIndex > 0) {
    const prevStep = currentLesson.steps[stepIndex - 1];
    return {
      moduleId: currentModule.id,
      lessonId: currentLesson.id,
      stepId: prevStep.id,
      stepIndex: stepIndex - 1,
    };
  }

  // Try last step of previous lesson in current module
  if (lessonIndex > 0) {
    const prevLesson = currentModule.lessons[lessonIndex - 1];
    if (prevLesson.steps.length > 0) {
      const lastStepIndex = prevLesson.steps.length - 1;
      return {
        moduleId: currentModule.id,
        lessonId: prevLesson.id,
        stepId: prevLesson.steps[lastStepIndex].id,
        stepIndex: lastStepIndex,
      };
    }
  }

  // Try last step of last lesson in previous module
  if (moduleIndex > 0) {
    const prevModule = program.modules[moduleIndex - 1];
    if (prevModule.lessons.length > 0) {
      const lastLesson = prevModule.lessons[prevModule.lessons.length - 1];
      if (lastLesson.steps.length > 0) {
        const lastStepIndex = lastLesson.steps.length - 1;
        return {
          moduleId: prevModule.id,
          lessonId: lastLesson.id,
          stepId: lastLesson.steps[lastStepIndex].id,
          stepIndex: lastStepIndex,
        };
      }
    }
  }

  // No previous step available
  return null;
}

/**
 * Get current step index and total steps in lesson
 */
export function getStepProgress(
  program: Program,
  moduleId: string,
  lessonId: string,
  stepId: string
): { currentStep: number; totalSteps: number } | null {
  const module = program.modules.find((m) => m.id === moduleId);
  if (!module) return null;

  const lesson = module.lessons.find((l) => l.id === lessonId || l.slug === lessonId);
  if (!lesson) return null;

  const stepIndex = lesson.steps.findIndex((s) => s.id === stepId);
  if (stepIndex === -1) return null;

  return {
    currentStep: stepIndex + 1, // 1-indexed for display
    totalSteps: lesson.steps.length,
  };
}

/**
 * Check if this is the first step in the program
 */
export function isFirstStep(
  program: Program,
  moduleId: string,
  lessonId: string,
  stepId: string
): boolean {
  if (program.modules.length === 0) return true;

  const firstModule = program.modules[0];
  if (firstModule.id !== moduleId) return false;
  if (firstModule.lessons.length === 0) return true;

  const firstLesson = firstModule.lessons[0];
  if (firstLesson.id !== lessonId && firstLesson.slug !== lessonId) return false;
  if (firstLesson.steps.length === 0) return true;

  const firstStep = firstLesson.steps[0];
  return firstStep.id === stepId;
}

/**
 * Check if this is the last step in the program
 */
export function isLastStep(
  program: Program,
  moduleId: string,
  lessonId: string,
  stepId: string
): boolean {
  if (program.modules.length === 0) return true;

  const lastModule = program.modules[program.modules.length - 1];
  if (lastModule.id !== moduleId) return false;
  if (lastModule.lessons.length === 0) return true;

  const lastLesson = lastModule.lessons[lastModule.lessons.length - 1];
  if (lastLesson.id !== lessonId && lastLesson.slug !== lessonId) return false;
  if (lastLesson.steps.length === 0) return true;

  const lastStep = lastLesson.steps[lastLesson.steps.length - 1];
  return lastStep.id === stepId;
}

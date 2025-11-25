/**
 * Type definitions for learning content models.
 * These mirror the JSON schemas defined in learning-spec.
 */

/**
 * Difficulty level for programs and lessons
 */
export type Level = 'beginner' | 'intermediate' | 'advanced';

/**
 * Types of steps in a lesson
 */
export type StepType = 'hook' | 'concept' | 'example' | 'exercise' | 'quiz' | 'reflection';

/**
 * Question type for exercises and quizzes
 */
export type QuestionType = 'multiple-choice' | 'true-false' | 'short-answer';

/**
 * A single question in an exercise or quiz
 */
export interface Question {
  id: string;
  prompt_markdown: string;
  type?: QuestionType;
  options?: string[];
  answer_index: number;
  explanation_markdown?: string;
  hint?: string;
}

/**
 * Exercise or quiz data structure
 */
export interface ExerciseData {
  id: string;
  type: 'exercise' | 'quiz';
  estimated_minutes?: number;
  title?: string;
  instructions?: string;
  questions: Question[];
  difficulty?: 'easy' | 'medium' | 'hard' | 'challenge';
  metadata?: Record<string, unknown>;
}

/**
 * A single step within a lesson
 */
export interface Step {
  id: string;
  type: StepType;
  title?: string;
  bodyMarkdown?: string;
  exerciseData?: ExerciseData;
  estimatedMinutes?: number;
  metadata?: Record<string, unknown>;
  order?: number;
  file?: string;
}

/**
 * A lesson within a module
 */
export interface Lesson {
  id: string;
  slug: string;
  title: string;
  summary: string;
  level: Level;
  tags: string[];
  estimatedMinutes: number;
  objectives: string[];
  prerequisites: string[];
  steps: Step[];
  canonicalFlow?: {
    pattern: string;
  };
}

/**
 * A module within a program
 */
export interface Module {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  estimatedHours?: number;
  objectives?: string[];
}

/**
 * A complete learning program
 */
export interface Program {
  id: string;
  title: string;
  description: string;
  level: Level;
  tags: string[];
  estimatedHours: number;
  prerequisites: string[];
  outcomes: string[];
  modules: Module[];
  version?: string;
  authors?: Array<{
    name: string;
    email?: string;
    url?: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Navigation result for next/previous step
 */
export interface StepNavigation {
  moduleId: string;
  lessonId: string;
  stepId: string;
  stepIndex: number;
}

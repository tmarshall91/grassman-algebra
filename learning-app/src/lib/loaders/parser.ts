/**
 * Parsers for converting raw file content into typed objects
 */

import yaml from 'js-yaml';
import matter from 'gray-matter';
import { Program, Module, Lesson, Step, ExerciseData } from '../models/program';

/**
 * Parse a program YAML file into a Program object (without modules loaded)
 */
export function parseProgramYaml(yamlContent: string): Partial<Program> {
  const data = yaml.load(yamlContent) as any;

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    level: data.level,
    tags: data.tags || [],
    estimatedHours: data.estimated_hours || 0,
    prerequisites: data.prerequisites || [],
    outcomes: data.outcomes || [],
    version: data.version,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    modules: [], // Will be populated by loader
  };
}

/**
 * Parse a module YAML file into a Module object (without lessons loaded)
 */
export function parseModuleYaml(yamlContent: string): Partial<Module> {
  const data = yaml.load(yamlContent) as any;

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    order: data.order,
    estimatedHours: data.estimated_hours,
    objectives: data.objectives,
    lessons: [], // Will be populated by loader
  };
}

/**
 * Parse a lesson YAML file into a Lesson object (without steps loaded)
 */
export function parseLessonYaml(yamlContent: string): Partial<Lesson> {
  const data = yaml.load(yamlContent) as any;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    summary: data.summary,
    level: data.level,
    tags: data.tags || [],
    estimatedMinutes: data.estimated_minutes || 0,
    prerequisites: data.prerequisites || [],
    objectives: data.objectives || [],
    canonicalFlow: data.canonical_flow,
    steps: [], // Will be populated by loader with step metadata
  };
}

/**
 * Parse a markdown step file (hook, concept, example, reflection)
 */
export function parseMarkdownStep(fileContent: string, stepId: string, stepType: string): Step {
  const { data, content } = matter(fileContent);

  return {
    id: data.id || stepId,
    type: stepType as any,
    title: data.title,
    bodyMarkdown: content.trim(),
    estimatedMinutes: data.estimated_minutes,
    metadata: data,
  };
}

/**
 * Parse a JSON step file (exercise, quiz)
 */
export function parseExerciseOrQuizJson(jsonContent: string): Step {
  const data: ExerciseData = JSON.parse(jsonContent);

  return {
    id: data.id,
    type: data.type,
    title: data.title,
    exerciseData: data,
    estimatedMinutes: data.estimated_minutes,
    metadata: data.metadata,
  };
}

/**
 * Get step info from lesson YAML data
 */
export function getStepMetadata(lessonYamlData: any): Array<{
  id: string;
  type: string;
  file: string;
  order: number;
  difficulty?: string;
}> {
  const steps = lessonYamlData.steps || [];
  return steps.map((step: any, index: number) => ({
    id: step.id,
    type: step.type,
    file: step.file,
    order: step.order || index + 1,
    difficulty: step.difficulty,
  }));
}

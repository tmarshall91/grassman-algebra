/**
 * File system loader for learning content
 * Loads programs, modules, and lessons from the content directory
 */

import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';
import {
  parseProgramYaml,
  parseModuleYaml,
  parseLessonYaml,
  parseMarkdownStep,
  parseExerciseOrQuizJson,
  getStepMetadata,
} from './parser';
import { Program, Module, Lesson, Step } from '../models/program';

// Content root directory
const CONTENT_ROOT = path.join(process.cwd(), 'content', 'examples');

/**
 * Check if a file exists
 */
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Load all programs from the content directory
 */
export async function loadPrograms(): Promise<Program[]> {
  try {
    const programDirs = await fs.readdir(CONTENT_ROOT);
    const programs: Program[] = [];

    for (const programDir of programDirs) {
      const programPath = path.join(CONTENT_ROOT, programDir);
      const stats = await fs.stat(programPath);

      if (stats.isDirectory()) {
        const program = await loadProgram(programDir);
        if (program) {
          programs.push(program);
        }
      }
    }

    return programs;
  } catch (error) {
    console.error('Error loading programs:', error);
    return [];
  }
}

/**
 * Load a single program by ID
 */
export async function loadProgram(programId: string): Promise<Program | null> {
  try {
    const programPath = path.join(CONTENT_ROOT, programId);
    const programYamlPath = path.join(programPath, 'program.yaml');

    if (!(await fileExists(programYamlPath))) {
      return null;
    }

    // Load program metadata
    const programYamlContent = await fs.readFile(programYamlPath, 'utf-8');
    const programData = parseProgramYaml(programYamlContent);
    const programYamlParsed = yaml.load(programYamlContent) as any;

    // Load modules
    const modules: Module[] = [];
    const moduleRefs = programYamlParsed.modules || [];

    for (const moduleRef of moduleRefs) {
      const module = await loadModule(programId, moduleRef.id);
      if (module) {
        modules.push(module);
      }
    }

    // Sort modules by order
    modules.sort((a, b) => a.order - b.order);

    return {
      ...programData,
      modules,
    } as Program;
  } catch (error) {
    console.error(`Error loading program ${programId}:`, error);
    return null;
  }
}

/**
 * Load a single module
 */
async function loadModule(programId: string, moduleId: string): Promise<Module | null> {
  try {
    const programPath = path.join(CONTENT_ROOT, programId);
    const modulesPath = path.join(programPath, 'modules');

    // Find the module directory (might have numeric prefix)
    const moduleDirs = await fs.readdir(modulesPath);
    const moduleDir = moduleDirs.find((dir) => {
      // Match either exact id or ends with id (for numeric prefixes like "01-foundations")
      return dir === moduleId || dir.endsWith(`-${moduleId}`) || dir.endsWith(moduleId);
    });

    if (!moduleDir) {
      return null;
    }

    const modulePath = path.join(modulesPath, moduleDir);
    const moduleYamlPath = path.join(modulePath, 'module.yaml');

    if (!(await fileExists(moduleYamlPath))) {
      return null;
    }

    // Load module metadata
    const moduleYamlContent = await fs.readFile(moduleYamlPath, 'utf-8');
    const moduleData = parseModuleYaml(moduleYamlContent);
    const moduleYamlParsed = yaml.load(moduleYamlContent) as any;

    // Load lessons
    const lessons: Lesson[] = [];
    const lessonRefs = moduleYamlParsed.lessons || [];

    for (const lessonRef of lessonRefs) {
      const lesson = await loadLesson(programId, moduleDir, lessonRef.id);
      if (lesson) {
        lessons.push(lesson);
      }
    }

    // Sort lessons by order
    lessons.sort((a, b) => {
      const aOrder = a.steps[0]?.order || 0;
      const bOrder = b.steps[0]?.order || 0;
      return aOrder - bOrder;
    });

    return {
      ...moduleData,
      lessons,
    } as Module;
  } catch (error) {
    console.error(`Error loading module ${moduleId}:`, error);
    return null;
  }
}

/**
 * Load a single lesson with all its steps
 */
export async function loadLesson(
  programId: string,
  moduleDir: string,
  lessonId: string
): Promise<Lesson | null> {
  try {
    const programPath = path.join(CONTENT_ROOT, programId);
    const modulePath = path.join(programPath, 'modules', moduleDir);
    const lessonsPath = path.join(modulePath, 'lessons');

    // Find the lesson directory (might have numeric prefix)
    const lessonDirs = await fs.readdir(lessonsPath);
    const lessonDir = lessonDirs.find((dir) => {
      return dir === lessonId || dir.endsWith(`-${lessonId}`) || dir.endsWith(lessonId);
    });

    if (!lessonDir) {
      return null;
    }

    const lessonPath = path.join(lessonsPath, lessonDir);
    const lessonYamlPath = path.join(lessonPath, 'lesson.yaml');

    if (!(await fileExists(lessonYamlPath))) {
      return null;
    }

    // Load lesson metadata
    const lessonYamlContent = await fs.readFile(lessonYamlPath, 'utf-8');
    const lessonData = parseLessonYaml(lessonYamlContent);
    const lessonYamlParsed = yaml.load(lessonYamlContent) as any;

    // Get step metadata from lesson.yaml
    const stepMetadata = getStepMetadata(lessonYamlParsed);

    // Load all steps
    const steps: Step[] = [];
    for (const stepMeta of stepMetadata) {
      const stepFilePath = path.join(lessonPath, stepMeta.file);

      if (!(await fileExists(stepFilePath))) {
        console.warn(`Step file not found: ${stepFilePath}`);
        continue;
      }

      const stepContent = await fs.readFile(stepFilePath, 'utf-8');
      let step: Step;

      // Parse based on file type
      if (stepFilePath.endsWith('.md')) {
        step = parseMarkdownStep(stepContent, stepMeta.id, stepMeta.type);
      } else if (stepFilePath.endsWith('.json')) {
        step = parseExerciseOrQuizJson(stepContent);
      } else {
        console.warn(`Unknown step file type: ${stepFilePath}`);
        continue;
      }

      // Add order and file info
      step.order = stepMeta.order;
      step.file = stepMeta.file;

      steps.push(step);
    }

    // Sort steps by order
    steps.sort((a, b) => (a.order || 0) - (b.order || 0));

    return {
      ...lessonData,
      steps,
    } as Lesson;
  } catch (error) {
    console.error(`Error loading lesson ${lessonId}:`, error);
    return null;
  }
}

/**
 * Find a lesson by ID across all programs
 */
export async function findLessonById(programId: string, lessonId: string): Promise<Lesson | null> {
  try {
    const program = await loadProgram(programId);
    if (!program) return null;

    for (const module of program.modules) {
      const lesson = module.lessons.find((l) => l.id === lessonId || l.slug === lessonId);
      if (lesson) {
        return lesson;
      }
    }

    return null;
  } catch (error) {
    console.error(`Error finding lesson ${lessonId}:`, error);
    return null;
  }
}

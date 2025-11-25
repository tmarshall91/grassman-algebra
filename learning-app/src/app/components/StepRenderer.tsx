/**
 * Step renderer component
 * Renders the appropriate step component based on step type
 */

import { Step } from '@/lib/models/program';
import HookStep from './steps/HookStep';
import ConceptStep from './steps/ConceptStep';
import ExampleStep from './steps/ExampleStep';
import ExerciseStep from './steps/ExerciseStep';
import QuizStep from './steps/QuizStep';
import ReflectionStep from './steps/ReflectionStep';

interface StepRendererProps {
  step: Step;
}

export default function StepRenderer({ step }: StepRendererProps) {
  switch (step.type) {
    case 'hook':
      return <HookStep bodyMarkdown={step.bodyMarkdown || ''} title={step.title} />;

    case 'concept':
      return <ConceptStep bodyMarkdown={step.bodyMarkdown || ''} title={step.title} />;

    case 'example':
      return <ExampleStep bodyMarkdown={step.bodyMarkdown || ''} title={step.title} />;

    case 'exercise':
      if (!step.exerciseData) {
        return <div>Error: Exercise data missing</div>;
      }
      return <ExerciseStep exerciseData={step.exerciseData} />;

    case 'quiz':
      if (!step.exerciseData) {
        return <div>Error: Quiz data missing</div>;
      }
      return <QuizStep exerciseData={step.exerciseData} />;

    case 'reflection':
      return <ReflectionStep bodyMarkdown={step.bodyMarkdown || ''} title={step.title} />;

    default:
      return <div>Unknown step type: {step.type}</div>;
  }
}

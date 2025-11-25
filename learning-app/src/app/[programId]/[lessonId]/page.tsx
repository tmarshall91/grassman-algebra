/**
 * Lesson page - shows lesson steps with navigation
 */

import { loadProgram, findLessonById } from '@/lib/loaders/fsLoader';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import StepRenderer from '@/app/components/StepRenderer';
import ProgressBar from '@/app/components/ProgressBar';
import LessonStepNavigator from '@/app/components/LessonStepNavigator';

interface LessonPageProps {
  params: {
    programId: string;
    lessonId: string;
  };
  searchParams: {
    step?: string;
  };
}

export default async function LessonPage({ params, searchParams }: LessonPageProps) {
  const program = await loadProgram(params.programId);

  if (!program) {
    notFound();
  }

  const lesson = await findLessonById(params.programId, params.lessonId);

  if (!lesson || lesson.steps.length === 0) {
    notFound();
  }

  // Get current step index from query param, default to 0
  const stepIndex = searchParams.step ? parseInt(searchParams.step, 10) : 0;

  // Ensure step index is valid
  if (stepIndex < 0 || stepIndex >= lesson.steps.length) {
    notFound();
  }

  const currentStep = lesson.steps[stepIndex];

  return (
    <div className="lesson-page">
      <Link href={`/${params.programId}`} className="back-link">
        ← Back to {program.title}
      </Link>

      <div className="lesson-header">
        <h1>{lesson.title}</h1>
        <div className="lesson-meta">
          <span className="level-badge">{lesson.level}</span>
          <span className="time-estimate">{lesson.estimatedMinutes} minutes</span>
        </div>
      </div>

      <ProgressBar currentStep={stepIndex + 1} totalSteps={lesson.steps.length} />

      <div className="step-container">
        <StepRenderer step={currentStep} />
      </div>

      <LessonStepNavigator
        programId={params.programId}
        lessonId={params.lessonId}
        currentStepId={currentStep.id}
        currentStepIndex={stepIndex}
        totalSteps={lesson.steps.length}
      />
    </div>
  );
}

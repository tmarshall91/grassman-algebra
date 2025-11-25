/**
 * Lesson step navigator component
 * Provides next/previous navigation between steps
 */

'use client';

import Link from 'next/link';

interface LessonStepNavigatorProps {
  programId: string;
  lessonId: string;
  currentStepId: string;
  currentStepIndex: number;
  totalSteps: number;
}

export default function LessonStepNavigator({
  programId,
  lessonId,
  currentStepId,
  currentStepIndex,
  totalSteps,
}: LessonStepNavigatorProps) {
  const hasPrevious = currentStepIndex > 0;
  const hasNext = currentStepIndex < totalSteps - 1;

  return (
    <div className="step-navigator">
      <div className="nav-buttons">
        {hasPrevious ? (
          <Link
            href={`/${programId}/${lessonId}?step=${currentStepIndex - 1}`}
            className="btn-nav btn-previous"
          >
            ← Previous Step
          </Link>
        ) : (
          <div className="btn-nav btn-disabled">← Previous Step</div>
        )}

        {hasNext ? (
          <Link
            href={`/${programId}/${lessonId}?step=${currentStepIndex + 1}`}
            className="btn-nav btn-next"
          >
            Next Step →
          </Link>
        ) : (
          <Link href={`/${programId}`} className="btn-nav btn-complete">
            Complete Lesson ✓
          </Link>
        )}
      </div>
    </div>
  );
}

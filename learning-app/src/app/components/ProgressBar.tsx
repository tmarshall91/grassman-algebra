/**
 * Progress bar component
 * Shows completion progress for a lesson
 */

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="progress-bar-container">
      <div className="progress-info">
        <span>
          Step {currentStep} of {totalSteps}
        </span>
        <span>{percentage}% Complete</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

/**
 * Lesson overview component
 * Displays lesson metadata and objectives
 */

import { Lesson } from '@/lib/models/program';
import Link from 'next/link';

interface LessonOverviewProps {
  lesson: Lesson;
  programId: string;
}

export default function LessonOverview({ lesson, programId }: LessonOverviewProps) {
  return (
    <div className="lesson-overview">
      <div className="lesson-header">
        <h1>{lesson.title}</h1>
        <div className="lesson-meta">
          <span className="level-badge">{lesson.level}</span>
          <span className="time-estimate">{lesson.estimatedMinutes} minutes</span>
        </div>
      </div>

      <p className="lesson-summary">{lesson.summary}</p>

      {lesson.objectives && lesson.objectives.length > 0 && (
        <div className="lesson-objectives">
          <h3>Learning Objectives</h3>
          <ul>
            {lesson.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      )}

      {lesson.prerequisites && lesson.prerequisites.length > 0 && (
        <div className="lesson-prerequisites">
          <h4>Prerequisites</h4>
          <ul>
            {lesson.prerequisites.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </div>
      )}

      {lesson.tags && lesson.tags.length > 0 && (
        <div className="lesson-tags">
          {lesson.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="lesson-steps-preview">
        <h3>Lesson Flow</h3>
        <ol className="steps-list">
          {lesson.steps.map((step, index) => (
            <li key={step.id}>
              <span className="step-type">{step.type}</span>
              {step.title && <span className="step-title">: {step.title}</span>}
            </li>
          ))}
        </ol>
      </div>

      <Link href={`/${programId}/${lesson.id}?step=0`} className="btn-start-lesson">
        Start Lesson
      </Link>
    </div>
  );
}

/**
 * Program overview page
 * Shows program details, modules, and lessons
 */

import { loadProgram } from '@/lib/loaders/fsLoader';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProgramPageProps {
  params: {
    programId: string;
  };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const program = await loadProgram(params.programId);

  if (!program) {
    notFound();
  }

  return (
    <div className="program-overview">
      <Link href="/" className="back-link">
        ← Back to Programs
      </Link>

      <div className="lesson-header">
        <h1>{program.title}</h1>
        <div className="lesson-meta">
          <span className="level-badge">{program.level}</span>
          <span className="time-estimate">{program.estimatedHours} hours</span>
        </div>
      </div>

      <p className="lesson-summary">{program.description}</p>

      {program.prerequisites && program.prerequisites.length > 0 && (
        <div className="lesson-prerequisites">
          <h3>Prerequisites</h3>
          <ul>
            {program.prerequisites.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </div>
      )}

      {program.outcomes && program.outcomes.length > 0 && (
        <div className="lesson-objectives">
          <h3>What You'll Learn</h3>
          <ul>
            {program.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      )}

      {program.tags && program.tags.length > 0 && (
        <div className="lesson-tags">
          {program.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="module-list">
        <h2>Modules & Lessons</h2>

        {program.modules.map((module) => (
          <div key={module.id} className="module-card">
            <h3>{module.title}</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>{module.description}</p>

            {module.estimatedHours && (
              <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '1rem' }}>
                Estimated time: {module.estimatedHours} hours
              </p>
            )}

            <ul className="lessons-list">
              {module.lessons.map((lesson) => (
                <li key={lesson.id} className="lesson-item">
                  <Link href={`/${program.id}/${lesson.id}`} className="lesson-link">
                    {lesson.title}
                  </Link>
                  <span style={{ color: '#999', marginLeft: '1rem', fontSize: '0.9rem' }}>
                    {lesson.estimatedMinutes} min
                  </span>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                    {lesson.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

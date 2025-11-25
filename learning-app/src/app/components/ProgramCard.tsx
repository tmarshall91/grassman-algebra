/**
 * Program card component
 * Displays a program summary in a card format
 */

import { Program } from '@/lib/models/program';
import Link from 'next/link';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const lessonCount = program.modules.reduce((acc, module) => acc + module.lessons.length, 0);

  return (
    <Link href={`/${program.id}`} className="program-card">
      <div className="card-header">
        <h2>{program.title}</h2>
        <span className="level-badge">{program.level}</span>
      </div>

      <p className="card-description">{program.description}</p>

      <div className="card-meta">
        <div className="meta-item">
          <span className="meta-label">Duration:</span>
          <span className="meta-value">{program.estimatedHours} hours</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Modules:</span>
          <span className="meta-value">{program.modules.length}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Lessons:</span>
          <span className="meta-value">{lessonCount}</span>
        </div>
      </div>

      {program.tags && program.tags.length > 0 && (
        <div className="card-tags">
          {program.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {program.outcomes && program.outcomes.length > 0 && (
        <div className="card-outcomes">
          <strong>You'll learn to:</strong>
          <ul>
            {program.outcomes.slice(0, 3).map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      )}
    </Link>
  );
}

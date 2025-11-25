/**
 * Program list component
 * Displays a list of available programs
 */

import { Program } from '@/lib/models/program';
import ProgramCard from './ProgramCard';

interface ProgramListProps {
  programs: Program[];
}

export default function ProgramList({ programs }: ProgramListProps) {
  if (programs.length === 0) {
    return (
      <div className="empty-state">
        <h2>No Programs Available</h2>
        <p>Check back later for new learning content.</p>
      </div>
    );
  }

  return (
    <div className="program-list">
      <h1>Available Programs</h1>
      <p className="subtitle">Choose a program to begin your learning journey</p>

      <div className="programs-grid">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}

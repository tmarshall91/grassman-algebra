/**
 * Home page - lists all available programs
 */

import { loadPrograms } from '@/lib/loaders/fsLoader';
import ProgramList from './components/ProgramList';

export default async function HomePage() {
  const programs = await loadPrograms();

  return <ProgramList programs={programs} />;
}

/**
 * Concept step component
 * Renders explanatory content with definitions and mental models
 */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ConceptStepProps {
  bodyMarkdown: string;
  title?: string;
}

export default function ConceptStep({ bodyMarkdown, title }: ConceptStepProps) {
  return (
    <div className="concept-step">
      <div className="step-type-badge">Concept</div>
      {title && <h2>{title}</h2>}
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{bodyMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
}

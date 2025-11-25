/**
 * Reflection step component
 * Renders metacognitive prompts for consolidation
 */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ReflectionStepProps {
  bodyMarkdown: string;
  title?: string;
}

export default function ReflectionStep({ bodyMarkdown, title }: ReflectionStepProps) {
  return (
    <div className="reflection-step">
      <div className="step-type-badge">Reflection</div>
      {title && <h2>{title}</h2>}
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{bodyMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
}

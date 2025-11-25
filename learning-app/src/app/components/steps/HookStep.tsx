/**
 * Hook step component
 * Renders motivational content that establishes relevance
 */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface HookStepProps {
  bodyMarkdown: string;
  title?: string;
}

export default function HookStep({ bodyMarkdown, title }: HookStepProps) {
  return (
    <div className="hook-step">
      <div className="step-type-badge">Hook</div>
      {title && <h2>{title}</h2>}
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{bodyMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
}

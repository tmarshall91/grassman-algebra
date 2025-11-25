/**
 * Example step component
 * Renders worked examples with step-by-step narration
 */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ExampleStepProps {
  bodyMarkdown: string;
  title?: string;
}

export default function ExampleStep({ bodyMarkdown, title }: ExampleStepProps) {
  return (
    <div className="example-step">
      <div className="step-type-badge">Example</div>
      {title && <h2>{title}</h2>}
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{bodyMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
}

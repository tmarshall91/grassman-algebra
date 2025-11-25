/**
 * Exercise step component
 * Renders practice questions with immediate feedback
 */

'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ExerciseData } from '@/lib/models/program';

interface ExerciseStepProps {
  exerciseData: ExerciseData;
}

export default function ExerciseStep({ exerciseData }: ExerciseStepProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleCheckAnswer = (questionId: string) => {
    setShowExplanations((prev) => ({ ...prev, [questionId]: true }));
  };

  const toggleHint = (questionId: string) => {
    setShowHints((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  return (
    <div className="exercise-step">
      <div className="step-type-badge">
        {exerciseData.difficulty ? `Exercise (${exerciseData.difficulty})` : 'Exercise'}
      </div>
      {exerciseData.title && <h2>{exerciseData.title}</h2>}
      {exerciseData.instructions && (
        <div className="instructions">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{exerciseData.instructions}</ReactMarkdown>
        </div>
      )}

      <div className="questions">
        {exerciseData.questions.map((question, qIndex) => {
          const isAnswered = selectedAnswers[question.id] !== undefined;
          const showExplanation = showExplanations[question.id];
          const isCorrect = selectedAnswers[question.id] === question.answer_index;

          return (
            <div key={question.id} className="question">
              <div className="question-header">
                <span className="question-number">Question {qIndex + 1}</span>
              </div>

              <div className="question-prompt">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {question.prompt_markdown}
                </ReactMarkdown>
              </div>

              {question.options && (
                <div className="options">
                  {question.options.map((option, optIndex) => {
                    const isSelected = selectedAnswers[question.id] === optIndex;
                    const isCorrectAnswer = optIndex === question.answer_index;

                    return (
                      <label
                        key={optIndex}
                        className={`option ${isSelected ? 'selected' : ''} ${
                          showExplanation
                            ? isCorrectAnswer
                              ? 'correct'
                              : isSelected
                              ? 'incorrect'
                              : ''
                            : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={optIndex}
                          checked={isSelected}
                          onChange={() => handleAnswerSelect(question.id, optIndex)}
                          disabled={showExplanation}
                        />
                        <span className="option-text">{option}</span>
                      </label>
                    );
                  })}
                </div>
              )}

              <div className="question-actions">
                {question.hint && !showExplanation && (
                  <button onClick={() => toggleHint(question.id)} className="btn-hint">
                    {showHints[question.id] ? 'Hide Hint' : 'Show Hint'}
                  </button>
                )}

                {isAnswered && !showExplanation && (
                  <button onClick={() => handleCheckAnswer(question.id)} className="btn-check">
                    Check Answer
                  </button>
                )}
              </div>

              {showHints[question.id] && question.hint && !showExplanation && (
                <div className="hint">
                  <strong>Hint:</strong> {question.hint}
                </div>
              )}

              {showExplanation && (
                <div className={`explanation ${isCorrect ? 'correct-answer' : 'incorrect-answer'}`}>
                  <div className="feedback">
                    {isCorrect ? '✓ Correct!' : '✗ Not quite.'}
                  </div>
                  {question.explanation_markdown && (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {question.explanation_markdown}
                    </ReactMarkdown>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

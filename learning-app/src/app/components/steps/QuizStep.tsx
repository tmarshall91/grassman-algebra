/**
 * Quiz step component
 * Renders assessment questions to verify objective achievement
 */

'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ExerciseData } from '@/lib/models/program';

interface QuizStepProps {
  exerciseData: ExerciseData;
}

export default function QuizStep({ exerciseData }: QuizStepProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    if (!submitted) {
      setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    exerciseData.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.answer_index) {
        correct++;
      }
    });
    return {
      correct,
      total: exerciseData.questions.length,
      percentage: Math.round((correct / exerciseData.questions.length) * 100),
    };
  };

  const allQuestionsAnswered =
    Object.keys(selectedAnswers).length === exerciseData.questions.length;

  return (
    <div className="quiz-step">
      <div className="step-type-badge">Quiz</div>
      {exerciseData.title && <h2>{exerciseData.title}</h2>}
      {exerciseData.instructions && !submitted && (
        <div className="instructions">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{exerciseData.instructions}</ReactMarkdown>
        </div>
      )}

      {submitted && (
        <div className="quiz-score">
          <h3>Quiz Results</h3>
          <div className="score-display">
            <div className="score-number">
              {calculateScore().correct} / {calculateScore().total}
            </div>
            <div className="score-percentage">{calculateScore().percentage}%</div>
          </div>
        </div>
      )}

      <div className="questions">
        {exerciseData.questions.map((question, qIndex) => {
          const isAnswered = selectedAnswers[question.id] !== undefined;
          const isCorrect = selectedAnswers[question.id] === question.answer_index;

          return (
            <div key={question.id} className="question">
              <div className="question-header">
                <span className="question-number">Question {qIndex + 1}</span>
                {submitted && (
                  <span className={`result-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                )}
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
                          submitted
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
                          disabled={submitted}
                        />
                        <span className="option-text">{option}</span>
                        {submitted && isCorrectAnswer && (
                          <span className="correct-indicator"> ← Correct answer</span>
                        )}
                      </label>
                    );
                  })}
                </div>
              )}

              {submitted && question.explanation_markdown && (
                <div className="explanation">
                  <strong>Explanation:</strong>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {question.explanation_markdown}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <div className="quiz-submit">
          <button
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered}
            className="btn-submit"
          >
            Submit Quiz
          </button>
          {!allQuestionsAnswered && (
            <p className="submit-hint">Please answer all questions before submitting.</p>
          )}
        </div>
      )}
    </div>
  );
}

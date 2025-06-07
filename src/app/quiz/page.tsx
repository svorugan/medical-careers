"use client";
import { useState } from "react";

const questions = [
  {
    question: "Which activity sounds most interesting to you?",
    options: [
      { text: "Solving complex brain puzzles", value: "neurology" },
      { text: "Helping children grow healthy", value: "pediatrics" },
      { text: "Treating cancer and supporting patients", value: "oncology" },
      { text: "Performing surgeries and fixing injuries", value: "surgery" },
      { text: "Supporting mental health and emotions", value: "psychiatry" },
    ],
  },
  {
    question: "Which environment do you prefer?",
    options: [
      { text: "Operating room with lots of action", value: "surgery" },
      { text: "Clinic or hospital, working with families", value: "pediatrics" },
      { text: "Lab or research setting", value: "oncology" },
      { text: "Quiet office, talking with patients", value: "psychiatry" },
      { text: "Hospital, solving diagnostic mysteries", value: "neurology" },
    ],
  },
  {
    question: "What motivates you most?",
    options: [
      { text: "Understanding how the brain works", value: "neurology" },
      { text: "Making a difference in children’s lives", value: "pediatrics" },
      { text: "Helping patients fight serious diseases", value: "oncology" },
      { text: "Fixing things with my hands", value: "surgery" },
      { text: "Helping people with emotions and behavior", value: "psychiatry" },
    ],
  },
];

const specialtyDescriptions: Record<string, { name: string; description: string }> = {
  neurology: {
    name: "Neurology",
    description:
      "You enjoy solving puzzles and understanding the brain! Neurology might be a great fit for you.",
  },
  pediatrics: {
    name: "Pediatrics",
    description:
      "You love working with children and families. Pediatrics could be your calling!",
  },
  oncology: {
    name: "Oncology",
    description:
      "You want to help patients fight serious illness. Oncology may be a rewarding path for you.",
  },
  surgery: {
    name: "Surgery",
    description:
      "You like action and fixing things. Surgery could be an exciting specialty for you!",
  },
  psychiatry: {
    name: "Psychiatry",
    description:
      "You care about mental health and emotions. Psychiatry may be a great match!",
  },
};

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  function handleAnswer(value: string) {
    const newAnswers = [...answers, value];
    if (current === questions.length - 1) {
      // Calculate the most frequent specialty
      const counts: Record<string, number> = {};
      newAnswers.forEach((ans) => {
        counts[ans] = (counts[ans] || 0) + 1;
      });
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      setResult(sorted[0][0]);
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setAnswers([]);
    setResult(null);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Medical Career Quiz</h1>
      {!result ? (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">{questions[current].question}</h2>
          <div className="space-y-4">
            {questions[current].options.map((option, idx) => (
              <button
                key={idx}
                className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-300 text-blue-800 font-medium py-3 px-4 rounded-lg transition-colors text-left"
                onClick={() => handleAnswer(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className="mt-8 text-gray-500 text-center">
            Question {current + 1} of {questions.length}
          </div>
        </div>
      ) : (
        <div className="bg-green-50 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Your Suggested Specialty:</h2>
          <div className="text-2xl font-semibold mb-2">{specialtyDescriptions[result].name}</div>
          <p className="text-gray-700 mb-6">{specialtyDescriptions[result].description}</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
            onClick={restartQuiz}
          >
            Take Quiz Again
          </button>
          <div className="mt-8">
            <a
              href={`/specialties/${result}`}
              className="text-blue-700 hover:underline font-medium"
            >
              Learn more about {specialtyDescriptions[result].name}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { Brain } from 'lucide-react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correct: 1
  },
  {
    question: "In what year did the Great October Socialist Revolution take place?",
    options: ["1917","1923","1914","1920"],
    correct: 1
  },
  {
    question: "What is the largest lake in the world?",
    options: ["Caspian Sea","Baikal","Lake Superior","Ontario"],
    correct: 2
  },
  {
    question: "Who wrote the novel “War and Peace”?",
    options: ["Anton Chekhov","Fyodor Dostoevsky","Leo Tolstoy","Ivan Turgenev"],
    correct: 3
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon","Mississippi","Nile","Yangtze"],
    correct: 3
  },
  {
    question: "What gas is used to extinguish fires?",
    options: ["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
    correct: 2
  },
  {
    question: "What animal is the national symbol of Australia?",
    options: ["Kangaroo","Koala","Emu","Crocodile"],
    correct: 1
  },
  {
    question: "What chemical element is designated as “Hg”?",
    options: ["Silver","Tin","Copper","Mercury"],
    correct: 4
  },
  {
    question: "In what year was the first international modern Olympiad held?",
    options: ["1896","1900","1912","1924"],
    correct: 1
  },
  {
    question: "For which of these disciplines Nobel Prize is awarded?",
    options: ["Physics, Chemistry","Physiology","Medicine","All of the above"],
    correct: 4
  },
  {
    question: " Hitler's party is known as:",
    options: ["Labour Party","Nazi Party","Ku-Klux-Klan","Democratic Party"],
    correct: 2
    
  },
  {
    question: "When the First Afghan War took place in",
    options: ["1839","1843","1833","1848"],
    correct: 1
  },
  {
    question: " Ecology deals with",
    options: ["Birds","Cell formation","Relation between organisms and their environment","Tissues"],
    correct: 3
  }
  
];

function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <div className="flex items-center justify-center mb-8">
          <Brain className="text-purple-600 mr-2" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">Trivia Challenge</h1>
        </div>

        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              You scored {score} out of {questions.length}!
            </h2>
            <button
              onClick={resetQuiz}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <h2 className="text-xl font-semibold text-gray-800">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="w-full text-left p-4 rounded-lg border border-gray-300 hover:bg-purple-50 hover:border-purple-500 transition duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trivia;
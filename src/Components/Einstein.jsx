import { useState } from "react"


const Einstein = () => {

    const questions = [
        {
            id: 1,
            question: "Field in which he won his Nobel prize.",
            answer: "Physics",
        },
        {
            id: 2,
            question: "The 'E' in 'E = mc²'.",
            answer: "ENERGY",
        }, 
        {
            id: 3,
            question: "His Nobel prize was for explaining this effec",
            answer: "PHOTOELECTRIC EFFECT",
        },
        {
            id: 4,
            question: 'His "Special" and "General" theories',
            answer: "RELATIVITY",
        }, 
        {
            id: 5,
            question: 'Country where he worked as a patent clerk.',
            answer: "SWITZERLAND",
        }, 
        {
            id: 6,
            question: 'German political party that wanted to kill him.',
            answer: "NAZI",
        }, 
        {
            id: 7,
            question: 'Its speed is constant for any observer.',
            answer: "LIGHT",
        },
        {
            id: 8,
            question: 'God does not play __ with the universe',
            answer: "DICE",
        }, 
        {
            id: 9,
            question: 'The science of understanding the universe as a whole?',
            answer: "COSMOLOGY",
        }, 
        {
            id: 10,
            question: 'He disproved this theoretical light-carrying substance.',
            answer: "AETHER",
        }
    ]

    const[questionId, setQuestionId] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const handleStartClick = () => {
        setQuestionId(0)
        setShowAnswer(true)
        setIsDone(false)
    }

    const handleNextQuestionClick = () => {
        if (questionId < questions.length - 1) {
          setQuestionId((prevQuestionId) => prevQuestionId + 1);
          setShowAnswer(false);
        } else {
          setIsDone(true);
        }
    }
    return (
        <div className="flex flex-col items-center mt-5">
          <div>
            <h1 className="text-gray-900 text-6xl dark:text-gray mt-3 mb-6">Einstein's Universe</h1>
            <div>
              <button
                type="button"
                onClick={isDone ? handleStartClick : handleNextQuestionClick}
                disabled={!isDone && showAnswer}
                className="mt-9 w-full h-full justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isDone ? 'Get Started' : 'Next Question'}
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
            {questionId !== null && (
              <div key={questions[questionId].id}>
                <h2>{questions[questionId].question}</h2>
              </div>
            )}
          </div>
        </div>
      );
}

export default Einstein

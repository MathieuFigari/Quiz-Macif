import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Answers from './Answers';

const Quiz = ({ quiz, quizIndex, nextQuestion, btnDisable, submitAnswer, setGoodAnswer }) => {



    const className = btnDisable === true ? "btnDisable validateBtn inline-block px-6 py-2.5 bg-blue-600 text-white font-xl text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-4" : "validateBtn inline-block px-6 py-2.5 bg-blue-600 text-white font-xl text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-4"


    useEffect(() => {
        
         setGoodAnswer(quiz[quizIndex].good_answer)
        
    
      },
      // eslint-disable-next-line 
      [quizIndex]
      );


    return(



        <div className='flex containerQ mx-auto justify-center gap-10 px-6 py-6'>
<div className='question'>{quiz[quizIndex].question}</div>

            <div className='containerP mx-auto flex flex-col gap-8'>

            {
                quiz[quizIndex].answers.map(
                    (option) => (
                        <Answers 
                        key={option}
                        option={option}
                        submitAnswer={submitAnswer}
                        />
                    )
                )
            }
            </div>

            
            

            <div className="flex space-x-2 justify-center">
                <button 
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className={className}
                onClick={nextQuestion}
                disabled={btnDisable}

                >Valider</button>
                </div>

            
            


            </div>
        


    )
    


}

Quiz.propTypes = {
quiz: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        answers: PropTypes.array.isRequired,
        good_answer: PropTypes.string.isRequired
    }).isRequired
),
nextQuestion: PropTypes.func.isRequired,
quizIndex: PropTypes.number.isRequired,
btnDisable: PropTypes.bool.isRequired,
submitAnswer: PropTypes.func.isRequired,
setGoodAnswer: PropTypes.func.isRequired
}

export default Quiz;
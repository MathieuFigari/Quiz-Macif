import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Answers from './Answers';

const Quiz = ({ quiz, quizIndex, nextQuestion, userAnswer, btnDisable, submitAnswer, setGoodAnswer }) => {



    useEffect(() => {
        
         setGoodAnswer(quiz[quizIndex].good_answer)
        
    
      },
      // eslint-disable-next-line 
      [quizIndex]
      );


    return(



        <div className='quiz'>
<div>{quiz[quizIndex].question}</div>

            <div className='props'>

            {
                quiz[quizIndex].answers.map(
                    (option) => (
                        <Answers 
                        key={option}
                        option={option}
                        userAnswer={userAnswer}
                        submitAnswer={submitAnswer}
                        />
                    )
                )
            }
            </div>

            <button
            type='button' 
            onClick={nextQuestion} className='validate'
            disabled={btnDisable}
            >
            Valider
            </button>

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
userAnswer: PropTypes.string.isRequired,
btnDisable: PropTypes.bool.isRequired,
submitAnswer: PropTypes.func.isRequired,
setGoodAnswer: PropTypes.func.isRequired
}

export default Quiz;
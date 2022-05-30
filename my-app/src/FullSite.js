import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Home from './Home';
import EndQuiz from './EndQuiz';

import { useEffect } from 'react';



const FullSite = ({  admin, submitAnswer, quiz, startQuiz, quizStart, nextQuestion, quizIndex, btnDisable, setGoodAnswer, userQuiz, score, endQuiz, homeReturn, setAdmin, logEmail }) => {

    useEffect(() => {

        console.log(logEmail)
      if(logEmail === "admin@macif.fr") setAdmin(true) 
        
    
      },
      // eslint-disable-next-line 
      []
      );


    return(

        <>
        
        
        


        { 
  
        startQuiz === false &&
  
        <Home  admin={admin} quizStart={quizStart}/>
  
        }
  
  
        { 
  
        startQuiz === true  && endQuiz === false &&
        <Quiz quiz={quiz}
        nextQuestion={nextQuestion}
        quizIndex={quizIndex}
        btnDisable={btnDisable}
        submitAnswer={submitAnswer}
        setGoodAnswer={setGoodAnswer}
        />
  }
  
  {
    endQuiz === true &&
    
    <EndQuiz homeReturn={homeReturn} userQuiz={userQuiz} score={score}/>
  }
  
    
      </>

    )


}

FullSite.propTypes = {
    quiz: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            answers: PropTypes.array.isRequired,
            good_answer: PropTypes.string.isRequired
        }).isRequired
    ),


    startQuiz: PropTypes.bool.isRequired,
    endQuiz: PropTypes.bool.isRequired,
    quizStart: PropTypes.func.isRequired,
    nextQuestion: PropTypes.func.isRequired,
quizIndex: PropTypes.number.isRequired,
btnDisable: PropTypes.bool.isRequired,
submitAnswer: PropTypes.func.isRequired,
setGoodAnswer: PropTypes.func.isRequired,
score: PropTypes.number.isRequired,
homeReturn: PropTypes.func.isRequired


}




export default FullSite;
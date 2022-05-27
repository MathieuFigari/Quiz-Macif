import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import EndQuiz from './EndQuiz';



const FullSite = ({  submitAnswer, quiz, startQuiz, quizStart, nextQuestion, quizIndex, btnDisable, setGoodAnswer, userQuiz, score, endQuiz, homeReturn }) => {


    return(

        <>
        <div id='contain_primair'>
        
        <Header />


        { 
  
        startQuiz === false &&
  
        <Home quizStart={quizStart}/>
  
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

</div>
  
  <Footer />
      
  
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
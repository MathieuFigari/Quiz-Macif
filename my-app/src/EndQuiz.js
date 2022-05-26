import PropTypes from 'prop-types';
import QuestionCorrection from "./QuestionCorrection"


const EndQuiz = ({ userQuiz, score }) => {

   



    return(
        <div className='correction'>
            <div>{`Votre Score : ${score}/${userQuiz.length}`}</div>

            {
                userQuiz.map( (question) => 
                <QuestionCorrection
                 key={question.id}
                 question={question}
                /> )
            }

        </div>

    )


}

EndQuiz.propTypes = {
    userQuiz: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            answerUser: PropTypes.string.isRequired,
            answerGood: PropTypes.string.isRequired
        })
    ).isRequired,
    score: PropTypes.number.isRequired
}


export default EndQuiz;
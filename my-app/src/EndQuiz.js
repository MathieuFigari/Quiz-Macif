import PropTypes from 'prop-types';
import QuestionCorrection from "./QuestionCorrection"


const EndQuiz = ({ userQuiz }) => {

   console.log(userQuiz)



    return(
        <div className='correction'>
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
    ).isRequired
}


export default EndQuiz;
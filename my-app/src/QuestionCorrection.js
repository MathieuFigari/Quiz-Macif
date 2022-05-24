import PropTypes from 'prop-types';


const QuestionCorrection = ({ question }) => {


    return(
        <div className='question__correction'>

                <div>{question.question}</div>
            {
                question.good === true ?

                <div>{question.answerUser}</div>

                :

                <div>
                    <div>{question.answerUser}</div>
                    <div>{question.answerGood}</div>
                </div>

                
            }

        </div>

    )


}

QuestionCorrection.propTypes = {
    question: PropTypes.shape({ 
        question: PropTypes.string.isRequired,
        answerUser: PropTypes.string.isRequired,
        answerGood: PropTypes.string.isRequired,
        good: PropTypes.bool.isRequired
    }).isRequired
    
}


export default QuestionCorrection;
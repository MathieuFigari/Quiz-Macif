import PropTypes from 'prop-types';


const Answers = ({ option, userAnswer, submitAnswer }) => {

   



    return(
        <div onClick={() => submitAnswer(option)} className={`answer ${userAnswer === option ? 'selected' : null}`}>
            {option}
        </div>

    )


}

Answers.propTypes = {
option: PropTypes.string.isRequired,
userAnswer: PropTypes.string.isRequired,
submitAnswer: PropTypes.func.isRequired
}


export default Answers;
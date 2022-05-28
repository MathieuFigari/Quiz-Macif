import QuestionPercent from "./QuestionPercent";
import PropTypes from 'prop-types';




const Supervise = ({quiz, usersQuiz}) => {


    return(
        <div className='flex flex-col containerC mx-auto justify-center gap-4 px-6 py-6'>
            { 
        quiz.map( 
            (quest) =>
       <QuestionPercent
            key={quest.id}
            usersQuiz={usersQuiz}
            {...quest}
       />
        )
}
        </div>
 
    )


}

Supervise.propTypes = {
    quiz: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            answers: PropTypes.array.isRequired,
            good_answer: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    usersQuiz: PropTypes.arrayOf(
        PropTypes.shape({
            question_id: PropTypes.string,
            good: PropTypes.bool
        })
    )

}




export default Supervise;
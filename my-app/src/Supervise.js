import QuestionPercent from "./QuestionPercent";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";




const Supervise = ({quiz, usersQuiz}) => {
    const users = usersQuiz.filter(user => user.question_id === quiz[0].id)


    


    return(
        <div className='flex flex-col containerC mx-auto justify-center gap-4 px-6 py-6'>
                <div style={{fontWeight: "bold", fontSize: "1.5rem"}}>{users.length} personnes ont répondu au quiz</div>
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

<Link to="/">
<div class="flex space-x-2 justify-center">
  <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >Accueil</button>
</div>
</Link>
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
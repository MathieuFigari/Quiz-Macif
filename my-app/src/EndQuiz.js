import PropTypes from 'prop-types';
import QuestionCorrection from "./QuestionCorrection";
import Accordion from "react-bootstrap/Accordion";



const EndQuiz = ({homeReturn ,userQuiz, score }) => {

   

console.log(userQuiz)

    return(
        <div className='flex flex-col containerC mx-auto justify-center gap-4 px-6 py-6'>
            <div className='score'>{`Votre Score : ${score}/${userQuiz.length}`}</div>
            <Accordion defaultActiveKey="0">
    

            {
                userQuiz.map( (question) => 
                <QuestionCorrection
                 key={question.id}
                 question={question}
                /> )
            }
            </Accordion>

            <div onClick={homeReturn} class="flex space-x-2 justify-center">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >Retour à l'Accueil</button>
            </div>

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
    score: PropTypes.number.isRequired,
    homeReturn: PropTypes.func.isRequired
}


export default EndQuiz;
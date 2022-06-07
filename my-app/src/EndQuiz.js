import PropTypes from 'prop-types';
import QuestionCorrection from "./QuestionCorrection";
import Accordion from "react-bootstrap/Accordion";
import { useState ,useEffect} from 'react';




const EndQuiz = ({homeReturn ,userQuiz, score }) => {

    const [gif, setGif] = useState("")


    useEffect(() => {
        
        if(score < 3){
            setGif("https://media2.giphy.com/media/4NcWXIu0VOgtNeynJ1/giphy.gif?cid=ecf05e47d9s1rx1bda4wvhq2ajkhuctxrour88zmyvil62y7&rid=giphy.gif&ct=g")
        } else if(score >= 3 && score < 5){
            setGif("https://media3.giphy.com/media/wmuyDdRNXYximlvYM1/giphy.gif?cid=ecf05e479kewlmdqhzb5qxxjm1dhegx2mqmfm0w5dzxh99p2&rid=giphy.gif&ct=g")
        } else setGif("https://media0.giphy.com/media/l3q2SH4Cmhh8F40jS/giphy.gif?cid=ecf05e47t5fm2g9yp5gc0yc9onbd6pofg5aa98e4wqhfecp7&rid=giphy.gif&ct=g")
       
   
     },
     // eslint-disable-next-line 
     []
     );


    


    return(
        <div className='flex flex-col containerC mx-auto justify-center gap-4 px-6 py-6'>
            <div className='score'>{`Votre Score : ${score}/${userQuiz.length}`}</div>
            <img style={{margin:"auto", width: "500px"}} src={gif} alt="reflète score"/>
            <Accordion defaultActiveKey="0">
    

            {
                userQuiz.map( (question) => 
                <QuestionCorrection
                 key={question.question_id}
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
            question_id: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            answerUser: PropTypes.string.isRequired,
            answerGood: PropTypes.string.isRequired
        })
    ).isRequired,
    score: PropTypes.number.isRequired,
    homeReturn: PropTypes.func.isRequired
}


export default EndQuiz;
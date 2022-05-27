import PropTypes from 'prop-types';
import Accordion from "react-bootstrap/Accordion"
import { useState } from "react"


const QuestionCorrection = ({ question }) => {

    const like = question.good === true ? "ant-design:like-filled" : "ant-design:dislike-filled"
    const color = question.good === true ? "green" : "red"

    const [open, setOpen] = useState('')

    const plusOrMoins = open === question.id ? "Moins" : " et pour plus d'infos"

    

    return(
        <Accordion.Item id={question.id}  className={`itemCor ${question.id}`}  eventKey={question.id}>
        <Accordion.Header > 
            <div className={`questionCor ${question.id}`}>{question.question}</div>
            <div className='yourAnswer'>Votre Réponse :</div>  
            <div className={`questionCorrection ${question.id}`}><span class="iconify pouceVert" data-icon={like} style={{color: `${color}`}}></span><div className={`answerUse ${question.id}`}>{question.answerUser}</div></div>
            {
                question.good === false && 
                <div>
                <div className='goodAnswerIs'> La bonne réponse était :</div>
                <div className='theGoodAnswer'>{question.answerGood}</div>
                </div>
            }
            <div className={`infosPlus ${question.id}`}>{plusOrMoins} </div>
        </Accordion.Header>
        <Accordion.Body>
            <div className='explanation'>
          {question.explanation}
          </div>
        </Accordion.Body>
      </Accordion.Item>

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
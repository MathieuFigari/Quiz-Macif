import PropTypes from 'prop-types';
import Accordion from "react-bootstrap/Accordion"
import { useState } from "react"


const QuestionCorrection = ({ question }) => {

    const like = question.good === true ? "ant-design:like-filled" : "ant-design:dislike-filled"
    const color = question.good === true ? "green" : "red"

    const [open, setOpen] = useState(false)

    const plusOrMoins = open === true ? "Moins" : "plus d'infos"
    const arrow = open === true ? "bi:arrow-up" : "akar-icons:arrow-down"

    console.log(open)



    return(
        <Accordion.Item onClick={() => setOpen(!open)} className='itemCor' eventKey={question.id}>
        <Accordion.Header > 
            <div className='questionCor'>{question.question}</div>  
            <div className='questionCorrection'><span class="iconify pouceVert" data-icon={like} style={{color: `${color}`}}></span><div className='answerUse'>{question.answerUser}</div></div>
            <div className='infosPlus'>{plusOrMoins} </div>
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
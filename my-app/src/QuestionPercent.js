import PropTypes from "prop-types"


const QuestionPercent = ({id, question, usersQuiz}) => {

   
    const filtredQuizUsers = usersQuiz.filter(question => question.question_id === id)
    
    const goodFiltredQuiz = filtredQuizUsers.filter(question => question.good === true)

    const totalAnswers = filtredQuizUsers.length;
    const goodAnswers = goodFiltredQuiz.length;
    const percent = Math.round(goodAnswers * 100 / totalAnswers)

    console.log(percent)




    return(
        <>
       <div style={{textAlign: "left"}}>{question}</div>
       <div style={{border:"1px solid black"}} class="w-full bg-gray-200 rounded-full">
        <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{fontSize: "1rem", padding:"0.5rem", width: `${percent}%`}}>{percent}% de bonnes réponses</div>
        </div>
        <div style={{borderBottom: "1px solid black"}}></div>
       </>

    )


}

QuestionPercent.propTypes = {
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,

    usersQuiz: PropTypes.arrayOf(
        PropTypes.shape({
            question_id: PropTypes.string,
            good: PropTypes.bool
        })
    )
}




export default QuestionPercent;
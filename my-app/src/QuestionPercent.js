import PropTypes from "prop-types"
import BadAnswers from "./BadAnswers";


const QuestionPercent = ({good_answer, answers ,id, question, usersQuiz}) => {

   
    const filtredQuizUsers = usersQuiz.filter(question => question.question_id === id);
    const goodFiltredQuiz = filtredQuizUsers.filter(question => question.good === true);
    const totalAnswers = filtredQuizUsers.length;
    const goodAnswers = goodFiltredQuiz.length;
    const percent = Math.round(goodAnswers * 100 / totalAnswers);


    const badOptions = answers.filter(answer => answer !== good_answer)

    const badAnswers = filtredQuizUsers.filter(question => question.good === false)



    




    return(
        <>
       <div style={{fontWeight: "bold", color:"#0a2d82", textAlign: "left"}}>{question}</div>
       { 
       percent ?
       <div  class="w-full bg-gray-200 rounded-full">
        <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{color: "white", background: "#47d037", fontSize: "1rem", padding:"0.5rem", width: `${percent}%`}}>{percent}% de bonnes réponses</div>
        </div>

        : ""
        }

        {
            badAnswers.length >= 1 &&

            badOptions.map(
                (option) => ( 
            <BadAnswers
            key={option}
            option={option}
            totalAnswers={totalAnswers}
            userNb={badAnswers.filter((badAnswer) => badAnswer.userAnswer === option)}
            
            />
                )
            )

        }



        <div style={{borderBottom: "1px solid black"}}></div>
       </>

    )


}

QuestionPercent.propTypes = {
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    good_answer: PropTypes.string.isRequired, 

    usersQuiz: PropTypes.arrayOf(
        PropTypes.shape({
            question_id: PropTypes.string,
            good: PropTypes.bool
        })
    )
}




export default QuestionPercent;
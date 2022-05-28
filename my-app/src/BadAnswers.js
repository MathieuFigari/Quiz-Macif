const BadAnswers = ({option, totalAnswers, userNb}) => {

    const percent = Math.round(userNb.length * 100 / totalAnswers);


    return(
        <div >
            <div style={{marginBottom : "1rem"}}>{option}</div>
            <div class="w-full bg-gray-200 rounded-full">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: `${percent}%`}}>{percent}%</div>
        </div>
           
        </div>

    )


}




export default BadAnswers;
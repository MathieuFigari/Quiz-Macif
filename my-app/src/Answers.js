import PropTypes from 'prop-types';


const Answers = ({ option, submitAnswer }) => {

  

    return(
        <div className="form-check flex gap-4">
        <input value={option} onChange={( e) => submitAnswer(e.target.value)}  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className=" form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
          {option}
        </label>
      </div>

    )


}

Answers.propTypes = {
option: PropTypes.string.isRequired,
submitAnswer: PropTypes.func.isRequired
}




export default Answers;
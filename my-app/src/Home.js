import PropTypes from 'prop-types';


const Home = ({ quizStart }) => {

   



    return(
        <div className="containerH mx-auto ">
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img 
        src="https://i.notretemps.com/1400x787/smart/2019/12/19/assurance-automobile-faut-il-declarer-les-petits-a-.jpg"
        className="block w-full carousel__photos"
        alt="accident voiture deux hommes d'éxpliquent"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://www.hyperassur.com/uploads/2017/04/differences_garanties-assurances-1000x500.jpg"
        className="block w-full carousel__photos"
        alt="un homme donne des clés de voiture à un autre homme"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://www.turbo.fr/sites/default/files/styles/article_690x405/public/2021-02/accident-voiture-prevoyance_20.png?itok=WjSRbonW"
        className="block w-full carousel__photos"
        alt="parapluie voiture assurance"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button onClick={quizStart} type="button" className="btn__start inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Démarrer le Quiz</button>     

  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )


}

Home.propTypes = {
    quizStart: PropTypes.func.isRequired
}


export default Home;
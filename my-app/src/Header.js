import PropTypes from "prop-types"

const Header = ({ logout }) => {

   



    return(
        <div className="header flex gap-20 items-center  w-screen h-[115px] bg-white drop-shadow-lg">
            <img  src="https://d1p2aimeyx6kdr.cloudfront.net/wp-content/uploads/2021/12/21144030/visuel_macif.jpg" className=" logo-macif max-w-full h-auto" alt="logo macif"/>
            <h1 style={{width: "100%"}} className="text-3xl font-bold">Et si vous testiez vos connaissances sur la nouvelle offre Mobilité MACIF ?</h1>
            <button onClick={logout} type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Déconnexion</button>
           
        </div>

    )


}

Header.propTypes = {
    logout: PropTypes.func.isRequired
}


export default Header;
import PropTypes from "prop-types"

const Login = ({setLogPW, setLogEmail, login}) => {

   



    return(
        
        
  
        <div style={{margin:"auto", width: "600px"}} class="block bg-white shadow-lg rounded-lg">   
              <div class="md:p-12 md:mx-6">
                <form>
                  <p class="mb-4">Connexion</p>
                  <div class="mb-4">
                    <input
                     onChange={(e) => setLogEmail(e.target.value)}
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Username"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                        onChange={(e) => setLogPW(e.target.value)}
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                        onClick={login}
                      class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{background: `linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593)`}}
                    >
                      Log in
                    </button>
                  </div>

                
                </form>
              </div>
            
          
        </div>
   


    )


}

Login.propTypes = {
    setLogPW: PropTypes.func.isRequired,
    setLogEmail: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired

}



export default Login;
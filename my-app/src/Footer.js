const Footer = () => {

   



    return(
        
        <footer className="text-center text-white" style={{backgroundColor: "#caced1"}}>
  <div className="container p-6  mx-auto">
    <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 mx-auto">
      <div className="lg:mb-0 mb-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
          className="w-full rounded-md shadow-lg"
          alt="paris exterieur Louvre"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
          className="w-full rounded-md shadow-lg"
          alt="église"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
          className="w-full rounded-md shadow-lg"
          alt="paris seine et tour eiffel"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
          className="w-full rounded-md shadow-lg"
          alt="ville vue des airs"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
          className="w-full rounded-md shadow-lg"
          alt="ville New York"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
          className="w-full rounded-md shadow-lg"
          alt="ville"
        />
      </div>
    </div>
  </div>

  <div className="text-center p-4" style={{backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.2})`}}>
    © 2022 Copyright:
    <a className="text-white" href="https://www.macif.fr">Macif</a>
  </div>
</footer>

    )


}




export default Footer;
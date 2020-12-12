import React from 'react'
import '../../src/Components/App.css';
const Home = () => {
    return <div className="container-fluid p-0">
    {/* <div className="row">
     <div className="col-md-4 col-xs-12">

     </div>
     <div className="col-md-12 col-xs-12 text-center"> */}
     {/* <img src="img.png" alt="Sanjeev" className="img img-thumbnail" height="300" width="300"/> */}



  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
      <div className="carousel-item active img-fluid" style={{backgroundImage: "url('white-screen-projector-by-the-beach-2507025.jpg')"}}>
        {/* <div className="carousel-caption d-none d-md-block">
          <h2 className="display-4">First Slide</h2>
          <p className="lead">This is a description for the first slide.</p>
        </div> */}
      </div>
      {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
      <div className="carousel-item" style={{backgroundImage: "url('three-assorted-movie-posters-3137890.jpg')"}}>
        {/* <div className="carousel-caption d-none d-md-block">
          <h2 className="display-4">Second Slide</h2>
          <p className="lead">This is a description for the second slide.</p>
        </div> */}
      </div>
      {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
      <div className="carousel-item" style={{backgroundImage: "url('food-snack-popcorn-movie-theater-33129.jpg')"}}>
        {/* <div className="carousel-caption d-none d-md-block">
          <h2 className="display-4">Third Slide</h2>
          <p className="lead">This is a description for the third slide.</p>
        </div> */}
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
  </div>

    <p className="text-white mb-1 mt-2"> BROWSER MOVIE APP</p>
      <b className="text-white pb-3">Powered by REACT JS</b>
     </div>
 
  
}
export default Home
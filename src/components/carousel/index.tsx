import React from 'react'

const Carousel=()=>{
  return (
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" style={{height: '500px'}}>
        <img className="img-fluid" src="src/assets/img/carousel-1.jpg" alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{maxWidth: '700px'}}>
            <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
            <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
            <a  className="btn btn-light py-2 px-3">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="carousel-item" style={{height: '500px'}}>
        <img className="img-fluid" src="src/assets/img/carousel-2.jpg" alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{maxWidth: '700px'}}>
            <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
            <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
            <a  className="btn btn-light py-2 px-3">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
      <div className="btn btn-dark" style={{width: '45px', height: '45px'}}>
        <span className="carousel-control-prev-icon mb-n2" />
      </div>
    </a>
    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
      <div className="btn btn-dark" style={{width: '45px', height: '45px'}}>
        <span className="carousel-control-next-icon mb-n2" />
      </div>
    </a>
  </div>
  )
}

export default Carousel
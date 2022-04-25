import React from 'react'

const Checkout=()=>{
  return (
    <div>
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5 pt-20">
    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}>
      <h1 className="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
      <div className="d-inline-flex">
        <p className="m-0"><a >Home</a></p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Checkout</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Checkout Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <div className="mb-4">
          <h4 className="font-weight-semi-bold mb-10">Billing Information</h4>
          <div className="row flex justify-center ">
            <div className="col-md-8 form-group space-y-4">
              <label className='flex ml-2 justify-start'>Fullname</label>
              <input className="form-control" type="text" placeholder="John" />
            </div>
            <div className="col-md-8 form-group space-y-4">
              <label className='flex ml-2 justify-start'>E-mail</label>
              <input className="form-control" type="text" placeholder="example@email.com" />
            </div>
            <div className="col-md-8 form-group space-y-4">
              <label className='flex ml-2 justify-start'>Mobile No</label>
              <input className="form-control" type="text" placeholder="+123 456 789" />
            </div>
            <div className="col-md-8 form-group space-y-4">
              <label className='flex ml-2 justify-start'>Address</label>
              <input className="form-control" type="text" placeholder="123 Street" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary border-0">
            <h4 className="font-weight-semi-bold m-0">Order Total</h4>
          </div>
          <div className="card-body">
            <h5 className="font-weight-medium mb-3">Products</h5>
            <div className="d-flex justify-content-between">
              <p>Colorful Stylish Shirt 1</p>
              <p>$150</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Colorful Stylish Shirt 2</p>
              <p>$150</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Colorful Stylish Shirt 3</p>
              <p>$150</p>
            </div>
            <hr className="mt-0" />
            <div className="d-flex justify-content-between mb-3 pt-1">
              <h6 className="font-weight-medium">Subtotal</h6>
              <h6 className="font-weight-medium">$150</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="card-footer border-secondary bg-transparent">
            <div className="d-flex justify-content-between mt-2">
              <h5 className="font-weight-bold">Total</h5>
              <h5 className="font-weight-bold">$160</h5>
            </div>
          </div>
        </div>
        <div className="card border-secondary mb-5">
          <div className="card-footer border-secondary bg-transparent">
            <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Checkout End */}
</div>

  )
}

export default Checkout
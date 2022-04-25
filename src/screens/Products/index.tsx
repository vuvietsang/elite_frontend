import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5 mt-16">
    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}>
      <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Products</h1>
      <div className="d-inline-flex">
        <p className="m-0"><Link to="/">Home</Link></p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Products</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Shop Start */}
  <div className="container-fluid pt-5 mt-20">
    <div className="row px-xl-5">
      {/* Shop Sidebar Start */}
      <div className="col-lg-3 col-md-12">
        {/* Price Start */}
        <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
              <label className="custom-control-label" htmlFor="price-all">All Price</label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="price-1" />
              <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="price-2" />
              <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="price-3" />
              <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="price-4" />
              <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input type="checkbox" className="custom-control-input" id="price-5" />
              <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Price End */}
        {/* Color Start */}
        <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" defaultChecked id="color-all" />
              <label className="custom-control-label" htmlFor="price-all">All Color</label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="color-1" />
              <label className="custom-control-label" htmlFor="color-1">Black</label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="color-2" />
              <label className="custom-control-label" htmlFor="color-2">White</label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="color-3" />
              <label className="custom-control-label" htmlFor="color-3">Red</label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="color-4" />
              <label className="custom-control-label" htmlFor="color-4">Blue</label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input type="checkbox" className="custom-control-input" id="color-5" />
              <label className="custom-control-label" htmlFor="color-5">Green</label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Color End */}
        {/* Size Start */}
        <div className="mb-5">
          <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" defaultChecked id="size-all" />
              <label className="custom-control-label" htmlFor="size-all">All Size</label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="size-1" />
              <label className="custom-control-label" htmlFor="size-1">XS</label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="size-2" />
              <label className="custom-control-label" htmlFor="size-2">S</label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="size-3" />
              <label className="custom-control-label" htmlFor="size-3">M</label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" className="custom-control-input" id="size-4" />
              <label className="custom-control-label" htmlFor="size-4">L</label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input type="checkbox" className="custom-control-input" id="size-5" />
              <label className="custom-control-label" htmlFor="size-5">XL</label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Size End */}
      </div>
      {/* Shop Sidebar End */}
      {/* Shop Product Start */}
      <div className="col-lg-9 col-md-12">
        <div className="row pb-3">
          <div className="col-12 pb-1">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <form >
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search by name" />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
              </form>
              <div className="dropdown ml-4">
                <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sort by
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                  <a className="dropdown-item" href="#">Latest</a>
                  <a className="dropdown-item" href="#">Popularity</a>
                  <a className="dropdown-item" href="#">Best Rating</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src="src/assets/img/product-1.jpg" alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src="src/assets/img/product-2.jpg" alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src="src/assets/img/product-3.jpg" alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src="src/assets/img/product-4.jpg" alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src="src/assets/img/product-5.jpg" alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src="src/assets/img/product-6.jpg" alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src="src/assets/img/product-7.jpg" alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src="src/assets/img/product-8.jpg" alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src="src/assets/img/product-1.jpg" alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="col-12 pb-1">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center mb-3">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Shop Product End */}
    </div>
  </div>
  {/* Shop End */}
</div>
  )
}

export default Products
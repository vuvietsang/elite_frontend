import React from 'react'

const Header=()=> {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
    <a  className="text-decoration-none d-block d-lg-none">
      <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
    </a>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-between py-3" id="navbarCollapse">
      <div className="flex flex-row w-full justify-center">
        <a href="index.html" className="nav-item nav-link active">Home</a>
        <a href="shop.html" className="nav-item nav-link">Shop</a>
        <a href="cart.html" className="nav-item nav-link">Shopping Cart</a>
        <a href="checkout.html" className="nav-item nav-link">Checkout</a>
        <a href="contact.html" className="nav-item nav-link">Contact</a>
      </div>
      <div className="navbar-nav ml-auto py-0">
      <button type="button" className="text-white bg-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
      </div>
    </div>
  </nav>
  )
}

export default Header


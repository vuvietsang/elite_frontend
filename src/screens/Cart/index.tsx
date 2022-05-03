import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ProductDto } from "../../dto/ProductDto";
import { decrease, increase, update } from "../Products/Slice/cartSlice";

const Cart = () => {
  let cartLocalStorage: { product: ProductDto; quantity: number }[] =
    JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartLocalStorage);
  var subTotal = 0;
  cart.forEach((item) => {
    subTotal = subTotal + item.product.price * item.quantity;
  });
  const dispatch = useDispatch();
  const handlePlusQuantity = async (product: ProductDto) => {
    var index = cart.findIndex((productTmp) => {
      return productTmp.product.id === product.id;
    });
    if (index >= 0) {
      const newProduct = { ...cart[index], quantity: cart[index].quantity + 1 };
      const tmpCart = [...cart];
      tmpCart[index] = newProduct;
      await setCart(tmpCart);
      localStorage.setItem("cart", JSON.stringify(tmpCart));
      dispatch(increase(1));
    }
  };

  const nav = useNavigate();

  const handleMinusQuantity = async (product: ProductDto) => {
    var index = cart.findIndex((productTmp) => {
      return productTmp.product.id === product.id;
    });
    if (cart[index].quantity > 1) {
      if (index >= 0) {
        const newProduct = {
          ...cart[index],
          quantity: cart[index].quantity - 1,
        };
        const tmpCart = [...cart];
        tmpCart[index] = newProduct;
        await setCart(tmpCart);
        localStorage.setItem("cart", JSON.stringify(tmpCart));
        dispatch(decrease(1));
      }
    }
  };
  const cartCounter = useSelector((state: any) => state.cart);

  const handleRemoveItem = (product: ProductDto) => {
    var index = cart.findIndex((productTmp) => {
      return productTmp.product.id === product.id;
    });
    const tmpCart = [...cart];
    const itemQuantity = tmpCart.at(index)?.quantity;
    tmpCart.splice(index, 1);
    setCart(tmpCart);
    if (itemQuantity) dispatch(update(cartCounter - itemQuantity));
    localStorage.setItem("cart", JSON.stringify(tmpCart));
  };
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-secondary mb-5 ">
        <div className="d-flex flex-column align-items-center justify-content-center h-72">
          <div className="mt-16"></div>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Shopping Cart
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a>Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shopping Cart</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Cart Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cart.map((item) => (
                  <tr key={item.product.id}>
                    <td className="align-middle">{item.product.name}</td>
                    <td className="align-middle">
                      <img src={item.product.image} className="w-20 h-20" />
                    </td>
                    <td className="align-middle">{item.product.price}</td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button
                            onClick={() => {
                              handleMinusQuantity(item.product);
                            }}
                            className="btn btn-sm btn-primary btn-minus"
                          >
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary text-center"
                          value={item.quantity}
                        />
                        <div className="input-group-btn">
                          <button
                            onClick={() => {
                              handlePlusQuantity(item.product);
                            }}
                            className="btn btn-sm btn-primary btn-plus"
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      ${item.product.price * item.quantity}
                    </td>
                    <td className="align-middle">
                      <button
                        onClick={() => {
                          handleRemoveItem(item.product);
                        }}
                        className="btn btn-sm btn-primary"
                      >
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal</h6>
                  <h6 className="font-weight-medium">${subTotal}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$0</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">${subTotal}</h5>
                </div>
                <button
                  onClick={() => {
                    nav("/checkout");
                  }}
                  className="btn btn-block btn-primary my-3 py-3"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </div>
  );
};

export default Cart;

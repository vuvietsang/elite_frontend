import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderDetailsDto from "../../dto/OrderDetailsDto";
import { ProductDto } from "../../dto/ProductDto";
import { UserDto } from "../../dto/UserDto";
import useCheckout from "./Hooks/useCheckout";
import useUserById from "./Hooks/useUserById";

const Checkout = () => {
  let cart: { product: ProductDto; quantity: number }[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  var subTotal = 0;
  cart.forEach((item) => {
    subTotal = subTotal + item.product.price * item.quantity;
  });
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const userId = useSelector((state: any) => state.auth.userId);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { data } = useUserById(userId);
  const { mutate: checkout, isLoading, data: dataCheckout } = useCheckout();
  const handleCheckout = () => {
    if (!isAuth) {
      setOpenDialog(true);
    } else {
      const orders: OrderDetailsDto[] = [];
      cart.map((item) =>
        orders.push({ productId: item.product.id, quantity: item.quantity })
      );
      checkout(orders);
    }
  };
  return (
    <div>
      {" "}
      <Dialog
        open={openDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="py-10 px-28 flex items-center flex-col space-y-5 ">
          <p className="text-xl">
            You have to login before using this function
          </p>
          <button
            onClick={() => {
              setOpenDialog(false);
            }}
            className="p-2 flex bg-gray-300 rounded-sm"
          >
            Accept
          </button>
        </div>
      </Dialog>
      {/* Page Header Start */}
      <div className="container-fluid bg-secondary mb-5 ">
        <div className="d-flex flex-column align-items-center justify-content-center h-72">
          <div className="mt-16"></div>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Checkout
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
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
              <h4 className="font-weight-semi-bold mb-10">
                Billing Information
              </h4>
              <div className="row flex justify-center ">
                <div className="col-md-8 form-group space-y-4">
                  <label className="flex ml-2 justify-start">Fullname</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="John"
                    value={data?.fullName}
                    disabled
                  />
                </div>
                <div className="col-md-8 form-group space-y-4">
                  <label className="flex ml-2 justify-start">E-mail</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="example@email.com"
                    value={data?.email}
                    disabled
                  />
                </div>
                <div className="col-md-8 form-group space-y-4">
                  <label className="flex ml-2 justify-start">Mobile No</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="+123 456 789"
                    value={data?.phone}
                    disabled
                  />
                </div>
                <div className="col-md-8 form-group space-y-4">
                  <label className="flex ml-2 justify-start">Address</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="123 Street"
                    value={data?.address}
                    disabled
                  />
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
                {cart.map((item) => (
                  <div className="d-flex justify-content-between">
                    <p>{item.product.name}</p>
                    <p>${item.product.price * item.quantity}</p>
                  </div>
                ))}
                <hr className="mt-0" />
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
              </div>
            </div>
            <div className="card border-secondary mb-5">
              <div className="card-footer border-secondary bg-transparent">
                <button
                  onClick={handleCheckout}
                  className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Checkout End */}
    </div>
  );
};

export default Checkout;

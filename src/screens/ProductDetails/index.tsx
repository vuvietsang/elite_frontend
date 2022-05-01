import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { array, number } from "yup";
import useProductById from "./hooks/useProductById";
import useRatingProductById from "./hooks/useRatingsProductById";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useProductById(id);
  const { data: ratings } = useRatingProductById(id, 0, 10);
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div>
      <div className="container-fluid bg-secondary mb-2 ">
        <div className="d-flex flex-column align-items-center justify-content-center h-72">
          <div className="mt-16"></div>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Shop Detail
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home/</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop Detail</p>
          </div>
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <img className="w-100 h-100" src={data?.image} alt="Image" />
          </div>
          <div className="col-lg-7 pb-5 mt-14">
            <h3 className="font-weight-semi-bold font-serif text-3xl">
              {data?.name}
            </h3>
            <div className="flex justify-center mt-4 mb-4">
              <div className="text-primary mr-2">
                <small className="fas fa-star" />
                <small className="fas fa-star" />
                <small className="fas fa-star" />
                <small className="fas fa-star-half-alt" />
                <small className="far fa-star" />
              </div>
              <small className="pt-1">(50 Reviews)</small>
            </div>
            <h3 className="font-weight-semi-bold mb-4">${data?.price} </h3>
            <p className="mb-2 text-xl font-serif">Description</p>
            <p className="mb-20">{data?.description}</p>
            <div className="flex justify-center mb-4">
              <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
              <form>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-1"
                    name="size"
                    defaultChecked
                  />
                  <label className="custom-control-label" htmlFor="size-1">
                    XS
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-2"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-2">
                    S
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-3"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-3">
                    M
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-4"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-4">
                    L
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-5"
                    name="size"
                  />
                  <label className="custom-control-label" htmlFor="size-5">
                    XL
                  </label>
                </div>
              </form>
            </div>
            <div className="flex justify-center mb-4">
              <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
              <form>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-1"
                    name="color"
                    defaultChecked
                  />
                  <label className="custom-control-label" htmlFor="color-1">
                    Black
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-2"
                    name="color"
                  />
                  <label className="custom-control-label" htmlFor="color-2">
                    White
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-3"
                    name="color"
                  />
                  <label className="custom-control-label" htmlFor="color-3">
                    Red
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-4"
                    name="color"
                  />
                  <label className="custom-control-label" htmlFor="color-4">
                    Blue
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-5"
                    name="color"
                  />
                  <label className="custom-control-label" htmlFor="color-5">
                    Green
                  </label>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center mb-4 pt-2">
              <div
                className="input-group quantity mr-3"
                style={{ width: "130px" }}
              >
                <div className="input-group-btn">
                  <button
                    className="btn btn-primary btn-minus"
                    onClick={() => {
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}
                  >
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-secondary text-center"
                  readOnly
                  value={quantity}
                />
                <div className="input-group-btn">
                  <button
                    className="btn btn-primary btn-plus"
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
              <button className="btn btn-primary px-3">
                <i className="fa fa-shopping-cart mr-1" /> Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <div className="nav nav-tabs justify-content-center border-secondary mb-4">
              <a
                className="active nav-item nav-link"
                data-toggle="tab"
                href="#tab-pane-3"
              >
                Reviews ({ratings?.totalElements})
              </a>
            </div>
            <div className="tab-content">
              <div className="tab-pane show active fade" id="tab-pane-3">
                <div className="row flex justify-center">
                  <div className="col-md-8">
                    <h4 className="mb-4 text-lg font-bold">
                      {ratings?.totalElements ? ratings?.totalElements : 0}{" "}
                      review for "{data?.name}"
                    </h4>
                    {ratings?.content.map((rating) => (
                      <div key={rating.comment} className="media mb-4">
                        <div className="media-body">
                          <h6>
                            {rating.userName}
                            <small> {rating.ratingDate}</small>
                          </h6>
                          <div className="text-primary mb-2">
                            {[...Array(rating.ratingStar)].map((i) => (
                              <i key={i} className="fas fa-star" />
                            ))}
                          </div>
                          <p>{rating.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-md-8">
                    <h4 className="mb-10 mt-5 text-lg font-bold ">
                      Leave a review
                    </h4>
                    <div className="d-flex my-3">
                      <p className="mb-0 mr-2">Your Rating * :</p>
                      <div className="text-primary">
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                    </div>
                    <form>
                      <div className="form-group">
                        <label htmlFor="message">Your Review *</label>
                        <textarea
                          id="message"
                          cols={30}
                          rows={5}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <input
                          type="submit"
                          defaultValue="Leave Your Review"
                          className="btn btn-primary px-3"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

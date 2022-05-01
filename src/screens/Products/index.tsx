import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductDto } from "../../dto/ProductDto";
import useProducts from "./hooks/useProducts";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

function Products() {
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [sortLable, setSortLable] = useState<string>("Sort By");
  const { data, isLoading } = useProducts(pageNumber, 9, search, sortBy);
  const paginationArray: number[] = [];
  const navigate = useNavigate();
  if (data?.totalPages)
    for (let index = 0; index < data.totalPages; index++) {
      paginationArray.push(index);
    }
  const maxPage = paginationArray.length - 1;
  const { handleSubmit, register } = useForm();
  const handleSearchByPrice = (value: { price: Array<string> } | any) => {
    if (value.price == "all") setSearch("");
    else if (value.price == "greaterThan400") {
      setSearch("price>400");
    } else {
      const price = value.price;
      const leftPrice: string = price.split("-")[0];
      const rightPrice: string = price.split("-")[1];
      console.log(leftPrice);
      console.log(rightPrice);
      setSearch(`price>${leftPrice},price<${rightPrice}`);
    }
  };

  return (
    <div>
      {/* Page Header Start */}
      <div className="bg-secondary">
        <div className="d-flex flex-column align-items-center justify-content-center h-72">
          <div className="mt-16"></div>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Our Products
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Products</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Shop Start */}
      <div className="container-fluid pt-5 ">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-12">
            {/* Price Start */}
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
              <form
                onSubmit={handleSubmit((value) => {
                  handleSearchByPrice(value);
                })}
                className="flex justify-around flex-row"
              >
                <div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      defaultChecked
                      id="price-all"
                      value="all"
                      {...register("price")}
                    />
                    <label className="custom-control-label" htmlFor="price-all">
                      All Price
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="price-1"
                      value="0-100"
                      {...register("price")}
                    />
                    <label className="custom-control-label" htmlFor="price-1">
                      $0 - $100
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="price-2"
                      value="100-200"
                      {...register("price")}
                    />
                    <label className="custom-control-label" htmlFor="price-2">
                      $100 - $200
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="price-3"
                      value="200-300"
                      {...register("price")}
                    />
                    <label className="custom-control-label" htmlFor="price-3">
                      $200 - $300
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="price-4"
                      value="300-400"
                      {...register("price")}
                    />
                    <label className="custom-control-label" htmlFor="price-4">
                      $300 - $400
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="price-5"
                      {...register("price")}
                      value="greaterThan400"
                    />
                    <label className="custom-control-label" htmlFor="price-5">
                      Greater than $400
                    </label>
                  </div>
                </div>
                <div>
                  <button type="submit">
                    <div className="input-group-append">
                      <span className="input-group-text bg-transparent text-primary">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        onChange={(e) => {
                          setSearch("name:" + e.target.value);
                        }}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button
                      className="btn border dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {sortLable}
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          setSortBy("createDate");
                          setSortLable("Latest");
                        }}
                      >
                        Latest
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          setSortBy("price");
                          setSortLable("Price");
                        }}
                      >
                        Price
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {data?.content?.map((product: ProductDto) => (
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 col-sm-12 pb-1"
                >
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        onClick={() => {
                          navigate(`/details/${product.id}`);
                        }}
                        className="img-fluid w-full h-80"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">{product.name}</h6>
                      <div className="d-flex justify-content-center">
                        <h6>{product.price}$</h6>
                        <h6 className="text-muted ml-2">
                          <del>{product.price + 100}$</del>
                        </h6>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                      <button
                        onClick={() => {
                          navigate(`/details/${product.id}`);
                        }}
                        className="btn btn-sm text-dark p-0"
                      >
                        <i className="fas fa-eye text-primary mr-1" />
                        View Detail
                      </button>
                      <a className="btn btn-sm text-dark p-0">
                        <i className="fas fa-shopping-cart text-primary mr-1" />
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              {!data && (
                <div className="flex ml-96 pl-40 my-40 items-center">
                  <p>Loading</p>
                  <CircularProgress />
                </div>
              )}
              <div className="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center mb-3">
                    <li
                      className={`page-item ${pageNumber == 0 && "disabled"}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setPageNumber(pageNumber - 1)}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </button>
                    </li>
                    {paginationArray.map((index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          index == pageNumber && "active"
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => {
                            setPageNumber(index);
                          }}
                        >
                          {index}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item  ${
                        pageNumber == maxPage && "disabled"
                      }`}
                    >
                      <button
                        className={`page-link`}
                        onClick={() => setPageNumber(pageNumber + 1)}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </button>
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
  );
}

export default Products;

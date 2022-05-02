import React from "react";
import { useNavigate } from "react-router";
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import { ProductDto } from "../../dto/ProductDto";
import useProducts from "../Products/hooks/useProducts";

const Home = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useProducts(0, 6, "", "");
  const handleAddToCart = () => {};
  return (
    <div>
      <div className="container-fluid mb-5">
        <Carousel />
      </div>
      <Categories />
      {/* Products Start */}
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2 font-serif">New Arrivals</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {data?.content?.map((product: ProductDto) => (
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 pb-1">
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
                  <a
                    className="btn btn-sm text-dark p-0"
                    onClick={() => {
                      handleAddToCart();
                    }}
                  >
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Products End */}
    </div>
  );
};

export default Home;

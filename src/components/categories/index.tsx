import React from "react";

const Categories = () => {
  return (
    <div>
      <p className="flex justify-center text-5xl mb-10 font-serif">
        Categories
      </p>
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <a className="cat-img position-relative overflow-hidden mb-3">
              <img
                className="img-fluid"
                src="src/assets/img/cat-1.jpg"
                alt=""
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <a className="cat-img position-relative overflow-hidden mb-3">
              <img
                className="img-fluid"
                src="src/assets/img/cat-2.jpg"
                alt=""
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <a className="cat-img position-relative overflow-hidden mb-3">
              <img
                className="img-fluid"
                src="src/assets/img/cat-3.jpg"
                alt=""
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

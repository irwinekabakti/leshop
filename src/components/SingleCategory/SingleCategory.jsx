import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SingleCategory.scss";
import SingleProduct from "../SingleProduct/SingleProduct";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { STATUS } from "../../utils/status";

const SingleCategory = ({ products, status }) => {
  if (status === STATUS.ERROR) {
    return <Error />;
  }

  if (status === STATUS.LOADING) {
    return <Loader />;
  }

  return (
    <section className="cat-single py-5 bg-ghost-white">
      <div className="container">
        <div className="cat-single-content">
          <div className="section-title">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
              {products[0].category.name}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCategory;

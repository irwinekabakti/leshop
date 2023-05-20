import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import "./HomePage.scss";
import Category from "../../components/Category/Category";
import ProductList from "../../components/ProductList/ProductList";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../../store/action/category-slice";
import SingleCategory from "../../components/SingleCategory/SingleCategory";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );

  const { catchProductsAll: productsByCategory, catchProductAllStatus } =
    useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, "all"));
    dispatch(fetchProductsByCategory(2, "all"));
  }, []);

  return (
    <>
      <div className="home-page">
        <Slider />
        <Category categories={categories} status={categoryStatus} />

        {/* category one products */}
        {/* <section>
          {productsByCategory[0] && (
            <SingleCategory
              products={productsByCategory[0]}
              status={catchProductAllStatus}
            />
          )}
        </section> */}

        {/* category two products */}
        {/* <section>
          {productsByCategory[1] && (
            <SingleCategory
              products={productsByCategory[1]}
              status={catchProductAllStatus}
            />
          )}
        </section> */}
      </div>
    </>
  );
};

export default HomePage;

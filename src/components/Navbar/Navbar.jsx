import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.scss";
import { fetchCategories } from "../../store/action/category-slice";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data: categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handlerSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="container">
            <div className="navbar-top flex flex-between">
              <Link to="/" className="navbar-brand">
                <span className="text-regal-blue">le</span>
                <span className="text-gold">Shop</span>
              </Link>

              <form className="navbar-search flex">
                <input type="text" placeholder="Search here" />
                <button type="submit" className="navbar-search-btn">
                  <i className="fas fa-search" />
                </button>
              </form>

              <div className="navbar-btns">
                <Link to="/cart" className="add-to-cart-btn flex">
                  <span className="btn-ico">
                    <i className="fas fa-shopping-cart" />
                  </span>
                  <div className="btn-txt fw-5">
                    cart
                    <span className="cart-count-value">0</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-bottom bg-regal-blue">
            <div className="container flex flex-between">
              <ul
                className={`nav-links flex ${
                  isSidebarOpen ? "show-nav-links" : ""
                }`}>
                <button
                  type="button"
                  className="navbar-hide-btn text-white"
                  // onClick={() => setIsSidebarOpen(false)}
                  onClick={handlerSidebar}>
                  <i className="fas fa-times" />
                </button>

                {categories?.map((category) => (
                  <li key={category.id}>
                    <Link
                      to={`/category/${category.id}`}
                      className="nav-link text-white"
                      onClick={handlerSidebar}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="navbar-show-btn text-gold"
                // onClick={() => setIsSidebarOpen(true)}
                onClick={handlerSidebar}>
                <i className="fas fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

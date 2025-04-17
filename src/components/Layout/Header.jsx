import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineClose,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLanguage } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import DropDown from "./DropDown";
import { categoriesData } from "../../static/data";
import Navbar from "./Navbar"; 
import Cart from "../Cart/Cart"
import Wishlist from "../Wishlist/Wishlist";

const Header = ({ activeHeading }) => {
  const [dropDown, setDropDown] = useState(false);
  const [active, setActive] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // TEMP STATE UNTIL REDUX IS SETUP
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = {
    avatar: {
      url: "https://i.pravatar.cc/300",
    },
  };
  const cart = [{ id: 1 }, { id: 2 }];
  const wishlist = [{ id: 1 }];

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white shadow-md p-3 hidden lg:block">
        <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
          <div className="flex items-center gap-3">
            <span>+254 (0)748 934 9834</span>
            <span>|</span>
            <span>contact@fendi.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <MdOutlineLanguage />
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <Link to="/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAACUCAMAAAAgTdyMAAAAulBMVEX////+1AP8/Pz9203xzRAAAADv7+/89txKQRbIrBUcHBz/2QL5+fnNzc358Lnl5eV2dnaSkpKKiore3t68vLzCwsJkZGSzs7PY2Ng0NDSnp6ednZ1ra2tVVVU9PT0TExMlJSVLS0tERESCgoIsLCwXFQ5TU05YVUPCqjD/7HPy79lRU1j389P/4lLt0zxLRCPJwI374l7898348q345Hr82C346ZT///bHwpr//+rx44ba0rT//9oWGB+CqGmtAAAEeklEQVR4nO2cf7faJhiAkTV0s1ACgUAgUSO269a1Xde1+/39v9ZIiF579a9OG2Xvc+4xBImH5wBvgORchAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg1qBzV+CKWGnnrsLVIGG9Y3NX4koQ8eIl7/K0I6b5/tUPP77O0Y6orjY/vXn29mV+dlTVnSPo6TeLJ+9+/mPu2lwau3I8Hga7b797/8vc1bkk3FNWjqlk9+zJh5lrdDm4XEv8ud1i8evTmWt1IUxTxjDy2G7x5vlvM1fsEtBCYXTGbvHxUwZ6eDlOK0/tYu+8/9iJl2Q4nLNbPJ+1ZpcA7O4XsLtfwO5+Abv7Bezul8nOZm3XbsddzCztSFsUq2GzKEc7XheRRmdpR0MxsiY52iHX121b9x3O0g6jsNq2Fc6yZ8ZPvmvccJanHaLjZ652E/8juyz2xI4fJB/Zvf2Qw37mRhB8ODvYDXu1Gdgh1TWS7Xtnslt8zOUxQoTJVamOYuar9/cfTo6xru/8/vndu9/vP5o8gscOGvhg92eWz82xbYv6r09/k0zfeUAk/PNa5/pGR4T4brvK1m54aUVmbBf9cn4LDgCA/wjxVTqK4ejHaIidFEKmyEiNlDKkIMm9lGKKl9jo6ReG3EM6XubZ4SRINW8A4stUM7KsaVzsmCFNveyKyY7U3cGuWpeybsYiiNYi/YDd9qLdTCds3Yp6mUrEK10oj1e+Xx++m+yaIiA0VR0jt5yWdKQ2h7LVOs6jRTGm93a4q+OnKdLLxGxnERX1qKSL8Zdm5WC3MWu/t0PRbkqQtlRKpxYY7dzndmw9fteEdNZES9eNWbzvVTXznfFgt6xMo8/ZbctS8jFdLZ1222S1t9PFKNCnJ0RsF0s0LrWYDXVzKz1zabHoi1O74565aUNTp+bY2/Fxm7OaLmSbVhZtKhEVsd5oNCd8c7CLJg926ylB6qCVsmNrVEWFTXrQ9RBVXCGY2XapudiGIbVLJXSprVvP+3I/Xz3YxdBysGumBCl3q9XGJ7th3Ml+zKelTwWwboqlmDqgje50CpQkbIrGzBxWAAAAgC+D8mFSMm4s4H2MH251KWcqg4c/dJSRnjJQOmbgSt/ovgTxQiJihEakYhKp4Q4olUNWOIKITu6ecD/q2YpWZFhQDEseW3nGh1mLqeO07RZvctgbSiuxKrkthelZMNG3dltdh0C49JrVhLiSt54wGldvRjOJK1m2isYpahAqzq9Zz7hlt9h6NBhrTNkK5lYVC0QHo7Zd6WzvhNOFZ1h5poLaMcMxUo2pkDdV7Z1UjSDeoM4YLY3T/BbbDhFrCSWEUs6GYUQ5qdYijruYQ6gdBmIcgFTvzNA2ZFjd0NhjKSY0jrXYWwknOF5/k27nKM9M8Rv19etxFarVSRb2YYaKXAPSnTQTVatqjqpcAb89CX4syFsMiF+AXZ6MOu7EvIvtixFXoSfNJJmcd6PkYlQtf5zFjM+k6RA+HWDGmDMFc4Hk+w8eAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDvlX+JjUpWbD4lEAAAAAElFTkSuQmCC"
              alt="Logo"
              className="h-16 w-24 rounded-md object-cover"
            />
          </Link>

          <div className="flex items-center border rounded-md px-3 py-2 w-full max-w-md flex-1">
            <input
              type="text"
              placeholder="Search here"
              className="flex-1 outline-none px-2"
            />
            <AiOutlineSearch className="text-gray-600 text-xl" />
          </div>

          <div className="flex items-center gap-4">
            <div
              className="relative cursor-pointer"
              onClick={() => setOpenWishlist(true)}
            >
              <AiOutlineHeart size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 text-white font-mono text-[12px] leading-tight text-center">
                {wishlist.length}
              </span>
            </div>

            <div
              className="relative cursor-pointer"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 text-white font-mono text-[12px] leading-tight text-center">
                {cart.length}
              </span>
            </div>
            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}

            <div className="relative cursor-pointer">
              {isAuthenticated ? (
                <Link to="/profile">
                  <img
                    src={user?.avatar?.url}
                    className="w-[35px] h-[35px] rounded-full"
                    alt="User Avatar"
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <CgProfile size={30} />
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div className="relative mt-3 hidden lg:block w-[270px]">
            <button
              onClick={() => setDropDown(!dropDown)}
              className="flex items-center justify-between w-full bg-white text-lg font-medium pl-10 pr-4 py-3 rounded-t-md relative"
            >
              <BiMenuAltLeft size={30} className="absolute left-2 top-3" />
              All Categories
              <IoIosArrowDown size={20} />
            </button>
            {dropDown && (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            )}
          </div>

          <div className="mt-4">
            <Navbar active={activeHeading} />
          </div>

          <div className="text-center mt-4.5 pt-1.5 text-green-700 font-semibold">
            Free Delivery above Ksh. 10,000
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white shadow-md p-3 lg:hidden items-center justify-center">
        <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
          <div className="flex items-center gap-3">
            <span>+254 (0)748 934 9834</span>
            <span>|</span>
            <span>contact@fendi.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <MdOutlineLanguage />
          </div>
        </div>

        <div className="flex justify-between mt-4 lg:hidden">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-lg text-gray-800"
            >
              <FiMenu size={30} />
            </button>
          </div>

          <div className="">
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAACUCAMAAAAgTdyMAAAAulBMVEX////+1AP8/Pz9203xzRAAAADv7+/89txKQRbIrBUcHBz/2QL5+fnNzc358Lnl5eV2dnaSkpKKiore3t68vLzCwsJkZGSzs7PY2Ng0NDSnp6ednZ1ra2tVVVU9PT0TExMlJSVLS0tERESCgoIsLCwXFQ5TU05YVUPCqjD/7HPy79lRU1j389P/4lLt0zxLRCPJwI374l7898348q345Hr82C346ZT///bHwpr//+rx44ba0rT//9oWGB+CqGmtAAAEeklEQVR4nO2cf7faJhiAkTV0s1ACgUAgUSO269a1Xde1+/39v9ZIiF579a9OG2Xvc+4xBImH5wBvgORchAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg1qBzV+CKWGnnrsLVIGG9Y3NX4koQ8eIl7/K0I6b5/tUPP77O0Y6orjY/vXn29mV+dlTVnSPo6TeLJ+9+/mPu2lwau3I8Hga7b797/8vc1bkk3FNWjqlk9+zJh5lrdDm4XEv8ud1i8evTmWt1IUxTxjDy2G7x5vlvM1fsEtBCYXTGbvHxUwZ6eDlOK0/tYu+8/9iJl2Q4nLNbPJ+1ZpcA7O4XsLtfwO5+Abv7Bezul8nOZm3XbsddzCztSFsUq2GzKEc7XheRRmdpR0MxsiY52iHX121b9x3O0g6jsNq2Fc6yZ8ZPvmvccJanHaLjZ652E/8juyz2xI4fJB/Zvf2Qw37mRhB8ODvYDXu1Gdgh1TWS7Xtnslt8zOUxQoTJVamOYuar9/cfTo6xru/8/vndu9/vP5o8gscOGvhg92eWz82xbYv6r09/k0zfeUAk/PNa5/pGR4T4brvK1m54aUVmbBf9cn4LDgCA/wjxVTqK4ejHaIidFEKmyEiNlDKkIMm9lGKKl9jo6ReG3EM6XubZ4SRINW8A4stUM7KsaVzsmCFNveyKyY7U3cGuWpeybsYiiNYi/YDd9qLdTCds3Yp6mUrEK10oj1e+Xx++m+yaIiA0VR0jt5yWdKQ2h7LVOs6jRTGm93a4q+OnKdLLxGxnERX1qKSL8Zdm5WC3MWu/t0PRbkqQtlRKpxYY7dzndmw9fteEdNZES9eNWbzvVTXznfFgt6xMo8/ZbctS8jFdLZ1222S1t9PFKNCnJ0RsF0s0LrWYDXVzKz1zabHoi1O74565aUNTp+bY2/Fxm7OaLmSbVhZtKhEVsd5oNCd8c7CLJg926ylB6qCVsmNrVEWFTXrQ9RBVXCGY2XapudiGIbVLJXSprVvP+3I/Xz3YxdBysGumBCl3q9XGJ7th3Ml+zKelTwWwboqlmDqgje50CpQkbIrGzBxWAAAAgC+D8mFSMm4s4H2MH251KWcqg4c/dJSRnjJQOmbgSt/ovgTxQiJihEakYhKp4Q4olUNWOIKITu6ecD/q2YpWZFhQDEseW3nGh1mLqeO07RZvctgbSiuxKrkthelZMNG3dltdh0C49JrVhLiSt54wGldvRjOJK1m2isYpahAqzq9Zz7hlt9h6NBhrTNkK5lYVC0QHo7Zd6WzvhNOFZ1h5poLaMcMxUo2pkDdV7Z1UjSDeoM4YLY3T/BbbDhFrCSWEUs6GYUQ5qdYijruYQ6gdBmIcgFTvzNA2ZFjd0NhjKSY0jrXYWwknOF5/k27nKM9M8Rv19etxFarVSRb2YYaKXAPSnTQTVatqjqpcAb89CX4syFsMiF+AXZ6MOu7EvIvtixFXoSfNJJmcd6PkYlQtf5zFjM+k6RA+HWDGmDMFc4Hk+w8eAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDvlX+JjUpWbD4lEAAAAAElFTkSuQmCC"
                alt="Logo"
                className="h-16 w-24 rounded-md object-cover"
              />
            </Link>
          </div>

          <div
            className="relative cursor-pointer mt-4"
            onClick={() => setOpenCart(true)}
          >
            <AiOutlineShoppingCart size={30} />
            <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 text-white font-mono text-[12px] leading-tight text-center">
              {cart.length}
            </span>
          </div>
        </div>
        {/* cart popup */}
        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

        {/* Mobile Menu (Side Drawer) */}
        {mobileMenuOpen && (
          <div className="fixed top-0 left-0 w-2/3 h-full bg-white z-50">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-semibold text-lg">
                <div className="flex items-center gap-4">
                  <div
                    className="relative cursor-pointer"
                    onClick={() => setOpenWishlist(true)}
                  >
                    <AiOutlineHeart size={30} />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 text-white font-mono text-[12px] leading-tight text-center">
                      {wishlist.length}
                    </span>
                  </div>{" "}
                </div>
                {/* wishlist popup */}
                {openWishlist ? (
                  <Wishlist setOpenWishlist={setOpenWishlist} />
                ) : null}
              </span>
              <AiOutlineClose
                size={25}
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 w-full max-w-md flex-1">
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 outline-none px-2"
              />
              <AiOutlineSearch className="text-gray-600 text-xl" />
            </div>
            <div className="block flex-col p-4">
              <Navbar active={activeHeading} />
            </div>

            <div className="relative cursor-pointer">
              {isAuthenticated ? (
                <Link to="/profile">
                  <img
                    src={user?.avatar?.url}
                    className="w-[35px] h-[35px] rounded-full"
                    alt="User Avatar"
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <CgProfile size={30} />
                </Link>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

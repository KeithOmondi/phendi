import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false); // wishlist status
  const [cart, setCart] = useState([]); // local cart

  const handleMessageSubmit = () => console.log("Send Message Clicked");

  const decrementCount = () => count > 1 && setCount(count - 1);

  const incrementCount = () => setCount(count + 1);

  const addToCartHandler = () => {
    const isItemExists = cart.some((i) => i._id === data._id);
    if (isItemExists) {
      alert("Item already in cart!");
    } else if (data.stock < count) {
      alert("Product stock limited!");
    } else {
      setCart([...cart, { ...data, qty: count }]);
      alert("Item added to cart!");
    }
  };

  const toggleWishlist = () => setClick((prev) => !prev);

  return (
    <div className="bg-white">
      {data && (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-lg relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50 cursor-pointer hover:text-gray-500"
              onClick={() => setOpen(false)}
            />

            <div className="w-full flex 800px:flex">
              {/* Image Section */}
              <div className="w-full 800px:w-[40%] p-2">
                <img
                  src={data.image_Url[0]?.url}
                  alt={data.name}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />

                <div className="mt-4">
                  <Link
                    to={`/shop/preview/${data.shop.id}`}
                    className="flex items-center"
                  >
                    <img
                      src={data.shop.shop_avatar?.url}
                      alt={data.shop.name}
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                    <div>
                      <h3 className="font-semibold">{data.shop.name}</h3>
                      <h5 className="text-sm text-gray-600">
                        {data.shop.ratings} Ratings
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Description Section */}
              <div className="w-full 800px:w-[60%] pt-5 px-4">
                <h1 className="text-[24px] font-semibold text-gray-800">
                  {data.name}
                </h1>
                <p className="text-gray-700 mt-2">{data.description}</p>

                <div className="flex pt-3">
                  <h4 className="text-xl text-green-600 font-semibold">
                    {data.discount_price}$
                  </h4>
                  {data.price && (
                    <h3 className="text-sm text-gray-500 line-through ml-3">
                      {data.price}$
                    </h3>
                  )}
                </div>

                {/* Stock Status */}
                <div className="mt-4">
                  <h5
                    className={`text-[16px] ${
                      data.stock <= 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {data.stock <= 0 ? "Sold out" : `In stock (${data.stock})`}
                  </h5>
                </div>

                {/* Quantity and Wishlist Section */}
                <div className="flex items-center mt-8 justify-between pr-3">
                  <div className="flex items-center">
                    <button
                      className="bg-gradient-to-r from-blue-900 to-blue-900 text-white font-bold rounded-l px-4 py-2"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-2">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r  from-blue-900 to-blue-900 text-white font-bold rounded-r px-4 py-2"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>

                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer text-red-500"
                        onClick={toggleWishlist}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer text-gray-600"
                        onClick={toggleWishlist}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div
                  className="mt-6 rounded-[4px] h-11 flex items-center justify-center cursor-pointer bg-blue-900 hover:bg-yellow-600"
                  onClick={addToCartHandler}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>

                {/* Message Button */}
                <div
                  className="bg-blue-900 mt-4 rounded-[4px] h-11 flex items-center justify-center cursor-pointer text-white hover:bg-yellow-600"
                  onClick={handleMessageSubmit}
                >
                  <span className="text-white flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsCard;

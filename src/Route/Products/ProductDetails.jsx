import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { productData } from "../../static/data";
import SuggestedProduct from "./SuggestedProduct";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === Number(id));

  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);

  const incrementCount = () => setCount((prev) => prev + 1);
  const decrementCount = () => count > 1 && setCount((prev) => prev - 1);

  if (!product) {
    return (
      <div className="text-center text-gray-600 p-10 text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | Phendi Interior</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div>
        <Header />
      </div>

      <div className="bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto py-5">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={product.image_Url[select]?.url}
                alt={product.name}
                className="w-[80%] object-cover rounded mx-auto md:w-full"
              />
              <div className="w-full flex flex-wrap mt-4">
                {product.image_Url.map((img, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer ${
                      select === index ? "border-2 border-teal-500" : ""
                    } mr-2 mb-2`}
                    onClick={() => setSelect(index)}
                  >
                    <img
                      src={img?.url}
                      alt={`Thumbnail ${index}`}
                      className="h-[120px] w-[120px] object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 pt-5 md:pt-0 md:pl-8">
              <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
              <p className="text-gray-700 mb-4">{product.description}</p>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <h4 className="text-xl font-bold text-teal-600">
                  ${product.discount_price}
                </h4>
                {product.price && (
                  <h3 className="text-lg line-through text-gray-500">
                    ${product.price}
                  </h3>
                )}
              </div>

              {/* Quantity and Wishlist */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <button
                    className="bg-teal-500 text-white font-bold rounded-l px-4 py-2 hover:opacity-75"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                    {count}
                  </span>
                  <button
                    className="bg-teal-500 text-white font-bold rounded-r px-4 py-2 hover:opacity-75"
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
                      onClick={() => setClick(false)}
                      title="Remove from wishlist"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      className="cursor-pointer text-gray-700"
                      onClick={() => setClick(true)}
                      title="Add to wishlist"
                    />
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="bg-teal-600 text-white rounded h-11 flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                <span className="flex items-center">
                  Add to cart <AiOutlineShoppingCart className="ml-2" />
                </span>
              </div>

              {/* Ratings and Stock */}
              <div className="mt-4 text-sm text-gray-600">
                <p>⭐ Rating: {product.rating} / 5</p>
                <p>Sold: {product.total_sell}</p>
                <p>Stock: {product.stock}</p>
              </div>

              {/* Shop Info */}
              <div className="flex items-center pt-8">
                <Link to={`/shop/preview/${product?.shop?.id}`}>
                  <img
                    src={product?.shop?.shop_avatar?.url}
                    alt={product.shop.name}
                    className="w-[50px] h-[50px] rounded-full mr-3"
                  />
                </Link>
                <div>
                  <Link to={`/shop/preview/${product?.shop?.id}`}>
                    <h3 className="text-lg font-semibold">{product.shop.name}</h3>
                  </Link>
                  <h5 className="text-sm text-gray-600">
                    ⭐ {product.shop.ratings} / 5 — Visit shop
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SuggestedProduct data={product} />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;

import React, { useState, useEffect } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ProductCard = ({ data, isEvent }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const addToCartHandler = (id) => {
    if (data.stock < 1) {
      toast.error("Product stock limited!");
    } else {
      toast.success("Item added to cart successfully!");
    }
  };

  useEffect(() => {
    if (data.isInWishlist) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data]);

  return (
    <div className="w-full h-[270px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <Link
        to={`${
          isEvent ? `/product/${data.id}?isEvent=true` : `/product/${data.id}`
        }`}
      >
        <img
          src={`${data.image_Url && data.image_Url[0]?.url}`}
          alt={data.name}
          className="w-full h-[170px] object-cover"
        />
      </Link>
      <Link to={`/shop/preview/${data?.shop.id}`}>
        <h5 className="text-[15px] font-bold text-black">{data.shop.name}</h5>
      </Link>
      <Link
        to={`${
          isEvent ? `/product/${data._id}?isEvent=true` : `/product/${data.id}`
        }`}
      >
        <h4 className="pb-3 font-[500]">
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>

        {/*<div className="flex">
          <Ratings rating={data?.ratings} />
        </div>*/}

        <div className="">
          <div className="flex gap-6 pt-1 justify-between">
            <h5 className="text-lg font-semibold text-gray-800">
              {" "}
              {data.discount_price === 0
                ? data.discount_price
                : data.discount_price}{" "}
              Ksh
            </h5>
            {data.price && (
              <h4 className="text-sm text-gray-500 line-through">
                {data.price} Ksh
              </h4>
            )}

            <span className="text-sm font-medium text-[#68d284]">
              {data?.total_sell} sold
            </span>
          </div>
        </div>
      </Link>

      {/* side options */}
      <div>
        {click ? (
          <AiFillHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
          />
        )}
        <AiOutlineEye
          size={22}
          className="cursor-pointer absolute right-2 top-14"
          onClick={() => setOpen(!open)}
          color="#333"
          title="Quick view"
        />
        <AiOutlineShoppingCart
          size={25}
          className="cursor-pointer absolute right-2 top-24"
          onClick={() => addToCartHandler(data._id)}
          color="#444"
          title="Add to cart"
        />
        {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
      </div>
    </div>
  );
};

export default ProductCard;

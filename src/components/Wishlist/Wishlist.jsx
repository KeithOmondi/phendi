import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({
  setOpenWishlist,
  wishlist = [],
  handleRemove,
  handleAddToCart,
}) => {
  return (
    <div className="fixed inset-0 bg-[#0000004b] bg-opacity-30 z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] md:w-[25%] bg-white shadow-sm overflow-y-scroll transition-all">
        {/* Header */}
        <div className="flex justify-end p-4 border-b">
          <RxCross1
            size={25}
            className="cursor-pointer text-gray-700 hover:text-red-500"
            onClick={() => setOpenWishlist(false)}
          />
        </div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <h5 className="text-gray-600 text-lg">Your wishlist is empty!</h5>
          </div>
        ) : (
          <>
            {/* Wishlist Header */}
            <div className="flex items-center px-4 py-3 border-b">
              <AiOutlineHeart size={24} className="text-red-500" />
              <h5 className="pl-2 text-lg font-medium">
                {wishlist.length} item{wishlist.length > 1 ? "s" : ""}
              </h5>
            </div>

            {/* Wishlist Items */}
            <div className="divide-y">
              {wishlist.map((item, index) => (
                <WishlistItem
                  key={index}
                  data={item}
                  onRemove={handleRemove}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const WishlistItem = ({ data, onRemove, onAddToCart }) => {
  const [qty] = useState(1);
  const total = data?.discountPrice * qty;

  return (
    <div className="p-4 flex flex-col md:flex-row items-start md:items-center gap-3">
      {/* Remove Button */}
      <RxCross1
        className="cursor-pointer text-gray-500 hover:text-red-600"
        onClick={() => onRemove(data)}
      />

      {/* Product Image */}
      <img
        src={data?.images?.[0]?.url || "/placeholder.png"}
        alt={data?.name}
        className="w-[120px] h-auto rounded-md object-cover"
      />

      {/* Info & Add to Cart */}
      <div className="flex-1">
        <h1 className="text-base font-semibold text-gray-800">
          {data?.name}
        </h1>
        <h4 className="text-red-600 font-semibold text-md pt-2">
          US${total?.toFixed(2)}
        </h4>
      </div>

      {/* Add to Cart Button */}
      <BsCartPlus
        size={20}
        className="cursor-pointer text-green-600 hover:text-green-800"
        title="Add to cart"
        onClick={() => onAddToCart(data)}
      />
    </div>
  );
};

export default Wishlist;

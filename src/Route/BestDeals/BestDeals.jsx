import React, { useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/Product";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const BestDeals = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const handleProductClick = (item) => {
    setData(item);
    setOpen(true);
  };

  return (
    <div className="flex flex-col lg:flex-row pt-4 p-3.5">
      {/* Left Banners Container */}
      <div className="flex flex-col lg:w-[25rem] space-y-6 mb-6 lg:mb-0">
        {/* First Left Banner */}
        <div className="w-full h-80 lg:h-screen overflow-hidden">
          <img
            src="https://img.kilimall.com/c/public/banner-image/100008596.jpg?x-image-process=image/format,webp#"
            alt="bestdeals"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Second Left Banner */}
        <div className="w-full h-80 lg:h-screen overflow-hidden">
          <img
            src="https://img.kilimall.com/c/public/banner-image/100008596.jpg?x-image-process=image/format,webp#"
            alt="bestdeals"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Right Product Grid */}
      <div className="flex-1 pl-0 lg:pl-4">
        <div className="font-bold font-Poppins text-2xl mb-4 text-center lg:text-left">
          <h1>Best Deals</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3">
          {productData &&
            productData.map((item, index) => (
              <div
                key={index}
                className="relative p-3 transition duration-300 ease-in-out group"
              >
                {/* You can now use the ProductCard component */}
                <ProductCard
                  data={item}
                  isEvent={false} // Set isEvent to true if you want event-related functionality
                />
              </div>
            ))}
        </div>
      </div>

      {open && data && <ProductDetailsCard setOpen={setOpen} data={data} />}
    </div>
  );
};

export default BestDeals;

import React, { useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/Product";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const FeaturedProducts = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const handleProductClick = (item) => {
    setData(item);
    setOpen(true);
  };

  return (
    <div className="flex flex-col lg:flex-row pt-4 p-3.5">
      {/* Right Product Grid */}
      <div className="flex-1 pl-0 lg:pl-4">
        <div className="font-bold font-Poppins text-2xl mb-4 text-center lg:text-left">
          <h1>Featured Products</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {productData &&
            productData.map((item, index) => (
              <div
                key={index}
                className="relative p-3 transition duration-300 ease-in-out group"
              >
                {/* Replace the current JSX structure with ProductCard */}
                <ProductCard data={item} isEvent={false} />
              </div>
            ))}
        </div>
      </div>

      {open && data && <ProductDetailsCard setOpen={setOpen} data={data} />}
    </div>
  );
};

export default FeaturedProducts;

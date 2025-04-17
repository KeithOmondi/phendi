import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/Product";

const SuggestedProduct = ({ data }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (data?.category) {
      const related = productData.filter(
        (product) => product.category === data.category
      );
      setFilteredProducts(related);
    }
  }, [data]);

  return (
    <div>
      {data && (
        <div className="p-4 w-full max-w-[1200px] mx-auto">
          <h2 className="text-[25px] font-medium border-b border-gray-300 pb-2 mb-5">
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mb-12">
            {filteredProducts.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestedProduct;

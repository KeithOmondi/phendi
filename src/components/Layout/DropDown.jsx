import React from "react";
import { useNavigate } from "react-router-dom";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();

  const submitHandle = (category) => {
    navigate(`/products?category=${category.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div className="absolute z-30 w-[270px] bg-white rounded-b-md shadow-md">
      {categoriesData &&
        categoriesData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 transition duration-200"
            onClick={() => submitHandle(item)}
          >
            <img
              src={item.image_Url}
              alt={item.title}
              className="w-6 h-6 object-contain select-none"
            />
            <h3 className="text-sm font-medium text-gray-800 select-none">
              {item.title}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;

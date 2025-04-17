import React from "react";
import Slider from "react-slick";
import { categoriesData, sliderData } from "../../static/data";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // Hook to get the navigate function

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.title}`); // Navigate to the category page
  };

  return (
    <>
      <div className="w-full h-[400px] overflow-hidden rounded-md shadow-md">
        <Slider {...settings}>
          {sliderData && sliderData.map((item, index) => (
            <div key={index} className="relative h-[400px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-opacity-1 flex flex-col items-center justify-center text-white text-center p-4">
                <h2 className="text-2xl md:text-4xl font-bold">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm md:text-lg">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="bg-white pt-14 p-6 rounded-lg shadow-sm mb-12 w-11/12 mx-auto"
        id="categories"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {categoriesData &&
            categoriesData.map((i) => {
              return (
                <div
                  key={i.id}
                  onClick={() => handleCategoryClick(i)} // Updated to pass category data
                  className="flex items-center justify-between gap-4 bg-gray-50 hover:bg-gray-100 rounded-md p-4 cursor-pointer transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                >
                  <h5 className="text-[16px] font-semibold text-gray-800">
                    {i.title}
                  </h5>
                  <img
                    src={i.image_Url}
                    alt={i.title}
                    className="w-[100px] h-[60px] object-contain"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Layout/Header";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/Product";

const BedRoom = () => {
  return (
    <>
      <Helmet>
        <title>Bedroom | Phedi Interior</title>
        <meta
          name="description"
          content="Discover cozy and elegant bedroom furniture collections that enhance your space with comfort and modern design."
        />
        <meta
          name="keywords"
          content="Bedroom, Furniture, Interior Design, Beds, Home Decor, Phedi Interior"
        />
      </Helmet>

      <div className="bg-white w-full min-h-screen">
        <Header />

        {/* Hero Section */}
        <section
          className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded">
            <h1 className="text-4xl font-bold mb-2">
              Dream Bedrooms Designed for Comfort
            </h1>
            <p className="text-lg">
              Create your sanctuary with modern, stylish, and cozy bedroom
              designs.
            </p>
          </div>
        </section>

        {/* Bedroom Products Section */}
        <section className="py-12 px-4 md:px-16 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Featured Bedroom Collections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productData &&
              productData.map((item, index) => (
                <ProductCard
                  key={index}
                  data={item}
                  isEvent={false} // Pass any other prop you need (e.g., isEvent)
                />
              ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="py-10 bg-[#17dd1f] text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Make Your Bedroom a Personal Oasis
          </h2>
          <button className="bg-white text-[#17dd1f] font-semibold px-6 py-3 rounded hover:bg-gray-100">
            Schedule a Free Design Session
          </button>
        </div>
      </div>
    </>
  );
};

export default BedRoom;

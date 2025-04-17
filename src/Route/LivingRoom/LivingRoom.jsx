import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import BlogSection from "../BlogSection/BlogSection";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/Product";

const LivingRoom = () => {
  return (
    <>
      <div className="bg-white w-full min-h-screen">
        <Header />

        <Helmet>
          <title>Living Room | Phedi Interior</title>
          <meta
            name="description"
            content="Explore our elegant and modern living room furniture collections. Designed to elevate your space with style and comfort."
          />
          <meta
            name="keywords"
            content="Living Room, Furniture, Interior Design, Sofas, Home Decor"
          />
        </Helmet>

        {/* Hero Section */}
        <section
          className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded">
            <h1 className="text-4xl font-bold mb-2">
              Modern Living Room Inspirations
            </h1>
            <p className="text-lg">
              Elegant designs that bring comfort and beauty to your home.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 px-4 md:px-16 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Living Room Picks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {productData &&
              productData.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))}
          </div>
        </section>

        <BlogSection />
        <Footer />
      </div>
    </>
  );
};

export default LivingRoom;

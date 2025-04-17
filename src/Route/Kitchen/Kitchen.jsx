import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header';
import { productData } from '../../static/data';
import { AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const Kitchen = () => {
  return (
    <>
      <Helmet>
        <title>Kitchen | Phedi Interior</title>
        <meta
          name="description"
          content="Discover modern kitchen designs and furniture for every cooking and dining space. Stylish, functional, and built for convenience."
        />
        <meta name="keywords" content="Kitchen, Interior Design, Kitchen Cabinets, Modern Kitchen, Furniture, Phedi Interior" />
      </Helmet>

      <div className="bg-white w-full min-h-screen">
        <Header />

        {/* Hero Section */}
        <section
          className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded">
            <h1 className="text-4xl font-bold mb-2">Stylish Kitchens That Inspire</h1>
            <p className="text-lg">Transform your kitchen with smart, elegant, and functional furniture solutions.</p>
          </div>
        </section>

        {/* Kitchen Products Section */}
        <section className="py-12 px-4 md:px-16 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-8">Kitchen Essentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productData &&
              productData.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white shadow-md hover:shadow-lg rounded p-3 transition duration-300 ease-in-out group"
                >
                  {/* Action Icons */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button className="bg-white p-1 rounded shadow hover:bg-gray-100">
                      <AiOutlineShoppingCart size={20} />
                    </button>
                    <button className="bg-white p-1 rounded shadow hover:bg-gray-100">
                      <AiOutlineHeart size={20} />
                    </button>
                    <button
                      className="bg-white p-1 rounded shadow hover:bg-gray-100"
                      onClick={() => console.log('View item', item.name)}
                    >
                      <AiOutlineEye size={20} />
                    </button>
                  </div>

                  {/* Product Image */}
                  <img
                    src={item.image_Url?.[0]?.url || 'https://via.placeholder.com/150'}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-md"
                  />

                  {/* Product Info */}
                  <div className="mt-2 text-sm font-semibold line-clamp-2">{item.name}</div>
                  <div className="text-sm text-gray-600 mt-1">Sold by {item.shop.name}</div>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <span className="font-bold text-green-600">KSh {item.discount_price}</span>
                    <span className="line-through text-gray-400 text-xs">KSh {item.price}</span>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="py-10 bg-[#17dd1f] text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Cook in Style with Custom Kitchen Designs</h2>
          <button className="bg-white text-[#17dd1f] font-semibold px-6 py-3 rounded hover:bg-gray-100">
            Get a Free Kitchen Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Kitchen;

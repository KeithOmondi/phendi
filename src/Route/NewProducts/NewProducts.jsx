import React, { useState } from 'react'
import { productData } from '../../static/data'
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard'
import Banner from '../../components/Layout/Banner'
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from 'react-icons/ai'

const NewProducts = () => {
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleOpen = (item) => {
    setSelectedProduct(item)
    setOpen(true)
  }

  return (
    <>
      

      <div className='w-11/12 mx-auto'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>New Products</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
          {productData &&
            productData.map((item, index) => (
              <div
                className='relative border rounded-lg p-2 shadow-sm cursor-pointer hover:shadow-md transition group'
                key={index}
              >
                {/* Icons on the left */}
                <div className='absolute top-2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10'>
                  <button className='bg-white p-1 rounded shadow hover:bg-gray-100'>
                    <AiOutlineShoppingCart size={20} />
                  </button>
                  <button className='bg-white p-1 rounded shadow hover:bg-gray-100'>
                    <AiOutlineHeart size={20} />
                  </button>
                  <button
                    className='bg-white p-1 rounded shadow hover:bg-gray-100'
                    onClick={() => handleOpen(item)}
                  >
                    <AiOutlineEye size={20} />
                  </button>
                </div>

                <img
                  src={item.image_Url?.[0]?.url}
                  alt={item.name}
                  className='w-full h-48 object-cover rounded-md'
                />
                <h3 className='mt-2 text-lg font-medium'>{item.name}</h3>
                <p className='text-sm text-gray-600'>{item.description}</p>
              </div>
            ))}
        </div>

        {open && selectedProduct && (
          <ProductDetailsCard setOpen={setOpen} data={selectedProduct} />
        )}
      </div>

      <div>
        <Banner />
      </div>
    </>
  )
}

export default NewProducts

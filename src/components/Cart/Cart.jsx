// Cart.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = ({ cart = [], setOpenCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.discountPrice, 0);

  const handleQuantityChange = (updatedItem) => {
    // Implement quantity update logic if using state or context
  };

  const handleRemoveItem = (item) => {
    // Implement remove logic if using state or context
  };

  return (
    <>
      <Helmet>
        <title>Shopping Cart - Your Store</title>
        <meta name="description" content="Manage your shopping cart." />
      </Helmet>

      <div className="fixed top-0 left-0 w-full h-screen bg-[#0000004b] z-10">
      <div className="fixed top-0 right-0 h-full w-full sm:w-full md:w-[25%] bg-white shadow-sm overflow-y-scroll flex flex-col justify-between">

          <div className="flex justify-end pt-5 pr-5">
            <RxCross1 size={25} className="cursor-pointer" onClick={() => setOpenCart(false)} />
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <h5 className="text-lg text-gray-500">Cart is empty!</h5>
            </div>
          ) : (
            <>
              <div className="p-4 flex items-center">
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">{cart.length} item(s)</h5>
              </div>

              <div className="w-full border-t">
                {cart.map((item, index) => (
                  <CartItem
                    key={index}
                    data={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>

              <div className="px-5 mb-3">
                <Link to="/checkout">
                  <div className="h-[45px] flex items-center justify-center w-full bg-[#e44343] rounded-[5px]">
                    <h1 className="text-white text-[18px] font-[600]">
                      Checkout Now (USD${totalPrice.toFixed(2)})
                    </h1>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const CartItem = ({ data, onQuantityChange, onRemove }) => {
  const [qty, setQty] = useState(data.qty || 1);
  const itemTotal = (data.discountPrice * qty).toFixed(2);

  const increment = () => {
    if (data.stock <= qty) {
      toast.error("Product stock limited!");
      return;
    }
    const updatedQty = qty + 1;
    setQty(updatedQty);
    onQuantityChange({ ...data, qty: updatedQty });
  };

  const decrement = () => {
    const updatedQty = qty > 1 ? qty - 1 : 1;
    setQty(updatedQty);
    onQuantityChange({ ...data, qty: updatedQty });
  };

  return (
    <div className="border-b p-4 flex items-center">
      <div className="flex flex-col items-center">
        <button
          onClick={increment}
          className="w-[25px] h-[25px] bg-[#e44343] border border-[#e4434373] rounded-full flex items-center justify-center"
        >
          <HiPlus size={18} color="#fff" />
        </button>
        <span className="my-1">{qty}</span>
        <button
          onClick={decrement}
          className="w-[25px] h-[25px] bg-[#a7abb14f] rounded-full flex items-center justify-center"
        >
          <HiOutlineMinus size={16} color="#7d879c" />
        </button>
      </div>

      <img
        src={data?.images?.[0]?.url || ""}
        alt={data.name}
        className="w-[100px] h-auto mx-3 rounded-[5px]"
      />

      <div className="flex flex-col justify-between flex-1">
        <h1 className="text-base font-medium">{data.name}</h1>
        <h4 className="text-sm text-[#00000082]">
          ${data.discountPrice} × {qty}
        </h4>
        <h4 className="font-semibold text-[#d02222] text-lg">
          Ksh{itemTotal}
        </h4>
      </div>

      <RxCross1 className="cursor-pointer ml-2" size={20} onClick={() => onRemove(data)} />
    </div>
  );
};

export default Cart;

import React from "react";
import Razorpay from "./razorpay";

function Cart(props) {
  const category1 = props.Cat1;
  const category2 = props.Cat2;
  let cost = 0;
  let items = 0;
  if (category1) {
    cost += 200;
    items += 1;
  }
  if (category2) {
    cost += 250;
    items += 1;
  }

  const tcost = cost + 0.18 * cost;
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div id="summary" className="w-1/4 px-8 py-10 bg-white">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items {items}</span>
          <span className="font-semibold text-sm">₹{cost}</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">
            GST
          </label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard GST - %18.00</option>
          </select>
        </div>
        <div className="py-10">
          <label
            htmlFor="promo"
            className="font-semibold inline-block mb-3 text-sm uppercase"
          >
            Promo Code
          </label>
          <input
            type="text"
            id="promo"
            placeholder="Enter your code"
            className="p-2 text-sm w-full"
          />
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
          Apply
        </button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>₹{tcost}</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
          <Razorpay />
        </div>
      </div>
    </div>
  );
}

export default Cart;

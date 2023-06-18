"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCart from "./(store)/store";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */

export default function ProductCard(props) {
  const { product } = props;
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;

  const setProduct = useCart((state) => state.setProduct);
  const addItemToCart = useCart((state) => state.addItemToCart);

  const router = useRouter();

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo,
    };
    setProduct({ newProduct });
    router.push("/product?price_id=" + price_id);
  }

  function handleAddToCart() {
    console.log("PRICE ID: ", price_id);
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
  }
  return (
    // <div onClick={onProductClick} className='flex flex-col shadow bg-white hover:shadow-lg cursor-pointer'>
    //     <img src={productInfo.images[0]} alt={name} className="w-full h-full object-cover" />
    //     <div className='flex flex-col gap-2 p-4'>
    //         <div className='flex items-center justify-between'>
    //             <h3>{name}</h3>
    //             <p>₹{cost / 100}*</p>
    //         </div>
    //         <p className='text-sm'>{description}</p>
    //     </div>

    // </div>
    <div
      class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer"
      onClick={onProductClick}
    >
      <img
        className="h-60 rounded-t-lg object-cover"
        src={productInfo.images[0]}
        alt={name}
      />

      {/* <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
        Sale
      </span> */}
      <div class="mt-4 px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-slate-900">
          {name}
        </h5>

        <p class="mb-6 text-gray-400 py-2">{description}</p>
        <div class="flex items-center justify-between">
          <p>
            <span class="text-xl font-bold text-slate-900 inset-x-0 bottom-0">
              ₹{cost / 100}*
            </span>
            {/* <span class="text-sm text-slate-900 line-through">$299</span> */}
          </p>
          <p
            onClick={handleAddToCart}
            class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <i className="fa-solid cursor-pointer group-hover:text-slate-500 fa-cart-shopping px-2"></i>
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}

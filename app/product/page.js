/* eslint-disable @next/next/no-img-element */
"use client";
import useCart from "../(store)/store";

export default function ProductPage(props) {
  const { searchParams } = props;
  const { price_id } = searchParams;
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const { cost, productInfo, name, description } = product;

  console.log(productInfo);

  if (!product?.name) {
    window.location.href = "/";
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
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 md:shadow">
          <img
            src={productInfo.images[0]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex md:flex-col md:items-start text-xl  items-center justify-between gap-2">
            <h3>{name}</h3>
            <p className="md:text-base">${cost / 100}</p>
          </div>
          <p className="text-sm flex-1">{description}</p>
          <button
            onClick={handleAddToCart}
            className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

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
    <div className="flex flex-col p-4 bg-trueGray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 md:shadow">
          <img
            src={productInfo.images[0]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

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
            <button
              onClick={handleAddToCart}
              class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <i className="fa-solid cursor-pointer group-hover:text-slate-500 fa-cart-shopping px-2"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

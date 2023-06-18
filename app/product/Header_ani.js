"use client";
import Link from "next/link";
import React from "react";
import useCart from "../(store)/store";
import Modal from "../Modal";
import { Carousel } from "react-responsive-carousel";

export default function Header_ani() {
  return (
    <Carousel
      showArrows={true}
    //   onChange={onChange}
    //   onClickItem={onClickItem}
    //   onClickThumb={onClickThumb}
    >
      <div>
        <img src="assets/M2Pro.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MLXW3HN_A_1_c571c1cf-751c-4079-bc26-e7faec016440.png?v=1658744428" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="assets/4.jpeg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="assets/5.jpeg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="assets/6.jpeg" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
}

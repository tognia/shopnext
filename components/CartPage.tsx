import React from "react";
import { useSelector } from "react-redux";
import {
  emptyCart,
  phoneImg,
  ship1Img,
  ship2Img,
  ship3Img,
  warningImg,
} from "../public/assets/images";
import { TbReload } from "react-icons/tb";
import { HiMinusSmall } from "react-icons/hi2";
import { MdOutlineAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { StoreProduct } from "@/type";

const CartPage = () => {
  const productData = useSelector((state: any) => state.shopper.productData);
  return (
    <div className="w-full py-10 bg-white">
      <div className="w-full flex gap-10">
        <div className="w-2/3 flex flex-col  gap-5 ">
          <h1 className="text-2xl font-bold text-black">
            Cart
            <span className="text-lightText font-normal">
              {productData.length} items
            </span>
          </h1>
          {/* pickup details  */}
          <div>
            <div className="text-xl font-bold flex items-center gap-2 mb-2">
              <Image className="w-10" src={phoneImg} alt="phoneImg" />
              <p>Pickup and Delivery Options</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-4 text-xs">
              <div
                className="w-full border border-zinc-400 
            rounded-md flex flex-col items-center justify-center gap-1 p-2"
              >
                <Image className="w-10" src={ship1Img} alt="ship1Img" />
                <p className="font-bold">Shipping</p>
                <p>All Items available</p>
              </div>
              <div
                className="w-full border border-zinc-400 
            rounded-md flex flex-col items-center justify-center gap-1 p-2"
              >
                <Image className="w-10" src={ship2Img} alt="ship2Img" />
                <p className="font-bold">Pickup</p>
                <p>All Items available</p>
              </div>
              <div
                className="w-full border border-zinc-400 
            rounded-md flex flex-col items-center justify-center gap-1 p-2"
              >
                <Image className="w-10" src={ship3Img} alt="ship3Img" />
                <p className="font-bold">Delivery</p>
                <p>All Items available</p>
              </div>
            </div>
            {/* Cart Product */}
            <div
              className="w-full p-5 border-[1px] border-zinc-400 rounded-md
                  flex flex-col justify-center gap-4"
            >
              <p className="font-semibold text-sm text-zinc-500">
                {" "}
                Sold and Ship by
                <span className="text-black font-semibold">Shoppers.com</span>
              </p>
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-[#004f9a] text-sm border-[1px] border-[#004f9a] rounded-sm ">
                  Best Seller
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm ">
                  Rollback
                </button>
              </div>
              {/* ITEMS */}
              <div>
                {
                  productData.map((item:StoreProduct)=>(
                    <div key={item._id} className="flex items-center justify-between gap-4 border-b-[1px]
                    border-b-zinc-200 pb-4">
                        <div className="w-3/4 flex items-center gap-2">
                        <Image
                            className="w-32"
                            width={500}
                            height={500}
                            src={item.image}
                            alt="product img"
                          />
                        </div>
                        <div>
                          <h2 className="text-base text-zinc-500">{item.title}</h2>
                          <p className="text-sm text-zinc-500">{item.description} </p>
                          <p className="text-sm text-zinc-500">price: ${item.price} </p>
                          <p className="text-sm text-zinc-500 flex items-center gap-1">
                            <span className="bg-blue rounded-full text-white text-xs w-4 h-5
                            flex items-center justify-center">
                              <TbReload className="rotate-180" />
                            </span>
                            Free 30-day returns
                          </p>
                        </div>
                        {/* Buttons */}
                        <div>
                          <button className="text-sm underline underline-offset-2 decoration-[1px] text-zinc-600
                          hover:no-underline hover:text-blue  duration-300">
                            Remove
                          </button>
                        </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-300
        rounded-md justify-center flex flex-col gap-4 "
        ></div>
      </div>
    </div>
  );
};

export default CartPage;

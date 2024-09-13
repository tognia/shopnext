import { ship1Img, ship2Img, ship3Img } from "@/public/assets/images";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsInfoCircle, BsStarFill } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shopperSlice";

const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setProduct(router.query);
    setIsLoading(false);
  }, []);

 const _id = Number(product._id);

  return (
    <div className="w-full bg-white">
      <div className="max-w-contentContainer mx-auto flex items-center py-4">
        <div className="w-2/3 h-full flex items-center justify-center overflow-hidden relative">
          <img
            src={product.image}
            alt="ProductImage"
            className="w-[80%] transform-origin-top-left cursor-move duration-500"
          />
        </div>
        <div className="w-1/3 h-full flex flex-col gap-2 ">
          <p
            className="p-2 text-[#004f9a] text-sm font-semibold border border-gray-400 
              rounded-md"
          >
            500+ bought since yesterday
          </p>

          <div className="px-2 py-4 text-[#004f9a]  border border-gray-400 rounded-md flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-[#004f9a] text-sm border-[1px] border-[#004f9a] rounded-sm ">
                  Best Seller
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm ">
                  Rollback
                </button>
              </div>
              <IoMdHeartEmpty className="text-gray-600 text-2xl" />
            </div>
           {/* Product Infos */}
          <div>
            <p className="text-zinc-800 text-sm underline underline-offset-4">
              {product.brand}
            </p>
            <p className="text-zinc-800 text-xl font-semibold">
              {product.title}
            </p>
            <p className="text-zinc-500 text-base">{product.description}</p>
            <div className="flex gap-2 items-center text-sm mt-2">
              <div className="flex text-sm gap-1 text-zinc-800">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p className="text-zinc-800">25</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="font-semibold text-2xl text-[#2a8703]">
                Now ${product.price}
              </p>
              <p className="text-sm text-zinc-500 line-through flex items-center gap-1">
                ${product.oldPrice}{" "}
              </p>
              <span className="text-zinc-500">
                <BsInfoCircle />
              </span>
            </div>
          </div>
          {/* Online Infos */}
          <div className="text-sm text-black flex flex-col gap-1">
            <p className="text-zinc-500">
              <span className="font-semibold">$18/mo</span>{" "}
              <span className="font-bold">withAffirm</span>{" "}
              <span className="underline underline-offset-2">Learn How</span>
            </p>
            <p className="text-xs text-zinc-500 flex items-center gap-1">
              Price when purchased online
              <span className="underline underline-offset-2">
                <BsInfoCircle />
              </span>
            </p>
          </div>
          {/* Add to Cart */}
          <div className="border-b-[1px] border-b-zinc-300 pb-4">
            <button onClick={()=>dispatch(addToCart(
              {
                _id: _id,
                title: product.title,
                description: product.description,
                oldPrice: product.oldPrice,
                price: product.price,
                brand: product.brand,
                image: product.image,
                isNew: product.isNew,
                category: product.category,
                quantity:1
              }
            ))} className="w-32 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300" >
              Add to Cart
            </button>
          </div>
           {/* Delivery options */}
           <div>
            <p className="text-base font-semibold text-zinc-800">
              How do you want your item ?
            </p>
            <div className="w-full grid grid-cols-3 gap-4 text-xs">
              <div className="text-zinc-800 w-full border border-zinc-400 rounded-md flex flex-col
                              items-center justify-center p-2">
                <Image className="w-10" src={ship1Img} alt="ship1Img" />
                <p>Shipping</p>
                <p>Tomorrow</p>
                <p>Free</p>
              </div>
             
              <div className="text-zinc-800 w-full border border-zinc-400 rounded-md flex flex-col
                              items-center justify-center p-2">
                <Image className="w-10" src={ship2Img} alt="ship2Img" />
                <p>Pickup</p>
                <p>Tomorrow</p>
                <p>Free</p>
              </div>

              <div className="text-zinc-800 w-full border border-zinc-400 rounded-md flex flex-col
                              items-center justify-center p-2">
                <Image className="w-10" src={ship3Img} alt="ship3Img" />
                <p>Delivery</p>
                <p>Tomorrow</p>
              </div>
            </div>
            <p className="font-bold text-xs">
              Sacramento, 95829 {" "}
              <span className="font-normal underline underline-offset-2 ml-1">
                  Change
              </span>
            </p>
           </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

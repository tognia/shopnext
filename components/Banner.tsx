import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import {
  bannerImg,
  sliderImgFour,
  sliderImgThree,
  sliderImgOne,
  sliderImgTwo,
} from "@/public/assets/images";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 boder-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
      <Slider  {...settings}>
          <div className="w-full h-[410px] relative">
            <Image
              className="h-full w-full object-cover rounded-lg"
              src={sliderImgOne}
              alt="sliderImgOne"
              priority
            />
            <div className="absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white">
              <h1 className="font-bold text-2xl">Spring Fashion In Bloom</h1>
              <p className="text-sm leading-5">New trends & styles to turn heads anytime, on any budget</p>
              <button className="bg-white text-sm text-black font-semibold
              rounded-full w-24 h-8 border-[1px] border-black">Shop now</button>
            </div>
          </div>
        </Slider>
      </div>
      <div
        className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow
      p-4 flex flex-col justify-between"
      ></div>
    </div>
  );
};

export default Banner;

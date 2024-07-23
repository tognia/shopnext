import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import {
  bannerImg,
  sliderImgFour,
  sliderImgThree,
  sliderImgOne,
  sliderImgTwo,
  sliderImgFive,
} from "@/public/assets/images";
import BannerText from "./BannerText";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SampleNextArrow = (props:any) => {
  const { onClick } = props;
  return (
  <div
      className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black
      text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue
      hover:border-transparent hover:text-white cursor-pointer duration-300 z-10
      "
      onClick={onClick}
  >
    <BsArrowRight />
  </div>
  )
}

const SamplePrevArrow = (props:any) => {
  const { onClick } = props;
  return (
  <div
      className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black
      text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue
      hover:border-transparent hover:text-white cursor-pointer duration-300 z-10
      "
      onClick={onClick}
  >
    <BsArrowLeft />
  </div>
  )
}

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>
  };
  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 boder-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow">
      <Slider  {...settings}>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgOne}
              alt="sliderImgOne"
              priority
            />
           <BannerText 
                       title={"Spring Fashion In Bloom"} 
                       description={"New trends & styles to turn heads anytime, on any budget"} 
                       btnText={"Shop now"}
                       className={"absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white"}
           />
          </div>  
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgTwo}
              alt="sliderImgTwo"
            />
           <BannerText 
                       title={"Spring Fashion In Bloom"} 
                       description={"New trends & styles to turn heads anytime, on any budget"} 
                       btnText={"Shop now"}
                       className={"absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white"}
           />
          </div>  
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgThree}
              alt="sliderImgThree"
            />
           <BannerText 
                       title={"Spring Fashion In Bloom"} 
                       description={"New trends & styles to turn heads anytime, on any budget"} 
                       btnText={"Shop now"}
                       className={"absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white"}
           />
          </div>  
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgFour}
              alt="sliderImgFour"
            />
           <BannerText 
                       title={"Spring Fashion In Bloom"} 
                       description={"New trends & styles to turn heads anytime, on any budget"} 
                       btnText={"Shop now"}
                       className={"absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white"}
           />
          </div>   
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgFive}
              alt="sliderImgFive"
            />
           <BannerText 
                       title={"Spring Fashion In Bloom"} 
                       description={"New trends & styles to turn heads anytime, on any budget"} 
                       btnText={"Shop now"}
                       className={"absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white"}
           />
          </div>          
        </Slider>
      </div>
      <div
        className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow
      p-4 flex flex-col justify-between"
      >

      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";


export default function Contact() {
  return (
    <div className="">
      <div className="text-center text-2xl pt-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full md:max-w-[480px]" alt=" contact img" />
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p>Miami</p>
          <p className="text-gray-500">Alexandria , Egypt</p>
          <p className="text-gray-500">Tel : (+20) 1559566765 <br /> Email : Abanoubabdelmessih110@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers</p>
          <p className="text-gray-500">Learn more about our team and job openings.</p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
}

import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col py-5 border-t">
      {/* First Part */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Part */}
        <div className="lg:w-1/2 my-5">
        <Link to={'/'}><p className="tracking-wider text-3xl font-serif pb-4">TrendVibe<span className="text-red-500 font-extrabold">.</span></p> </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum velit
            temporibus animi esse deserunt, inventore, quidem officiis pariatur
            iusto deleniti similique accusantium minus commodi facere, ad atque
            alias quis doloribus.
          </p>
        </div>
        {/* Right Part */}
        <div className="flex flex-col items-center my-5">
          <h3 className="tracking-wider font-serif text-3xl font-bold pb-3">
            GET IN TOUCH
          </h3>
          <ul className="flex gap-4 font-thin text-xl">
            <a
              href="https://www.linkedin.com/in/abanoub-abd-elmessih/"
              target="_blank" className="aspect-square rounded-full border p-3 border-gray-500 hover:bg-gray-500 hover:text-white duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Abanoub-Abd-Elmessih" target="_blank" className="aspect-square rounded-full border p-3 border-gray-500 hover:bg-gray-500 hover:text-white duration-300">
              <LuGithub />
            </a>
            <a href="mailto:Abanoubabdelmessih110@gmail.com" target="_blank" className="aspect-square rounded-full border p-3 border-gray-500 hover:bg-gray-500 hover:text-white duration-300">
              <BiLogoGmail />
            </a>
            <a href="tel:+20 155 956 6765" target="_blank" className="aspect-square rounded-full border p-3 border-gray-500 hover:bg-gray-500 hover:text-white duration-300">
              <MdOutlinePhone />
            </a>
          </ul>
        </div>
      </div>
      {/* Second Part */}
      <div className="border-t mt-4 text-center pt-5 font-semibold">
        <p>Copyright 2024@ <b>Abanoub Abd Elmessih</b> - All Right Reserved.</p>
      </div>
    </div>
  );
}

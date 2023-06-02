import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="  bg-[#FFF2F9] text-black">
      <div className="grid foorter grid-cols-1 sm:gird-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-40   py-16 sm:text-center">
        <ul className="text-center  sm:text-start flex sm:block flex-col items-center">
          <div className="logo">
            <h1>
              Pleasing Beauty<span>.</span>
            </h1>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque molestias eveniet ducimus commodi non eaque suscipit ab eos? Reprehenderit, autem.</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

     
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Development Team</h1>
          
            <li >
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"to='/'>
                Anukalp 
              </Link>
            </li>
            <li >
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"to='/'>
                Bhavika Gupta
              </Link>
            </li>
            <li >
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"to='/'>
                Shivam Tiwari
              </Link>
            </li>
            <li >
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"to='/'>
                Tanishka Gupta
              </Link>
            </li>
       
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="bottom-footer 
         text-center pt-2 text-gray-400  pb-8"
      >
        <span text-center>© 2023 Pleasing Beauty. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;

import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

import {Link } from "react-router-dom";
import { NavDesktop } from "./NavDesktop";


export function Header() {
    return (
        <header className="lg:bg-white lg:text-black text-neutral-700 items-center justify-between lg:justify-around lg:border-b-[30px] border-b-rose-400 border-b-8  z-30  w-full lg:fixed flex">
            <IoIosMenu className="text-5xl   w-3/12 lg:hidden"></IoIosMenu>
            <Link className="lg:w-1/12 w-4/12" to={"/"}>
                <img className=" h-28 my-1      lg:ml-0 object-contain  flex  " src="https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/455599010_1039709134312745_965647445426224043_n.jpg?ccb=11-4&oh=01_Q5AaIF_OoR3fu2By1yDESDbO9FpBBBLD61iU9he-qpr2VZ46&oe=67406264&_nc_sid=5e03e0&_nc_cat=102" alt="" />
            </Link>
            <NavDesktop></NavDesktop>
            <div className="flex  w-3/12 lg:w-1/12  justify-around lg:justify-between mt-auto  h-1/5 text-xl">
                <a className="h-7 w-7 " href="https://www.instagram.com/gm.docesgourmet/profilecard/?igsh=ZjVxNGR4cWtuMzZm" target="_blank"><FaInstagram className=""></FaInstagram></a>
                <a className="h-7 w-7 " href="https://www.instagram.com/gm.docesgourmet/profilecard/?igsh=ZjVxNGR4cWtuMzZm" target="_blank"><FaTiktok className=""></FaTiktok></a>
                <a className="h-7 w-7 " href="https://www.instagram.com/gm.docesgourmet/profilecard/?igsh=ZjVxNGR4cWtuMzZm" target="_blank"><FaFacebookF className=""></FaFacebookF></a>
            </div>
        </header>
    )
}
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export function Header() {
    return (
        <div className=" text-neutral-700 items-center justify-between h-32   w-full flex">
            <IoIosMenu className="text-5xl ml-5 mb-5"></IoIosMenu>
            <img className="h-28 w-28 ml-14  flex rounded-full " src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/455599010_1039709134312745_965647445426224043_n.jpg?ccb=11-4&oh=01_Q5AaIGU5WSdO503dsQ_i2DRkeuv_5mNSz2DBc-15K6jTXAGm&oe=671F34A4&_nc_sid=5e03e0&_nc_cat=102" alt="" />
            <div className="flex  w-2/6 justify-around mt-auto  h-1/5 text-2xl">
                <a className="h-7 w-7 " href=""><FaInstagram className=""></FaInstagram></a>
                <a className="h-7 w-7 " href=""><FaTiktok className=""></FaTiktok></a>
                <a className="h-7 w-7 " href=""><FaFacebookF className=""></FaFacebookF></a>
            </div>
        </div>
    )
}
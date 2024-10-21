import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { CardPreview } from "./CardPreview";

import { Link } from "react-router-dom";

export function NavBar({cardVisibilit}) {
    return(
        <nav className={`fixed bottom-0 w-full h-16 ${cardVisibilit?"hidden":"flex"} bg-white`} >
            <a href="https://wa.me/55858568-0328" target="blank" className="w-1/3 h-full flex font-light flex-col text-neutral-600 items-center justify-center" ><FaWhatsapp className="text-2xl text-emerald-500" ></FaWhatsapp>Whatsapp</a>
            <Link to={'/pedido'} className="w-1/3 h-full flex font-light flex-col text-neutral-600 items-center justify-center"><FaHeart className="text-2xl text-rose-300" ></FaHeart>Seu pedido</Link>
            <a className="w-1/3 h-full flex font-light flex-col text-neutral-600 items-center justify-center" href="https://www.instagram.com/gm.docesgourmet/profilecard/?igsh=ZjVxNGR4cWtuMzZm" target="_blank"><FaInstagram className="text-2xl text-black" ></FaInstagram> Instagram</a>
        </nav>
    )
}
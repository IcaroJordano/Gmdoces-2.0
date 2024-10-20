import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";


export function NavBar() {
    return(
        <nav className="fixed bottom-0 w-full h-16 flex bg-white" >
            <a className="w-1/3 h-full flex font-light flex-col text-neutral-600 items-center justify-center" href=""><FaWhatsapp className="text-2xl text-emerald-500" ></FaWhatsapp>Whatsapp</a>
            <a className="w-1/3 h-full flex font-light flex-col text-neutral-600 items-center justify-center" href=""><FaHeart className="text-2xl text-rose-300" ></FaHeart>Seu pedido</a>
            <a className="w-1/3 h-full flex font-light flex-col text-neutral-600 items-center justify-center" href=""><FaInstagram className="text-2xl text-black" ></FaInstagram> Instagram</a>
        </nav>
    )
}
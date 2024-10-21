import { Link } from "react-router-dom";

import { FaX } from "react-icons/fa6";
export function CardPreview({ cardVisibilit, setCarvisibilit }) {
    return (
        <div className={`fixed w-screen bg-neutral-900/50 z-30 justify-center h-screen  ${cardVisibilit ? 'flex' : 'hidden'} `} >
            <div className="w-10/12 my-auto relative bg-white">
                <Link to={'/'} >
                    <FaX onClick={() => { setCarvisibilit(false) }} className="absolute -top-2 w-9 h-9 -right-3 text-green-100 scale-150"></FaX>
                </Link>
                <img className="h-1/2 bg-neutral-100 w-full object-cover" src="https://static.wixstatic.com/media/e8274b_634fed119e3345dfa56aecdc9063c71d~mv2.png/v1/crop/x_221,y_63,w_617,h_773/fill/w_293,h_367,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Feature%20Flavour%20Template.png" alt="" />
                <h1 className="text-5xl mx-auto font-serif h-1/4 flex  text-rose-200 text-center ">Conheca nosso carro chefe</h1>
                <p className="text-lg w-11/12  mt-2  mx-auto text-center font-mono">O tempero de abóbora e uma mistura quente de canela, noz-moscada e abóbora. Coberto com cobertura de queijo creme de baunilha!.</p>
            </div>
        </div>
    )
}
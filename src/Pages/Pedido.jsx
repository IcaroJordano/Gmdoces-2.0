import { Link } from "react-router-dom";
import { CardPedido } from "./CardPedido";


export function Pedido() {
    return(
        <section className="font-serif pb-20  flex flex-col items-center">
            <h2 className="mx-auto w-11/12 text-center text-xl underline font-semibold leading-8 my-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut natus asperiores beatae harum sed saepe nemo est modi nam ex autem, debitis vero consequuntur rerum fugiat doloribus adipisci, perferendis perspiciatis?</h2>
            <CardPedido></CardPedido>
            {/* <h3 className="text-3xl w-10/12 mx-auto font-semi">Seu pedido:</h3>
            <h4 className="w-10/12 mx-auto text-xl mt-5  text-center font-bold">Seu pedido atual esta vazio</h4> */}
            {/* <Link to={'/explorar'} className=" bg-rose-50 my-10 border-neutral-800/30 border text-lg text-neutral-700 font-semibold rounded-lg py-4 px-4 flex-wrap text-nowrap underline">Nossos produtos</Link>             */}
        </section>
    )
}
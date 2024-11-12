import { Link } from "react-router-dom";
import { CardPedido } from "./CardPedido";
import { FaWhatsapp } from "react-icons/fa";


export function Pedido() {
    function limpar() {
        localStorage.clear()

    }
    return (
        <section className="font-serif pb-20 lg:pt-40 flex flex-col items-center">
            <h2 className="mx-auto lg:w-7/12 w-11/12 text-center lg:text-lg text-xl underline font-serif  font-semibold leading-8 lg:my-0 my-10">Pedidos exigem um mínimo de 48 horas de antecedência, no entanto, muitas vezes reservamos dias a semanas de antecedência.
            As opções de entrega estão disponíveis por um custo adicional em encomendas superiores a $34.95!</h2>
            <div className="lg:flex">
                <div className="lg:w-1/2">
                    <CardPedido></CardPedido>
                    <CardPedido></CardPedido>
                    <CardPedido></CardPedido>
                </div>
                <div className="flex flex-col items-center">
                    <h4 onClick={limpar} className="w-10/12 text-3xl mt-10 flex justify-between"><span>Total</span><span>R$12.50</span></h4>
                    <p className="w-10/12 lg:w-7/12 my-5 lg:text-xl font-semibold text-gray-500">Ao clicar no botao abaixo, sera redirecionado para nosso whatsapp para finalizar seu pedido, esperamos que tenha gostado da experiencia</p>
                    <a className="bg-green-300 w-8/12 lg:w-5/12 justify-center text-xl h-16 flex items-center rounded-md" href="">Finalizar pedido <FaWhatsapp className="mx-2"></FaWhatsapp> </a>
                </div>
            </div>
            {/* <h3 className="text-3xl w-10/12 mx-auto font-semi">Seu pedido:</h3>
            <h4 className="w-10/12 mx-auto text-xl mt-5  text-center font-bold">Seu pedido atual esta vazio</h4>
            <Link to={'/explorar'} className=" bg-rose-50 my-10 border-neutral-800/30 border text-lg text-neutral-700 font-semibold rounded-lg py-4 px-4 flex-wrap text-nowrap underline">Nossos produtos</Link>             */}
        </section>
    )
}
import { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";

export function CardPedido() {
    const [imagem,setImagem]=useState("")
    useEffect(()=>{
        console.log()
        if(localStorage.getItem("Pedido")!==null){
            setImagem((JSON.parse(localStorage.getItem("Pedido")))[0])
        }
        else{
            console.log('nao esta no local store')
        }
        // setImagem(imagem)
    },[])
    return (
        <div className=" py-10 w-11/12 mx-auto border border-transparent border-b-gray-400/50 flex flex-row">
            <img className="w-16 m-5 bg-red-500 object-cover h-16" src={imagem['image']} alt="" />
            <div className="w-3/5 flex flex-wrap">
                <h4 className="text-xl overflow-hidden">{imagem['nome']}</h4>
                <p className="text-xl text-gray-500/70 lg:line-clamp-2 font-semibold my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet! Amet hic ipsum necessitatibus, error eos quidem doloribus quasi rem quisquam aut quae culpa, nihil adipisci dolores, vitae officiis distinctio.</p>
                <form action="" className="text-rose-400 text-2xl flex justify-center items-center">
                    <label htmlFor="quantidade">Qtdd:</label>
                    <select className="bg-white  " name="quantidade" id="quantidade">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </form>
                <p className="text-2xl mx-auto">R${((JSON.parse(localStorage.getItem("Pedido")))[0]['preco'])}.00</p>
            </div>
            <FaX className="text-lg text-gray-500/50 "></FaX>
        </div>
    )
}
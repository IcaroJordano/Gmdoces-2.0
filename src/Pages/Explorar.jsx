import { Link } from "react-router-dom";
import { CardCategory } from "../Components/CardCategory";


export function Explorar() {
    return(
        <section className="lg:pt-40" >
            <h2 className="mx-auto lg:w-7/12 w-11/12 text-center lg:text-lg text-xl underline font-serif  font-semibold leading-8 lg:my-0 my-10">Pedidos exigem um mínimo de 48 horas de antecedência, no entanto, muitas vezes reservamos dias a semanas de antecedência. As opções de entrega estão disponíveis por um custo adicional em encomendas superiores a $34.95!</h2>
            <div className=" w-11/12 mx-auto flex justify-around font-serif text-center flex-wrap">
                <CardCategory title={'Pascoa'} image={'https://images.pexels.com/photos/11798334/pexels-photo-11798334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} ></CardCategory>
                <CardCategory title={'Bolos'} image={'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} ></CardCategory>
                <CardCategory title={'Doces'} image={'https://images.pexels.com/photos/6612658/pexels-photo-6612658.jpeg?auto=compress&cs=tinysrgb&w=400'}></CardCategory>               
                <CardCategory title={'aaaa'} image={''} ></CardCategory>
                <CardCategory title={'aaaa'} image={''} ></CardCategory>
                <CardCategory title={'aaaa'} image={''}></CardCategory>   
                <CardCategory title={'aaaa'} image={''}></CardCategory>   
                <CardCategory title={'aaaa'} image={''}></CardCategory>   
            </div>
        </section>
    )
}
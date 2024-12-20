import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination';

import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";


export function Produto() {
    const location = useLocation()
    const { imagem } = location.state || {}
    function addToCart() {
        // alert(0)
        // localStorage.ge
        localStorage.setItem('Pedido', JSON.stringify([{ image: location.state['imagem'], preco: (location.state['preco']), nome: (location.state['nome']) }]))
    }
    return (
        <section className='font-serif lg:pt-36'>
            <h2 className="mx-auto w-11/12 lg:w-7/12 lg:my-10 lg:text-lg text-center text-xl underline font-semibold leading-8  my-10">Pedidos exigem um mínimo de 48 horas de antecedência, no entanto, muitas vezes reservamos dias a semanas de antecedência. As opções de entrega estão disponíveis por um custo adicional em encomendas superiores a $34.95!</h2>
            <h3 className='text-2xl w-10/12 my-5 font-medium mx-auto text-gray-500'>Category /Produto</h3>
            <div className='lg:flex  w-full'>
                <Swiper className='lg:w-1/2 lg:mx-40 lg:p-0  w-10/12 pb-10' slidesPerView={1} pagination={{ clickable: true }}>
                    <SwiperSlide className='w-full'><img className='w-full' src={(location.state['imagem'])} alt="" /></SwiperSlide>
                    <SwiperSlide className='w-full'><img className='w-full' src="https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/1760900272.jpg" alt="" /></SwiperSlide>
                </Swiper>
                <div className='lg-1/2 overflow-hidden'>
                    <h4 className=' font-semibold text-3xl w-10/12 mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <h5 className='text-gray-500/90  text-3xl w-10/12 mx-auto my-5'>R${(location.state['preco'])}.00</h5>
                    <form action="" onSubmit={addToCart} className='  w-10/12 mx-auto'>
                        <label className='text-2xl font-semibold w-1/3' htmlFor="Quantidade">Quantidade:</label>
                        <input className='border-2 border-gray-400 p-3 text-2xl w-1/4 h-14 mx-2 text-black' type="number" name="Quantidade" placeholder='1' id="Quantidade" />
                        <Link to={'/pedido'} onClick={addToCart}>
                            <input className='w-full h-14 rounded-md bg-green-300/70 text-xl my-5 ' type="submit" value="Add ao Pedido" />
                        </Link>
                        {/* <button className='w-full h-14 rounded-md bg-green-300/70 text-xl my-5 ' onClick={addToCart} >Add</button> */}
                    </form>
                    <h6 className='w-10/12 mx-auto text-xl mt-14 font-extrabold'>Detalhes do produto</h6>
                    <p className='w-10/12 mx-auto text-xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi animi odio deleniti, obcaecati dolorem id eum. Doloribus modi repellendus maxime nobis. Iste hic quaerat laboriosam repudiandae accusantium natus iusto.</p>
                </div>
            </div>

        </section>
    )
}
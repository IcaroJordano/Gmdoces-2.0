import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Link } from "react-router-dom";
import { useState } from 'react';

export function Apresentacao() {
    const [width,SetwindowSize]=useState(
        window.innerWidth
    )
    return (
        <section className="lg:h-fit h-96 mt-20 lg:my-0 lg:pt-36 my-10" >
            <Swiper className='h-full'  navigation={width>1023}    pagination={{ clickable: true }} spaceBetween={0}  slidesPerView={1}>
                <SwiperSlide className='lg:h-screen    bg-[url("https://static.wixstatic.com/media/e8274b_cf029b6e89834adca433b159353aaec7~mv2.jpg/v1/fill/w_1080,h_598,al_c,q_85,enc_auto/e8274b_cf029b6e89834adca433b159353aaec7~mv2.jpg")] bg-cover flex flex-col items-center' >
                    <h2 className=' text-shadow-sm w-10/12  lg:w-8/12 text-4xl lg:text-7xl font-mono mt-12 lg:mt-40 lg:  mb-10 text-center text-neutral-100 font-bold'>Conheca nossos items de datas comemorativas</h2>
                    <Link className='px-10 py-3 text-xl  bg-white rounded-full' to='/explorar' >Ver agora</Link>
                </SwiperSlide>
                <SwiperSlide className='lg:h-screen  bg-[url("https://static.wixstatic.com/media/e8274b_d9213c44aa014fdea448564eaa83d8a4~mv2.png/v1/fill/w_1284,h_711,al_c,q_90,enc_auto/e8274b_d9213c44aa014fdea448564eaa83d8a4~mv2.png")] bg-cover flex flex-col  items-center' >
                    <h2 className='w-10/12 lg:w-8/12  text-shadow-sm text-4xl lg:text-7xl font-mono lg:mt-40 mt-12 mb-10 text-center text-neutral-100 font-bold'>Monte seu pedido personalizado</h2>
                    <Link className='px-10 py-3 text-xl  bg-white rounded-full' to={'/explorar'}>Ver agora</Link>
                </SwiperSlide>
                <SwiperSlide className='lg:h-screen   bg-[url("https://static.wixstatic.com/media/e8274b_1a71ee70a733488bb13b54714aa1d489~mv2.jpg/v1/fill/w_1351,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e8274b_1a71ee70a733488bb13b54714aa1d489~mv2.jpg")] bg-cover flex flex-col items-center' >
                    <h2 className='w-11/12 lg:w-8/12 text-4xl lg:text-7xl  text-shadow-sm font-mono lg:mt-40 mt-12 mb-10 text-center text-neutral-100 font-bold'>Conheca as mulhers por tras da Gmdoces</h2>
                    <Link className='px-10 py-3  text-xl  bg-white rounded-full' to={'/confeiteiras'}>Saiba Mais</Link>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
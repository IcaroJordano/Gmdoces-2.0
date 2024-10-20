import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Apresentacao() {
    return (
        <section className="h-1/2 my-10 " >
            <Swiper className='h-full'    pagination={{ clickable: true }} spaceBetween={5}  slidesPerView={1}>
                <SwiperSlide className='h-full bg-rose-500 bg-[url("https://static.wixstatic.com/media/e8274b_cf029b6e89834adca433b159353aaec7~mv2.jpg/v1/fill/w_1080,h_598,al_c,q_85,enc_auto/e8274b_cf029b6e89834adca433b159353aaec7~mv2.jpg")] bg-cover flex flex-col items-center' >
                    <h2 className=' text-shadow-sm w-10/12  text-4xl font-mono mt-12 mb-20 text-center text-neutral-100 font-bold'>Conheca nossos items de datas comemorativas</h2>
                    <a className='px-10 py-3 text-xl  bg-white rounded-full' href="">Ver agora</a>
                </SwiperSlide>
                <SwiperSlide className='h-full bg-rose-500 bg-[url("https://static.wixstatic.com/media/e8274b_d9213c44aa014fdea448564eaa83d8a4~mv2.png/v1/fill/w_1284,h_711,al_c,q_90,enc_auto/e8274b_d9213c44aa014fdea448564eaa83d8a4~mv2.png")] bg-cover flex flex-col  items-center' >
                    <h2 className='w-10/12   text-shadow-sm text-4xl font-mono mt-12 mb-20 text-center text-neutral-100 font-bold'>Monte seu pedido personalizado</h2>
                    <a className='px-10 py-3 text-xl  bg-white rounded-full' href="">Ver agora</a>
                </SwiperSlide>
                <SwiperSlide className='h-full bg-rose-500  bg-[url("https://static.wixstatic.com/media/e8274b_1a71ee70a733488bb13b54714aa1d489~mv2.jpg/v1/fill/w_1351,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e8274b_1a71ee70a733488bb13b54714aa1d489~mv2.jpg")] bg-cover flex flex-col items-center' >
                    <h2 className='w-11/12  text-4xl  text-shadow-sm font-mono mt-12 mb-20 text-center text-neutral-100 font-bold'>Conheca as mulhers por tras da Gmdoces</h2>
                    <a className='px-10 py-3  text-xl  bg-white rounded-full' href="">Saiba Mais</a>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
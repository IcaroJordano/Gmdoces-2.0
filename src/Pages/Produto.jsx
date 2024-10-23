import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination';



export function Produto() {
    return(
        <section className='font-serif'>
            <h2 className="mx-auto w-11/12 text-center text-xl underline font-semibold leading-8 my-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut natus asperiores beatae harum sed saepe nemo est modi nam ex autem, debitis vero consequuntur rerum fugiat doloribus adipisci, perferendis perspiciatis?</h2>
            <h3 className='text-2xl w-10/12 my-5 font-medium mx-auto text-gray-500'>Category /Produto</h3>
            <Swiper className='w-10/12 pb-10' pagination={{ clickable: true }}>
                <SwiperSlide><img src="https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/1760923104.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/1760900272.jpg" alt="" /></SwiperSlide>
            </Swiper>
            <h4 className=' font-semibold text-3xl w-10/12 mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <h5 className='text-gray-500/90  text-3xl w-10/12 mx-auto my-5'>R$12.00</h5>
            <form action="">
                <label htmlFor=""></label>
                <input type="number" name="" id="" />
                <input type="submit" value="" />
            </form>
            <h6 className='w-10/12 mx-auto text-xl my-2 font-extrabold'>Detalhes do produto</h6>
            <p className='w-10/12 mx-auto text-xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi animi odio deleniti, obcaecati dolorem id eum. Doloribus modi repellendus maxime nobis. Iste hic quaerat laboriosam repudiandae accusantium natus iusto.</p>

        </section>
    )
}
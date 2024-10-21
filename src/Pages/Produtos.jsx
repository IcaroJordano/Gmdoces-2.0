import { Link } from "react-router-dom";
import { CardCategory } from "../Components/CardCategory";
import { CardProduto } from "../CardProduto";


export function Produtos() {
    return(
        <section className="pb-10" >
            <h2 className="mx-auto w-11/12 text-center text-xl font-serif underline  font-semibold leading-8 my-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut natus asperiores beatae harum sed saepe nemo est modi nam ex autem, debitis vero consequuntur rerum fugiat doloribus adipisci, perferendis perspiciatis?</h2>
            <h3 className="ml-3 text-3xl font-serif font-semibold">Category</h3>
            <div className=" w-full mx-auto flex justify-around font-serif text-center flex-wrap">
                <CardProduto image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4512405671.png'} ></CardProduto>
                <CardProduto image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4433231949.png'} ></CardProduto>
                <CardProduto image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4507777962.png'} ></CardProduto>
                <CardProduto image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4507833898.png'}></CardProduto>
                <CardProduto image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4433249369.png'}></CardProduto>
                <CardProduto image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/3299373956.jpg'}></CardProduto>
                {/* <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto> */}
            </div>
        </section>
    )
}
import { Link } from "react-router-dom";
import { CardCategory } from "../Components/CardCategory";
import { CardProduto } from "../Components/CardProduto";


export function Produtos() {
    const user={imagem:'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4512405671.png'}
    return(
        <section className="pb-10" >
            <h2 className="mx-auto w-11/12 text-center text-xl font-serif underline  font-semibold leading-8 my-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut natus asperiores beatae harum sed saepe nemo est modi nam ex autem, debitis vero consequuntur rerum fugiat doloribus adipisci, perferendis perspiciatis?</h2>
            <h3 className="ml-3 text-3xl font-serif font-semibold">Category</h3>
            <div className=" w-full mx-auto flex justify-around font-serif text-center flex-wrap">
                <Link to={'/produto'} state={{imagem:'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4512405671.png',preco:10,nome:'bolo1'}} ><CardProduto nome={'bolo1'} preco={10} image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4512405671.png'} ></CardProduto></Link> 
                <Link to={'/produto'} state={{imagem:'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4433231949.png',preco:11,nome:'bolo2'}} ><CardProduto nome={'bolo2'} preco={11} image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4433231949.png'} ></CardProduto></Link> 
                <Link to={'/produto'} state={{imagem:'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4507777962.png',preco:12,nome:'bolo3'}} ><CardProduto nome={'bolo3'} preco={12} image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4507777962.png'} ></CardProduto></Link> 
                <Link to={'/produto'} state={{imagem:'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4507833898.png',preco:13,nome:'bolo4'}} ><CardProduto nome={'bolo4'} preco={13} image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4507833898.png'}></CardProduto></Link>                 
                <Link to={'/produto'} state={{imagem:'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4433249369.png',preco:14,nome:'bolo5'}} ><CardProduto nome={'bolo5'} preco={14} image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/4433249369.png'}></CardProduto></Link>                 
                <Link to={'/produto'} state={{imagem:'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/3299373956.jpg',preco:15,nome:'bolo6'}} ><CardProduto nome={'bolo6'} preco={15} image={'https://d2j6dbq0eux0bg.cloudfront.net/images/26817093/3299373956.jpg'}></CardProduto></Link>             
            </div>
        </section>
    )
}
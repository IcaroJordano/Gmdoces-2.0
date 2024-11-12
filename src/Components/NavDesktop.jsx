
import { Link } from "react-router-dom";

export function NavDesktop() {
    return (
        <div className="w-7/12 hidden lg:flex flex-col items-center ">
            <p className="w-full text-center underline font-serif text-xl text" style={{'letterSpacing':'0.2em'}} >Tornando seus dias mais doce </p>
            <nav className="w-full  flex  font-mono font-medium text-neutral-900 text-xl   justify-between mt-5 ">
                <Link to={'/'} className="hover:text-rose-200">Home</Link>
                <Link to={'/explorar'} className="hover:text-rose-200">Explorar-Produtos</Link>
                <Link to={'/confeiteiras'} className="hover:text-rose-200">Confeiteiras</Link>
                <Link to={'/explorar'} className="hover:text-rose-200">Recomendacoes</Link>
                <Link to={'/pedido'} className="hover:text-rose-200">Pedido</Link>
            </nav>
        </div>
    )
}
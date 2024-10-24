import { Link } from "react-router-dom";


export function CardCategory({image,title}) {
    return (
        <Link to={'/produtos'} className="my-10 lg:w-72 lg:h-72 h-40 w-40">
            <img className="h-full w-full object-cover" src={image} alt="" />
            <h3 className="w-10/12 mx-auto font-semibold text-2xl my-2">{title}</h3>
        </Link>
    )
}
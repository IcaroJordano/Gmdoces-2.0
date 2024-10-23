export function CardProduto({image}) {
    return (
        <div className="w-44 my-5 pb-2 rounded-lg shadow-neutral-800/30 shadow-md  ">
            <img className="h-44 mt-2 rounded-md w-11/12 mx-auto  " src={image} alt="" />
            <h3 className="pl-2 mt-2  overflow-clip  text-clip text-nowrap w-11/12 font-sans text-left font-medium">Lorem ipsum ipsum ipsum ipsum ipsum ipsum  ipsum</h3>
            <h4 className="pl-2 font-mono  text-left ">$65.00</h4>
        </div>
    )
}
export function CardCategory({image,title}) {
    return(
        <div className={`bg-[url('${image}')]  bg-center bg-cover w-full h-96 flex flex-col items-center`}>
            <a className="px-12 py-3 text-xl  bg-white rounded-full my-5" href="">{title}</a>
        </div>
    )
}
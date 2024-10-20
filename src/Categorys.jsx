import React from "react"

import cafe from "./cafe.jpg"

import { CardCategory } from "./CardCategory";

export function Categorys() {
    return (
        <section className="">
            <CardCategory image={'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} title={'Bolos'}></CardCategory>
            <CardCategory image={'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} title={'Trufas'}></CardCategory>
            <CardCategory image={'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} title={'Doces'}></CardCategory>
            <p className="text-2xl text-center font-light my-3">&copy;2020-2024 Gmdoces</p>
        </section>
    )
}
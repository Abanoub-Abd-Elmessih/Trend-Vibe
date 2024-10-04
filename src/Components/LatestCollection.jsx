import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function LatestCollection() {
    const { products }= useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([])
    useEffect(()=>{
        setLatestProduct(products.slice(0,10));
    },[])
  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl ">
            <Title text1={'Latest'} text2={'Collection'}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio?</p>
        </div>
        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 transition-all duration-300">
            {
                latestProduct.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>

    </div>
  )
}

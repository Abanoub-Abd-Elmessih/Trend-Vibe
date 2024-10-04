import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io"; // Import the icons

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", zIndex: 1 }}
            onClick={onClick}
        >
            <IoIosArrowDropright size={30} color="black" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", zIndex: 1 }}
            onClick={onClick}
        >
            <IoIosArrowDropleft size={30} color="black" />
        </div>
    );
}

export default function BestSeller() {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    
    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 10));
    }, [products]);

    let settings = {
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1, // Changed to 1 to align with 4 shown
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1, // Changed to 1 to align with 3 shown
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1, // Changed to 1 to align with 2 shown
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
    return (
        <div className="my-10 overflow-hidden">
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio?</p>
            </div>
            <div className="px-10">

            <Slider {...settings}>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </Slider>
                </div>
        </div>
    );
}

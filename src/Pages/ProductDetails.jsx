import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";
import { FaUser } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

export default function ProductDetails() {
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [reviews, setReviews] = useState(false);
  const [desc, setDesc] = useState(true);

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  function handleReview() {
    setDesc(false);
    setReviews(true);
  }
  function handleDesc() {
    setDesc(true);
    setReviews(false);
  }

  return productData ? (
    <div className="pt-10 transition-all ease-in duration-500 opacity-100 overflow-hidden">
      {/* Product data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          {/* This div will stack images vertically */}
          <div className="flex sm:flex-col justify-center sm:justify-normal gap-3 sm:gap-0 w-full sm:w-[18.7%]">
            {productData.image?.map((item, index) => (
              <img
                src={item}
                key={index}
                alt="Product Image"
                className="w-1/4 sm:w-full sm:mb-3 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="product image" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-medium text-2xl mt-2">{productData.name}</h2>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star icon" className="w-3 5" />
            <img
              src={assets.star_dull_icon}
              alt="star dull icon"
              className="w-3 5"
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 duration-300 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700" onClick={()=>addToCart(productData._id,size)}>
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>
              <span className="text-2xl font-extrabold">.</span> 100% Original
              Product.
            </p>
            <p>
              <span className="text-2xl font-extrabold">.</span> Cash on
              delivery is available on this product.
            </p>
            <p>
              <span className="text-2xl font-extrabold">.</span> Easy return and
              exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>
      {/* Description and review section */}
      <div className="mt-20">
        <div className="flex">
          <button
            onClick={handleDesc}
            className={`border border-b-0 px-5 py-3 text-sm ${desc && "font-bold"}`}
          >
            Description
          </button>
          <button
            onClick={handleReview}
            className={`border border-b-0 px-5 py-3 text-sm ${reviews && "font-bold"}`}
          >
            Reviews (122)
          </button>
        </div>
        <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">
          {desc && (
            <>
              <p className="text-lg">
                An e-commerce website is an online platform that facilitates the
                buying and selling of products or services over the internet. It
                serves as a virtual marketplace where businesses and individuals
                can showcase their products, interact with customers, and
                conduct transactions without the need for a physical presence.
                E-commerce websites have gained immense popularity due to their
                convenience, accessibility, and the global reach they offer.
              </p>
              <p className="text-lg">
                E-commerce websites typically display products or services along
                with detailed descriptions, images, prices, and any available
                variations (e.g., sizes, colors). Each product usually has its
                own dedicated page with relevant information.
              </p>
            </>
          )}
          {reviews && (
            <>
              <p className="font-bold text-lg flex items-center gap-2">
                <FaUser /> GUEST
              </p>
              <span className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoStarSharp
                    key={index}
                    className={`w-4 h-4 ${
                      index < 4 ? "text-orange-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </span>
              <p className="mb-3">Great product! Highly recommend it.</p>
              <p className="font-bold text-lg flex items-center gap-2">
                <FaUser /> USER
              </p>
              <span className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoStarSharp
                  key={index}
                  className={`w-4 h-4 text-orange-500
                  }`}
                />
              ))}
          </span>
              <p>Excellent quality and fast shipping!</p>
            </>
          )}
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

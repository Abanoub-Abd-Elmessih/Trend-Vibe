import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";
import StickyBox from "react-sticky-box";
import SearchBar from "../Components/SearchBar";

export default function Collection() {
  const { products, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortPrice, setSortPrice] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // Apply category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Apply subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Apply search filter
    if (search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let faCopy = filterProducts.slice();

    switch (sortPrice) {
      case "low-high":
        setFilterProducts(faCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(faCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search]);

  useEffect(() => {
    sortProduct();
  }, [sortPrice]);

  return (
    <>
      <SearchBar />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
        {/* Filter Option */}
        <div className="min-w-60">
          <StickyBox offsetTop={20} offsetBottom={20}>
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 text-xl flex items-center cursor-pointer gap-2"
            >
              FILTERS{" "}
              <img
                src={assets.dropdown_icon}
                alt="dropdown icon"
                className={`h-3 sm:hidden ${
                  showFilter ? "rotate-90 duration-300" : ""
                }`}
              />
            </p>
            {/* Category Filter */}
            <div
              className={`border border-gray-300 pl-5 py-3 mt-6 ${
                showFilter ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <p className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="Men"
                    className="w-3 cursor-pointer"
                    value={"Men"}
                    onChange={toggleCategory}
                  />
                  <label htmlFor="Men" className="cursor-pointer">
                    Men
                  </label>
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    id="Women"
                    className="w-3 cursor-pointer"
                    value={"Women"}
                    onChange={toggleCategory}
                  />
                  <label htmlFor="Women" className="cursor-pointer">
                    Women
                  </label>
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    id="Kids"
                    className="w-3 cursor-pointer"
                    value={"Kids"}
                    onChange={toggleCategory}
                  />
                  <label htmlFor="Kids" className="cursor-pointer">
                    Kids
                  </label>
                </p>
              </div>
            </div>
            {/* SubCategory Filter */}
            <div
              className={`border border-gray-300 pl-5 py-3 my-5 ${
                showFilter ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium">TYPE</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    id="Top Wear"
                    className="w-3 cursor-pointer"
                    value={"Topwear"}
                    onChange={toggleSubCategory}
                  />
                  <label htmlFor="Top Wear" className="cursor-pointer">
                    Top Wear
                  </label>
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    id="Bottom Wear"
                    className="w-3 cursor-pointer"
                    value={"Bottomwear"}
                    onChange={toggleSubCategory}
                  />
                  <label htmlFor="Bottom Wear" className="cursor-pointer">
                    Bottom Wear
                  </label>
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    id="Winter Wear"
                    className="w-3 cursor-pointer"
                    value={"Winterwear"}
                    onChange={toggleSubCategory}
                  />
                  <label htmlFor="Winter Wear" className="cursor-pointer">
                    Winter Wear
                  </label>
                </p>
              </div>
            </div>
          </StickyBox>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            {/* Product Sort */}
            <select
              name=""
              className="border-2 border-gray-300 text-sm px-2 rounded outline-none"
              id=""
              onChange={(e) => setSortPrice(e.target.value)}
            >
              <option value="relevant">Sort by : Relevant</option>
              <option value="low-high">Sort by : Low to High</option>
              <option value="high-low">Sort by : High to Low</option>
            </select>
          </div>
          {/* Map Product */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 pb-5">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                image={item.image}
                id={item._id}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import { useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import { useLocation } from "react-router-dom";

export default function SearchBar() {
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
    const location = useLocation()

    useEffect(() => {
        setShowSearch(false)
        setSearch('')
    }, [location.pathname, setSearch, setShowSearch])
    const handleCloseSearch = () => {
        setShowSearch(false);
        setSearch("");
      };
  return showSearch && (
    <div className="border-t border-b text-center bg-gray-50 my-5">
        <div className="inline-flex items-center justify-center border border-gray-400 p-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
            <input type="text" placeholder="Search" autoFocus className="flex-1 outline-none bg-inherit text-sm" value={search} onChange={(e)=>setSearch(e.target.value)} name="" id="" />
            <img src={assets.search_icon} alt="search icon" className="w-4" />
        </div>
        <img src={assets.cross_icon} alt="cross icon" className="w-3 inline cursor-pointer hover:rotate-90 duration-300" onClick={handleCloseSearch} />
    </div>
  )
}

import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export default function Navbar() {
    const [visible, setVisible] = useState(false)
    const {showSearch , setShowSearch , setSearch , getCartCount} = useContext(ShopContext)
    const location = useLocation();
    const isCollectionPage = location.pathname === "/collection";
    const handleCloseSearch = () => {
      setShowSearch(!showSearch);
      setSearch("");
    };
    useEffect(() => {
      if (visible) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      return () => {
        document.body.classList.remove("overflow-hidden"); // cleanup
      };
    }, [visible]);
    
  return (
    <nav className="flex items-center justify-between py-5 font-medium border-b mb-6 bg-white">
      <Link to={'/'}><p className="tracking-wider text-3xl font-serif">TrendVibe<span className="text-red-500 font-extrabold">.</span></p> </Link>
      {/* Web Links */}
      <ul className="hidden md:flex sm:gap-6 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1 pb-1" to="/">
          <p>HOME</p>
        </NavLink>
        <NavLink
          className="flex flex-col items-center gap-1 pb-1"
          to="/collection"
        >
          <p>COLLECTION</p>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1 pb-1" to="/about">
          <p>ABOUT</p>
        </NavLink>
        <NavLink
          className="flex flex-col items-center gap-1 pb-1"
          to="/contact"
        >
          <p>CONTACT</p>
        </NavLink>
      </ul>
      {/* Search Cart and profile */}
      <div className="flex items-center gap-6">
        {isCollectionPage && 
        <img
        src={assets.search_icon}
        className="w-5 cursor-pointer"
        alt="search Icon"
        onClick={handleCloseSearch}
        />
        }
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
          <p className="absolute -right-2 top-2 w-4 flex items-center justify-center leading-4 bg-black text-white aspect-square rounded-full text-xs font-lg">{getCartCount()}</p>
        </Link>
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile Icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 duration-300 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer md:hidden" alt="menu icon" />
      </div>
      {/* menu for small screen */}
      <div onClick={()=> setVisible(false)} className={`fixed z-50 top-0 right-0 bottom-0 overflow-hidden min-h-screen bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={()=> setVisible(false)} className="flex items-center gap-4 p-5 pt-6 cursor-pointer w-fit">
                <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="dropdown icon" />
                <p>Go Back</p>
            </div>
            <ul className="px-3 flex flex-col">
              <Link className='py-2 pl-6 border-y' onClick={()=>setVisible(false)} to='/'>HOME</Link>
              <Link className='py-2 pl-6 border-b' onClick={()=>setVisible(false)} to='/collection'>COLLECTION</Link>
              <Link className='py-2 pl-6 border-b' onClick={()=>setVisible(false)} to='/about'>ABOUT</Link>
              <Link className='py-2 pl-6 border-b' onClick={()=>setVisible(false)} to='/contact'>CONTACT</Link>
            </ul>
        </div>
      </div>
    </nav>
  );
}

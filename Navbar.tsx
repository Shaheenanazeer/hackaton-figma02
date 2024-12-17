import Link from "next/link"
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar(){

    return(
        
    
    <nav className="w-full flex bg-[#FBEBB5] justify-between items-center p-4 ">
        <div className="flex gap-16 justify-center w-full  ">

                 <Link href="/#">Home</Link>
                 <Link href="/shop">Shop</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                </div>
           <div className="flex gap-8 ml-auto pr-20 ">              
         <FaRegUser />
         <FiSearch /> 
         <FaRegHeart />
         <MdOutlineShoppingCart />
         
          </div>     
    </nav>
    
  

    )
};


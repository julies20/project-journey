import React from "react"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className='bg-[#0D0E19] shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-0 flex justify-between items-center text-white'>
                <div className='text-lg font-bold' >
                <Link to="/home">
                <img src="src/assets/images/logo.png" height="250" width="250" />
                    </Link>
                </div>
                
                <div className='relative flex-1 mx-4'>
                    <form>
                        <input type="text" placeholder='Search Product'
                        className='w-full border py-2 px-4' />
                        <FaSearch className='absolute top-3 right-3 text red-500'></FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart">
                        <FaShoppingCart className='text-lg' />
                    </Link>
                    <button className='hidden md:block'>
                        Login | Register
                    </button>
                    <button className='block md:hiddenS'>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-0text-sm font-bold text-white'>
                <Link  to="/" className='hover:underline'>
                    Categories
                </Link>

                <Link to="/" className='hover:underline'>
                    Size
                </Link>

                <Link to="/" className='hover:underline'>
                    Type
                </Link>

            </div>
        </nav>
    )
}

export default Navbar
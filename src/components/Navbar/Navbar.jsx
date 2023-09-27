import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const links = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A;] underline" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A;] underline" : ""
            }
        >
            Donation
        </NavLink></li>
        <li><NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A;] underline" : ""
            }
        >
            Statistics
        </NavLink></li>
    </>

    return (
        <nav className="bg-white p-6 shadow-lg text-black flex justify-between items-center">
            <div>
                <img className="h-20" src="https://i.ibb.co/xHsSxh0/Logo.png" alt="" />
            </div>
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose /> : <AiOutlineMenu />
                }


            </div>
            <ul className={`md:flex gap-6 bg-white text-xl px-6 duration-1000 absolute md:static ${open ? 'top-20 right-0' : 'top-20 hidden'}`}>
                {links}
            </ul>
        </nav>
    );
};

export default Navbar;
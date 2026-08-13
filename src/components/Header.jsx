import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header({ storeName }) {
    const [menuState, setMenuState] = useState("closed");
    const { items } = useCart();

    function toggleMenu() {
        setMenuState((prev) => (prev === "closed" ? "opened" : "closed"));
    }

    return (
        <header className="fixed top-0 left-0 z-50 w-full h-20 bg-white border-b-2 border-gray-100">
            <div className="w-full max-w-7xl h-full mx-auto px-4 flex items-center justify-between">
                
                <h1>
                    <Link to="/" className="brand">
                        {storeName}
                    </Link>
                </h1>

                {}
                <nav className="relative flex items-center gap-6">
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <NavLink className="hover:text-blue-600" end to="/">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="hover:text-blue-600" end to="/products">
                                Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="hover:text-blue-600" end to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>

                    <Link to="/cart" className="btn btn-primary">
                        🛒 Cart ({items.length})
                    </Link>
                    
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        {menuState === "closed" ? (
                            <FaBars size={32} />
                        ) : (
                            <FaXmark size={32} />
                        )}
                    </button>

                    {menuState === "opened" && (
                        <ul className="mobile-menu md:hidden">
                            <li><NavLink end to="/" onClick={toggleMenu}>Home</NavLink></li>
                            <li><NavLink to="/products" onClick={toggleMenu}>Products</NavLink></li>
                            <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
                            <li><Link to="/cart" onClick={toggleMenu}>Cart ({items.length})</Link></li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}

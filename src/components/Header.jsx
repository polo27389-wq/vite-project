import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
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
                
                {/* Logo */}
                <h1>
                    <Link to="/" className="brand">
                        {storeName}
                    </Link>
                </h1>

                {/* Navigation */}
                <nav className="flex items-center gap-6">
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

                    {/* Cart */}
                    <Link to="/cart" className="btn btn-primary">
                        🛒 Cart ({items.length})
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        {menuState === "closed" ? (
                            <FaBars size={32} />
                        ) : (
                            <FaX size={32} />
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
}

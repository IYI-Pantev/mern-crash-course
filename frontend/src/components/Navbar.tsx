import { Link } from "react-router-dom"; // make sure this is correct!

import { CiSquarePlus } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Product Store 🛒
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/create-page"
            className="flex items-center gap-1 hover:text-yellow-400"
            title="Add new product"
          >
            <CiSquarePlus size={24} />
          </Link>

          <button
            onClick={toggleTheme}
            className="hover:text-yellow-400"
            title="Toggle light mode"
            style={{ cursor: "pointer" }}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom"; // make sure this is correct!

import { CiSquarePlus } from "react-icons/ci";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav
      className="dark:bg-blue-900 dark:text-white bg-blue-100 text-blue-900 border-b-2
      border-blue-300 dark:border-blue-700 shadow-md"
    >
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

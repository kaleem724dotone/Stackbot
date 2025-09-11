import { SearchOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// In a real application, you would import these from a local assets folder
// For this example, we'll use a placeholder for the logo
const logo = "https://placehold.co/100x40/5046c7/white?text=STOCKBACK";

const menuItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "about-us", label: "About Us", path: "/about-us" },
  { id: "category", label: "Categories", path: "/category" },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "contact", label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="w-full flex items-center justify-between bg-white px-4 md:px-8 py-3 md:py-4 font-primary sticky top-0 z-50">
      {/* Logo and Text */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Stockback Logo"
          className="h-8 md:h-10 w-auto cursor-pointer"
          onClick={() => handleNavigation("/")}
        />
        {/* <span className="text-white text-xl md:text-2xl font-bold font-sans tracking-wide">
          STOCKBACK
        </span> */}
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigation(item.path)}
            className={`cursor-pointer text-[15px] lg:text-[17px] font-semibold transition whitespace-nowrap
              ${location.pathname === item.path
                ? "text-[#5046C7] font-bold"
                : "text-[#5046C7] hover:text-[#6B46C1]"
              }`}
          >
            {item.label}
          </div>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <button className="hidden md:flex items-center border border-[#6B46C1] rounded-full px-4 lg:px-6 py-2 text-[#5046C7] font-semibold text-sm lg:text-base whitespace-nowrap">
          ENG <DownOutlined className="ml-2 text-xs" />
        </button>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button className="border border-[#6B46C1] rounded-full px-4 lg:px-6 py-2 text-[#5046C7] font-semibold text-sm lg:text-base bg-transparent whitespace-nowrap">
            Sign In
          </button>
          <button className="bg-[#6B46C1] border border-[#6B46C1] rounded-full px-4 lg:px-6 py-2 text-white font-semibold text-sm lg:text-base whitespace-nowrap">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex lg:hidden items-center text-[#6B46C1] ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuOutlined className="text-2xl" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-black shadow-md flex flex-col items-start px-6 py-4 gap-4 lg:hidden">
          {/* Nav Links */}
          <nav className="flex flex-col gap-3 w-full">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`cursor-pointer text-[15px] font-semibold transition
                  ${location.pathname === item.path
                    ? "text-[#6B46C1] font-bold"
                    : "text-white hover:text-[#6B46C1]"
                  }`}
              >
                {item.label}
              </div>
            ))}
          </nav>

          {/* Language Selector */}
          <button className="flex items-center bg-[#1E1E1E] border border-[#6B46C1] rounded-full px-4 py-2 text-white font-semibold text-sm w-full justify-center">
            ENG <DownOutlined className="ml-2 text-xs" />
          </button>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-2 w-full">
            <button className="border border-[#6B46C1] rounded-full px-4 py-2 text-white font-semibold text-sm bg-transparent w-full">
              Sign In
            </button>
            <button className="bg-[#6B46C1] border border-[#6B46C1] rounded-full px-4 py-2 text-white font-semibold text-sm w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

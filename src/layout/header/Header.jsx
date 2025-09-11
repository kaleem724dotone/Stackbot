import { SearchOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "candy-shake", label: "Candy Shack", path: "/candy-shake" },
  { id: "affiliates", label: "Affiliates", path: "/affiliates" },
  { id: "contact", label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full 2xl-Mob:border-2 2xl-Mob:border-red-500 flex items-center justify-between bg-white px-4 md:px-8 py-3 md:py-4 font-primary sticky top-0 z-50"
      style={{ boxShadow: "0px 1px 1px 0px #00000040" }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Stockback Logo"
          className="h-8 md:h-10 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Search */}
      <div className="hidden md:flex items-center bg-white border border-[#E3E3E3] rounded-full px-3 py-1 w-[220px] lg:w-[340px] mx-6">
        <input
          className="flex-1 bg-transparent outline-none text-gray-500 placeholder:text-gray-400 text-sm lg:text-base px-2"
          placeholder="Search here.."
        />
        <button className="bg-[#5046C7] text-white rounded-full px-4 lg:px-5 py-1 text-xs lg:text-sm font-semibold flex items-center justify-center">
          <SearchOutlined /> Search
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`cursor-pointer text-[15px] lg:text-[17px] font-semibold transition ${location.pathname === item.path
              ? "text-[#5046C7] font-bold"
              : "text-[#656A6F] hover:text-[#5046C7]"
              }`}
          >
            {item.label}
          </div>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Language Selector */}
        <button className="hidden md:flex items-center border border-[#5046C7] rounded-full px-4 lg:px-6 py-1 lg:py-2 text-[#5046C7] font-semibold text-sm lg:text-base whitespace-nowrap">
          ENG <DownOutlined className="ml-2 text-xs" />
        </button>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button className="border border-[#5046C7] rounded-full px-4 lg:px-6 py-1 lg:py-2 text-[#5046C7] font-semibold text-sm lg:text-base bg-white whitespace-nowrap">
            Sign In
          </button>
          <button className="bg-[#5046C7] border border-[#5046C7] rounded-full px-4 lg:px-6 py-1 lg:py-2 text-white font-semibold text-sm lg:text-base whitespace-nowrap">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex lg:hidden items-center text-[#5046C7] ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuOutlined className="text-2xl" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 lg:hidden">
          {/* Search (mobile only) */}
          <div className="flex w-full items-center bg-white border border-[#E3E3E3] rounded-full px-3 py-1">
            <input
              className="flex-1 bg-transparent outline-none text-gray-500 placeholder:text-gray-400 text-sm px-2"
              placeholder="Search here.."
            />
            {/* Search Button */}
            <button className="hidden md:flex items-center bg-[#5046C7] text-white rounded-full py-1 text-xs font-semibold">
              <SearchOutlined className="mr-1" /> Search
            </button>
          </div>


          {/* Nav Links */}
          <nav className="flex flex-col gap-3 w-full">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
                className={`cursor-pointer text-[15px] font-semibold ${location.pathname === item.path
                  ? "text-[#5046C7] font-bold"
                  : "text-[#656A6F] hover:text-[#5046C7]"
                  }`}
              >
                {item.label}
              </div>
            ))}
          </nav>

          {/* Language Selector */}
          <button className="flex items-center border border-[#5046C7] rounded-full px-4 py-1 text-[#5046C7] font-semibold text-sm">
            ENG <DownOutlined className="ml-2 text-xs" />
          </button>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-2 w-full">
            <button className="border border-[#5046C7] rounded-full px-4 py-2 text-[#5046C7] font-semibold text-sm bg-white w-full">
              Sign In
            </button>
            <button className="bg-[#5046C7] border border-[#5046C7] rounded-full px-4 py-2 text-white font-semibold text-sm w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

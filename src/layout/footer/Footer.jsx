import { Facebook, Instagram, Twitter, Youtube, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-10 font-primary">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        {/* Column 1 */}
        <div>
          <h2 className="text-[17px] font-semibold mb-3">StackBot</h2>
          <p className="text-[#ffffff] text-[15px] font-[500] max-w-xs">
            Smart security and seamless delivery solutions for the modern home.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Products</h3>
          <ul className="text-[#ffffff] text-[15px] font-[500] space-y-2">
            <li>StackShop</li>
            <li>Security Solutions</li>
            <li>Delivery Services</li>
            <li>Smart Home</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="text-[#ffffff] text-[15px] font-[500] space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 mb-5 flex-wrap justify-start">
            <div className="bg-white rounded-full p-2 text-black hover:scale-105 transition">
              <Facebook size={20} />
            </div>
            <div className="bg-white rounded-full p-2 text-black hover:scale-105 transition">
              <Instagram size={20} />
            </div>
            <div className="bg-white rounded-full p-2 text-black hover:scale-105 transition">
              <Twitter size={20} />
            </div>
            <div className="bg-white rounded-full p-2 text-black hover:scale-105 transition">
              <Youtube size={20} />
            </div>
          </div>

          <p className="text-[#ffffff] text-[15px] font-[500] text-sm mb-2">
            Subscribe to our newsletter
          </p>
          <div className="flex rounded-md overflow-hidden shadow-md w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email address.."
              className="flex-1 px-3 py-2 text-sm text-black outline-none w-[70%]"
            />
            <button className="w-[30%] bg-blue-500 text-white text-sm py-2 font-semibold hover:bg-blue-600 transition">
              Send
            </button>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-4"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Star size={18} />
          <span className="text-white font-bold">Logo</span>
        </div>

        <p className="text-[#ffffff] text-[15px] font-[500]">@ 2025 StackBot. All rights reserved.</p>

        <div className="flex gap-6 text-[#ffffff] text-[15px] font-[500]">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

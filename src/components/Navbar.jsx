// components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">RITTA</div>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-1 bg-black block mb-1"></span>
          <span className="w-6 h-1 bg-black block mb-1"></span>
          <span className="w-6 h-1 bg-black block"></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="group relative">
            <a href="#" className="hover:text-blue-600 font-medium">ผลงานของเรา</a>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg p-4 space-y-2">
              <li><a href="#" className="hover:text-blue-600">คอนโดมิเนียม</a></li>
              <li><a href="#" className="hover:text-blue-600">โรงงาน</a></li>
              <li><a href="#" className="hover:text-blue-600">โรงแรม</a></li>
              {/* เพิ่มได้ตามต้องการ */}
            </ul>
          </li>
          <li><a href="#" className="hover:text-blue-600 font-medium">บริการครบวงจร</a></li>
          <li><a href="#" className="hover:text-blue-600 font-medium">องค์กร</a></li>
          <li><a href="#" className="hover:text-blue-600 font-medium">ข่าวสาร</a></li>
          <li><a href="#" className="hover:text-blue-600 font-medium">ติดต่อเรา</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 py-2 bg-white space-y-2">
          <li><a href="#">ผลงานของเรา</a></li>
          <li><a href="#">บริการครบวงจร</a></li>
          <li><a href="#">องค์กร</a></li>
          <li><a href="#">ข่าวสาร</a></li>
          <li><a href="#">ติดต่อเรา</a></li>
          <li className="flex items-center space-x-2">
            <img src="/flags/flag_th.png" alt="Thai" className="w-6" />
            <span>ไทย</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="/flags/flag_en.png" alt="English" className="w-6" />
            <span>English</span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

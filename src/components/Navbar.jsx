import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://www.ritta.co.th/th" title="Ritta">
            <img
              src="https://www.ritta.co.th/wp-content/uploads/2021/07/logo.jpg"
              alt="Ritta"
              className="h-10"
            />
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <div className="group relative">
            <a href="#" className="hover:text-blue-600">ผลงานของเรา</a>
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
              <a href="https://www.ritta.co.th/th/awarded-project-th" className="block px-4 py-1 hover:bg-gray-100">Awarded Projects</a>
              <a href="https://www.ritta.co.th/th/projects/condominium-th" className="block px-4 py-1 hover:bg-gray-100">คอนโดมิเนียม</a>
              <a href="https://www.ritta.co.th/th/projects/department-store-th" className="block px-4 py-1 hover:bg-gray-100">ห้างสรรพสินค้า</a>
              <a href="https://www.ritta.co.th/th/projects/factory-warehouse-th" className="block px-4 py-1 hover:bg-gray-100">โรงงานและโกดัง</a>
              <a href="https://www.ritta.co.th/th/projects/hospital-th" className="block px-4 py-1 hover:bg-gray-100">โรงพยาบาล</a>
              <a href="https://www.ritta.co.th/th/projects/hotel-resort-th" className="block px-4 py-1 hover:bg-gray-100">โรงแรมและรีสอร์ท</a>
              <a href="https://www.ritta.co.th/th/projects/hypermarket-store-th" className="block px-4 py-1 hover:bg-gray-100">ไฮเปอร์มาร์เก็ต</a>
              <a href="https://www.ritta.co.th/th/projects/mixed-use-th" className="block px-4 py-1 hover:bg-gray-100">อสังหาฯผสมผสาน</a>
              <a href="https://www.ritta.co.th/th/projects/office-building-th" className="block px-4 py-1 hover:bg-gray-100">อาคารสำนักงาน</a>
              <a href="https://www.ritta.co.th/th/projects/renovation-th" className="block px-4 py-1 hover:bg-gray-100">ปรับปรุงอาคาร</a>
              <a href="https://www.ritta.co.th/th/projects/university-academy-th" className="block px-4 py-1 hover:bg-gray-100">มหาวิทยาลัย</a>
              <a href="https://www.ritta.co.th/th/projects/others-th" className="block px-4 py-1 hover:bg-gray-100">อื่นๆ</a>
            </div>
          </div>

          <a href="https://www.ritta.co.th/th/engineering-procurement-construction" className="hover:text-blue-600">บริการครบวงจร</a>
          <a href="https://www.ritta.co.th/th/about-ritta" className="hover:text-blue-600">องค์กร</a>
          <a href="https://www.ritta.co.th/th/news-media" className="hover:text-blue-600">ข่าวสาร</a>
          <a href="https://www.ritta.co.th/th/contact-us" className="hover:text-blue-600">ติดต่อเรา</a>
          <a href="https://finance.ritta.co.th/" className="hover:text-blue-600">ตรวจสอบยอดเช็ค</a>
        </nav>

        <div className="flex items-center space-x-2">
          <a href="https://www.ritta.co.th/">
            <img src="https://www.ritta.co.th/wp-content/uploads/flags/flag_en.png" alt="English" className="w-6" />
          </a>
          <a href="https://www.ritta.co.th/th">
            <img src="https://www.ritta.co.th/wp-content/uploads/flags/flag_th.png" alt="ไทย" className="w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}

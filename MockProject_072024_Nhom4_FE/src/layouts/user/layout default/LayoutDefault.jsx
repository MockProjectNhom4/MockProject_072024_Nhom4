import { useState, useEffect } from "react";
import Footer from "../../../Components/user/footer/Footer";
import Navbar from "../../../Components/user/navbar/Navbar";
import { Outlet } from "react-router-dom";
export default function LayoutDefault() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 600;
      const opacity = Math.min(scrollY / maxScroll, 0.9); // Tính toán độ mờ dựa trên vị trí cuộn
      setColor(`rgba(0, 0, 0, ${opacity})`); // Chuyển màu từ trong suốt sang xanh dương
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="absolute top-0">
        <Navbar color={color} />
      </header>
      <main>
        {/* style={{ minHeight: "88vh" }} */}
        <Outlet />
      </main>
      <footer>
        <div className="row">
          <div className="col-l-12">
            <Footer />
          </div>
        </div>
      </footer>
    </>
  );
}

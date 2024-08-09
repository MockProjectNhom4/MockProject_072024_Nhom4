import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutDefault() {
  return (
    <>
      <header className="absolute top-0 z-50">
        <Navbar />
      </header>
        <main style={{ minHeight: "88vh" }}>
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

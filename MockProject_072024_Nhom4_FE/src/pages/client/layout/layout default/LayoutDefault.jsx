import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutDefault() {
  return (
    <>
      <header className="absolute top-0">
        <Navbar />
      </header>
      <div className="mt-[128px]">
        <main style={{ minHeight: "88vh" }}>
        <Outlet />
        </main>
      </div>
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

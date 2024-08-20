import Navbar from "../../../Components/body guard/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutDefaultBodyGuard() {
  return (
    <>
      <div className="HeaderBodyGuard">
        <Navbar></Navbar>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

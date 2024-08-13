import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutDefaultBodyGuard(){
    return(
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
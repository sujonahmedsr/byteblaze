import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-118px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;
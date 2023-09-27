import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-white ">
            <div className="max-w-[1380px] mx-auto">
                <Navbar></Navbar>
                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
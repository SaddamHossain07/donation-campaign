import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/') {
            document.title = `Donation Campaign`
        } else {
            document.title = `Donation Campaign ${location.pathname.replace("/", "-")}`
        }

        if (location.state) {
            document.title = `${location.state}`
        }

    }, [location.pathname, location.state])

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
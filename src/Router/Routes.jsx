import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Donation from "../Pages/Donations/Donation/Donation";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/donation.json')

            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/donation/donationDetails/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donation.json')
            }
        ]
    }
])

export default Routes;
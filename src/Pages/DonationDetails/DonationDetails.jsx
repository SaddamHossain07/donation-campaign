import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localStorage";

const DonationDetails = () => {
    const { id } = useParams()
    const idInt = parseInt(id)

    const donations = useLoaderData()

    const donation = donations.find(donation => donation.id == idInt)
    const { title, picture, description, price } = donation;

    const donationHandler = () => {
        saveDonation(id)
        toast("Good Job! You Donate Successfully.");
    }


    return (
        <div className="py-24 text-black">

            <div className="relative">
                <img className="w-full rounded-xl" src={picture} alt="" />
                <div className="absolute h-24 md:h-28 lg:h-32 bg-black opacity-40 bottom-0 w-full">
                </div>
                <button onClick={donationHandler} className="text-white text-md md:text-lg lg:text-xl font-bold bg-red-600 py-2 lg:py-4 px-4 lg:px-6 absolute bottom-6 md:bottom-8 ml-6 md:ml-8 rounded-lg">Donate {price}</button>
            </div>

            <h2 className="text-[40px] font-bold pt-14">{title}</h2>
            <p className="text-justify pt-8">{description}</p>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default DonationDetails;
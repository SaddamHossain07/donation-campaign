import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../../utility/localStorage";
import { useEffect, useState } from "react";
import DonatedCard from "../../../components/DonatedCard/DonatedCard";

const Donation = () => {
    const donationAll = useLoaderData()

    const [savedItem, setSavedItem] = useState([])

    useEffect(() => {
        const savedDonations = []
        const savedIDs = getStoredDonation('donation')

        if (donationAll.length > 0) {

            for (const id of savedIDs) {
                const donation = donationAll.find(donation => donation.id == id)
                savedDonations.push(donation)
            }

        }
        setSavedItem(savedDonations)
        console.log(savedDonations)

    }, [donationAll])


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-16">
            {
                savedItem.map(donation => <DonatedCard key={donation.id} donation={donation}></DonatedCard>)
            }
        </div>
    );
};

export default Donation;
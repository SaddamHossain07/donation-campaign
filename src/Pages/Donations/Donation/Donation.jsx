import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../../utility/localStorage";
import { useEffect, useState } from "react";
import DonatedCard from "../../../components/DonatedCard/DonatedCard";

const Donation = () => {
    const donationAll = useLoaderData()

    const [savedItem, setSavedItem] = useState([])

    const [dataLength, setDataLenght] = useState(4)

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
        <div>
            {
                savedItem.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-16">
                    {
                        savedItem.slice(0, dataLength).map(donation => <DonatedCard key={donation.id} donation={donation}></DonatedCard>)
                    }
                </div> :
                    <h2 className="text-3xl font-bold text-center mt-24">You have not donate yet,
                        <br /> Please donate!</h2>
            }

            <div>
                {
                    savedItem.length >= 4 && <div className={dataLength === donationAll.length ? "hidden" : "flex justify-center pt-12"}>
                        <button onClick={() => setDataLenght(donationAll.length)} className="bg-green-600 rounded-xl py-6 px-12 text-white text-lg font-bold">See All</button>
                    </div>
                }
            </div>

        </div>
    );
};

export default Donation;
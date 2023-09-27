import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import { Chart } from "react-google-charts";

const Statistics = () => {

    const donationAll = useLoaderData()
    const totalPrice = donationAll.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);

    const [savedItem, setSavedItem] = useState([])
    useEffect(() => {
        const savedDonations = []
        const savedIDs = getStoredDonation()

        if (donationAll.length > 0) {
            for (const id of savedIDs) {
                const donation = donationAll.find(donation => donation.id == id)
                savedDonations.push(donation)
            }
        }
        setSavedItem(savedDonations)

    }, [donationAll])

    const donatedPrice = savedItem.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);



    return (
        <div>
            totalPrice : {totalPrice}
            donatedPrice : {donatedPrice}
            <Chart
                chartType="PieChart"
                data={[totalPrice, donatedPrice]}
                width="100%"
                height="400px"
                legendToggle
            />
        </div>
    );
};

export default Statistics;
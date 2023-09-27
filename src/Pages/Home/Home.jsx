import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";

const Home = () => {
    const donationData = useLoaderData()

    const [displayDonations, setDisplayDonation] = useState([])

    const [searchValue, setSearchValue] = useState('')

    const searchHandler = e => {
        e.preventDefault()
        const searchValue = e.target.search.value
        setSearchValue(searchValue)
    }

    useEffect(() => {

        if (searchValue === 'Education') {
            const educationCategory = donationData.filter(donation => donation.category === 'Education')
            setDisplayDonation(educationCategory)
        } else if (searchValue === 'Health') {
            const healthCategory = donationData.filter(donation => donation.category === 'Health')
            setDisplayDonation(healthCategory)
        } else if (searchValue === 'Clothing') {
            const clothingCategory = donationData.filter(donation => donation.category === 'Clothing')
            setDisplayDonation(clothingCategory)
        } else if (searchValue === 'Food') {
            const foodCategory = donationData.filter(donation => donation.category === 'Food')
            setDisplayDonation(foodCategory)
        }
        else {
            setDisplayDonation(donationData)
        }
    }, [donationData, searchValue])


    return (
        <div className="bg-white">
            <Banner
                searchHandler={searchHandler}></Banner>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 py-24">
                {
                    displayDonations?.map(card => <Card
                        key={card.id}
                        card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;
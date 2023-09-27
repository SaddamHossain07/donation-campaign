import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
    const donationData = useLoaderData()
    return (
        <div className="bg-white">
            <Banner></Banner>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 py-24">
                {
                    donationData?.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;
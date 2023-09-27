import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, picture, category, title, textColor, cardBackground, categoryBackground } = card;

    return (
        <div>
            <Link to={`/donation/donationDetails/${id}`} >
                <div className="card card-compact shadow-xl rounded-lg" style={{ backgroundColor: cardBackground }}>
                    <img className="h-52 w-full" src={picture} alt="Shoes" />
                    <div className="card-body" style={{ color: textColor }}>
                        <span className="py-1 px-4 rounded inline-block w-1/4" style={{ backgroundColor: categoryBackground }}>{category}</span>
                        <h2 className="card-title text-xl font-bold py-4">{title}</h2>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default Card;
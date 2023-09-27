import { useState } from "react";
import { Link } from "react-router-dom";

const DonatedCard = ({ donation }) => {
    const { id, title, picture, price, category, textColor, categoryBackground, cardBackground } = donation;

    return (
        <div>
            <div className="card card-side shadow-xl bg-white text-black">
                <figure><img className="h-56 w-52" src={picture} alt={title} /></figure>
                <div className="card-body p-6" style={{ backgroundColor: cardBackground }}>
                    <div>
                        <span className="px-4 rounded inline-block" style={{ backgroundColor: categoryBackground, color: textColor }}>{category}</span>
                    </div>
                    <h2 className="card-title text-2xl font-semibold">{title}</h2>
                    <p className="font-semibold" style={{ color: textColor }}>${price}</p>
                    <div className="card-actions justify-start pt-5">
                        <Link to={`/donation/donationDetails/${id}`}>
                            <button className="btn border-0 text-white font-bold" style={{ backgroundColor: textColor }}>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, picture, category, title, textColor, cardBackground, categoryBackground } = card;

    return (
        <div>
            <Link to={`/donation/donationDetails/${id}`} >
                <div className="card card-compact shadow-xl rounded-lg" style={{ backgroundColor: cardBackground }}>
                    <figure>
                        <img className="h-52 w-full" src={picture} alt="Shoes" />
                    </figure>
                    <div className="card-body mt-4" style={{ color: textColor }}>
                        <div>
                            <span className="py-1 px-4 rounded inline-block" style={{ backgroundColor: categoryBackground }}>{category}</span>
                        </div>
                        <h2 className="card-title text-xl font-bold pb-4 mt-2">{title}</h2>
                    </div>
                </div>
            </Link>
        </div >
    );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;
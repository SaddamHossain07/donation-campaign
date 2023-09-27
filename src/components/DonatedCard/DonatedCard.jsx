
const DonatedCard = ({ donation }) => {
    const { title, picture, price } = donation;

    return (
        <div>
            <div className="card card-side shadow-xl bg-white text-black">
                <figure><img className="h-52 w-52" src={picture} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>${price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;
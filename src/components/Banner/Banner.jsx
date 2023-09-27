
const Banner = () => {
    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/PYrjKkS/donategoods.jpg)' }}>
            <div className="hero-overlay bg-opacity-95"></div>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-10 text-black text-2xl md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search here...." className="input input-bordered bg-white md:w-52 lg:w-[360px]" />
                            <button className="btn bg-[#FF444A;] text-white border-0">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
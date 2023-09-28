import PropTypes from 'prop-types'
const Banner = ({ searchHandler }) => {


    return (
        <div className="min-h-[600px] relative" >
            <div className="min-h-[600px] opacity-10" style={{ backgroundImage: 'url(https://i.ibb.co/PYrjKkS/donategoods.jpg)' }}>
            </div>
            <div className="flex flex-col items-center justify-center absolute bottom-[20%] top-[20%] left-[20%] right-[20%]">
                <h1 className="mb-10 text-black text-2xl md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
                <div className="form-control">
                    <form className="input-group" onSubmit={searchHandler}>
                        <input id="search" name="search" type="text" placeholder="Search here...." className="input input-bordered bg-white md:w-52 lg:w-[360px] py-6" />
                        <button className="btn bg-[#FF444A;] text-white border-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    searchHandler: PropTypes.func
}

export default Banner;
import BannerImg from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className="hero bg-base-100 p-9">
            <div className="md:hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} className="max-w-96" />
                <div>
                    <h1 className="text-3xl font-bold">One Step Closer To Your <br />Dream Job</h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
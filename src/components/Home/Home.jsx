import FeatureJobs from "../Appliedjobs/FeatureJobs/FeatureJobs";
import Banner from "../Banner/Banner";
import JobsCategory from "../JobsCategory/JobsCategory";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobsCategory></JobsCategory>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;
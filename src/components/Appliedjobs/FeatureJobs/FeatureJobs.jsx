import { useEffect, useState } from "react";
import Job from "../../Job/Job";


const FeatureJobs = () => {

    const [jobs, setJob] = useState([]);
    const [datalength, setDatalength] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl text-center mt-12">Featured Jobs</h2>
            <p className="text-center mt-3 mb-12">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    jobs.slice(0, datalength).map(job => <Job key={job.id} job={job}></Job>)
                }

            </div>


            <div className="flex justify-center mb-4 mt-4">
                <div className={datalength === jobs.length ? 'hidden' : ''}>
                    <button
                        onClick={() => setDatalength(jobs.length)}
                        className=" btn btn-primary text-lg">See all jobs</button>
                </div>

            </div>


        </div>
    );
};

export default FeatureJobs;
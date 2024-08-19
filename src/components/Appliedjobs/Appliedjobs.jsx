import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import AppliedDisplay from "../AppliedDisplay/AppliedDisplay";


import backgroundImage from '../../assets/images/bg1.png'
import backgroundRightImage from '../../assets/images/bg2.png'

const Appliedjobs = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setappliedJobs] = useState([]);
    const [appliedFilter, setAppliedFilter] = useState([]);

    const handlerFilter = filter => {
        if (filter === 'all') {
            setAppliedFilter(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setAppliedFilter(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setAppliedFilter(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobId = getStoredJobApplication();
        if (jobs.length > 0) {

            // we can use anyone

            // const jobsApplied = jobs.filter(job => storedJobId.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setappliedJobs(jobsApplied);
            setAppliedFilter(jobsApplied);
            // console.log(jobs, storedJobId, jobsApplied)

        }
    }, [jobs])



    return (
        <div>
            <div className="max-w-screen-2xl mx-auto">

                <div className="md:flex md:justify-between md:w-full md:max-w-screen-2xl">
                    <img src={backgroundImage} alt="" />
                    <h1 className="text-4xl text-center md:p-16 ">Applied Jobs</h1>
                    <img src={backgroundRightImage} alt="" />
                </div>
            </div>


            <div className="dropdown flex justify-end mr-16 mt-3">
                <div tabIndex={0} role="button" className="btn m-1">Filter Jobs</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handlerFilter('all')}><a>All</a></li>
                    <li onClick={() => handlerFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handlerFilter('onsite')}><a>OnSite</a></li>

                </ul>
            </div>

            <div>
                {
                    appliedFilter.map(job => <AppliedDisplay key={job.id} job={job}></AppliedDisplay>)
                }
            </div>
        </div>
    );
};

export default Appliedjobs;
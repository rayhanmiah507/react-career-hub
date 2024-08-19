import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";
import './JobDetails.css'

import backgroundImage from '../../assets/images/bg1.png'
import backgroundRightImage from '../../assets/images/bg2.png'



const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);


    const handlerToast = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully', { position: "top-right" });
    }


    return (
        <div>

            <div className="max-w-screen-2xl mx-auto">

                <div className="md:flex md:justify-between w-full max-w-screen-2xl">
                    <img src={backgroundImage} alt="" />
                    <h1 className="text-4xl text-center md:p-16 ">Job Details</h1>
                    <img src={backgroundRightImage} alt="" />
                </div>


            </div>


            <div className="grid gap-4 md:grid-cols-6 mt-20">


                {/* start job description */}

                <div className="p-3 md:col-span-4">

                    <div className="flex text-base">
                        <h2><span className="font-bold text-xl">Job Description:</span> {job.job_description}</h2>
                    </div>

                    <div className="flex text-base mt-4">
                        <h2><span className="font-bold text-xl">Job Responsibility:</span> {job.job_responsibility}</h2>
                    </div>


                    <div className="text-base mt-4">
                        <h2 className="font-bold text-xl">Educational Requirements:</h2> <br />
                        <p>{job.educational_requirements}</p>
                    </div>

                    <div className="text-base mt-4">
                        <h2 className="font-bold text-xl">Experiences:</h2> <br />
                        <p>{job.experiences}</p>
                    </div>


                </div>

                {/* Job Details */}

                <div className="md:col-span-2 shadow-xl bg-slate-300 p-5 m-4">

                    <h2 className="text-xl border-b-2 pb-5">Job Details</h2>

                    <div className="mt-3">
                        <h2 className="flex items-center text-semibold">
                            <HiOutlineCurrencyDollar className="text-2xl mr-2 text-orange-700" />
                            <span className="font-bold text-lg mr-2">Salary:</span> {job.salary} (Per Month)
                        </h2>
                    </div>

                    <div className="mt-2">
                        <h2 className="flex items-center">
                            <CiCalendar className="text-2xl mr-2 text-orange-800"></CiCalendar>
                            <span className="text-lg font-bold mr-2">Job Title:</span> {job.job_title}
                        </h2>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mt-4 border-b-2 pb-5">Contact Information</h2>
                    </div>


                    <div className="mt-3">
                        <h2 className="flex items-center">
                            <IoCallOutline className="text-2xl mr-2 text-orange-800"></IoCallOutline>
                            <span className="text-lg font-bold mr-2">Phone:</span> {job.contact_information.phone}
                        </h2>
                    </div>


                    <div className="mt-2">
                        <h2 className="flex items-center">
                            <MdOutlineMail className="text-2xl mr-2 text-orange-800 "></MdOutlineMail>
                            <span className="text-lg font-bold mr-2">Email:</span>{job.contact_information.email}
                        </h2>
                    </div>


                    <div className="mt-2">
                        <h2 className="flex">
                            <CiLocationOn className="text-2xl mr-2 text-orange-800 "></CiLocationOn>
                            <span className="text-lg font-bold mr-2">Address:</span>{job.contact_information.address}
                        </h2>
                    </div>

                    <div className="mt-4">
                        <button onClick={handlerToast} className="btn btn-primary w-full">Apply Now</button>
                    </div>


                </div>

                {/* end job details */}




            </div>
            <ToastContainer />
        </div >
    );
};

export default JobDetails;
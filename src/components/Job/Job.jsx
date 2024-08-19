import './Job.css'
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (

        <div className=' p-3 md:p-5'>

            <div className="card card-compact bg-slate-100">
                <img className="img ml-2 mt-2" src={logo} alt="" />
                <div className="mt-4">
                    <h2 className="card-title font-extrabold ml-2">{job_title}</h2>
                    <p className='font-semibold ml-2'>{company_name}</p>

                    <div className='flex mt-4'>
                        <button className='border rounded-md border-blue-400 text-base ml-2 mr-8 p-2 text-blue-800'>{remote_or_onsite}</button>
                        <button className='border rounded-md border-blue-400 text-base ml-2 mr-8 p-2 text-blue-800'>{job_type}</button>
                    </div>

                    <div className='flex gap-4 mt-4'>
                        <h2 className="text-semibold flex"><CiLocationOn className="text-2xl mr-2 ml-2"></CiLocationOn>{location}</h2>
                        <h2 className="text-semibold flex"><HiOutlineCurrencyDollar className='text-2xl mr-2 ml-2'></HiOutlineCurrencyDollar>Salary: {salary}</h2>
                    </div>

                    <div className="card-actions mt-3">
                        <Link to={`/job/${id}`}>
                            <button className="bg-gradient-to-r from-indigo-600 via-purple-800 to-pink-500 p-3 m-3 font-bold text-white ml-2">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Job;
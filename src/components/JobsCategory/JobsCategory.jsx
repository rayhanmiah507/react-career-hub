import category1 from '../../assets/icons/accounts.png'
import category2 from '../../assets/icons/calendar.png'
import category3 from '../../assets/icons/creative.png'
import category4 from '../../assets/icons/chip.png'

const JobsCategory = () => {
    return (
        <div>
            <h2 className="text-5xl text-center mt-8">Job Category List</h2>
            <p className="text-center mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 m-5 mt-10 '>

                    <div className="p-3  bg-base-100 shadow-md">
                        <figure><img className='ml-14' src={category1} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>

                    <div className="p-3 bg-base-100 shadow-md">
                        <figure><img className='ml-14' src={category2} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>

                    <div className="p-3  bg-base-100 shadow-md">
                        <figure><img className='ml-14' src={category3} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>

                    <div className="p-3  bg-base-100 shadow-md">
                        <figure><img className='ml-14' src={category4} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default JobsCategory;
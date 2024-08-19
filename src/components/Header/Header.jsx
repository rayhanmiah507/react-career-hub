import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => console.log("Logout successfully"))
            .catch(error => console.log(error))
    }

    const Links = <>

        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li> */}
        <li><NavLink to="/applied">Applied Jobs</NavLink></li>
        {
            user ? '' : <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </>
        }
        {
            user && <>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </>
        }

        {/* <li><NavLink to="/blogs">Blogs</NavLink></li> */}
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                {/* <a href="/" className="btn btn-ghost text-xl">CareerHub</a> */}
                <NavLink to="/" className="btn btn-ghost text-xl">CareerHub</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/applied" className="btn">Apply Now</a>
            </div>
            {
                user ?
                    <div className="navbar-end">
                        <span>{user.email}</span>
                        <button onClick={handleSignOut} className="btn">SignOut</button>

                    </div> : ''
            }
        </div>
    );
};

export default Header;
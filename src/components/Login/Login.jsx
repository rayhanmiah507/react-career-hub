import { Link, useNavigate } from "react-router-dom";
import LoginImg from '../../assets/images/login.jpg'
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";


const Login = () => {
    const navigate = useNavigate();

    const { signUser, googleLogin } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        // sign in user

        signUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate("/")
            })
            .catch(error => error.message)


    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero mt-32">
            <div className="hero-content flex-col lg:flex-row-reverse">

                {/* Login form */}
                <div className="card shrink-0 w-2/5  ">
                    <h1 className="text-5xl font-bold mb-5">Login now!</h1>

                    <div className=" shadow-2xl bg-base-100 w-full">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <p>New to here? Please <Link className="text-blue-600" to="/register">Register</Link></p>
                    <button onClick={handleGoogle} className="btn btn-ghost">Google</button>
                </div>

                {/* Login img */}

                <div className="text-center lg:text-left">

                    <img src={LoginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
import { Link } from "react-router-dom";
import img from '../../assets/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);


  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      .catch(error => console.log(error))
    })
  }

    return (
        <div className="hero min-h-screen bg-base-200 w-[90%] mx-auto my-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="  mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
            <h1 className="text-5xl font-bold text-center">Register</h1>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>
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
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
            </form>
            <p className='my-4 text-center'>Already have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Register;
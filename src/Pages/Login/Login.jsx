import { Link } from 'react-router-dom';
import img from '../../assets/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      signIn(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200 w-[90%] mx-auto my-10">
  <div className="hero-content flex-col lg:flex-row">
    <div className="  mr-12">
      <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
        <h1 className="text-5xl font-bold text-center">Login</h1>
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
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className='my-4 text-center'>New to Automotive <Link className='text-orange-600 font-bold' to="/register">Register</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
     logOut()
     .then()
       .catch()
  }

    const links = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/product">Add Product</NavLink></li>
      <li><NavLink to="/myCart">My Cart</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div className="navbar rounded-xl py-2 px-4 w-[90%] mx-auto mb-4 my-6">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img className=" w-[100px] h-[100px]  -mt-6" src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
   <img className=" rounded-full mr-4" src={user?.photoURL} alt="" />
   <p className="mr-4">{user?.email}</p>
    {
      user ?
      <button onClick={handleSignOut}  className="btn">LogOut</button>
      :
      <Link to="/login">
      <button  className="btn">Login</button>
      </Link>
    }
  </div>
</div>
    );
};

export default Navbar;
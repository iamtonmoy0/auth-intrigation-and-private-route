import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error)
    })
  }
	return (
		<>
		<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">Firebase Auth</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      
     <li> 
       <li><Link to='post' className="hover:bg-emerald-300">Posts</Link></li>
      
      {
        user ? <><li>{user.email}</li> 
        <li><Link to='/signin' className="hover:bg-emerald-300" onClick={handleLogout}>Sign Out</Link></li></> 
        : <>
        <li><Link to='signin'>Sign In</Link></li>
        <li><Link to='signup' className="hover:bg-emerald-300">Sign Up</Link></li>
        </>
      }</li>
      
    </ul>
  </div>
</div>
		
		</>

	);
}

export default Header;

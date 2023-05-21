import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
const {user}=useContext(AuthContext)
console.log(user)


const handleSignUp=(e)=>{
  e.preventDefault();
  const name= e.target.name.value;
  const mail=e.target.email.value;
  const pass=e.target.password.value;
   console.log(name,mail,pass)

}

	return (
		<div className="hero min-h-screen bg-purple-200" >
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <form className="card-body"onSubmit={handleSignUp} >
	<div className="form-control" >
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required name="name" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered"  required name="email"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  required name="password" />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
         </label>
        </div>
         <Link to='/signin'><p>Already have an account?</p></Link>
        <div className="form-control mt-6">
          <button className="btn btn-primary" >sign up</button>
        </div>
      </form>
    </div>
  </div>
</div>
	);
}

export default SignUp;

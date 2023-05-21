import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Signin = () => {
const {signIn}=useContext(AuthContext)
const [success,setSuccess]=useState('')
const handleSignIn=(e)=>{
  e.preventDefault();
  const form=e.target;
  const mail=form.email.value;
  const pass=form.password.value;
  signIn(mail,pass)
  .then(result=>{
    console.log(result.user)
    setSuccess('Login successfully')
  })
  .catch(error=>{
    console.log(error)
    
  })

}


	return (
		<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSignIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" name="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <Link to='/signup'><p>New to website? Register here</p></Link>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>{success}</p>
      </form>
    </div>
  </div>
</div>
	);
}

export default Signin;

import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div className="hero min-h-screen bg-purple-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
	<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  required />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
         </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">sign up</button>
        </div>
      </div>
    </div>
  </div>
</div>
	);
}

export default SignUp;

import { useContext } from "react";
import  { AuthContext } from "../../providers/AuthProvider";


const Home = () => {
	const{user}=useContext(AuthContext)
	console.log(user)
	return (
		<div>
			this is home{user && <p>{user.displayName}</p> }
		</div>
	);
}

export default Home;

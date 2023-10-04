import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <div className="navbar">
                <h1>Welcome To The Site</h1>
                <nav>
                    <Link to="/Register">Register</Link>
                    <Link to="/SignIn" style={{marginLeft:'22px'}}>SignIn</Link>
                </nav>
            </div>
        </>
     );
}
 
export default Home;
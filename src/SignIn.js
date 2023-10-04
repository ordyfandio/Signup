import React ,{useRef,useState,useEffect}from 'react';
import Home from './Home';
// import {useHistory} from "react-router-dom";

const SignIn = () => {
    const name=useRef();
    const email=useRef();
    const pwd=useRef();
    // const history=useHistory(); 
    const localPwd=localStorage.getItem('pwd');
    const [showHome,setShowHome]=useState();
    const [show,setShow]=useState();
    const localSignup=localStorage.getItem('name');
    const localEmail=localStorage.getItem('email');

    useEffect(()=>{
        if(localSignup){
          setShowHome(false)
        }
        if(localEmail){
          setShow(false)
        }
      })

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(name.current.value&&email.current.value&&pwd.current.value==localPwd){
            localStorage.setItem('Register',email.current.value)
            alert('Request is Successfully!') 
        }else{
            alert('Please make sure you fill the correct word !')
        }
    }
    return (  
        <>
            {showHome?<Home/>:
                (show?<div className="signup">
                    <h1>Sign In</h1>
                    <form method="post" className="form">
                        <label style={{marginRight:'155px'}}>Name</label>
                        <input type="text" placeholder="Enter Your Name" ref={name} required/>
                        <label style={{marginRight:'165px'}}>Email</label>
                        <input type="text" placeholder="Enter Your mail" ref={email}  required/>
                        <label style={{marginRight:'155px'}}>Password</label>
                        <input type="password" ref={pwd} required/>
                        <button className="btn" onClick={handlesubmit}>Submit</button>
                    </form>
                </div>
                :
                <div className="signup">
                    <h1>Welcome {localSignup} !</h1>
                </div>
                )
            }
        </>
    );
}
 
export default SignIn;
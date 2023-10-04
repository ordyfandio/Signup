import './style.css'
import React ,{useRef, useState}from 'react';
import {useHistory} from "react-router-dom";
import {FaEye,FaEyeSlash} from "react-icons/fa6";

const Register = () => {

    const name=useRef();
    const email=useRef();
    const pwd=useRef();
    const cpwd=useRef();
    // const localSignup=localStorage.getItem('Register');
   const [show,setShow]=useState();
   const [showConf,setShowConf]=useState();

    const history=useHistory(); 


    const handlesubmit=(e)=>{
        e.preventDefault();
        if(name.current.value&&email.current.value&&pwd.current.value&&cpwd.current.value){
            if(pwd.current.value==cpwd.current.value){
                localStorage.setItem('name',name.current.value)
                localStorage.setItem('email',email.current.value)
                localStorage.setItem('pwd',pwd.current.value)
                localStorage.setItem('cpwd',cpwd.current.value) 
                localStorage.setItem('Register',email.current.value)
                alert('Account Created Successfully!') 
                history.push('/SignIn')
            }else{
                alert("The Password is not correct !")
            }
        }
    }

    const handleshow=()=>{
        setShow(!show)
    }
    const handleshowConf=()=>{
        setShowConf(!showConf)
    }

    return ( 
        <>
                <div className="register">
                    <h1>Register The Platform</h1>
                    <form method="post" className="form">
                        <label style={{marginRight:'155px'}}>Name</label>
                        <input type="text" placeholder="Enter Your Name" ref={name} required/>
                        <label style={{marginRight:'155px'}}>Email</label>
                        <input type="Email" placeholder="Enter Your mail" ref={email} required/>
                        <label style={{marginRight:'155px'}}>Password</label>
                        <input type={show?'text':'password'} ref={pwd} required/><FaEye style={{position:'absolute',left:'320px',bottom:'210px',width:'80px',cursor:'pointer'}} onClick={handleshow}></FaEye>
                        <label>Confirm Password</label>
                        <input type={showConf?'text':'password'} ref={cpwd} required/><FaEye style={{position:'absolute',left:'320px',bottom:'135px',width:'80px',cursor:'pointer'}} onClick={handleshowConf}></FaEye>
                        <button className="btn" onClick={handlesubmit}>Submit</button>
                    </form>
                </div>
        </>
     );
}
 
export default Register;
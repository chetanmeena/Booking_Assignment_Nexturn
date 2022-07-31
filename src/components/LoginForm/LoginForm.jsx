import React,{useState} from 'react';
import './LoginForm.style.css';
 const LoginForm = (props) =>{
//  const[details, setDetails]= useState("");
//     const submitHandler = e =>{
//  e.preventDefault();
//  Login(details);
//     }
const [email,setEmail] = useState("Email");
const [username,setUsername] = useState("Username");
const [pass,setPass] = useState("Password");
const handleEmail = (e)=>{
    setEmail(e.target.value)

}
const handlepass = (e)=>{
    setPass(e.target.value)

}
const handleUser = (e)=>{
    setUsername(e.target.value)

}
    return(
        
        <form>
            <div className="form-inner">
            <h2>Login</h2>
            {/* {(error !=="") ?(<div className='error'>{error}</div>) : ""} */}
            <div className='form-group'>
             <label htmlFor='name'>Name:</label>
             <input type="text" name="name" id="name" value ={username} onChange={handleUser} />   
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email:</label>
            <input type="email"name="email" id="email" value={email} onChange={handleEmail}/>
            
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label>
            <input type="password" name='password' id="password" value={pass}  onChange={handlepass} />
            
            </div>
            <input className= 'submitbutton' type="submit" value="LOGIN" /> 
            </div>
        </form>
    )
}
export default LoginForm
import React,{useEffect,useState} from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";

const SignUP=()=>{
    const history = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    async function submit(e){
     e.preventDefault();
 
     try{
         await axios.post("https://localhost:8000/signup",{
               email,password
         })
         .then(res=>{
            if(res.data=="exist"){
                   alert("user already exist");
            }
           else if(res.data=="notexist"){
            history("/home",{state: {id:email}})
         }
        })
       .catch(e=>{
        alert("wrong details");
        console.log(e);
       })
     }
     catch(e){
         console.log(e);
     }
    }
     return (
         <div className="login">
             <h1>Sign Up</h1>
             <form action="POST">
                 <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" />
                 <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" />
                 <input type="submit" onClick={submit}/>
             </form>
             <br/>
             <p>OR</p>
             <br/>
           <Link to="/">Login</Link>  
         </div>
     );
}
export default SignUP;

import React,{useEffect,useState} from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";

const Login=()=>{
    const history = useNavigate();
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();
   async function submit(e){
    e.preventDefault();

    try{
        await axios.post("https://localhost:8000/",{
              email,password
        })
        .then(res=>{
            if(res.data=="exist"){
                   history("/body",{state: {id:email}})
            }
           else if(res.data=="notexist"){
              alert("user have not signup")
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
            <h1>Login</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" />
                <input type="submit" onClick={submit}/>
            </form>
            <br/>
            <p>OR</p>
            <br/>
          <Link to="/signup">Sign up</Link>  
        </div>
    );
}
export default Login;
import React from "react";
import './Login.css';

function Login(){
    return <div className="contss">
       
       <form action="#"> <fieldset> <legend id="lg" style={{paddingTop:"12px"}} >  Join Our Community</legend> <hr />
        
      <label htmlFor="nm"> Name : </label>
        <input className="cd-size cd" id="nm" type="text" placeholder="Enter Name"  required/>
        <br />
        <label htmlFor="em">Email : </label>
        <input className="cd-size cd" id="em" type="email"  placeholder="Enter Email" required/>
        <br />
        <label htmlFor="ag" style={{marginLeft:"10px"}}> Age : </label>
        <input className="cd-size cd" style={{marginLeft:"48px"}} id="ag" type="number"  required placeholder="Enter Age"/>
        <br />
        <div className="cd-size">
        <label htmlFor="ml">Male:</label>
        <input type="radio" id="ml" name="gender" /> &emsp;
        <label htmlFor="fml">Female:</label>
        <input type="radio" id="fml" name="gender" /> &emsp;
        <label htmlFor="oth" >Other:</label>
        <input type="radio" name="gender" id="oth"  />
        </div>
        <br />
        <button className="cd-size" style={{width:"30vh", height:"7vh"}}>Let's Go</button>
         </fieldset></form>
        </div>

}


 export default Login;
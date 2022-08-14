import './Login.css';
import acmlogo from "../../imgs/acmlogo.png";

function Logins() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={acmlogo} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div className = "inputs">
             
             <input type="email" placeholder="Email id" className="name"/>
           </div>
           <div className="second-input inputs">
             
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="/">Forgot password?</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Logins;
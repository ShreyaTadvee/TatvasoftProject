import React from "react";

function Login(){
    return(
    <> 
    <div className="container" style={{textAlign: "center"}}>
    <p> Home <i class="fa-thin fa-greater-than"></i> Login </p>
    
<h1> Login or Create an Account </h1>
</div>
<div class="row">
    <div class="col-sm-6">
   
    <b>New Customer</b>
    
    <hr></hr>
    <p>Registration is free and easy</p>
<ul>
<li>
    Faster checkout.
    </li>
    <li>
    Save multiple shopping addresses.
    </li>
    <li>
    View and track orders and more.
</li>

</ul>
<button className="btn btn-outline-danger" type="submit">Creact an Account</button>



        </div>
        <div class="col-sm-6">
            <b>Registered Customer</b>
            <hr></hr>
            
            <p>If you have an account with us ,please Login.</p>
            <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
  <button className="btn btn-outline-danger my-2" type="submit">Login</button>
</div>
</div>
</div>
</>
);
}

export default Login;



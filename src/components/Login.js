// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Login({ email, password, setLoggedIn, setNavigate }) {

//     const [emailval, setemailval] = useState("");
//     const [passval, setpassval] = useState("");
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (emailval == email && passval == password && emailval) {
//             setLoggedIn(true)
//         }

//     }
//     return (
//         <div id='loginPage'>
//             <h1 id='login-tag'>Login</h1>

//             <form onSubmit={handleSubmit}>

//                 <h3>Email</h3>
//                 <input placeholder='abc@gmail.com' type='email' id='login-email'
//                     value={emailval} onChange={(e) => setemailval(e.target.value)} />

//                 <h3>Password</h3>
//                 <input placeholder='Enter password' type='password' id='login-password'
//                     value={passval} onChange={(e) => setpassval(e.target.value)} /><br />
//                 <button id='login-submit' type='submit'>Login</button>
//             </form>
//             <br />
//             Don't have an account ?
//             <button id='login-to-register' onClick={() => setNavigate(false)}><Link to="/Register">Register here ..</Link></button>


//         </div>
//     )
// }
// export default Login;

import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation or API request here

    // Assuming login is successful
    handleLogin();
  };

  return (
    <div id="loginPage">
      <h1 id="login-tag">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" id="login-submit">
          Login
        </button>
      </form>
      <button id="login-to-register" onClick={() => window.location.href = '/register'}>
        Register
      </button>
    </div>
  );
};

export default Login;

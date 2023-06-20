// import React,{useState} from 'react'
// import '../styles/App.css';
// import { BrowserRouter as Router ,Route,Switch ,Redirect,NavLink,Link} from 'react-router-dom' ;
// import Login from './Login.js'
// import Register from './Register.js'
// import Dashboard from './Dashboard';


// const App = () => {

// //code for  Route path="/" , Route path="/dashboard" 

//   const [loggedIn,setLoggedIn]=useState(false)
//  const [navigate,setNavigate]=useState(false)
//   const[email,setEmail]=useState('')
//   const[password,setPassword]=useState('')
//   return (

// <div id='App'>
//   <Router>
    
//     <Switch>
//       <Route path="/" exact>
//      <Login email={email} password={password} setLoggedIn={setLoggedIn} setNavigate={setNavigate}/>
//       </Route>
      
//       <Route path="/Register" exact>
//         {navigate? <Redirect to="/" /> : <Register  emailChange={setEmail}  passwordChange={setPassword} setNavigate={setNavigate} />}
//       </Route>

//       <Route path="/dashboard" exact>
//        <Dashboard setLoggedIn={setLoggedIn}/> 
//       </Route>
//     </Switch>
//   </Router>
// </div>
//   )
// }


// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <Login handleLogin={handleLogin} />
          )}
        </Route>
        <Route path="/register">
          {loggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <Register handleLogin={handleLogin} />
          )}
        </Route>
        <Route path="/dashboard">
          {loggedIn ? (
            <Dashboard handleLogout={handleLogout} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

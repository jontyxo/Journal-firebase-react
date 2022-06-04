
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { useState } from 'react';
import {signOut} from "firebase/auth";//signout is used to signout
import {auth} from "./firebase-config"//variable that we create and exported

function App() {
const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
const signOutUser=()=>{
signOut(auth).then(()=>{
  localStorage.clear();//delete the isAuth's value
  setIsAuth(false);
  window.location.pathname("/login");//we haven't used useNavigate here because we cant use any component from react-router-dom outside the router component.
})
}
  return (

<Router>
    <nav>
      <Link to="/">Home</Link>
      {!isAuth ? <Link to="/login">Login</Link> : 
      <>

      <Link to="/createpost">Create Post</Link>
      
      <button className="logout" onClick={signOutUser}>Log Out</button>
      </>
      }

    </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />

      </Routes>
    </Router>
  );
}

export default App;

import {  Link, NavLink } from 'react-router-dom';
import '../style.scss';

export const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Private Chat.</span>
            <span className="title">Register</span>
            <form action="">
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>         
                <button>Login</button>
            </form>
            <p>don't have an account?<Link to="/">sign up</Link></p>
        </div>
    </div>
  )
}

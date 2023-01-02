import { Link } from 'react-router-dom';
import '../style.scss';

export const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Private Chat.</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" id='file'/>
                <button>Sign Up</button>
            </form>
            <p>Already have an account?<Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

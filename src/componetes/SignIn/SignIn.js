import React, { useContext } from 'react';
import './SignIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
const SignIn = () => {
        const {signIn} = useContext(AuthContext)
     const navigate = useNavigate()
   const location = useLocation();
   const from = location.state?.from?.pathname || '/'
        const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then (result => {
                const user = result.user
                console.log(user);
                form.reset()
                navigate(from,{replace:true})
        }).catch(error => console.error(error));

        }
        return (
                <div className='form-container'>
                     <h2 className='form-title'>login</h2>   
                     <form onSubmit={
                        handleSignIn
                     }>
                <div className='form-control'>
                <label htmlFor="email">email</label>
                <input type="email"name='email' required />
                </div>

                <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password"name='password' required />
                </div>
                <button className='btn-submit' type='submit' value='signin'> Login</button>
                     </form>
                     <p>new to ema john <Link to="/signup"> create a new account</Link></p>
                </div>
        );
};

export default SignIn;
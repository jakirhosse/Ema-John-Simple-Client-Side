import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
const SignUp = () => {
   const [error , setError ] = useState(null)

   const {createUser}= useContext(AuthContext)

        const handleSubmit = (event) => {
                event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;

      if(password.length > 6) {
  console.log('password must be 6 charter');
  return;
      }
      if(password !== confirm) {
        console.log(setError,'your password not match');
        return;
      }

      createUser(email ,password )
         .then(result => {
          const user = result.user
          console.log(user)
          form.reset()
         })
         .catch(error => console.error(error))
      
        }
        return (
                <div className='form-container'>
                <h2 className='form-title'>register</h2>   
                <form onSubmit={handleSubmit}>

                <div className='form-control'>
           <label htmlFor="name">Name</label>
           <input type="name"name='name' required />
           </div>

           <div className='form-control'>
           <label htmlFor="email">email</label>
           <input type="email"name='email' required />
           </div>

           <div className='form-control'>
           <label htmlFor="password">Password</label>
           <input type="password"name='password' required />
           </div>
           <div className='form-control'>
           <label htmlFor="confirm"> confirm Password</label>
           <input type="confirm"name='confirm' required />
           </div>
           <button className='btn-submit' type='submit' value='sign Up'>register</button>
                </form>
                <p>Already have a account!! <Link to="/signin">register </Link></p>
                <p className='text-color'>error {error}</p>
           </div>
        );
};

export default SignUp;
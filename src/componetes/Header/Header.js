import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import  { AuthContext } from '../Context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
        const {user,logOut} = useContext(AuthContext)
        return (
                <nav className='header'>
                   <img src={logo} alt="" />  
                   <div>
                        <Link to="/"> shop</Link>
                        <Link to="/order">order</Link>
                        <Link to="/inventory">inventory</Link>
                        <Link to="/about">about</Link>
                        {
                                user?.uid ?
                                <button className='btn-log' onClick={logOut}>logout</button>
                                :
                                <>
                                <Link to="/signin">Login</Link>
                                <Link to="/signup">register</Link>
                                </>
                                
                        }
                        
                   </div>
                </nav>
        );
}; 

export default Header;
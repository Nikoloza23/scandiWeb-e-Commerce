import React from 'react';
import Icon from '../../Icon/Vector.svg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
   
  const state = useSelector((state) => state)
    
  return (
    <div className="row">
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 shadow-sm">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to='/products'>
                MEN
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to='/products'>
                WOMEN 
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to='/products'>
                KID 
              </NavLink>
            </li>
          </ul>


          <div className='buttons'>
              <a to='/registrer' className="text-decoration-none btn-outline-dark ms-2">
              <i className=""></i>$</a>  

              <NavLink to='/cart' className="text-decoration-none btn-outline-dark ms-2">
              <img  src={Icon} alt='/' ></img>{state.length}
              </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}


export default Navbar;
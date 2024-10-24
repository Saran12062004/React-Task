import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Task</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/ListAndKeys' class="nav-link">ListAndKeys</Link>
                            </li>
                            <li className='nav-item'>
                              <Link to='/BackroundButton' className='nav-link'>Button</Link>
                            </li>
                            <li className='nav-item'>
                              <Link to='/Contact' className='nav-link'>Contact Us</Link>
                             </li>
                             <li className='nav-item'>
                              <Link to='/Timer' className='nav-link'>Timer</Link>
                             </li>
                             <li className='nav-item'>
                              <Link to='/Todo' className='nav-link'>Todo</Link>
                             </li>
                             <li className='nav-item'>
                              <Link to='/Counter' className='nav-link'>Counter</Link>
                             </li>
                             <li className='nav-item'>
                              <Link to='/Pagination' className='nav-link'>Pagination</Link>
                             </li>
                             <li className='nav-item'>
                              <Link to='/Usereduce' className='nav-link'>Usereduce</Link>
                             </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar

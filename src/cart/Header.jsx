import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="row nav">
            <div className="col">
                <div className="logo">
                    <h1><Link className='text-light' style={{"textDecoration":"none"}} to='/'>Cart</Link></h1>
                </div>
                <div className="search-bar">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                </div>

                <div className="cart-section">

                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li className='dropdown-item'>
                            Action
                        </li>
                        <li className='dropdown-item'>Action</li>
                        <li className='dropdown-item'>Action</li>
                        <li className='dropdown-item cart-btn'><Link className='btn btn-primary' to='cart'>Go To Cart</Link></li>
                        
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Header
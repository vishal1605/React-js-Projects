import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="row nav">
            <div className="col">
                <div className="logo">
                    <h1><Link className='text-light' style={{ "textDecoration": "none" }} to='/'>Cart</Link></h1>
                </div>
                <div className="search-bar">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                </div>

                <div className="cart-section">
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-cart-plus"></i>
                            <span>10</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end text-center" style={{minWidth:250+"px"}} >
                            <li className='mb-2'>
                                <div className="dropdown-item cart-products">
                                    <div className="img">
                                        ...
                                    </div>
                                    <div className="desc me-4 ms-1">
                                        <h6 className='m-0'>hijn</h6>
                                    </div>
                                    <div className="btn-action">
                                        <button className="btn btn-danger btn-sm"><i className="fa-solid fa-trash"></i></button>
                                    </div>

                                </div>
                            </li>
                            
                            <li><Link className="btn btn-primary" style={{"width":"200px"}} to="/cart">Go To Cart</Link></li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
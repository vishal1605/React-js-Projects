import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar(params) {

    const [newObj] = useState([]);
    const [person,setPerson] = useState({});
    const [nav, setNav] = useState(false);
    const [count, setCount] = useState(0);

    let navigate = useNavigate();

    let args = JSON.parse(localStorage.getItem('users'));
    if (args === null) {
        localStorage.setItem('users', JSON.stringify(newObj));
    } else {

    }
    useEffect(() => {

        setCount(pre=> pre+1);
    }, [params.sendCount]);

    useEffect(() => {

        
        let user = JSON.parse(localStorage.getItem('user'));
        if (user !== null) {
            setNav(true);
            setPerson({...user});

        }else{
            setNav(false);
        }
    }, [count]);

    return (
        <div className="row nav-bar">
            <div className="col">
                <div className="logo">
                    <h1 className='text-light'>React-Login</h1>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='search data' />

                </div>
                {
                    (nav)? 
                    <div className="add-btn">
                        <span className='text-light'>{person.email}</span>
                    <Link className='btn btn-danger' onClick={(e)=>{
                        // e.preventDefault();
                        localStorage.removeItem('user');
                        setCount(pre=>pre+2);
                        
                      }} to='/logout'>Logout</Link>
                      </div>
                       :
                    <div className="add-btn">
                        <Link to="/" className='btn btn-light text-dark mx-1'>Register</Link>
                        <Link to="/login" className='btn btn-primary'>Login</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
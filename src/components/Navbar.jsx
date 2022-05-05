import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar(param) {
    let args = JSON.parse(localStorage.getItem('data'));
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([...args]);
    const [newObj, setNewObj] = useState([]);


    const searchHandle = (e) => {
        // console.log(result);
        setSearch(e.target.value);
        if (e.target.value === '') {
            param.searchResult(newObj);


        } else {
            const newData = result.filter(obj => {
                return obj.userName.toLowerCase().includes(e.target.value.toLowerCase()) || obj.email.toLowerCase().includes(e.target.value.toLowerCase());
            });

            // setNewObj(newData);
            param.searchResult(newData);
        }


    }

    return (
        <div className="row nav-bar">
            <div className="col">
                <div className="logo">
                    <h1 className='text-light'>React-CRUD</h1>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='search data' onChange={searchHandle} value={search} />

                </div>
                <div className="add-btn">
                    <Link to="/" className='btn btn-light text-dark mx-1'>Home</Link>
                    <Link to="/add" className='btn btn-primary'>Add data</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
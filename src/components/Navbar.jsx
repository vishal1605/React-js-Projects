import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar(param) {
    let args = JSON.parse(localStorage.getItem('data'));

    // const [search, setSearch] = useState('');
    const [result] = useState(args);
    const [newObj] = useState([]);
    if (args === null) {
        localStorage.setItem('data', JSON.stringify(newObj));
    } else {

    }


    const searchHandle = (e) => {
        // console.log(result);
        let newData = [];
        if (e.target.value === '') {

        } else {
            newData = args.filter(obj => {
                return obj.userName.toLowerCase().includes(e.target.value.toLowerCase());
            });


        }
        param.searchResult(newData);


    }

    return (
        <div className="row nav-bar">
            <div className="col">
                <div className="logo">
                    <h1 className='text-light'>React-CRUD</h1>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='search data' onChange={searchHandle} />

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
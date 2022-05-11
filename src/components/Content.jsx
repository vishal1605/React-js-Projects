import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Pagination from './Pagination';

function Content(param) {
  // console.log(param.searchData);

  let value = useParams();
  // console.log(value.page);
  
  const [obj, setObj] = useState([]);
  const navigate = useNavigate();
  const [count, seCount] = useState(0);
  const [page, setPage] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [currentPage, setCurrentPage] = useState(value.page);

  useEffect(() => {
    let args = JSON.parse(localStorage.getItem('data'));
    let total = args.length;
    // console.log(total);
    let num = total / 3;
    if (total % 2 == 0) {
      // console.log(num);
      setPage(Math.ceil(num));
    } else {
      let val = Math.ceil(num);
      // console.log(val);
      setPage(val);

    }
    if (end == 4) {
      const newArray = args.slice(start, end);
      setObj(newArray);
    } else {
      // console.log(end);
      const newArray = args.slice(end - 3, end);
      setObj(newArray);
    }

    // setObj(newArray);

    // console.log(start, end);
    setEnd(3);

  }, [count]);

  const deleteOperation = (e) => {
    let args = JSON.parse(localStorage.getItem('data'));
    
    const person = args.find(obj => obj.id == e.target.value)
    const index = args.indexOf(person);
    args.splice(index, 1);
    // console.log(args);
    localStorage.setItem('data', JSON.stringify(args));

    navigate('/');

  }

  const clickedPage = (param) => {
    setCurrentPage(param);

  }

  useEffect(() => {
    // console.log("Pagination useEffect", value.page);
    if (value.page == 1) {
      setStart(0);
    } else {
      setStart(end);

    }
    let last = end * value.page;

    setEnd(last);
    seCount(pre => pre + 1);

  }, [value.page])


  return (
    <div className="row">
      <div className="col-12 m-auto">
        <h1>{`All data`}</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">userName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {(param.searchData.length==0)?
            
            obj.map(data => {
              const { id, userName, email, password } = data;
              return (
                <tr key={id}>
                  <th scope="row" >{id}</th>
                  <td>{userName}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <Link to='/' className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></Link>
                    <button className="btn btn-danger mx-1" value={id} onClick={deleteOperation}><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              )
            }): param.searchData.map(para => {
              const { id, userName, email, password } = para;
              return (
                <tr key={id}>
                  <th scope="row" >{id}</th>
                  <td>{userName}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <Link to='/' className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></Link>
                    <button className="btn btn-danger mx-1" value={id} onClick={deleteOperation}><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
      <Pagination pageCount={page} getPages={clickedPage} currentPage={currentPage} displaySearch={param.searchData.length} mainObj={obj}/>
    </div>
  )
}

export default Content
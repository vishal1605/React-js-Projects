import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Register() {

    // document.title('Register');
    let args = JSON.parse(localStorage.getItem('users'));

    const [exist] = useState([...args]);

    const [input, setInput] = useState({
        id: 0,
        userName: "",
        email: "",
        password: ""
    });

    const [notice, setNotice] = useState(false);
    const [name, checkName] = useState(false);
    const [loader, setLoader] = useState(false);
    const [email, checkEmail] = useState(false);
    const [data, setData] = useState(exist);
    // const navigate = useNavigate();

    const handleName = (e) => {
        const cond = data.some(obj => {
            return obj[e.target.name].toLowerCase() === e.target.value.toLowerCase();
        });
        // console.log(cond);
        checkName(cond);
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handleEmail = (e) => {
        const cond = data.some(obj => {
            return obj[e.target.name].toLowerCase() === e.target.value.toLowerCase();
        });
        // console.log(cond);
        checkEmail(cond);

        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handlePassword = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const btnClicked = () => {
        const randomId = Math.floor(Math.random() * 100) + 1;

        setInput({ ...input, id: randomId });

    }

    const submitForm = (e) => {
        e.preventDefault();

        setLoader(true);
        setTimeout(() => {
            let args = JSON.parse(localStorage.getItem('users'));
            if (args === null) {
                setData([...data, input]);



            } else {
                // console.log("args not empity");
                setData([...data, input]);


            }
            setLoader(false);
            // setTimeout(() => navigate('/'), 300)
            setNotice(true);
            setInterval(() => {
                setNotice(false);
            }, 7000);
        }, 3000)


    }
    useEffect(() => {
        // console.log(data);
        localStorage.setItem('users', JSON.stringify(data));
        setInput({
            id: 0,
            userName: "",
            email: "",
            password: ""
        })
       

    }, [data])
    return (
        <div className="row register mt-2">
            <div className="col-sm-7 col-md-5 col-lg-5 col-9 m-auto pb-2">
                {notice &&
                    <div className="alert alert-success p-0 text-center">
                        <h5>successfully register</h5>
                    </div>
                }
                <h1 className='text-center'>Register</h1>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label className="form-label">UserName</label>
                        <input type="text" className="form-control" name="userName"
                            value={input.userName} onChange={handleName} required />
                        <small className='text-danger'>{name && 'This Username already used'}</small>


                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={input.email}
                            onChange={handleEmail} required />
                        <small className='text-danger'>{email && 'This email already used'}</small>


                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"
                            value={input.password} onChange={handlePassword} required />
                    </div>

                    <button type="submit" className={`btn btn-primary ${(name && 'disable') || (email && 'disable')}`} onClick={btnClicked}>Register</button>
                </form>
                <div className="already-user mt-3 text-center">
                    <h6>already user <Link to={'/login'}>login</Link></h6>

                </div>

                {loader &&
                    <div className="d-flex justify-content-center loader">
                        <h4>please wait...</h4>
                        <div className="spinner-border spinner" role="status">
                            <span className="visually-hidden">Loading...</span>

                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Register
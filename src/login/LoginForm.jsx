import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginForm(param) {
    let args = JSON.parse(localStorage.getItem('users'));

    // const [exist, setExist] = useState(args);

    const [input, setInput] = useState({
        userName: "",
        password: ""
    });


    // const [loader, setLoader] = useState(false);

    const [data] = useState([...args]);
    const [notice, setNotice] = useState(false);
    const [count, setCount] = useState(0);
    let navigate = useNavigate();

    const handleName = (e) => {

        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handlePassword = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const btnClicked = () => {
        console.log("Button clicked");


    }

    const loginForm = (e) => {
        e.preventDefault();
        console.log("login");
        console.log(input);
        console.log(data);
        const obj = data.find(obj => {
            return (obj.userName === input.userName) && (obj.password === input.password);
        });
        if (obj === undefined) {
            setNotice(true);
        }else{
            setCount(pre=>pre+1);
            param.getCount(count);
            localStorage.setItem('user', JSON.stringify(obj));
            navigate('/feeds');

        }
        setInput({

            userName: "",
            password: ""
        })



    }
    // useEffect(() => {

    //     // localStorage.setItem('data', JSON.stringify(data));
    //     setInput({

    //         userName: "",
    //         password: ""
    //     })

    // }, [])
    return (
        <div className="row register mt-2">
            <div className="col-sm-7 col-md-5 col-lg-5 col-9 m-auto pb-2">
                {notice &&
                    <div className="alert alert-danger p-0 text-center">
                        <h5>invalid credential try again</h5>
                    </div>
                }
                <h1 className='text-center'>Login</h1>
                <form onSubmit={loginForm}>
                    <div className="mb-3">
                        <label className="form-label">UserName</label>
                        <input type="text" className="form-control" name="userName"
                            value={input.userName} onChange={handleName} required />



                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"
                            value={input.password} onChange={handlePassword} required />
                    </div>

                    <button type="submit" className='btn btn-primary' onClick={btnClicked}>login</button>
                </form>


            </div>
        </div>
    )
}

export default LoginForm
import React, { useEffect, useState } from "react";
import CartContext from "./cartContext";

const GlobalCart = (props)=>{
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [allData, setAllData] = useState({
        myData: data,
        myNumber:0
    });


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then(data1 => {
            console.log(data1);
            setData(data1);
            setAllData({
                myData:data1,
                myNumber:count+1
            })
        })
        .catch(err=>console.log(err))

    }, []);

    return(
        <CartContext.Provider value={allData}>
            {props.children}
        </CartContext.Provider>
    )

}

export default GlobalCart;
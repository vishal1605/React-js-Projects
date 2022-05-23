import React, { createContext, useEffect, useState } from "react";
// import CartContext from "./cartContext";

const CartContext = createContext();

const GlobalCart = (props)=>{
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);

    function addCart(a){
        const singleProduct = {...a, quantity:1};
        setCart(pre=>([...pre,singleProduct])); 
        
    }
    function removeFromCart(a){
        const product = cart.find(obj=>obj.id===a);
        const index = cart.indexOf(product);
        console.log(index);
        cart.splice(index,1);
        setCart([...cart]);
        
        
    }


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then(data1 => {
            console.log(data1);
            setData(data1);
            setCount(pre=>pre+1);
        })
        .catch(err=>console.log(err))

    }, []);

    function highToLow(){
        const newData = [...data];
        const highValue = newData.sort((a,b)=>b.price-a.price);
        console.log(highValue);
        // setData(highValue);
        // setCount(pre=>pre+1);
    }

    function lowToHigh(){
        // const highValue = data.sort((a,b)=>b.price-a.price);
        console.log("ascending");
    }

    return(
        <CartContext.Provider value={{data, addCart, removeFromCart, highToLow, lowToHigh, count, cart}}>
            {props.children}
        </CartContext.Provider>
    )

}

export {GlobalCart, CartContext };
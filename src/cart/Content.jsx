import React, { useContext, useEffect, useState } from 'react'
import cartContext from './context/cartContext'

function Content() {

    const [loading, setLoading] = useState(true);

    const data = useContext(cartContext);
    useEffect(() => {
        console.log(data);
    }, [data.myNumber]);
    return (
        <div className="col-sm-9 col-12 content">
            <div className="row cards">
                {loading &&
                    <div className="col-12 loader">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <h3 className='wait'>Please wait...</h3>
                    </div>
                }

                {data.myData.map(product => {
                    const { id, image, title, price } = product;
                    return (
                        <div className="col-sm-12 col-md-4 col-lg-3 mb-2" key={id}>
                            <div className="card">
                                <img src={image} className="card-img-top" onLoad={()=> setLoading(false)} alt="..." style={{ height: 280 + "px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{`$ ${price}`}</p>
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Content
import React from 'react'

function Checkout() {
  return (
    <div className="col-sm-3 col-12 order-sm-2 order-1 total mt-2 text-light">
        <h3>SubTotal () items</h3>
        <h5 className='mb-5'>Total : 255</h5>
        <button className="btn btn-warning w-100 mb-2">Checkout</button>
    </div>
  )
}

export default Checkout
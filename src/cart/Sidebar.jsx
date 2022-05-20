import React from 'react'

function Sidebar() {
    return (
        <div className="col-sm-3 col-12 side-bar">
            <h5 className='pt-2'>Filter</h5>
            <ul className='list bg-dark py-2'>
                <form >
                    <li><input type="radio" name="group1" id="high-to-low" />&nbsp;<label htmlFor="high-to-low">high-to-low</label></li>
                    <li><input type="radio" name="group1" id="low-to-high" />&nbsp;<label htmlFor="low-to-high">low-to-high</label></li><br/>
                    <button className='btn btn-light mt-3' type="reset">Clear</button>

                </form>

            </ul>
        </div>
    )
}

export default Sidebar
import React from 'react'
import { Link } from 'react-router-dom';

function Pagination(props) {
    // console.log(props.displaySearch);

    let totalPages = [];
    for (let i = 1; i <= props.pageCount; i++) {
        totalPages.push(i);
    }

    const clickNumber = (e) => {
        props.getPages(e);
    }
    console.log(totalPages.length);
    return (
        <div className="row pagination mt-2" style={(props.displaySearch==0 )?{}:{display:"none"}}>
            {totalPages.length!=0 &&
            <div className="col-7 m-auto">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" style={props.currentPage != 1 ? { display: 'block' } : { display: 'none' }}><Link to={`/${Number(props.currentPage) - 1}`} className="page-link" onClick={() => clickNumber(Number(props.currentPage) - 1)}>previous</Link></li>
                    {totalPages.map(pages => {
                        return <li key={pages} className={`page-item ${(props.currentPage == pages) && `active`}`}><Link to={`/${pages}`} className="page-link" onClick={() => clickNumber(pages)} >{pages}</Link></li>
                    })}

                    <li className="page-item" style={props.currentPage == props.pageCount ? { display: 'none' } : { display: 'block' }}><Link to={`/${Number(props.currentPage) + 1}`} className="page-link" onClick={() => clickNumber(Number(props.currentPage) + 1)}>next</Link></li>
                </ul>
            </nav>
        </div>}
        </div>
    )
}

export default Pagination
import React from "react";
// import "./pagination.css"

export default function Pagination ({dogsOnPage, allDogs, page}) {
    const pageNumbers = []

    for(let i = 0; i<Math.ceil(allDogs/dogsOnPage); i++) {
        pageNumbers.push(i+1)
    }

    return(
        <div>
            <ul className="container-pagination">
                {pageNumbers?.map(n => (
                    <button
                        className="button-pagination"
                        key={n}
                        onClick={() => page(n)}
                    >
                    {n}
                </button>
            ))}
            </ul>    
        </div>
    )
}
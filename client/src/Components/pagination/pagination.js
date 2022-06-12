import React from "react";
import "./pagination.css";

export default function Pagination({ dogsOnPage, allDogs, page }) {
  const pageNumbers = [];
  const totalPages = Math.ceil(allDogs.length / dogsOnPage);
  

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i + 1);  }

  return (
    <div>
      <ul className="container-pagination">
        {pageNumbers?.map((n) => (
          <button className="button-pagination" key={n} onClick={() => page(n)}>
            {n}
          </button>
        ))}
      </ul>
    </div>
  );
}

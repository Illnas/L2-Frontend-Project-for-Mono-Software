import React from "react";

const Pagination = ({ itemsPerPage, paginate, item, filter }) => {
  const pageNumbers = [];

  const searchedItems = item.map(e => e.name).filter(f => f.indexOf(filter.toLowerCase()) > -1 ||
  filter === "" ||
  f.indexOf(filter) > -1 ) 

  for (let i = 1; i <= Math.ceil(searchedItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

import React from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/style.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="div">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="#">&laquo;</a>
            <Link onClick={() => paginate(number)} className="page-link">
              {number}
            </Link>
            <a href="#">&raquo;</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

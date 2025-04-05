import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(i => i + 1);

  return (
    <div className="d-flex justify-content-center mt-3">
      <ul className="pagination">
        {pages.map(num => (
          <li key={num} className={`page-item ${num === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(num)}>
              {num}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

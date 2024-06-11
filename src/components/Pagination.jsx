import React, { useState } from 'react';
import './components-styles.css';

const Pagination = ({pagination, navigate, goToPage, handlePaginationItemsPerPageChange}) => {

  // console.log(pagination);

  // console.log(pagination.currentPage);

  return (
    <div className="pagination">
      <button
        id="back"
        onClick={() => navigate(-1)}
        disabled={pagination.currentPage === 1}
      >
        &lt;
      </button>
      {[...Array(pagination.totalPages)].map((_, i) => (
        <button
          key={i + 1}
          id={`page${i + 1}`}
          className={pagination.currentPage === i + 1 ? 'active' : ''}
          onClick={() => goToPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        id="next"
        onClick={() => navigate(1)}
        disabled={pagination.currentPage === pagination.totalPages}
      >
        &gt;
      </button>
      <select
        id="itemsPerPage"
        value={pagination.itemsPerPage}
        onChange={handlePaginationItemsPerPageChange}
      >
        <option value="5">5/Page</option>
        <option value="10">10/Page</option>
        <option value="15">15/Page</option>
        <option value="20">20/Page</option>
      </select>
    </div>
  );
};

export default Pagination;

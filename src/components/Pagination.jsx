import React, { useState } from 'react';
import './components-styles.css';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const navigate = (direction) => {
    setCurrentPage((prevPage) => prevPage + direction);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    console.log(`${event.target.value} items per page selected.`);
    // Add your logic here to handle items per page
  };

  return (
    <div className="pagination">
      <button
        id="back"
        onClick={() => navigate(-1)}
        disabled={currentPage === 1}
      >
         &lt;
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          id={`page${i + 1}`}
          className={currentPage === i + 1 ? 'active' : ''}
          onClick={() => goToPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        id="next"
        onClick={() => navigate(1)}
        disabled={currentPage === totalPages}
      >
         &gt;
      </button>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
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

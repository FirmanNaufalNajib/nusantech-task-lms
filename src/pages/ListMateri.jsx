import React from 'react';
import Navbar from '../components/Navbar';
import CardMateri from '../components/CardMateri';
import Footer from '../components/Footer';
import FilterMateri from '../components/FilterMateri';
import Pagination from '../components/Pagination';
import useGetMateri from '../hooks/hooksGetMateri';
import './page-style.css';

const ListMateri = () => {
  const {
    fullMateri,
    materi,
    loading,
    error,
    handleFilterChange,
    pagination,
    navigate,
    goToPage,
    handlePaginationItemsPerPageChange,
    filterItems1
  } = useGetMateri();

  console.log(fullMateri);

  return (
    <div className='materi-container container-fluid'>
      <header className='materi-header'>
        <Navbar />
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className='error'>{error}</p>
      ) : (
        <div className='materi-page'>
          <FilterMateri 
          handleFilterChange={handleFilterChange} 
          filterItems1={filterItems1}
          />
          <div className='materi-page-number container'>
            <div className='materi-page-list row'>
              {materi.map((item, index) => (
                <CardMateri
                  key={index} // Ideally, you should use a unique identifier from the item object
                  title={item.title}
                  description={item.description}
                  level={item.level}
                  duration={item.duration}
                  totalParticipant={item.totalParticipant}
                />
              ))}
            </div>
            <Pagination
              pagination={pagination}
              navigate={navigate}
              goToPage={goToPage}
              handlePaginationItemsPerPageChange={handlePaginationItemsPerPageChange}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ListMateri;

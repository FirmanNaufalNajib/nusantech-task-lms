
import axios from 'axios';
import { useState, useEffect } from 'react';

const useGetMateri = () => {
  const [fullMateri, setFullMateri] = useState([]);
  const [materi, setMateri] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [pagination, setPagination] = useState({
    itemsPerPage: 10,
    totalPages: 5,
    currentPage: 1,
  });

  const [filters, setFilters] = useState({
    allLevel: false,
    beginner: false,
    intermediate: false,
    advance: false,
  });

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://api-dev.nusalms.com/v1/course',
          {
            headers: {
              Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3NjQ0YzFiLTBhZWEtNDAzNi1iMWVlLTFmZjVkM2JhZjhlNCIsImZ1bGxOYW1lIjoiRGFuaSBUZXN0aW5nMTExIiwidXNlcm5hbWUiOiJkYW5pdGVzdGluZzEyMyIsImVtYWlsIjoiaW1waWNoaXNtYXkxNEBnbWFpbC5jb20iLCJSb2xlSWQiOiI0ZjFlZmQ0NC05OTE5LTQ0YTgtODljYS0zMjMyNGM4MTA0OTYiLCJEaXZpc2lvbklkIjoiZDFmNTRhODItMzhhYS00ZGM3LWJlYzctOTIwYjQyNTU0M2IwIiwiQ29tcGFueUlkIjoiNzg3NGYwOGItMjVlMS00N2M3LWEzYTktNDhkMzEyOGJlOWRkIiwic3RhdHVzIjoiQWN0aXZlZCIsImlzRmlyc3RUaW1lIjpmYWxzZSwiaWF0IjoxNzE3NTYxMDExLCJleHAiOjIzMjIzNjEwMTF9.3xkY_Avvv4oBbAKknjj6bX9n_mxf9z8eYtxtkJk1mJk'
            }
          }
        );
        setFullMateri(response.data.data);
        
        // setPagination((prevPagination) => ({
        //   ...prevPagination,
        //   totalPages: Math.ceil(response.data.data.length / prevPagination.itemsPerPage), //
        // }));
        setMateri(response.data.data.slice(0, pagination.itemsPerPage));
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMateri();
  }, []);

  useEffect(() => {
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    setMateri(fullMateri.slice(startIndex, endIndex));
  }, [pagination.currentPage, pagination.itemsPerPage, fullMateri]);

  useEffect(() => {
    let filtered = fullMateri;
    if (!filters.allLevel) {
      filtered = fullMateri.filter(materi => {
        if (filters.beginner && materi.level === 'Beginner') return true;
        if (filters.intermediate && materi.level === 'Intermediate') return true;
        if (filters.advance && materi.level === 'Advance') return true;
        return false;
      });
    }
     setPagination((prevPagination) => ({
       ...prevPagination,
        currentPage: 1, // Reset to first page when items per page changes,
     }));
    setMateri(filtered.slice(0, pagination.itemsPerPage));
  }, [filters, fullMateri, pagination.itemsPerPage]);

  console.log(materi)

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const navigate = (direction) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: prevPagination.currentPage + direction,
    }));
  };

  const goToPage = (page) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: page,
    }));
  };

  const handlePaginationItemsPerPageChange = (event) => {
    const itemsPerPage = parseInt(event.target.value);
    setPagination((prevPagination) => ({
      ...prevPagination,
      itemsPerPage: itemsPerPage,
      totalPages: 5,
      currentPage: 1, // Reset to first page when items per page changes
    }));
    console.log(`${itemsPerPage} items per page selected.`);
  };

  // const filterItems1 = [...new Set(materi.map((val) => val.Categories).map((val) => val.name))]
  // console.log(filterItems1)

  return {
    materi,
    loading,
    error,
    handleFilterChange,
    pagination,
    navigate,
    goToPage,
    handlePaginationItemsPerPageChange,
    //filterItems1
  };
};

export default useGetMateri;

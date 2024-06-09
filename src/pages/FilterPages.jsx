import React from 'react';
import CardMateri from '../components/CardMateri';
import useGetMateri from '../hooks/hooksGetMateri';
import FilterMateri from '../components/FilterMateri';


const FilterPages = () => {

  const {materi, loading, error} = useGetMateri()
  //const filteredMateri = [...new Set(materi.map((item) => item.level))]
;
  return (
    <div className="materi-list">
      <FilterMateri />
      {materi.map((materi, index) => (
        <CardMateri 
          key={index}
          level={materi.level}
          title={materi.title}
          description={materi.description}
          totalParticipant={materi.totalParticipant}
          duration={materi.duration}
        />
      ))}
    </div>
  );
}

export default FilterPages;
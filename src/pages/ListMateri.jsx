import Navbar from '../components/Navbar'
import CardMateri from '../components/CardMateri'
import Footer from '../components/Footer'
import FilterMateri from '../components/FilterMateri'
import Pagination from '../components/Pagination'
import useGetMateri from '../hooks/hooksGetMateri'
import './page-style.css'
import FilterPages from './FilterPages'
const ListMateri = () => {
  const {materi, loading, error} = useGetMateri()

  console.log(materi)

  return (
    < div className='materi-container container-fluid'>
      <header className='materi-header'>
        <Navbar/>
      </header>
    {loading ? 
    (<p>Loading...</p>) 
    : error ?
    (<p className='error'>{error}</p> )
    :
    (<div className='materi-page'>
      <FilterMateri/>
      <div className='materi-page-number'>
      <div className='materi-page-list'>
        {materi.map((materi) => (
          <CardMateri
            title={materi.title}
            description={materi.description}
            level={materi.level}
            duration={materi.duration}
            totalParticipant={materi.totalParticipant}
          />       
        ))}
      </div>
        <Pagination/>
      </div>
    </div>)}
      <Footer />
    </div>
  )
}

export default ListMateri
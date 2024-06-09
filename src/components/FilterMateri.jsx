import SVGArrowFilter from "./svgComponents/svgarrowfilter"
import useGetMateri from "../hooks/hooksGetMateri"
const FilterMateri = (props) => {
  
  const {materi, loading, error} = useGetMateri()
  const filteredMateri = [...new Set(materi.map((item) => item.level))]
  
  console.log("filteredMateri", filteredMateri)
  
  return (
    <div className="filter-container">

      <div className="filter-title">
        <h4><b>Filter</b></h4>
      </div>

    <div className="filter-level">
      <div className="filter-sub-title">
        <p className="filter-level-title"><b>Level</b></p>
        <a class="btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <SVGArrowFilter/>
       </a>
     </div>

     <form className="filter-level-form collapse" action="/submit" method="post" id="collapseExample">
        <label for="all-level">
            <input type="checkbox" id="all-level" name="level" value="all-level"/>
            <span class="custom-checkbox"></span> {filteredMateri.length}
        </label><br/>
        <label for="beginner">
            <input type="checkbox" id="beginner" name="level" value="beginner"/>
            <span class="custom-checkbox"></span> {filteredMateri[1]}
        </label><br/>
        <label for="intermediete">
            <input type="checkbox" id="intermediete" name="level" value="intermediete"/>
            <span class="custom-checkbox"></span> {filteredMateri[0]}
        </label><br/>
        <label for="advance">
            <input type="checkbox" id="advance" name="level" value="advance"/>
            <span class="custom-checkbox"></span> Advance
        </label><br/>
    </form>
    </div>

    <div className="filter-kategori">

      <div className="filter-sub-title">
        <p className="filter-kategori-title"><b>Kategori</b></p> 
        <a class="btn" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
          <SVGArrowFilter/>
       </a>
      </div>
      
      <div className="filter-category-list collapse" id="collapseExample1">
      <p>Web Programming (20)</p>
      <p>UI/UX Design (8)</p>
      <p>Data Science (4)</p>
      <p>Design Grafis (12)</p>
      <p>Database Manajemen (3)</p>
      </div>
    </div>
    </div>
  )
}

export default FilterMateri
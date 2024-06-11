import SVGArrowFilter from "./svgComponents/svgarrowfilter"

const FilterMateri = ({ handleFilterChange, filterItems1 }) => {
  return (
    <div className="filter-container">
      <div className="filter-title">
        <h4><b>Filter</b></h4>
      </div>
      <div className="filter-level">
        <div className="filter-sub-title">
          <p className="filter-level-title"><b>Level</b></p>
          <a className="btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <SVGArrowFilter/>
          </a>
        </div>
        <form className="filter-level-form collapse" action="/submit" method="post" id="collapseExample">
          <label htmlFor="all-level">
            <input type="checkbox" id="all-level" name="allLevel" onChange={handleFilterChange}/>
            <span className="custom-checkbox"></span> All Level
          </label><br/>
          <label htmlFor="beginner">
            <input type="checkbox" id="beginner" name="beginner" onChange={handleFilterChange}/>
            <span className="custom-checkbox"></span> Beginner
          </label><br/>
          <label htmlFor="intermediate">
            <input type="checkbox" id="intermediate" name="intermediate" onChange={handleFilterChange}/>
            <span className="custom-checkbox"></span> Intermediate
          </label><br/>
          <label htmlFor="advance">
            <input type="checkbox" id="advance" name="advance" onChange={handleFilterChange}/>
            <span className="custom-checkbox"></span> Advance
          </label><br/>
        </form>
      </div>
      <div className="filter-kategori">
        <div className="filter-sub-title">
          <p className="filter-kategori-title"><b>Kategori</b></p>
          <a className="btn" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
            <SVGArrowFilter/>
          </a>
        </div>
        <div className="filter-category-list collapse" id="collapseExample1">
          <a>Web Programming (20)</a>
          <a>UI/UX Design (8)</a>
          <a>Data Science (4)</a>
          <a>Design Grafis (12)</a>
          <a>Database Manajemen (3)</a>

          {/* {
          filterItems1.map(val => (
            <a key={val}>{val}</a>
          ))
          } */}
        </div>
      </div>
    </div>
  )
}

export default FilterMateri;

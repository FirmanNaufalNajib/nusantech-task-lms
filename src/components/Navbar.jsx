import React from 'react'
import SVGLogo from "./svgComponents/svglogo"
import "./components-styles.css"
import SVGCategory from './svgComponents/svgcategory'
import SVGSearchIcon from './svgComponents/svgsearchicon'
import SVGNotifIcon from './svgComponents/svgnotificon'
import SVGLangIna from './svgComponents/svglangina'
import SVGLangArrow from './svgComponents/svglangarrow'
import SVGPolygon from './svgComponents/svgpolygon'
import SVGLangEng from './svgComponents/svglangeng'
import SVGImageAccount from './svgComponents/svgimageaccount'
import SVGArrowAccount from './svgComponents/svgarrowaccount'

const Navbar = () => {

  const notif = false
  const lang = false

  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">

  <div className="container-navbar container">

    {/* Brand */}
    <a className="logo navbar-brand" href="#"><SVGLogo/></a>
    {/* toggler */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* collapsed toggler */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    {/* Navbar Preview */}
     
        {/* Navbar 1 */}
        <div class="navbar-category">
          <p>Kategori</p>       
          <a class="nav-link active" aria-current="page" href="#"><SVGCategory/></a>
        </div>
        {/* Navbar 2 */}
        <form className="navbar-search d-flex" role="search">
         <input class="form-control me-2" type="search" placeholder="Mau belajar apa?" aria-label="Search" />         <button class="btn" type="submit">
          <SVGSearchIcon/>
         </button>
        </form>
        {/* Navbar 3 */}
        <div className="navbar-pages">
         <p>Beranda</p>
         <p>Semua Course</p>
         <p>Bantuan</p>
       </div>
        {/* Navbar 4 */}
       <div className="navbar-notification">
         <i>
           <SVGNotifIcon/>
           {!notif && <div className='notif'></div>}
         </i>      
       </div>

       <div className="navbar-lang"> 
       <div className="lang-ina">
         <i>
          <SVGLangIna/>
         </i>
         <p>ID</p>
         <i>
           <SVGLangArrow/>
         </i>
       </div>
       {
       lang && 
       <div className="additional-lang">
        <div className="lang-polygon">
          <SVGPolygon/>
        </div>
        <div className="lang-eng">
        <i>
          <SVGLangEng/>
        </i>
        <p>ID</p>
        <i>
          <SVGLangArrow/>
        </i>
        </div>
       </div>
   }
   </div>
    {/* Navbar 5 */}
    <div class="nav-item dropdown">
          <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="navbar-account">
          <SVGImageAccount/>
          <SVGArrowAccount/>
          </div>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
    </div>
  </div>
    
  </div>
</nav>
</>

  )
}


export default Navbar



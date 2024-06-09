import React from 'react';
import './components-styles.css';
import SVGImageMateri from './svgComponents/svgimagemateri'
import SVGVectorLogo from './svgComponents/svgvectorlogo';
import { SVGDateIcon, SVGGroupIcon } from './svgcardicon';

const CardMateri = (props) => {

  return (
  <div className="card-materi">

    <div className="card-image-logo">
      <SVGVectorLogo/>
    </div>

    <div className='card-image'>
      <SVGImageMateri/>
    </div>
    
      <p className='materi-level'>{props.level}</p>
    
    
    <div className="card-content">
      <h5 className="card-title">{props.title}</h5>

      <p className="card-description">{props.description}</p>

      <div className='card-materi-keterangan'>
        <div className="card-materi-status">
        <i> <SVGGroupIcon/></i>
        <p>{props.totalParticipant} Anggota</p>
        </div>
        
        <div className="card-materi-status">
        <i>< SVGDateIcon/></i>
        <p>Masa Aktif : {props.duration}</p>
        </div>
      </div>

      <p className="card-materi-gimmick">Belajar software development dari mentor berpengalaman</p>
    </div>
  </div>
  )
}

export default CardMateri

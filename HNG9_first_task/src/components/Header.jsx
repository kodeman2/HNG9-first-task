import React from 'react'
import './header.css'

export default function header() {
 
  return (
    <div>
    <button className="headershare">
     <img 
     style={{width: "15px", height: "14px"}}
     src="..\images\headershare.svg" alt=""  />
    </button>
    <button className="headershare headersharemobile">
     <img 
     style={{width: "13px", height: "5px"}}
     src='..\images\dotsharemobile.svg' alt=""  />
     </button>
     <div className="description">
      <div className="share-disc">
       Share link
      </div>
     </div>

     <div className="profilecontainer">
      <div className="pr-img-container">
       <img 
       id='profile__img'
       src='..\images\profile__img.svg' alt=""  />
      
      </div>
      <p id='twitter'>Kodeman_</p>
      <p id='slack'>Olagunju Oluwakolade</p>
     </div>


    </div>
  )
}

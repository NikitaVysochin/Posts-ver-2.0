import React from 'react'
import imgSort from "../../../img/sort.png"
import imgDwn from "../../../img/down.png"
import './FormHeaderOnMainPage.scss' 

function FormHeaderOnMainPage({ setOpen, setInpFiltr, Sort }) {
  return (
    <div className="filtr">
      <div className="filtr_block"> 
        <p>введите фильтр</p>
        <input onChange={(e) => setInpFiltr(e.target.value)}></input>
      </div>
      <div className="filtr_block">  
        <div className="button-sort" onClick={() => Sort()}>
          <img src={imgSort} />
        </div>
        <div className="button-add" onClick={()=>setOpen(true)} >
          Add
        </div>
      </div>
    </div>
  )
}

export default FormHeaderOnMainPage

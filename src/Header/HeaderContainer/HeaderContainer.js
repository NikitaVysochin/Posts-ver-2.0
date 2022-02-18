import React from 'react'
import { useParams } from 'react-router-dom'
import FormHeaderOnMainPage from './Forms/FormHeaderOnMainPage'
import './HeaderContainer.scss'


function HeaderContainer({ setOpen, setInpFiltr, Sort }) {
  const { id } = useParams()

  return (
    <div className='header-container'>
      {!id && <FormHeaderOnMainPage setOpen={setOpen} setInpFiltr={setInpFiltr} Sort={Sort} />}
    </div>
  )
}

export default HeaderContainer

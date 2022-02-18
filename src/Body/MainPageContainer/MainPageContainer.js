import React from 'react'
import { useSelector } from "react-redux"
import { useState } from "react"
import HeaderContainer from '../../Header/HeaderContainer/HeaderContainer'
import Post from '../Post/Post'
import Modal from '../../Modal/ModalContainer'
import './MainPageContainer.scss'

function MainPageContainer() {
  const posts = useSelector((store) => store.post.posts);
  const [open, setOpen] = useState(false)
  const [inpFiltr, setInpFiltr] = useState("")
  const [check, setCheck] = useState(false)
  const handleClose = () => setOpen(false)

  const Sort = () => {
    posts.sort((a, b) => (a.date < b.date ? -1 : 1));
    if (check === false) posts.reverse();
    setCheck(!check);
  };

  const Filtr = (el) => {
    return (
      el.title.toLowerCase().indexOf(inpFiltr.toLowerCase()) > -1 ||
      el.news.toLowerCase().indexOf(inpFiltr.toLowerCase()) > -1
    );
  };

  return (<>
    <HeaderContainer setOpen={setOpen} setInpFiltr={setInpFiltr} Sort={Sort} />
    <Modal open={open} handleClose={handleClose} />
    <div className='main-container'>
      {posts.filter((el) => Filtr(el)).map((elem, index)=> <Post key={index+'Post'} elem={elem}  />)}
    </div>
  </>)
}

export default MainPageContainer

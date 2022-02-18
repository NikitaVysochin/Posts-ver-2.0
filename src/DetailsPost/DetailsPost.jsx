import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../Header/HeaderContainer/HeaderContainer'
import Modal from '../Modal/ModalContainer'
import Post from '../Body/Post/Post'
import './DetailsPost.scss'

function DetailsPost() {
  const { id } = useParams()
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const selectPost = (id) => (store) => store.post.posts.find((elem) => elem.id===id)
  const post = useSelector(selectPost(id))

  return (<>
    <Header />
    <Modal open={open} handleClose={handleClose} post={post} />
    <div className='details-container'>
      <Post elem={post} id={id} setOpen={setOpen} />
    </div>
  </>
  )
}

export default DetailsPost

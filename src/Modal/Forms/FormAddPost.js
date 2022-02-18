import React from 'react'
import { useEffect, useState } from "react"
import { addPostAction } from '../../Redux/Actions'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import InputList from './InputList/InputList'
import './FormAddPost.scss'

function FormAddPost({ handleClose }) {
  const [newPost, setNewPost] = useState({
    title:'',
    news: '',
    link: '',
    tags: []
  })
  const [tagInp, setTagInp] = useState("")
  const [arrTags, setArrTags] = useState([])
  const dispatch = useDispatch()

  const changeInp = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  const delTag = (index) => {
    setArrTags([...arrTags.slice(0, index), ...arrTags.slice(index + 1)]);
  };

  const addTags = (e) => {
    if (e.keyCode === 13) {
      setArrTags([...arrTags, tagInp]);
      setTagInp("");
    }
  };

  const addPost = (newPost) => {
    dispatch(addPostAction({...newPost, 'date': new Date(), 'id': nanoid(10)}))
   }

  const Save = () => {
    let link = false;
    if (/^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/.test(newPost.link)|| newPost.link==='') {
      link = true;
    }
    if (newPost.title==='' || newPost.news==='' || link===false) {
      alert('Форма заполнена неверно')
    } else {
      handleClose();
      addPost(newPost);
      setNewPost({});
      setArrTags([]);
    }
  }
   

  useEffect(() => {
    setNewPost({ ...newPost, tags: arrTags });
  }, [arrTags]);

  return (
    <InputList 
      Save={Save} 
      newPost={newPost}
      changeInp={changeInp}
      delTag={delTag}
      setTagInp={setTagInp}
      tagInp={tagInp}
      addTags={addTags}
      arrTags={arrTags}
      setNewPost={setNewPost}
    />
  );
};
export default FormAddPost

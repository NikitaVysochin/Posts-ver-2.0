import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { delPostAction } from '../../Redux/Actions'
import './Post.scss'

function Post({ elem, id, setOpen }) {
  const dispatch = useDispatch()

  const Delete = () => {
    dispatch(delPostAction(elem))
  }

  return (
    <div className="post-container">
      <h2>{elem.title}</h2>
      <p>{elem.news}</p>
      {id? <><div>
        {elem?.link && <a target='_blank' rel="noopener noreferrer" href={elem.link}>{elem.link}</a>   }
      </div>
      <div className="container-tags">
        {elem.tags.map((tag, index, arr) => {
          return <span key={index}>{tag}{index < arr.length-1 && ','} </span>;
        })}
      </div></> : <></>}
      <div>{moment(elem.date).format("LTS")}</div>
      {id ? 
        (<button onClick={()=>{setOpen(true)}}>Edit</button>):
        (<>
          <Link to={`/post/${elem.id}`} >show deatils</Link>
          <button onClick={()=>Delete(elem)}>Delete</button>
        </>)}
    </div>
  )
}

export default Post

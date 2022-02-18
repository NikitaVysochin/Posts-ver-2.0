import React from 'react'
import './InputList.scss'

function InputList({ 
    Save, 
    newPost, 
    changeInp, 
    delTag, 
    setTagInp, 
    tagInp, 
    addTags, 
    arrTags,
    setNewPost
  }) {

  return (
    < > 
        <div className="modal-main-container">
          <div className="modal-header">
            <label>Введите заголовок *</label>
            <input
              name="title"
              value={newPost.title}
              onChange={(e) => changeInp(e)}
            />
          </div>
          <div className="modal-news">
            <label>Введите текст новости *</label>
            <textarea
              name="news"
              value={newPost.news}
              onChange={(e) => changeInp(e)}
            />
          </div>
          <div className="modal-link">
            <label>Введите ссылку</label>
            <input
              value={newPost.link}
              name="link"
              onChange={(e) =>
                changeInp(
                  e,
                  /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/
                )
              }
            />
          </div>
          <div className="modal-tags">
            <label>введите тег и нажмите enter</label>
            <input
              value={tagInp}
              onKeyDown={(e) => addTags(e)}
              onChange={(e) => setTagInp(e.target.value)}
            />
            <div className="main-tags">
              {arrTags.map((elem, index) => {
                return (
                  <div key={index} className="container-tag">
                    {elem}
                    <div className="but-X" onClick={() => delTag(index)}>
                      X
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>* - поля обязательны к заполнению</div>
          <div className="save-button" onClick={()=>Save()}>
            Save
          </div>
        </div>
  
    </ >
  )
}

export default InputList

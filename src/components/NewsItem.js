import React from 'react'

const NewsItem = ({title,description,image,url})=> {
  return (
    
        <>
        <div onClick={()=>window.open(url,"_blank")} style={{
            border:'1px solid gray',
            padding:'10px',
            cursor:'pointer'
        }}>
        <img src={image || 'https://dummyimage.com/300x180/000/fff'} alt='news'
          style={{
              width: '100%',
              height: '180px',
              objectfit: 'cover'
          }} />
          <h4>{title}</h4>
          <p>{description||'no desc for news'}</p>
          </div>
          </>
    
  )
}

export default NewsItem
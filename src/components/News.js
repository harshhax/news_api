import React, { useEffect } from 'react'
import { useState } from 'react';
import NewsItem from './NewsItem';
const News = ({category})=> {
    const[articles,setArticles]=useState([]);
   useEffect (()=>{fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3df748bb784f447e94d8e2e8ac02c16e`).
    then(res=>(res.json()))
    .then((data)=>{
        setArticles(data.articles || []);
    });
},[category]);
  return (
    <div>
      <p>{category} News</p>
      <div style={{display:"grid",
        gridTemplateColumns:"repeat(5,1fr)",
        gap:"15px"
      }}>
        {articles.map((news,index)=>(
            <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            image={news.urlToImage}
            url={news.url}
            />
        ))}
      </div>
    </div>
  )
}

export default News
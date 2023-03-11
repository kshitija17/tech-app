import React from 'react'
import './article.css';

const Brand = ({ imgUrl, date, text }) => {
  return (
    <div className="lenovo__blog-container_article">
    <div className="lenovo__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="lenovo__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
      )
}

export default Brand
import React from 'react'
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css'

const Blog = () => {
  return (
    <div className="lenovo__blog section__padding" id="blog">
    <div className="lenovo__blog-heading">
      <h1 className="gradient__text">Learn more about Lenovo, <br/> Explore our Blogs.</h1>
    </div>
    <div className="lenovo__blog-container">
      <div className="lenovo__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 1, 2023" text="Finding Community and Camaraderie Through Lenovo" />
      </div>
      <div className="lenovo__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 1, 2023" text="Leading for Equity at Lenovo" />
        <Article imgUrl={blog03} date="Jan 1, 2023" text="How to Increase Gender Diversity Across the Talent Pipeline" />
        <Article imgUrl={blog04} date="Jan 1, 2023" text="Reflecting on Work for Humankind and Embracing Equity" />
        <Article imgUrl={blog05} date="Jan 1, 2023" text="Our Journey to Net-Zero" />
      </div>
    </div>
  </div>
  )
}

export default Blog
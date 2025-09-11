import React from 'react'
import { BlogShowcase,  } from '../components/Blog/GBlog';

const Blog = () => {
  return (
    <div>
      <BlogShowcase title="Latest Blog Posts" filterType='popular' show='yes' />
      <BlogShowcase title="Featured Blog Posts" filterType='featured' show='no' />
    </div>
  )
}


export default Blog
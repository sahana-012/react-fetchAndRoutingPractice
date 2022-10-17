// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="link-container">
      <div className="blog-item-container">
        <img src={imageUrl} alt={author} className="image-url-class" />
        <div className="title-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt="avatar" className="avatar-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

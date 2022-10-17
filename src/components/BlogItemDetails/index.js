// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogItem: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItem} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogItem

    return (
      <div className="blog-info">
        <h1 className="title">{title}</h1>
        <div className="author-details">
          <img src={avatarUrl} alt={author} className="author-pic" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} className="blog-image" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails

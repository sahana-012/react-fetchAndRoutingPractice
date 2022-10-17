import BlogList from '../BlogList'

import UserInfo from '../UserInfo'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div>
      <UserInfo />
      <BlogList />
    </div>
  </div>
)

export default Home

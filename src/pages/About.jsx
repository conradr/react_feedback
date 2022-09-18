import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Card>
      <div className='about'>About</div>
      <h1>About this project</h1>
      <p>This is a simple React app to leave a rating and feedback</p>
      <Link to='/'>Back home </Link>
    </Card>
  )
}

export default About

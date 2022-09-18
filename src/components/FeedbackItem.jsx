import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item }) => {
    const { deleteFeedback } = useContext(FeedbackContext)

  //   const handleClickExampleUsingPrev = () => {
  //     setRating((prev) => {
  //       return prev + 1
  //     })
  //   }


  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
      {/* <bu tton onClick={handleClickExampleUsingPrev}> Click</button> */}
    </Card>
  )
}

export default FeedbackItem

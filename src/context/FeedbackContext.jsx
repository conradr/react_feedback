import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = (id, updItem) => {
    let updatedItem = feedback.map((item) =>
      item.id === id ? { ...item, ...updItem } : item
    )
    setFeedback(updatedItem)
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  const addFeedback = (newFeedback) => {
    //create new unique id
    newFeedback.id = uuidv4()
    // spread the existing array and add the new one
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

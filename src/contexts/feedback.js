import { createContext, useReducer } from 'react'

const INITIAL_VALUE = {
  feedbacks: [],
  feedbackType: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FEEDBACKS':
      return { ...state, feedbacks: action.payload }
    case 'SET_FEEDBACK_TYPE':
      return { ...state, feedbackType: action.payload }
    default:
      return state
  }
}

export const FeedbackContext = createContext(INITIAL_VALUE)

export const FeedbackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE)

  function setFeedbacks(feedbacks) {
    dispatch({
      type: 'SET_FEEDBACKS',
      payload: feedbacks,
    })
  }

  function selectFeedbacksByType(type) {
    dispatch({
      type: 'SET_FEEDBACK_TYPE',
      payload: type,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        ...state,
        setFeedbacks,
        selectFeedbacksByType,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

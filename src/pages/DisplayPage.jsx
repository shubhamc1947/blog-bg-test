import { useNavigate } from 'react-router-dom'

import '../styles/DisplayPage.css'

function DisplayPage({ textDisplay }) {
  const navigate = useNavigate()  
  if (!textDisplay.text) {
    navigate('/')
    return null
  }
  
  const displayStyle = {
    background: textDisplay.gradient,
    fontFamily: textDisplay.font
  }
  
  return (
    <div className="display-page" style={displayStyle}>
      <div className="text-container">
        <div className="displayed-text">{textDisplay.text}</div>
      </div>
      <div className="author-signature">written by { textDisplay.author}</div>
    </div>
  )
}

export default DisplayPage
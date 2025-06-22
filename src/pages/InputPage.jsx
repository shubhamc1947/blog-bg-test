import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gradients, fonts } from '../data/styles'
import '../styles/InputPage.css'

function InputPage({ textDisplay, setTextDisplay }) {
  const navigate = useNavigate()
  const [previewText, setPreviewText] = useState(textDisplay.text || 'Preview Text')
  
  // Use local state for tracking changes before submission
  const [formState, setFormState] = useState({
    author:textDisplay.author,
    text: textDisplay.text,
    gradient: textDisplay.gradient,
    font: textDisplay.font
  })

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Update preview when form state changes
  useEffect(() => {
    setPreviewText(formState.text || 'Preview Text')
  }, [formState.text])

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.text.trim()) {
      alert('Please enter some text to display')
      return
    }
    setTextDisplay(formState)
    navigate('/display')
  }

  // Preview style with current selections
  const previewStyle = {
    background: formState.gradient,
    fontFamily: formState.font
  }

  return (
    <div className="input-page">
      <div className="container">
        <h1>Create Your Text Display</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Enter Your Text</label>
            <input
              type="text"
              id="text"
              name="text"
              value={formState.text}
              onChange={handleChange}
              placeholder="Enter text to display"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Enter Author Name</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formState.author}
              onChange={handleChange}
              placeholder="Enter Author"
              autoComplete="off"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="gradient">Select Background Gradient</label>
            <select
              id="gradient"
              name="gradient"
              value={formState.gradient}
              onChange={handleChange}
            >
              {gradients.map((gradient, index) => (
                <option key={index} value={gradient}>
                  Gradient {index + 1}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="font">Select Font Family</label>
            <select
              id="font"
              name="font"
              value={formState.font}
              onChange={handleChange}
            >
              {fonts.map((font, index) => (
                <option key={index} value={font.value}>
                  {font.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="preview" style={previewStyle}>
            <span>{previewText}</span>
          </div>
          
          <button type="submit" className="submit-btn">
            Create Display
          </button>
        </form>
      </div>
    </div>
  )
}

export default InputPage
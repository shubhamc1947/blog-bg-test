import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import InputPage from './pages/InputPage'
import DisplayPage from './pages/DisplayPage'
import './styles/App.css'

function App() {
  const navigate = useNavigate()

  const [textDisplay, setTextDisplay] = useState({
    text: '',
    gradient: 'linear-gradient(to right, #fc5c7d, #6a82fb)',
    font: 'Arial, sans-serif'
  })

  return (
    <div className="app">
      <Routes>
        <Route 
          path="/" 
          element={
            <InputPage 
              textDisplay={textDisplay} 
              setTextDisplay={setTextDisplay} 
            />
          } 
        />
        <Route 
          path="/display" 
          element={
            <DisplayPage 
              textDisplay={textDisplay} 
            />
          } 
        />
      </Routes>
      <button 
          className="back-btn" 
          onClick={() => navigate('/')}
        >
          Edit Text
        </button>
    </div>
  )
}

export default App
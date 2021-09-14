import React, { useState } from 'react'
// import './App.css'
import './styles/sonar.scss'

function App() {
  return (
    <div className="App">
      <div className="sonar">
        <div className="ring radius-20"></div>
        <div className="ring radius-40"></div>
        <div className="ring radius-60"></div>
        <div className="ring radius-80"></div>
        <div className="ping"></div>
        <div className="sweep"></div>
        <div className="gridLine"></div>
        <div className="gridLine rotate-45"></div>
        <div className="gridLine rotate-90"></div>
        <div className="gridLine rotate-135"></div>
      </div>
    </div>
  )
}

export default App

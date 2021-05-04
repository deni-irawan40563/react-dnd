import React from 'react'
import './style.css'
import ProgressBar from '../../atoms/ProgressBar/ProgressBar'
import DotButton from '../../atoms/Button/DotButton'

export default function TaskCard({title, progress}) {
  return (
  <div id="task-card">
    <p>{title}</p>
    <div className="task-card-footer">
      <ProgressBar value={progress}/>
      <DotButton />
    </div>            
  </div>
  )
}

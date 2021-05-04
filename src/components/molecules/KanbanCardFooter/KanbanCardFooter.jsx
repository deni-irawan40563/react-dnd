import React from 'react'
import addIcon from '../../../assets/img/add-note-icon.svg'
import './style.css'
export default function TaskCardFooter() {
  return (
    <div id="kanban-card-footer">
      <img src={addIcon} alt="add-icon"/>
      <span>New Task</span>
    </div>
  )
}

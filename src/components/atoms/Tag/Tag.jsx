import React from 'react'
import './style.css'

export default function Tag({title}) {
  return (
    <button id="tag" disabled>
      <p>{title}</p>
    </button>
  )
}

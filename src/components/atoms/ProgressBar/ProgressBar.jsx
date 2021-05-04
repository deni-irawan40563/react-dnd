import React from 'react'
import './style.css'
export default function ProgressBar({value}) {
  return (
    <progress id="progressBar" max="100" value={value}></progress>
  )
}

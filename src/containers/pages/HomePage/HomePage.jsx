//Import React Dependency
import React, { Component } from 'react'

//Import Style
import './style.css'
//Import Components
import KanbanCard from '../../templates/KanbanCard/KanbanCard'
import AsideBar from '../../../components/atoms/AsideBar/AsideBar'

export default class HomePage extends Component {
  render() {
    return (
      <div id="home-page">
        <AsideBar />
        <main id="main-section">
          <h1>Product Roadmap</h1>
          <KanbanCard />
        </main>
      </div>
    )
  }
}

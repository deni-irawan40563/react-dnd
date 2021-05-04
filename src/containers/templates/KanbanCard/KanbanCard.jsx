// Import React Dependency
import React, { Component } from 'react'

//Import Style
import './style.css'

import Tag from '../../../components/atoms/Tag/Tag'
import KanbanCardFooter from '../../../components/molecules/KanbanCardFooter/KanbanCardFooter'
import TaskCard from '../../../components/molecules/TaskCard/TaskCard'

export default class KanbanCard extends Component {
  render() {
    return (
      <div id="kanban-card">
        <Tag title="Group Tag 1" />
        <p className="duration-info">January - March</p>
        <TaskCard progress={20} title="Re-designed the zero-g doggie bags. No more spills!"/>
        <TaskCard progress={80} title="Bundle interplanetary analytics for improved transmission"/>
        <KanbanCardFooter />
      </div>
    )
  }
}

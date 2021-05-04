//Import React Dependency
import React from 'react';
//Import Style
import './style.css';

export default function ButtonRed({size, onClick, title, icon, loading, loadingTitle}) {
  if(loading){
    return <button 
            id={size === 'btn-block' ? 'button-block-disable' : 'button-disable'} 
            onClick={onClick}
            disabled
            >
            <i class="fas fa-sync-alt"></i> {loadingTitle}
          </button>
  }
  return <button 
          id={size ? 'button-block-red' : 'button-red'} 
          onClick={onClick}
          >
          <i class={icon}></i> {title}
        </button>
}

//Default Props
ButtonRed.defaultProps = {
  title : "tombol",
  onClick : null,
  loadingTitle: null
}
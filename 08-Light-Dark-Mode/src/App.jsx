import React, { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage';
import './App.css'

const App = () => {

    const themeArray = useLocalStorage();

    return (
        <div className='app-container' data-theme={themeArray[0]}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt tempora tenetur necessitatibus adipisci nihil. Magnam nam numquam nemo, repellat ut eveniet, voluptate minima dolorum dolores iusto minus quos eum.</p>
            <button type="button" onClick={() => themeArray[1](themeArray[0] === 'dark' ? 'light' : 'dark')}>Turn into {themeArray[0] === 'dark' ? 'Light' : 'Dark'}</button>
        </div>
    )
}

export default App
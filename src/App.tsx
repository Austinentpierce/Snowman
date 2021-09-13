import React from 'react'
import step0 from './images/step_0.png'

export function App() {
  return (
    <main>
      <header>
        <div>The Snowman Game</div>
      </header>
      <img className="firstimage" src={step0} width="600" height="600"></img>
      <section>
        <ul>
          <li className="firstletter">_</li>
        </ul>
      </section>
    </main>
  )
}

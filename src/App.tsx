import React from 'react'
import step0 from './images/step_0.png'

export function App() {
  return (
    <main>
      <div className="wrapper">
        <div className="snow layer1 a"></div>
        <div className="snow layer1"></div>
        <div className="snow layer2 a"></div>
        <div className="snow layer2"></div>
        <div className="snow layer3 a"></div>
        <div className="snow layer3"></div>
      </div>
      <header>
        <div>The Snowman Game</div>
      </header>

      <img className="firstimage" src={step0} width="450" height="450"></img>
      <section>
        <ul className="letters">
          <li className="firstletter">_</li>
          <li className="secondletter">_</li>
          <li className="thirdletter">_</li>
          <li className="fourthletter">_</li>
          <li className="fifthletter">_</li>
          <li className="sixthletter">_</li>
          <li className="seventhletter">_</li>
        </ul>
      </section>
      <section className="buttons">
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <button>D</button>
        <button>E</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
        <button>I</button>
        <button>J</button>
        <button>K</button>
        <button>L</button>
        <button>M</button>
        <button>N</button>
        <button>O</button>
        <button>P</button>
        <button>Q</button>
        <button>R</button>
        <button>S</button>
        <button>T</button>
        <button>U</button>
        <button>V</button>
        <button>W</button>
        <button>X</button>
        <button>Y</button>
        <button>Z</button>
      </section>
      <footer>Created by Austin Pierce</footer>
    </main>
  )
}

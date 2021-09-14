import React, { useState } from 'react'
import step0 from './images/step_0.png'

const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',  
]

export function App() {
  
  const [guessedLetters, setGuessedLetters] = useState([])
  const secretWord = words[0]

  console.log(secretWord)

  function clickOnLetter(letter:string) {
    const newValueForGuessedLetters = [...guessedLetters, letter]

    setGuessedLetters(newValueForGuessedLetters)
  }

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
      <div className="images">
        <img className="firstimage" src={step0} width="450" height="450"></img>
      </div>
      <section>
        <ul className="letters">
          <div>{guessedLetters}</div>
          <li className="firstletter">__</li>
          <div>{guessedLetters}</div>
          <li className="secondletter">__</li>
          <div>{guessedLetters}</div>
          <li className="thirdletter">__</li>
          <div>{guessedLetters}</div>
          <li className="fourthletter">__</li>
          <div>{guessedLetters}</div>
          <li className="fifthletter">__</li>
          <div>{guessedLetters}</div>
          <li className="sixthletter">__</li>
          <div>{guessedLetters}</div>
          <li className="seventhletter">__</li>
          <div>{guessedLetters}</div>
        </ul>
      </section>
        {ALPHABET.map(function () {
          return (
            <button key={letter} onClick={function () {
              clickOnLetter(letter)
            }}
            disabled={guessedLetters.includes(letter)}
            > 
            {letter}
            </button>
          )
        }
        }
      
{/* 
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

      <footer>Created by Austin Pierce</footer> */}
    </main>
  )
}

import React, { useState } from 'react'
import step0 from './images/step_0.png'
import step1 from './images/step_1.png'
import step2 from './images/step_2.png'
import step3 from './images/step_3.png'
import step4 from './images/step_4.png'
import step5 from './images/step_5.png'
import step6 from './images/step_6.png'
import step7 from './images/step_7.png'
import words from './words.json'


export function App() {

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

  const randomizedWord = 
  const [guessedLetters, setGuessedLetters] = useState(['A', 'V'])
  const secretWord = words[0]

  console.log(secretWord)

  function clickOnLetter(letter: string) {
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
          <button
            key={letter}
            onClick={function () {
              clickOnLetter(letter)
            }}
            disabled={guessedLetters.includes(letter)}
          >
            {letter}
          </button>
        )
      })}
    </main>
  )
}



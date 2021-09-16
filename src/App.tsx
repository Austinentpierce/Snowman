import React, { useState } from 'react'
import step0 from './images/step_0.png'
import snowmanpicture1 from './images/step_1.png'
import snowmanpicture2 from './images/step_2.png'
import snowmanpicture3 from './images/step_3.png'
import snowmanpicture4 from './images/step_4.png'
import snowmanpicture5 from './images/step_5.png'
import psnowmanicture6 from './images/step_6.png'
import snowmanpicture7 from './images/step_7.png'
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

  async function handleBrandNewGame() {
    setGuessedLetters([])
    setUsersScore(0)
    setSecretWord(randomizedWord)
    setFullWord('_______')
  }

  const [usersScore, setUsersScore] = useState(0)
  const randomizedWord = words[Math.floor(Math.random() * words.length)]
  const [guessedLetters, setGuessedLetters] = useState([''])
  const [secretWord, setSecretWord] = useState(randomizedWord)
  const [fullWord, setFullWord] = useState('_______')

  function clickOnLetter(letter: string) {
    setGuessedLetters([...guessedLetters, letter])

    if (secretWord.includes(letter)) {
      setUsersScore(usersScore + 1)
      let newFullWord = ''
      for (let index = 0; index < secretWord.length; index + 1) {
        secretWord[index] === letter
          ? (newFullWord = newFullWord.concat(letter))
          : (newFullWord = newFullWord.concat(fullWord[index]))
      }
      setFullWord(newFullWord)
    }
  }
  function theSnowManPictures() {}
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

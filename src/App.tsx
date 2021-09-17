import React, { useState } from 'react'
import snowmanpicture0 from './images/step_0.png'
import snowmanpicture1 from './images/step_1.png'
import snowmanpicture2 from './images/step_2.png'
import snowmanpicture3 from './images/step_3.png'
import snowmanpicture4 from './images/step_4.png'
import snowmanpicture5 from './images/step_5.png'
import snowmanpicture6 from './images/step_6.png'
import snowmanpicture7 from './images/step_7.png'
import words from './words.json'

export function App() {
  const ALPHABET = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
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
      for (let index = 0; index < secretWord.length; index++) {
        secretWord[index] === letter
          ? (newFullWord = newFullWord.concat(letter))
          : (newFullWord = newFullWord.concat(fullWord[index]))
      }
      setFullWord(newFullWord)
    }
  }
  function theSnowManPictures() {
    switch (usersScore) {
      case 0:
        return snowmanpicture0
      case 1:
        return snowmanpicture1
      case 2:
        return snowmanpicture2
      case 3:
        return snowmanpicture3
      case 4:
        return snowmanpicture4
      case 5:
        return snowmanpicture5
      case 6:
        return snowmanpicture6
      case 7:
        return snowmanpicture7
    }
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
        <img src={theSnowManPictures()} height="300" width="300" />
      </div>
      <div className="guessedword">{fullWord}</div>
      {ALPHABET.map(function (letter) {
        return (
          <button
            className="letterbuttons"
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
      <div className="lettersguessed">
        The letters you have guessed are: {guessedLetters}
      </div>
      <button className="newgame" onClick={handleBrandNewGame}>
        Create a New Game
      </button>
      <div className="snowflake">
        <i className="far fa-3x fa-snowflake"></i>
        <i className="far fa-3x fa-snowflake"></i>
        <i className="far fa-3x fa-snowflake"></i>
        <i className="far fa-3x fa-snowflake"></i>
      </div>
      <footer>Created by a Suncoast Developer</footer>
    </main>
  )
}

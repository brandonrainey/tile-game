import React, { useState, useEffect } from 'react'
import GameStatus from './GameStatus'

export default function Board() {
  const [fiveXFive, setFiveXFive] = useState([
    {
      clicked: false,
      id: 0,
      background: 'bg-white',
    },
    {
      id: 1,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 2,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 3,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 4,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 5,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 6,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 7,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 8,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 9,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 10,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 11,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 12,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 13,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 14,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 15,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 16,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 17,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 18,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 19,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 20,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 21,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 22,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 23,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 24,
      clicked: false,
      background: 'bg-white',
    },
  ])

  const [sixXSix, setSixXSix] = useState([
    {
      clicked: false,
      id: 0,
      background: 'bg-white',
    },
    {
      id: 1,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 2,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 3,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 4,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 5,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 6,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 7,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 8,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 9,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 10,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 11,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 12,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 13,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 14,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 15,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 16,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 17,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 18,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 19,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 20,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 21,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 22,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 23,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 24,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 25,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 26,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 27,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 28,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 29,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 30,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 31,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 32,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 33,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 34,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 35,
      clicked: false,
      background: 'bg-white',
    },
  ])

  const [sevenXSeven, setSevenXSeven] = useState([
    {
      clicked: false,
      id: 0,
      background: 'bg-white',
    },
    {
      id: 1,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 2,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 3,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 4,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 5,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 6,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 7,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 8,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 9,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 10,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 11,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 12,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 13,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 14,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 15,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 16,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 17,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 18,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 19,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 20,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 21,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 22,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 23,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 24,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 25,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 26,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 27,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 28,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 29,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 30,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 31,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 32,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 33,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 34,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 35,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 36,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 37,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 38,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 39,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 40,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 41,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 42,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 43,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 44,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 45,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 46,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 47,
      clicked: false,
      background: 'bg-white',
    },
    {
      id: 48,
      clicked: false,
      background: 'bg-white',
    },
  ])

  const [answerArray, setAnswerArray] = useState()

  const [gameStart, setGameStart] = useState(false)

  const [preGame, setPreGame] = useState(false)

  const [userAnswer, setUserAnswer] = useState([])

  const [wrongAnswers, setWrongAnswers] = useState([])

  const [gameOver, setGameOver] = useState(false)

  const [gameWon, setGameWon] = useState(false)

  const [correctAnswers, setCorrectAnswers] = useState([])

  const grids = [fiveXFive, sixXSix, sevenXSeven]

  const setGrids = [
    () => setFiveXFive(),
    () => setSixXSix(),
    () => setSevenXSeven(),
  ]

  const [gridIndex, setGridIndex] = useState(0)

  // sets click status and color on user click
  const handleClick = (id) => {
    const newArr = grids[gridIndex].map((item, index) => {
      if (item.id === id && !userAnswer.includes(id) ) {
        addAnswer(id)
        return { ...item, clicked: !item.clicked, background: 'bg-black' }
      } else return item
    })
    setFiveXFive(newArr)
    
  }

  const clearBoard = () => {
    const newArr = grids[gridIndex].map((item, index) => {
      return { ...item, clicked: false, background: 'bg-white' }
    })
    gridIndex === 0
      ? setFiveXFive(newArr)
      : gridIndex === 1
      ? setSixXSix(newArr)
      : gridIndex === 2
      ? setSevenXSeven(newArr)
      : null

      setGameOver(false)
  }

  // resets board to unclicked and base color
  const resetBoard = () => {
    const newArr = grids[gridIndex].map((item, index) => {
      return { ...item, clicked: false, background: 'bg-white' }
    })
    gridIndex === 0
      ? setFiveXFive(newArr)
      : gridIndex === 1
      ? setSixXSix(newArr)
      : gridIndex === 2
      ? setSevenXSeven(newArr)
      : null

      setAnswerArray([])
      setUserAnswer([])
      setWrongAnswers([])
      setCorrectAnswers([])
      setGameOver(false)
      setGameWon(false)
      setGameStart(false)
  }

  // creates array of 10 random numbers between 0-24
  const setRandomArray = (index) => {
    let arr = []
    for (let i = 0; i <= 24; i++) {
      arr.push(i)
    }

    let result = []

    for (let i = 1; i <= 10; i++) {
      const random = Math.floor(Math.random() * (25 - i))
      result.push(arr[random])
      arr[random] = arr[25 - i]
    }
    
    return result
  }

  const setRandomArrayNormal = () => {
    let arr = []
    for (let i = 0; i <= 35; i++) {
      arr.push(i)
    }

    let result = []

    for (let i = 1; i <= 16; i++) {
      const random = Math.floor(Math.random() * (36 - i))
      result.push(arr[random])
      arr[random] = arr[36 - i]
    }
    
    return result
  }

  const setRandomArrayHard = () => {
    let arr = []
    for (let i = 0; i <= 48; i++) {
      arr.push(i)
    }

    let result = []

    for (let i = 1; i <= 26; i++) {
      const random = Math.floor(Math.random() * (49 - i))
      result.push(arr[random])
      arr[random] = arr[49 - i]
    }
    
    return result
  }

  //uses random array to highlight correct squares
  const setupBoard = () => {
    setGameStart(true)
    
    let randoms =
      gridIndex === 0
        ? setRandomArray()
        : gridIndex === 1
        ? setRandomArrayNormal()
        : gridIndex === 2
        ? setRandomArrayHard()
        : null

    setAnswerArray([...randoms])
    const newArr = grids[gridIndex].map((item, index) => {
      if (randoms.includes(item.id)) {
        return { ...item, clicked: false, background: 'bg-black' }
      } else return item
    })

    gridIndex === 0
      ? setFiveXFive(newArr)
      : gridIndex === 1
      ? setSixXSix(newArr)
      : gridIndex === 2
      ? setSevenXSeven(newArr)
      : null

    console.log()
  }

  const addAnswer = (id) => {
    setUserAnswer((prevArray) => [...prevArray, id])
  }

  const checkAnswer = (id) => {
    if (answerArray.includes(id) && !userAnswer.includes(id)) {
      //correct stuff
      setCorrectAnswers((prevArray) => [...prevArray, id]) 

      const newArr = grids[gridIndex].map((item, index) => {
        if (item.id === id) {
          return { ...item, background: 'bg-lime-600' }
        } else return item
      })
      gridIndex === 0
      ? setFiveXFive(newArr)
      : gridIndex === 1
      ? setSixXSix(newArr)
      : gridIndex === 2
      ? setSevenXSeven(newArr)
      : null

      
      console.log(correctAnswers)
      
      
      if (correctAnswers.length === answerArray.length -1) {
        setGameWon(true)
      }

      console.log('correct')
      return
    } else if (!userAnswer.includes(id)) {
      console.log('wrong')

      const newArr = grids[gridIndex].map((item, index) => {
        if (item.id === id) {
          return { ...item, background: 'bg-red-600' }
        } else return item
      })
      gridIndex === 0
      ? setFiveXFive(newArr)
      : gridIndex === 1
      ? setSixXSix(newArr)
      : gridIndex === 2
      ? setSevenXSeven(newArr)
      : null

      setWrongAnswers((prevArray) => [...prevArray, id])
      if (wrongAnswers.length === 2) {
        setGameOver(true)
        return
      }
      return
    }
  }

  //on click of start, show board for 5 seconds then clear
  useEffect(() => {
    setPreGame(true)
    const timer = setTimeout(() => {
      if (gameStart) {
        clearBoard()
        setPreGame(false)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [gameStart])

  return (
    <div>
      <header className="bg-black-800 ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <div className="flex mb-4 gap-2 justify-center">
            <button
              type="submit"
              className="group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setGridIndex(0)}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Easy
            </button>

            <button
              type="submit"
              className="group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setGridIndex(1)}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Normal
            </button>

            <button
              type="submit"
              className="group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setGridIndex(2)}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Hard
            </button>
          </div>
          <div className="flex justify-center gap-2">
            <button
              type="submit"
              className="group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={resetBoard}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Reset
            </button>

            <button
              type="submit"
              className="group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={setupBoard}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Start
            </button>
          </div>
        </div>
      </header>
      <main className='relative'>
        <div className="w-1/3 mx-auto py-6 aspect-square h-1/3">
          {/* Replace with your content */}
          <div
            className={`p-2 border-4 border-solid border-gray-200 rounded-lg h-full grid gap-2 ${
              gridIndex === 0
                ? 'easy'
                : gridIndex === 1
                ? 'normal'
                : gridIndex === 2
                ? 'hard'
                : 6
            } grid-rows-${
              gridIndex === 0
                ? 5
                : gridIndex === 1
                ? 6
                : gridIndex === 2
                ? 7
                : 6
            }`}
          >
            {grids[gridIndex].map((item, index) => (
              <div
                key={item.id}
                className={`${item.background} ${
                  preGame || gameOver ? 'disabled' : null
                } h-full `}
                onClick={() => {
                  handleClick(item.id)
                  checkAnswer(item.id)
                }}
              ></div>
            ))}
          </div>
          {/* /End replace */}
        </div>
        <GameStatus  
          gameOver={gameOver}
          setGameOver={setGameOver}
          gameWon={gameWon}
        />
      </main>
    </div>
  )
}

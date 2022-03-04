import React, { useState, useEffect } from 'react'

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

  const [answerArray, setAnswerArray] = useState()

  const [gameStart, setGameStart] = useState(false)

  const [preGame, setPreGame] = useState(false)

  const [userAnswer, setUserAnswer] = useState([])

  const [wrongAnswers, setWrongAnswers] = useState([])

  const [gameOver, setGameOver] = useState(false)

  // sets click status and color on user click
  const handleClick = (id) => {
    const newArr = fiveXFive.map((item, index) => {
      if (item.id === id) {
        addAnswer(id)
        return { ...item, clicked: !item.clicked, background: 'bg-black' }
      } else return item
    })
    setFiveXFive(newArr)
    console.log(userAnswer)
  }

  // resets board to unclicked and base color
  const resetBoard = () => {
    const newArr = fiveXFive.map((item, index) => {
      return { ...item, clicked: false, background: 'bg-white' }
    })
    setFiveXFive(newArr)
  }

  // creates array of 10 random numbers between 0-24
  const setRandomArray = () => {
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
    console.log(result)
    return result
  }

  //uses random array to highlight correct squares
  const setupBoard = () => {
    setGameStart(true)
    console.log(preGame)
    const randoms = setRandomArray()
    setAnswerArray([...randoms])
    const newArr = fiveXFive.map((item, index) => {
      if (randoms.includes(item.id)) {
        return { ...item, clicked: false, background: 'bg-black' }
      } else return item
    })
    setFiveXFive(newArr)
  }

  const addAnswer = (id) => {
    setUserAnswer((prevArray) => [...prevArray, id])
  }

  const checkAnswer = (id) => {
    if (answerArray.includes(id) && !userAnswer.includes(id)) {
      //correct stuff

      const newArr = fiveXFive.map((item, index) => {
        if (item.id === id) {
          return { ...item, background: 'bg-lime-600' }
        } else return item
      })
      setFiveXFive(newArr)

      console.log('correct')
      return
    } else if (!userAnswer.includes(id)) {
      console.log('wrong')

      const newArr = fiveXFive.map((item, index) => {
        if (item.id === id) {
          return { ...item, background: 'bg-red-600' }
        } else return item
      })
      setFiveXFive(newArr)

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
        resetBoard()
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
          <div>
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
      <main>
        <div className="w-1/3 mx-auto py-6 aspect-square h-1/3">
          {/* Replace with your content */}
          <div className="p-4 border-4 border-solid border-gray-200 rounded-lg h-full grid grid-cols-5 gap-4 grid-rows-5">
            {fiveXFive.map((item, index) => (
              <div
                key={item.id}
                className={`${item.background} ${
                  preGame ? 'disabled' : null
                } h-full w-full`}
                onClick={() => {
                  handleClick(item.id)
                  checkAnswer(item.id)
                }}
              ></div>
            ))}
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}

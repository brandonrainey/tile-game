import React, { useState, useEffect, useRef, use } from 'react'
import CountdownBar from './CountdownBar'
import GameStatus from './GameStatus'

export default function Board({ checked, gameStart, setGameStart }) {
  const [fiveXFive, setFiveXFive] = useState([
    {
      clicked: false,
      id: 0,
      background: 'bg-white',
      number: null,
    },
    {
      id: 1,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 2,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 3,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 4,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 5,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 6,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 7,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 8,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 9,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 10,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 11,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 12,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 13,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 14,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 15,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 16,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 17,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 18,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 19,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 20,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 21,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 22,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 23,
      clicked: false,
      background: 'bg-white',
      number: null,
    },
    {
      id: 24,
      clicked: false,
      background: 'bg-white',
      number: null,
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

  

  const [preGame, setPreGame] = useState(false)

  const [userAnswer, setUserAnswer] = useState([])

  const [wrongAnswers, setWrongAnswers] = useState([])

  const [gameOver, setGameOver] = useState(false)

  const [gameWon, setGameWon] = useState(false)

  const [correctAnswers, setCorrectAnswers] = useState([])

  const grids = [fiveXFive, sixXSix, sevenXSeven]

  const [percentage, setPercentage] = useState(100)

  const progressTimer = useRef()

  const [reseting, setReseting] = useState(false)

  const [hardArray, setHardArray] = useState([])

  const setGrids = [
    () => setFiveXFive(),
    () => setSixXSix(),
    () => setSevenXSeven(),
  ]

  const [gridIndex, setGridIndex] = useState(0)

  const [testArray, setTestArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const base5x5Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  // sets click status and color on user click
  const handleClick = (id) => {
    console.log('runs')
    const newArr = grids[gridIndex].map((item, index) => {
      if (item.id === id && !userAnswer.includes(id)) {
        if (checked) {
          setUserAnswer((prevArray) => [...prevArray, item.number])
        } else {
          setUserAnswer((prevArray) => [...prevArray, id])
        }

        return { ...item, clicked: !item.clicked, background: 'bg-black' }
      } else return item
    })
    gridIndex === 0
      ? setFiveXFive(newArr)
      : gridIndex === 1
      ? setSixXSix(newArr)
      : gridIndex === 2
      ? setSevenXSeven(newArr)
      : null
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
    setReseting(true)

    const newArr = grids[0].map((item, index) => {
      return { ...item, clicked: false, background: 'bg-white' }
    })

    const newArr2 = grids[1].map((item, index) => {
      return { ...item, clicked: false, background: 'bg-white' }
    })

    const newArr3 = grids[2].map((item, index) => {
      return { ...item, clicked: false, background: 'bg-white' }
    })

    setFiveXFive(newArr)

    setSixXSix(newArr2)

    setSevenXSeven(newArr3)

    setAnswerArray([])
    setUserAnswer([])
    setWrongAnswers([])
    setCorrectAnswers([])
    setHardArray([])
    setPercentage(100)
    setPreGame(true)
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

    for (let i = 1; i <= 15; i++) {
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

    for (let i = 1; i <= 20; i++) {
      const random = Math.floor(Math.random() * (49 - i))
      result.push(arr[random])
      arr[random] = arr[49 - i]
    }

    return result
  }

  //uses random array to highlight correct squares
  const setupBoard = () => {
    setReseting(false)
    setGameOver(false)
    setGameStart(true)
    setPercentage(0)

    let randoms =
      gridIndex === 0
        ? setRandomArray()
        : gridIndex === 1
        ? setRandomArrayNormal()
        : gridIndex === 2
        ? setRandomArrayHard()
        : null

    setAnswerArray([...randoms])
    let i = 0

    if (checked) {
      const newArr = grids[gridIndex].map((item, index) => {
        if (randoms.includes(item.id)) {
          i++

          console.log(i)
          return {
            ...item,
            clicked: false,
            background: 'bg-black',
            number: testArray[i - 1],
          }
        } else return item
      })

      gridIndex === 0
        ? setFiveXFive(newArr)
        : gridIndex === 1
        ? setSixXSix(newArr)
        : gridIndex === 2
        ? setSevenXSeven(newArr)
        : null
    } else {
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
    }

    // gridIndex === 0
    //   ? setFiveXFive(newArr)
    //   : gridIndex === 1
    //   ? setSixXSix(newArr)
    //   : gridIndex === 2
    //   ? setSevenXSeven(newArr)
    //   : null
  }

  const handleHardClick = (id, number) => {
    if (hardArray.length == 0) {
      if (number == 1) {
        const newArray = [number]
        setHardArray(newArray)
        const newArr = grids[gridIndex].map((item, index) => {
          if (item.id === id) {
            return {
              ...item,
              background: 'transition bg-lime-600 ease-in-out 150ms',
            }
          } else return item
        })

        gridIndex === 0
          ? setFiveXFive(newArr)
          : gridIndex === 1
          ? setSixXSix(newArr)
          : gridIndex === 2
          ? setSevenXSeven(newArr)
          : null
      } else {
        setGameOver(true)
      }
    }

    if (hardArray[hardArray.length - 1] + 1 == number) {
      const updatedArray = [...hardArray, number]
      setHardArray(updatedArray)
      const newArr = grids[gridIndex].map((item, index) => {
        if (item.id === id) {
          return {
            ...item,
            background: 'transition bg-lime-600 ease-in-out 150ms',
          }
        } else return item
      })

      gridIndex === 0
        ? setFiveXFive(newArr)
        : gridIndex === 1
        ? setSixXSix(newArr)
        : gridIndex === 2
        ? setSevenXSeven(newArr)
        : null

      if (hardArray.length == 10) {
        setGameWon(true)
      }
    } else if (hardArray.length != 0) {
      setGameOver(true)
    }
  }

  const checkAnswer = (id, number) => {
    //

    //
    if (checked) {
      base5x5Array.forEach((item, index) => {
        console.log(userAnswer)
        if (userAnswer[index] != undefined) {
          if (userAnswer[index] == item) {
            setCorrectAnswers((prevArray) => [...prevArray, item])
            const newArr = grids[gridIndex].map((item, index) => {
              if (item.id === id) {
                return {
                  ...item,
                  background: 'transition bg-lime-600 ease-in-out 150ms',
                }
              } else return item
            })

            gridIndex === 0
              ? setFiveXFive(newArr)
              : gridIndex === 1
              ? setSixXSix(newArr)
              : gridIndex === 2
              ? setSevenXSeven(newArr)
              : null

            if (correctAnswers.length === testArray.length - 1) {
              setGameWon(true)
            }
          } else {
            setGameOver(true)
          }
        }
      })
    } else {
      if (answerArray.includes(id) && !userAnswer.includes(id)) {
        console.log(userAnswer)
        //correct stuff
        setCorrectAnswers((prevArray) => [...prevArray, id])

        //creates new array with highlighted correct answers
        const newArr = grids[gridIndex].map((item, index) => {
          if (item.id === id) {
            return {
              ...item,
              background: 'transition bg-lime-600 ease-in-out 150ms',
            }
          } else return item
        })

        //checks which grid to update
        gridIndex === 0
          ? setFiveXFive(newArr)
          : gridIndex === 1
          ? setSixXSix(newArr)
          : gridIndex === 2
          ? setSevenXSeven(newArr)
          : null

        if (correctAnswers.length === answerArray.length - 1) {
          setGameWon(true)
        }

        return
      } else if (!userAnswer.includes(id)) {
        const newArr = grids[gridIndex].map((item, index) => {
          if (item.id === id) {
            return {
              ...item,
              background: 'transition bg-red-600 ease-in-out 150ms',
            }
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

  //timer for start of game
  useEffect(() => {
    if (!preGame && gameStart) {
      const timer = setTimeout(() => {
        setGameOver(true)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [preGame])

  //check for progress bar full
  useEffect(() => {
    if (gameWon || gameOver) {
      clearInterval(progressTimer.current)
    }

    if (percentage >= 105) {
      clearInterval(progressTimer.current)
    }
  }, [percentage])

  //increases progress bar
  useEffect(() => {
    if (!preGame) {
      progressTimer.current = setInterval(() => {
        setPercentage((percentage) => percentage + 2.625)
      }, 250)

      return () => clearInterval(progressTimer.current)
    }
  }, [preGame])

  //shows correct tiles missed on a game over
  useEffect(() => {
    if (gameOver) {
      const newArr = grids[gridIndex].map((item, index) => {
        if (
          item.background != 'transition bg-lime-600 ease-in-out 150ms' &&
          item.background != 'transition bg-red-600 ease-in-out 150ms' &&
          answerArray.includes(item.id)
        ) {
          return { ...item, clicked: !item.clicked, background: 'bg-black' }
        } else return item
      })
      gridIndex === 0
        ? setFiveXFive(newArr)
        : gridIndex === 1
        ? setSixXSix(newArr)
        : gridIndex === 2
        ? setSevenXSeven(newArr)
        : null
    }
  }, [gameOver])

  useEffect(() => {
    shuffleArray(testArray)
  }, [])

  console.log(hardArray)

  return (
    <div>
      <header className="bg-black-800 ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex mb-4 gap-8 justify-center sm:mt-8 mt-20">
            <button
              type="submit"
              className={`group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white tracking-wide bg-indigo-600 hover:bg-indigo-700 focus:outline-none  ${
                gridIndex == 0 ? 'shadow-md shadow-teal-300' : null
              }`}
              onClick={() => setGridIndex(0)}
              disabled={gameStart ? true : false}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Normal
            </button>

            <button
              type="submit"
              className={`group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none  ${
                gridIndex == 1 ? 'shadow-md shadow-teal-300' : null
              }`}
              onClick={() => setGridIndex(1)}
              disabled={gameStart ? true : false}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Hard
            </button>

            <button
              type="submit"
              className={`group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none  ${
                gridIndex == 2 ? 'shadow-md shadow-teal-300' : null
              }`}
              onClick={() => setGridIndex(2)}
              disabled={gameStart ? true : false}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Very Hard
            </button>
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none "
              onClick={resetBoard}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Reset
            </button>

            <button
              type="submit"
              className="group relative w-1/8 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-700 hover:bg-lime-800 focus:outline-none "
              onClick={setupBoard}
              disabled={gameStart ? true : false}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Start
            </button>
          </div>
        </div>
      </header>

      <CountdownBar
        preGame={preGame}
        percentage={percentage}
        reseting={reseting}
        setReseting={setReseting}
      />

      <main className="relative">
        <div className="md:w-1/3 md:h-1/3   mx-auto py-6 aspect-square  w-full h-1/2 -mt-6">
          <ul
            className={`p-2  rounded-lg h-full grid gap-2 bg-stone-800 ${
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
              <li
                key={item.id}
                className={`${item.background} ${
                  preGame || gameOver || gameWon ? 'disabled' : null
                } h-full rounded text-4xl text-white text-center pt-[1.5rem] font-semibold `}
                onClick={() => {
                  if (checked) {
                    handleHardClick(item.id, item.number)
                  } else {
                    handleClick(item.id)
                    checkAnswer(item.id, item.number)
                  }
                }}
              >
                {checked ? item.number : null}
              </li>
            ))}
          </ul>
        </div>
        <GameStatus
          gameOver={gameOver}
          setGameOver={setGameOver}
          gameWon={gameWon}
          preGame={preGame}
        />
      </main>
    </div>
  )
}

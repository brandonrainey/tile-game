import React from 'react'

export default function GameStatus({ gameOver, setGameOver, gameWon }) {
  if (gameWon) {
    return (
      <div className="w-40 h-40 border-solid flex bg-slate-800 absolute top-1/2 left-1/2 mycenter text-white justify-center rounded-lg text-xl pt-16 border-slate-400 border-solid border-2">
        Game Won!
      </div>
    )
  }
  if (gameOver) {
    return (
      <div className="w-40 h-40 border-solid flex bg-slate-800 absolute top-1/2 left-1/2 mycenter text-white justify-center rounded-lg text-xl pt-16 border-slate-400 border-solid border-2 opacity-90">
        Game Over...
      </div>
    )
  } else return null
}

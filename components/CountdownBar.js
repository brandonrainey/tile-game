import React from 'react'

export default function CountdownBar({
  percentage,
  preGame,
  reseting,
  checked,
}) {
  return (
    <div className="flex justify-center ">
      <div className="flex md:w-1/3 w-3/4 h-5 rounded mb-6 bg-gray-300">
        <div
          className={`bg-blue-800 h-5 overflow-hidden border-solid border border-gray-300 rounded ${
            reseting
              ? 'resetTransition'
              : preGame
              ? checked
                ? 'preGameTransitionHard'
                : 'preGameTransition'
              : 'progressTransition'
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

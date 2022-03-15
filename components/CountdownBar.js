import React from 'react'

export default function CountdownBar({ percentage, preGame, gameStart }) {
  return (
    <div className='flex justify-center '>
      
      <div className="flex w-1/3 bg-gray-200 h-5 mb-6 rounded-full">
        <div className={`bg-blue-600 h-5  overflow-hidden rounded-full ${preGame ? 'preGameTransition' : 'progressTransition'}`} style={{width: `${percentage}%`}}></div>
      </div>
    </div>
  )
}

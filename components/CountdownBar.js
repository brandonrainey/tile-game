import React from 'react'

export default function CountdownBar({ percentage, preGame }) {

  
  return (
    <div className='flex justify-center '>
      
      <div className="flex w-1/3 h-5 mb-6 rounded-full bg-gray-300">
        <div className={`bg-blue-800 h-5  overflow-hidden rounded-full border-solid border border-gray-300 ${preGame ? 'preGameTransition' : 'progressTransition'}`} style={{width: `${percentage}%`}}></div>
      </div>
    </div>
  )
}

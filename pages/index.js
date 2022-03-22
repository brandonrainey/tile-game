import Head from 'next/head'
import Image from 'next/image'
import react, { useState } from 'react'
import Board from '../components/Board'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 h-16 bg-gray-800 flex">
        <h1 className="sm:text-3xl text-2xl font-bold text-white pt-2 headerFont">Memory Game</h1>
        <div className="flex ml-auto text-white font-bold spacing-2 sm:pr-20 pr-4">
          <p className="flex flex-col relative peer h-full justify-center items-center self-center">
            How to play
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p>

          <div className="absolute peer-hover:visible active:visible invisible border-solid border-2 p-2 sm:top-20 top-16 sm:right-12 right-0 sm:w-56 w-full text-sm rounded bg-gray-800 z-20">
            Memorize the positions of the black tiles within 5 seconds, then you
            have 10 seconds to click the memorized positions.
          </div>
        </div>
      </div>
      <Board />
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Board from '../components/Board'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Header />
      <Board />
    </div>
  )
}

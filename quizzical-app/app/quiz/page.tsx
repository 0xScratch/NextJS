import type { Metadata } from "next"
import Frames from "./components/Frames"

export const metadata: Metadata = {
  title: 'Quiztime',
  description: 'Created by Aryan Malik'
}

export default function page() {
  return (
    <main className="relative overflow-hidden flex justify-center">
      <div className="yellow-circle w-96 h-96 bg-[#fffad1] rounded-full -top-72 -right-64 fixed"></div>
      <div className="blue-circle fixed w-48 h-36 bg-[#deebf8] rounded-full -bottom-24 -left-32"></div>
      <div className="z-10 w-[75%] mt-8 flex">
        <Frames />
      </div>
    </main>
  )
}
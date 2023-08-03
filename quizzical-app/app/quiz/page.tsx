import type { Metadata } from "next"
import Frames from "./components/Frames"

export const metadata: Metadata = {
  title: 'Quiztime',
  description: 'Created by Aryan Malik'
}

export default function page() {
  return (
    <main className="relative overflow-hidden h-screen flex items-center justify-center">
      <div className="yellow-circle absolute w-96 h-96 bg-[#fffad1] rounded-full -top-72 -right-60"></div>
      <div className="blue-circle absolute w-48 h-36 bg-[#deebf8] rounded-full -bottom-24 -left-32"></div>
      <div className="z-10">
        <Frames />
      </div>
    </main>
  )
}
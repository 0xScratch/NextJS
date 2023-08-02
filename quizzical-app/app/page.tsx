import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className="relative overflow-hidden h-screen flex items-center justify-center">
      <div className="yellow-circle absolute w-96 h-96 bg-[#fffad1] rounded-full -top-64 -right-56"></div>
      <div className="blue-circle absolute w-48 h-36 bg-[#deebf8] rounded-full -bottom-16 -left-24"></div>
      <div className="z-10">
        <Hero />
      </div>
    </main>

  )
}

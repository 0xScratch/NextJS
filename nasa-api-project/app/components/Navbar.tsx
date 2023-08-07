import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between top-0 mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">
        <Link href="/">GalaxyViewer</Link>
      </h1>
      <Search />
    </nav>
  )
}
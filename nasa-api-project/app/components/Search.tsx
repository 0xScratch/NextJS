'use client'

import { useState, FormEvent} from 'react'
import { useRouter } from "next/navigation"

export default function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}`)
    }

    return (
        <form className='w-50 flex justify-center' onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search..'
                className='bg-white p-2 w-80 text-xl rounded-xl'
            />
            <button className='p-2 text-xl rounded-xl ml-2 font-bold bg-indigo-500'>
                🚀
            </button>
        </form>
    )
}
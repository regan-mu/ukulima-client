'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="p-5 h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <button className="bg-green-500 px-4 py-2 rounded-3xl mt-2"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
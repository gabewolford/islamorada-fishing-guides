'use client'

import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col h-screen justify-center items-center mx-auto">
      <h1 className="text-3xl lg:text-5xl font-bold mb-8">Page Not Found</h1>
      <h3 className="mb-4">That one got away... 🐟</h3>
      <button
        type="button"
        className="text-white medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </div>
  )
}

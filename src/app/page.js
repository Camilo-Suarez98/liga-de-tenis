'use client'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex flex-col items-center justify-start">
      <h1 className="text-5xl my-10">Liga de Tenis Amateur 🎾</h1>
      <h2 className="text-3xl mb-8">¿Te gusta jugar tenis? Esta página es para ti</h2>
      <h3 className="text-2xl mb-8">Aquí podrás encontrar diferentes torneos de tenis en los que puedes inscribirte y participar. ¿Qué esperas?</h3>
      <button
        onClick={() => router.push('/torneos')}
        className="bg-blue-500 rounded-lg p-2 mt-4 transition duration-300 hover:bg-blue-400 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6"
      >
        Ver Torneos
      </button>
    </main>
  )
}

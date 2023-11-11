import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <h1 className="text-5xl my-10">Torneos de Tenis 🎾</h1>
      <h2 className="text-3xl mb-8">¿Eres un apasionado del tenis? Esta página es para ti</h2>
      <h3 className="text-2xl mb-8">Aquí podrás encontrar diferentes torneos de tenis en los que puedes inscribirte y participar. ¿Qué esperas?</h3>
      <Link
        href='/ingresa'
        className="text-xl"
      >
        Click aqui para iniciar sesión
      </Link>
    </main>
  )
}

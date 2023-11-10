import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Liga de Tenis</h1>
      <h2>¿Eres un apasionado del tenis? Esta página es para ti</h2>
      <h3>Aquí podrás encontrar diferentes torneos de tenis en los que puedes inscribirte y participar. ¿Qué esperas?</h3>
      <Link href='/sign-in'>Login</Link>
    </main>
  )
}

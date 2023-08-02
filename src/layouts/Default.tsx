import { Outlet } from "react-router-dom"
import { Header } from "../components/01-Header/Header"
import { Footer } from "../components/02-Footer/Footer"

export function Default() {
  return (
    <main className={`w-full flex flex-col justify-between min-h-screen`}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
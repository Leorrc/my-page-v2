import { FaBars } from 'react-icons/fa'
import logo from '../../../images/logoH.svg'
import { Link } from 'react-router-dom'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  return (
    <>
      <div className='w-full bg-colorFt flex justify-center static border-b border-shapeDark'>

        <header className="w-full h-[82px] flex flex-row justify-between items-center max-w-[1440px] py-0 px-6">

          <div className='flex items-center justify-between'>
            <Link to="/">
              <img
                className="w-full h-full cursor-pointer"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>

          <nav className="flex items-center justify-between max-w-5xl py-0 px-4 lg:px-0">

            <div onClick={toggle1} className="right-0 md:hidden text-2xl cursor-pointer">
              <FaBars className="text-Ttitle" />
            </div>

            <ul className="hidden text-base text-text md:flex gap-7 hover:transition-colors">

              <li className="text-center items-start">
                <Link
                  to="/"
                  className="h-full cursor-pointer relative group hover:text-Ttitle"
                >
                  Início
                  <div className="absolute w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-all " />
                </Link>
              </li>

              <li className="text-center">
                <Link
                  to="/about"
                  className="h-full cursor-pointer relative group hover:text-Ttitle"
                >
                  Sobre mim
                  <div className="absolute w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-all " />
                </Link>
              </li>

              <li className="text-center">
                <Link
                  to="/projects"
                  className="h-full cursor-pointer relative group hover:text-Ttitle"
                >
                  Portfólio
                  <div className="absolute w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-all " />
                </Link>
              </li>

              <li className="text-center">
                <Link
                  to="/skills"
                  className="h-full cursor-pointer relative group hover:text-Ttitle"
                >
                  Habilidades
                  <div className="absolute w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-all " />
                </Link>
              </li>

              <li className="text-center">
                <Link
                  to="/about"
                  className="h-full cursor-pointer relative group hover:text-Ttitle"
                >
                  Contato
                  <div className="absolute w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-all " />
                </Link>
              </li>

            </ul>
          </nav>

        </header>

      </div>
    </>
  )
}
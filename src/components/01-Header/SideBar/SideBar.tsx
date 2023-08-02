import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

type Props = {
  isOpen: boolean
  toggle: () => void
}

export function SideBar({ isOpen, toggle }: Props) {
  return (
    <>
      <aside
        className={
          isOpen
            ? 'fixed z-[999] h-screen w-screen bg-colorBg top-0 left-0 grid place-content-center ease-in-out duration-300'
            : 'hidden'
        }
      >
        <div className="absolute right-10 toggle top-6">
          <HiX
            onClick={toggle}
            className="text-Ttitle text-2xl cursor-pointer hover:text-primaryHover"
          />
        </div>
        <ul className="grid gap-16 text-white text-3xl cursor-pointer font-bold text-center">
          <li className="">
            <Link
              className="hover:text-primaryHover transition-colors relative group"
              to="/"
              onClick={toggle}
            >
              Início
            </Link>
          </li>
          <li className="">
            <Link
              className="hover:text-primaryHover transition-colors relative group"
              to="/about"
              onClick={toggle}
            >
              Sobre mim
            </Link>
          </li>
          <li className="">
            <Link
              className="hover:text-primaryHover transition-colors relative group"
              to="/projects"
              onClick={toggle}
            >
              Portfólio
            </Link>
          </li>
          <li className="">
            <Link
              className="hover:text-primaryHover transition-colors relative group"
              to="/skills"
              onClick={toggle}
            >
              Habilidades
            </Link>
          </li>
          <li className="">
            <Link
              className="hover:text-primaryHover transition-colors relative group"
              to="/contact"
              onClick={toggle}
            >
              Contato
            </Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

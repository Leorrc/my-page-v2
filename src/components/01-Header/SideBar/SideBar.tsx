import { HiX } from 'react-icons/hi'
import { Link as LinkS } from 'react-scroll'

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
            ? 'fixed z-[999] h-screen w-screen bg-gengar top-0 left-0 grid place-content-center ease-in-out duration-300'
            : 'hidden'
        }
      >
        <div className="absolute right-10 toggle top-6">
          <HiX
            onClick={toggle}
            className="text-white text-2xl cursor-pointer"
          />
        </div>
        <ul className="grid gap-16 text-white text-3xl uppercase cursor-pointer font-bold text-center">
          <li className="">
            <LinkS
              className="titleHeader hover:text-roxo2 transition-colors relative group"
              to="hometop"
              onClick={toggle}
            >
              Home
            </LinkS>
          </li>
          <li className="">
            <LinkS
              className="titleHeader hover:text-roxo2 transition-colors relative group"
              to="IdProject"
              onClick={toggle}
            >
              Portfólio
            </LinkS>
          </li>
          <li className="">
            <LinkS
              className="titleHeader hover:text-roxo2 transition-colors relative group"
              to="IdAbout"
              onClick={toggle}
            >
              Sobre mim
            </LinkS>
          </li>
          <li className="">
            <LinkS
              className="titleHeader hover:text-roxo2 transition-colors relative group"
              to="IdSkill"
              onClick={toggle}
            >
              Habilidades
            </LinkS>
          </li>
          <li className="">
            <LinkS
              className="titleHeader hover:text-roxo2 transition-colors relative group"
              to="IdContact"
              onClick={toggle}
            >
              Contato
            </LinkS>
          </li>
        </ul>
      </aside>
    </>
  )
}

import { FaBars } from 'react-icons/fa'
import logo from '../../../images/logo1.svg'
import { Link as LinkS } from 'react-scroll'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  return (
    <>
      <header className="fixed top-0 left-0 z-[100] w-full border-b-2 border-white bg-headerColor">
        <nav className="flex items-center justify-between max-w-5xl h-[72px] ml-auto mr-auto py-0 px-4">
          <LinkS to="hometop">
            <img
              className="w-auto h-[72px] cursor-pointer"
              src={logo}
              alt="Logo"
            />
          </LinkS>
          <div onClick={toggle1} className="md:hidden text-2xl cursor-pointer ">
            <FaBars className="text-white" />
          </div>

          <ul className="hidden md:flex gap-7 text-white capitalize font-display text-lg">
            <LinkS to="hometop" offset={-72}>
              <li className="text-center">
                <div className="h-full cursor-pointer">Início</div>
              </li>
            </LinkS>
            <LinkS to="IdProject" offset={-72}>
              <li className="text-center">
                <div className="h-full cursor-pointer">Portfólio</div>
              </li>
            </LinkS>
            <LinkS to="IdAbout" offset={-72}>
              <li className="text-center">
                <div className="h-full cursor-pointer">Sobre mim</div>
              </li>
            </LinkS>
            <LinkS to="IdSkill" offset={-72}>
              <li className="text-center">
                <div className="h-full cursor-pointer">Habilidades</div>
              </li>
            </LinkS>
            <LinkS to="IdContact" offset={-72}>
              <li className="text-center">
                <div className="h-full cursor-pointer">Contato</div>
              </li>
            </LinkS>
          </ul>
        </nav>
      </header>
    </>
  )
}

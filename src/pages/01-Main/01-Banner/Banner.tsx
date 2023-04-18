import img from '../../../images/1.png'
import { FaAngleDown, FaDownload } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'

export function Banner() {
  return (
    <>
      <section
        className="bg-gradient-to-r from-bg1 to-bg2 min-h-screen py-96 px-3"
        id="hometop"
      >
        <div className="grid font-display text-white text-lg  mx-auto my-auto justify-center items-center">
          <div className=" md:px-4">
            <span className="md:text-xl">Oi, eu sou</span>
            <h1 className="text-amarelo text-3xl font-bold sm:text-5xl md:text-7xl">
              Leonardo Carvalho
            </h1>
            <strong className="text-xl font-semibold  md:text-3xl">
              Desenvolvedor FULL-STACK
            </strong>
          </div>
          <div className="flex gap-1 mt-8 cursor-pointer md:px-4">
            <LinkS to="IdProject" offset={-72}>
              <button className="flex items-center gap-1 bg-amarelo rounded-md justify-center py-3 px-4 text-headerColor text-lg font-medium hover:transition-colors hover:bg-amarelo/90">
                Ver Projetos
                <FaAngleDown className="text-xl" />
              </button>
            </LinkS>
            <a
              href="https://drive.google.com/file/d/1ClawN-8ry4f1AIhX_3pJfDDqtQUg2G6a/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-3 bg-headerColor border rounded-md justify-center py-3 px-4
            hover:transition-colors hover:bg-color2 hover:text-white
            "
            >
              Baixar CV
              <FaDownload className="text-xl" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

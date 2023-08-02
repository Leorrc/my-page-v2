import { Techs } from "../components/Skills/Techs";
import icon from '../assets/hability.svg'

export function Skills() {
  return (
    <>
      <section className='w-full items-center justify-center flex px-7'>
        <div className="flex flex-col gap-16">

          <div className='flex flex-col items-center'>

            <header className='py-10 px-8'>
              <div className='flex items-center justify-center'>
                <h2 className="flex justify-center gap-4 text-Ttitle text-center items-center w-full font-bold text-3xl lg:text-4xl">
                  <img src={icon} alt="" />
                  Minhas Habilidades
                </h2>
              </div>
            </header>

            <p className="text-textLightOn text-justify leading-7 max-w-3xl">
              Através dos meus estudos, pude desenvolver um sólido repertório de
              habilidades e conceitos relacionados à Ciência da Computação e
              desenvolvimento Web.
            </p>
            <p className="text-textLightOn text-justify mt-4 leading-7 max-w-3xl">
              Desde então, dedico muito do meu tempo livre pesquisando e criando
              novos projetos que me ajudem a aprimorar meus conhecimentos na
              utilização desses conceitos, bem como minhas habilidades como
              desenvolvedor, visando criar melhores soluções e experiências.
            </p>
          </div>

          <Techs />

        </div>
      </section>
    </>
  )
}
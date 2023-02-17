import { Tecs } from './tecs/Tecs'

export function Skills() {
  return (
    <>
      <section
        className="bg-headerColor min-h-screen py-20 px-5 md:p-20 md:m0auto"
        id="IdSkill"
      >
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-white text-center w-full font-bold text-3xl font-display md:text-4xl lg:text-5xl lg:mb-8">
            Minhas Habilidades
          </h2>
          <p className="text-white text-justify leading-7 max-w-3xl font-display">
            Através dos meus estudos, pude desenvolver um sólido repertório de
            habilidades e conceitos relacionados à Ciência da Computação e
            desenvolvimento Web.
          </p>
          <p className="text-white text-justify leading-7 max-w-3xl font-display">
            Desde então, dedico muito do meu tempo livre pesquisando e criando
            novos projetos que me ajudem a aprimorar meus conhecimentos na
            utilização desses conceitos, bem como minhas habilidades como
            desenvolvedor, visando criar melhores soluções e experiências.
          </p>
          <Tecs />
        </div>
      </section>
    </>
  )
}

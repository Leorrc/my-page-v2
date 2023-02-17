import avatar from '../../../images/avatar1.svg'

export function About() {
  return (
    <>
      <section className="bg-gengar min-h-screen" id="IdAbout">
        <div className="flex flex-col p-20 px-5">
          <h2 className="text-white text-center w-full font-bold text-3xl font-display md:text-4xl lg:text-5xl lg:mb-8">
            Sobre mim
          </h2>
          <div className="flex flex-col mx-auto lg:flex-row-reverse lg:justify-center lg:items-center lg:gap-20 lg:py-24">
            <div className="flex flex-col gap-8 items-center my-10">
              <p className="text-white text-justify leading-7 max-w-lg font-display">
                Meu nome é
                <span className="font-bold text-amarelo"> Leonardo </span> e eu
                sou extremamente fascinado por tecnologia, sendo estudante em
                <span className="font-bold text-amarelo">
                  {' '}
                  Ciência da Computação.
                </span>
              </p>
              <p className="text-white text-justify leading-7 max-w-lg font-display">
                Após um período sabático da faculdade, tive experiências
                interessantes atuando em outras áreas além da TI, no entanto,
                como eu sempre soube, meu lugar é na programação.
              </p>
              <p className="text-white text-justify leading-7 max-w-lg font-display">
                Assim, retornei de vez ao universo de tecnologia e, desde então,
                tenho aprofundado meus estudos e conhecimentos na área de
                desenvolvimento voltado ao
                <span className="font-bold text-amarelo"> Front-End. </span>
              </p>
              <p className="text-white text-justify leading-7 max-w-lg font-display">
                Como forma de continuar me especializando, decidi seguir um novo
                rumo no
                <span className="font-bold text-amarelo"> Back-End </span>
                que pode me abrir perspectivas e conhecimentos diferenciados.
              </p>
            </div>
            <div className="mx-auto">
              <div className="max-w-[15rem] shadow-xl ">
                <img
                  src={avatar}
                  alt="avatar leo"
                  className="bg-cover max-w-full h-auto block"
                />
                <div className="p-5 font-bold text-white text-lg bg-roxo2 rounded-b-xl text-center">
                  <h3 className="">Leonardo Carvalho</h3>
                  <h4 className="">Desenvolvedor </h4>
                  <h4 className="">Full-Stack</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

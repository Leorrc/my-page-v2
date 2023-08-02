import avatar from '../images/newAvatar.png'
import icon from '../assets/about.svg'
import { Divider } from '../components/Dividers/Divider'

export function About() {
  return (
    <section className='w-full items-center justify-center flex px-7'>
      <div className="flex flex-col">

        <header className='py-10 px-8'>
          <div className='flex items-center justify-center'>
            <h2 className="flex justify-center gap-4 text-Ttitle text-center items-center w-full font-bold text-3xl lg:text-4xl">
              <img src={icon} alt="" />
              Sobre mim
            </h2>
          </div>
        </header>

        <Divider />

        <div className='flex flex-col gap-4 mt-8'>
          <div className="flex flex-col gap-8 mx-auto lg:flex-row-reverse lg:justify-center lg:items-center lg:gap-20 lg:py-24">
            <div className="flex flex-col gap-4 items-center">
              <p className="text-justify leading-7 max-w-lg font-display">
                Meu nome é
                <span className="font-bold text-Ttitle"> Leonardo </span> e eu
                sou extremamente fascinado por tecnologia, sendo estudante em
                <span className="font-bold text-Ttitle">
                  {' '}
                  Ciência da Computação.
                </span>
              </p>
              <p className="text-textLightOn text-justify leading-7 max-w-lg font-display">
                Após um período sabático da faculdade, tive experiências
                interessantes atuando em outras áreas além da TI, no entanto,
                como eu sempre soube, meu lugar é na programação.
              </p>
              <p className="text-textLightOn text-justify leading-7 max-w-lg font-display">
                Assim, retornei de vez ao universo de tecnologia e, desde então,
                tenho aprofundado meus estudos e conhecimentos na área de
                desenvolvimento voltado ao
                <span className="font-bold text-Ttitle"> Front-End. </span>
              </p>
              <p className="text-textLightOn text-justify leading-7 max-w-lg font-display">
                Como forma de continuar me especializando, decidi seguir um novo
                rumo no
                <span className="font-bold text-Ttitle"> Back-End </span>
                que pode me abrir perspectivas e conhecimentos diferenciados.
              </p>
            </div>

            <div className="mx-auto">

              <div className="max-w-[15rem] shadow-xl">
                <img
                  src={avatar}
                  alt="avatar leo"
                  className="bg-cover max-w-full h-auto block"
                />

                <div className="bg-shape p-5 font-bold text-lg rounded-b-xl text-center border-b-4 border-primary">
                  <h3 className="text-white">Leonardo Carvalho</h3>
                  <h4 className="text-Tbase">Desenvolvedor </h4>
                  <h4 className="text-Tbase">Full-Stack</h4>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

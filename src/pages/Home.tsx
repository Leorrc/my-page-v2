import { FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className='w-full max-w-[1120px] items-center justify-center flex mx-auto px-7'>
      <div className="flex flex-col items-center justify-center w-full my-auto text-lg lg:flex-row lg:justify-between lg:pb-24 lg:gap-20">

        <div className="w-full lg:mt-[70px] lg:pl-4">
          <span className="md:text-xl">Olá, eu sou</span>
          <h1 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl">
            Leonardo Carvalho
          </h1>
          <p className="text-base md:text-xl">
            Desenvolvedor FULL-STACK
          </p>

          <div className="flex flex-col gap-4 mt-10 text-white cursor-pointer md:flex-row lg:max-w-sm">
            <a
              href="https://drive.google.com/file/d/1_bb5mcUYFl7iLoRxr-4_pm5TxP1LeZTm/view?usp=sharing"
              target="_blank"
              className="bg-primary w-full h-10 p-5 rounded-[5px] justify-center items-center gap-3 inline-flex text-sm font-bold uppercase leading-tight hover:bg-rLight transition-all ">
              Baixar CV
              <FaDownload className="text-xl" />
            </a>

            <Link className='bg-colorBg w-full h-10 p-5 rounded-[5px] border border-primary justify-center items-center gap-3 inline-flex hover:bg-primaryHover transition-colors' to="/about">
              <button className="text-sm font-bold uppercase leading-tight">
                Ver Projetos
              </button>
            </Link>
          </div>
        </div>

        <div className='max-w-md lg:mx-0 md:place-content-end lg:-mt-8'>
          <iframe src="https://lottie.host/?file=a1470bce-2461-4462-b50b-ae5035c34183/3WNQ3EUqFt.json"
            className="w-72 h-80 lg:w-[350px] lg:h-[350px]"
          />
        </div>

      </div>
    </section>
  )
}
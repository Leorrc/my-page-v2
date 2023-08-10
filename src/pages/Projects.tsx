import { FaGithub } from 'react-icons/fa'
import { useQuery } from 'react-query'
import { api } from '../services/global/api'
import { Divider } from '../components/Dividers/Divider'
import icon from '../assets/pro.svg'

export function Projects() {
  const { data } = useQuery('repo-list', api.getRepos)

  return (
    <section className='w-full items-center justify-center flex px-3'>
      <div className="flex flex-col items-center">

        <div className="flex flex-col gap-4 py-10 px-8">
          <h2 className="flex justify-center gap-4  text-Ttitle text-center items-center w-full font-bold text-3xl lg:text-4xl">
            <img src={icon} alt="" />
            Projetos Recentes
          </h2>
          <p className="text-base text-justify leading-7 max-w-3xl font-display mx-auto ">
            Novos desafios são sempre uma fonte de motivação para mim, por isso
            sempre gosto de ter novos projetos em andamento. Veja algumas das
            aplicações às quais dediquei meu tempo.
          </p>
          <div className='mt-4'>
            <Divider />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 items-center mt-4 xl:grid-cols-3">

          {data?.map(repo => {
            return (
              <div key={repo.name}>
                <div className='bg-shape flex w-[394px] min-w-[320px] h-[392px] flex-col items-center ltr rounded p-5'>
                  <div className='ps-8 pe-8'>
                    <img
                      src={repo?.image}
                      alt="mockup"
                      className="border border-primaryHover"
                    />
                  </div>

                  <div className='w-full mt-5 gap-2 flex flex-col px-3'>
                    <p className='text-lg font-bold text-Ttitle'>{repo.name}</p>
                    <p className='text-sm text-Tsupport'>{repo?.description}</p>
                  </div>

                  <div className="flex flex-col gap-2 mt-4 text-white cursor-pointer w-full">
                    <a
                      href={repo?.live}
                      target="_blank"
                      className="flex items-center bg-primary justify-center w-full h-10 p-5 rounded-[5px] hover:bg-rLight transition-all text-sm gap-2"
                    >
                      Projeto ao vivo
                    </a>

                    <a
                      href={repo?.git}
                      target="_blank"
                      className="flex items-center bg-primary justify-center w-full h-10 p-5 rounded-[5px] hover:bg-rLight transition-all  text-sm gap-2"
                    >
                      <FaGithub className="text-lg" /> Repositório
                    </a>

                  </div>
                </div>

              </div>
            )
          })}


          {/* {data?.map(repo => (
            <article className="flex flex-col bg-shape rounded h-full"
              key={repo.name}>
              <div className="overflow-hidden flex-1">
                <picture>
                  <img
                    src={repo?.image}
                    alt="mockup"
                    className="max-w-[100%] object-cover w-full h-full align-middle"
                  />
                </picture>
              </div>

              <div
                className="flex flex-col justify-between flex-1 gap-4 px-4 py-5 text-Ttitle lg:px-7"
                key={repo.name}
              >
                <h3 className="font-bold text-xl text-center lg:text-3xl lg:m-0">
                  {repo?.name}
                </h3>
                <p className="text-Tbase text-sm leading-7 px-5 lg:text-base">
                  {repo?.description}
                </p>

                <div className="flex flex-col justify-between gap-4 text-white cursor-pointer px-5 lg:flex-row">
                  <a
                    href={repo?.live}
                    target="_blank"
                    className="flex items-center bg-primary justify-center w-full h-10 p-5 rounded-[5px] hover:bg-rLight transition-all text-sm gap-2"
                  >
                    Projeto ao vivo
                  </a>

                  <a
                    href={repo?.git}
                    target="_blank"
                    className="flex items-center bg-primary justify-center w-full h-10 p-5 rounded-[5px] hover:bg-rLight transition-all  text-sm gap-2"
                  >
                    <FaGithub className="text-lg" /> Repositório
                  </a>

                </div>
              </div>

            </article>
          ))} */}


        </div>

        <div className="items-center text-center mt-4">
          <p className="text-white text-justify leading-7 font-display">
            Você pode conferir outros projetos que desenvolvi no meu{' '}
            <a
              href="https://github.com/Leorrc"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-xl mb-2 text-amarelo"
            >
              Github!
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}

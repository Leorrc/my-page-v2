import { MdAdsClick } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { useQuery } from 'react-query'
import { api } from '../../../services/global/api'

export function Projects() {
  const { data } = useQuery('repo-list', api.getRepos)

  return (
    <>
      <section
        className="bg-gengar min-h-screen flex flex-col text-center py-20 px-4 md:p-20 md:m0auto"
        id="IdProject"
      >
        <div className="grid gap-8">
          <h2 className="text-white text-center w-full font-bold text-3xl font-display md:text-4xl lg:text-5xl">
            Projetos Recentes
          </h2>
          <p className="text-white text-justify leading-7 max-w-3xl font-display mx-auto ">
            Novos desafios são sempre uma fonte de motivação para mim, por isso
            sempre gosto de ter novos projetos em andamento. Veja algumas das
            aplicações às quais dediquei meu tempo.
          </p>
        </div>

        <div className="flex flex-col mt-8 gap-6 items-center">
          {data?.map(repo => (
            <article
              className="flex flex-col bg-headerColor rounded overflow-hidden shadow-lg max-w-md min-h-[17.25rem] lg:max-w-6xl lg:flex-row lg:flex-1 "
              key={repo.name}
            >
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
                className="flex flex-col justify-between flex-1 gap-4 px-4 py-5 lg:px-7"
                key={repo.name}
              >
                <h3 className="font-bold text-xl text-amarelo lg:text-3xl lg:m-0">
                  {repo?.name}
                </h3>
                <p className="text-white text-justify text-sm leading-7 font-display m-0 lg:text-base">
                  {repo?.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={repo?.live}
                    target="_blank"
                    className="flex items-center gap-1 text-white bg-color rounded-md p-1 w-36 h-10 justify-center text-sm hover:bg-color2"
                  >
                    <MdAdsClick className="text-lg" /> Projeto ao vivo
                  </a>
                  <a
                    href={repo?.git}
                    target="_blank"
                    className="flex items-center gap-1 text-white bg-color rounded-md p-1 w-36 h-10 justify-center text-sm hover:bg-color2"
                  >
                    <FaGithub className="text-lg" /> Repositório
                  </a>
                </div>
              </div>
            </article>
          ))}
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
    </>
  )
}

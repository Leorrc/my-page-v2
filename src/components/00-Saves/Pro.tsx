import { useQuery } from 'react-query'
import { api } from '../../services/global/api'

export type Repo = {
  name: string
  image: string
  description: string
}

export function Pro() {
  const { data } = useQuery('repo-list', api.getRepos)

  return (
    <>
      <section className="bg-gengar min-h-screen">
        <div className="flex flex-col p-20 px-5">
          <h2 className="text-white text-center w-full font-bold text-3xl font-display">
            TESTE 4
          </h2>
          <div className="flex flex-col gap-4 mx-auto">
            {data?.map(repo => (
              <div
                className="bg-headerColor max-w-sm rounded overflow-hidden shadow-lg"
                key={repo.name}
              >
                <img src={repo?.image} alt="" />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-amarelo">
                    <h2 className="text-white text-center w-full font-bold text-3xl font-display">
                      {repo?.name}
                    </h2>
                  </div>
                  <p className="text-white text-justify leading-7 max-w-lg font-display">
                    {repo?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import axios from 'axios'
import { useEffect, useState } from 'react'

const repo_names = ['my-page', 'site-atc', 'juliana-interior-designer']

export type Repo = {
  name: string
  image: string
  description: string
}

export function About2() {
  const [repositories, setRepositories] = useState<Repo[]>()

  useEffect(() => {
    async function getRepos() {
      try {
        const repos_Promises = repo_names.map(
          async repo =>
            await axios.get(
              `https://raw.githubusercontent.com/Leorrc/${repo}/master/project-info.json`
            )
        )

        const repos_data = await Promise.all(repos_Promises).then(responses =>
          responses.map(response => response.data)
        )
        setRepositories(repos_data)
      } catch (e) {}
    }

    getRepos()
  }, [])

  return (
    <>
      <section className="bg-gengar min-h-screen">
        <div className="flex flex-col p-20 px-5">
          <h2 className="text-white text-center w-full font-bold text-3xl font-display">
            rafa
          </h2>
          <div className="flex flex-col gap-4 mx-auto">
            {repositories?.map(repo => (
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

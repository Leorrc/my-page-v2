import axios from 'axios'
import { createRepoKey } from './keys'

const URL = 'https://raw.githubusercontent.com/Leorrc'
const repo_names = ['juliana-interior-designer', 'site-atc', 'SiteMaria','pokedex', 'my-page-v2']

async function getRepos() {
  createRepoKey()
    try {
      const repos_Promises = repo_names.map(
        async repo => await axios.get(`${URL}/${repo}/master/project-info.json`)
      )

      const repos_data = await Promise.all(repos_Promises).then(responses =>
        responses.map(response => response.data)
      )

      return repos_data
      
    } catch (e) {}
  }

export const api = {
  getRepos
}

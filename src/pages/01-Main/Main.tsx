import { Footer } from '../../components/02-Footer/Footer'
import { Divider } from '../../components/Dividers/Divider'
import { Banner } from './01-Banner/Banner'
import { About } from './02-About/About'
import { Skills } from './03-Skills/Skills'
import { Projects } from './04-Projects/Projects'

export function Main() {
  return (
    <>
      <Banner />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
    </>
  )
}

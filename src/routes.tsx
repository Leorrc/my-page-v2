import { createBrowserRouter } from "react-router-dom"
import { Default } from "./layouts/Default"
import { Home } from "./pages/Home"
import { About } from "./pages/About"

import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/skills',
        element: <Skills />
      },
    ]
  }
])
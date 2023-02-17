import './styles/global.css'
import { Header } from './components/01-Header/Header'
import { Main } from './pages/01-Main/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/02-Footer/Footer'

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  )
}

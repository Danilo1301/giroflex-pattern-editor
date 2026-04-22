import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Patterns from './pages/patterns/Patterns'

function App() {
  return (
    <>
      <Routes>
        <Route path="/giroflex-pattern-editor/" element={<Home />} />
        <Route path="/giroflex-pattern-editor/patterns" element={<Patterns />} />
      </Routes>
    </>
  )
}

export default App

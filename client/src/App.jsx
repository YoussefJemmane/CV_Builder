
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ResumeForm from './components/Form'
import List from './components/List'
import Template from './components/Template'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<ResumeForm />} />
          <Route path="/template/:id" element={<Template />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

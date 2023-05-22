
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ResumeForm from './components/Form'
import List from './components/List'
import Template from './components/Template'
import Template1 from './components/Template1'
import Home from './components/Home'
import DownloadTemplate1 from './components/DownloadTemplate1'
import DownloadTemplate2 from './components/DownloadTemplate2'
import DownloadTemplate3 from './components/DownloadTemplate3'
import Template2 from './components/Template2'
import Template3 from './components/Template3'


function App() {
  

  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/create" element={<ResumeForm />} />
          <Route path="/template/:id" element={<Template />} />
          <Route path="/template1/:id" element={<Template1 />} />
          <Route path="/template2/:id" element={<Template2 />} />
          <Route path="/template3/:id" element={<Template3 />} />
          <Route path="/download/template1/:id" element={<DownloadTemplate1 />} />
          <Route path="/download/template2/:id" element={<DownloadTemplate2 />} />
          <Route path="/download/template3/:id" element={<DownloadTemplate3 />} />

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

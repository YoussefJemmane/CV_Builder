
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/Form"
import Home from "./components/Home"
import List from "./components/List"
import Login from "./components/Login"
import Register from "./components/Register"
import Template from "./components/Template"
import Template1 from "./components/Template1"
import { AuthContextProvider } from "./context/AuthContext"
import { ResumesContextProvider } from "./context/ResumesContext"
import { useState } from "react"
import DownloadTemplate1 from "./components/DownloadTemplate1"
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  // Set the user state here, e.g., after a login action

  const logout = () => {
    // Clear user data and token
    setUser(null);
    // You may also need to clear any tokens saved in localStorage or sessionStorage
    
    // localStorage.removeItem('token');
  };

  return (
    <>
      <AuthContextProvider value={{ user ,logout}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthContextProvider children={<Login />} />} />
            <Route path="/register" element={<AuthContextProvider children={<Register />} />} />
            <Route path="/create" element={<Form />} />
            <Route path="/list" element={<AuthContextProvider children={< ResumesContextProvider children={<List />} />} />} />
            <Route path="/template/:id" element={<AuthContextProvider children={< ResumesContextProvider children={<Template />} />} />} />
            <Route path="/template1/:id" element={<AuthContextProvider children={< ResumesContextProvider children={<Template1 />} />} />} />
            <Route path="/download/template1/:id" element={<AuthContextProvider children={< ResumesContextProvider children={<DownloadTemplate1/>} />} />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"
import Navbar from "./Navbar"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
    if (!error) {
      navigate('/');
    }
  }
  return (
    <>
      <Navbar />
      <form className="login bg-base-200  min-h-screen" >
        <section class=" dark:bg-gray-900" >
          <div class="flex flex-wrap items-center justify-center p-[120px]" >
            <div className="card w-96 bg-base-100 shadow-xl" data-theme="emerald">
              <div className="card-body">
                <h2 className="card-title">Sign in to your account</h2>
                <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label for="email" class="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e) => setEmail(e.target.value)}
                      value={email} />
                  </div>
                  <div>
                    <label for="password" class="block mb-2 text-sm font-medium dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPassword(e.target.value)}
                      value={password} />
                  </div>
                  <p class=" text-sm font-light dark:text-gray-400">
                    Don’t have an account yet? <a href="/register" class="font-medium text-blue-600 underline hover:underline dark:text-primary-500">Sign up</a>
                  </p>
                  <p class="text-sm font-light text-red-500 dark:text-red-400">
                    {error && <div className="error">{error}</div>}
                  </p>
                </form>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={handleSubmit} >Sign in</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  )
}

export default Login
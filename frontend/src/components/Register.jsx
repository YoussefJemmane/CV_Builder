import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"
import Navbar from "./Navbar"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { signup, error, isLoading } = useSignup()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(name, email, password)
    if (!error) {
      navigate('/login');
    }

  }

  return (
    <>
      <Navbar />
      <form className="signup bg-base-200  min-h-screen" onSubmit={handleSubmit}>
        <section className=" dark:bg-gray-900" >
          <div className="flex flex-wrap items-center justify-center p-[120px]" >
            <div className="card w-96 bg-base-100 shadow-xl" data-theme="emerald">
              <div className="card-body">
                <h2 className="card-title">Sign in to your account</h2>
                <div className="space-y-4 md:space-y-6" >
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium  dark:text-white">Your Name</label>
                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jhon Doe" required="" onChange={(e) => setName(e.target.value)}
                      value={name} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e) => setEmail(e.target.value)}
                      value={email} />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPassword(e.target.value)}
                      value={password} />
                  </div>
                  <p className="text-sm font-light dark:text-gray-400">
                    You have an account? <a href="/login" className="font-medium  text-blue-600 underline text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                  </p>
                  <p className="text-sm font-light text-red-500 dark:text-red-400">
                    {error && <div className="error">{error}</div>}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
                </div>

              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  )
}

export default Register
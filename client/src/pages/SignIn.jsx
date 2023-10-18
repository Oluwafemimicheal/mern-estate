import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    try {
      setLoading(true)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json()
      if(data.success === false){
        setError(data.message)
        setLoading(false)
        return;
      }
      setLoading(false)
      setError(null)
      navigate('/sign-in')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }
 

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-slate-700 text-2xl sm:text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="username" className="border p-3 rounded-lg outline-cyan-500" id="username" onChange={handleChange}/>
      <input type="password" placeholder="password" className="border p-3 rounded-lg outline-cyan-500" id="password" onChange={handleChange}/>
      <button disabled={loading} className="text-white bg-slate-500 rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
        {loading ? 'Loading...' : 'Sign Up'}
      </button>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Do not have an account?</p>
        <Link to='/sign-up'>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-700'>{error}</p>}
    </div>
  )
}

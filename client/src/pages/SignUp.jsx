import {Link} from 'react-router-dom'
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-slate-500 text-2xl sm:text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
      <input type="text" placeholder="username" className="border p-3 rounded-lg focus:outline-none" id="username"/>
      <input type="text" placeholder="email" className="border p-3 rounded-lg focus:outline-none" id="email"/>
      <input type="text" placeholder="password" className="border p-3 rounded-lg focus:outline-none" id="password"/>
      <button className="text-white bg-slate-500 rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">sign up</button>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  )
}

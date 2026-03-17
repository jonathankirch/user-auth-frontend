import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <section className="text-center mb-10 mt-14">
        <h1 className="text-3xl font-bold mb-5">Welcome back, [username]</h1>
        <p>Account created at: [date]</p>
      </section>

      <section className="flex flex-col justify-center items-center">
        <button
          onClick={() => navigate('/account')}
          className="bg-gray-600 border border-gray-950 rounded p-1 text-gray-300 font-bold">
          Account Settings
        </button>
        <button className="bg-gray-600 border border-gray-950 rounded p-1 text-red-400 font-bold mt-1">
          Logout Account
        </button>
      </section>
    </>
  )
}

export default Home

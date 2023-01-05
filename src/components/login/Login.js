import './login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [handle, setHandle] = useState('')
  const [password, setPassword] = useState('')
  const user = { handle: handle, password: password }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await fetch(
      'https://chitter-backend-api-v2.herokuapp.com/sessions',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session: user }),
      },
    )

    if (response.status !== 201) {
      setPassword('')
      setHandle('')
      alert('Incorrect Details')
      window.location.reload()
    } else {
      let data = await response.json()
      window.localStorage.setItem('session_key', data.session_key)
      window.localStorage.setItem('user_id', data.user_id)
      window.location.reload()
    }
  }
  const handleHandleChange = (e) => {
    e.preventDefault()
    setHandle(e.target.value)
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <label>Handle : </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="handle"
          required
          value={handle}
          onChange={handleHandleChange}
        ></input>
        <label>Password : </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default Login

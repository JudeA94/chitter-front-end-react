import './login.css'
import { useState } from 'react'

const Login = () => {
  const [handle, setHandle] = useState('')
  const [password, setPassword] = useState('')
  const user = { handle, password: password }


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
      window.localStorage.setItem('handle', handle)
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
        <label></label>
        <input
          type="text"
          placeholder="Enter Username"
          name="handle"
          required
          value={handle}
          onChange={handleHandleChange}
          id="handle"
        ></input>
        <label></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
          id="password"
        ></input>
        <button type="submit" id="login-btn">Login</button>
      </div>
    </form>
  )
}

export default Login

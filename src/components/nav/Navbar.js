import { Link } from 'react-router-dom'
import Login from '../login/Login'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem('user_id')
    window.localStorage.removeItem('session_id')
    navigate('/')
  }

  if (window.localStorage.getItem('user_id')) {
    return (
      <nav className="navbar">
        <h1>Chitter</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <button onClick={logout}>Log out</button>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="navbar">
        <h1>Chitter</h1>
        <div className="links">
          <Link to="/">Home</Link>

          <Login />
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navbar

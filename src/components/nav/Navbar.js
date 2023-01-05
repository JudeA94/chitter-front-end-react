import { Link } from 'react-router-dom'
import Login from '../login/Login'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem('user_id')
    window.localStorage.removeItem('session_key')
    navigate("/")
  }

  if (window.localStorage.getItem('user_id')) {
    return (
      <nav className="navbar">
        <Link to="/" style={{textDecoration: "none"}}>
          <h1>Chitter</h1>
        </Link>
        <div className="links">
          <Link to="/account">My Account</Link>
          <button onClick={logout}>Log out</button>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="navbar">
        <Link to="/" style={{textDecoration: "none"}}>
          <h1>Chitter</h1>
        </Link>
        <div className="links">
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

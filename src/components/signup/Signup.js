import "./signup.css"
import { useState } from "react"
import { useNavigate} from "react-router-dom"

const Signup = () => {
  const [handle, setHandle] = useState('')
  const [password, setPassword] = useState('')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate();

  const handleHandleChange = (e) => {
    e.preventDefault();
    setHandle(e.target.value)
  }
  
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { handle, password };
    setIsPending(true)
    console.log(user)
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({"session": {"handle":handle, "password":password}})
    }).then((response) => {
      if(response.status === 201) {
        navigate('/')
      } else {
        navigate('/signup')
      }
      // CHECK USER DOESNT ALREADY EXIST ETC
      // setHandle(handle)
      // setPassword(password)
      // setIsPending(false)
 
    })
  }


  return ( 
    <div className="signup">
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <label>Handle:</label>
        <input type="text" required value={handle} onChange={handleHandleChange}></input>
        <label>Password:</label>
        <input type="password" required value={password} onChange={handlePasswordChange}></input>
        {!isPending && <button>Sign up</button>}
        {isPending && <button disabled>Signing up...</button>}
      </form>
    </div>
   );
}
 
export default Signup;
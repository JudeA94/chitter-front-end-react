import { useState } from 'react'
import PeepList from './components/PeepList/PeepList'
import useFetch from './useFetch'

const Home = () => {
  const { data: peeps, isPending, error } = useFetch(
    'https://chitter-backend-api-v2.herokuapp.com/peeps',
  )
  const [newPeep, setNewPeep] = useState('')

  const submitNewPeep = () => {
    return fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${window.localStorage.getItem(
          'session_key',
        )}`,
      },
      body: JSON.stringify({
        peep: {
          user_id: window.localStorage.getItem('user_id'),
          body: newPeep,
        },
      }),
    }).then((response) => {
      window.location.reload()
    })
  }

  const handleNewPeep = (e) => {
    e.preventDefault()
    setNewPeep(e.target.value)
  }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {window.localStorage.getItem('user_id') && (
        <div className="peep-input">
            <h2>Post a new peep</h2>
          <div className="container">
            <form onSubmit={submitNewPeep}>
              <label>Peep Content: </label>
              <input type="text" required onChange={handleNewPeep}></input>
            </form>
            <button className="peep-btn" onClick={submitNewPeep}>
              Peep
            </button>
          </div>
        </div>
      )}
      {peeps && <PeepList peeps={peeps} title="All Peeps" />}
    </div>
  )
}

export default Home

// -H "Authorization: Token token=a_valid_session_key" \

import './peep.css'
import { useParams, useNavigate } from 'react-router'
import useFetch from '../../useFetch'
import { Link } from 'react-router-dom'
import howLongAgo from '../../HowLongAgo'
import { useState } from 'react'

const Peep = () => {
  const { id } = useParams()
  const { data: peep, error, isPending } = useFetch(
    `https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`,
  )
  const navigate = useNavigate()

  const hasBeenLiked = () => {
    return peep.likes.some(like => like.user.id === parseInt(window.localStorage.getItem('user_id')) && like.user.handle === window.localStorage.getItem('handle'));
  };
  

  // const [like, handleLikeUnlike] = useState(hasBeenLiked);

  const handleDelete = () => {
    return fetch(
      `https://chitter-backend-api-v2.herokuapp.com/peeps/${peep.id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Token token=${window.localStorage.getItem(
            'session_key',
          )}`,
        },
      },
    ).then(() => window.location.reload())
  }

  const handleLike = (e) => {
    e.preventDefault()
    let method;
    method = hasBeenLiked() ? 'DELETE' : 'PUT';
    return fetch(
      `https://chitter-backend-api-v2.herokuapp.com/peeps/${
        peep.id
      }/likes/${window.localStorage.getItem('user_id')}`,
      {
        method: method,
        headers: {
          Authorization: `Token token=${window.localStorage.getItem(
            'session_key',
          )}`,
        },
      },
    ).then(() => window.location.reload());
  }

  return (
    <div className="peep">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {peep && (
        <article>
          <h2>{peep.body}</h2>
          <p>Written by: {peep.user.handle}</p>
          <p>Likes: {peep.likes.length}</p>
          {window.localStorage.getItem('user_id') && (
            <button onClick={handleLike}>Like</button>
          )}
          <p>Posted {howLongAgo(peep)} ago</p>
          {window.localStorage.getItem('user_id') == peep.user.id && (
            <button onClick={handleDelete}>Delete</button>
          )}
        </article>
      )}
    </div>
  )
}

export default Peep

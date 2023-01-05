import { Link } from 'react-router-dom'
import './peeplist.css'
import howLongAgo from "../../HowLongAgo"

const PeepList = ({ peeps, title }) => {
  
  return (
    <div className="peep-list">
      <h2 className="title">{title}</h2>
      {peeps.map((peep) => (
        <div className="peep" key={peep.id}>
          <Link to={`/peeps/${peep.id}`}>
            <h2>{peep.body}</h2>
            <p>Written by: {peep.user.handle}</p>
            <p>Likes: {peep.likes.length}</p>
            <p>Posted {howLongAgo(peep)} ago</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PeepList


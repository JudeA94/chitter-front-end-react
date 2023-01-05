import { Link } from 'react-router-dom'
import './peeplist.css'
import howLongAgo from "../../HowLongAgo"

const PeepList = ({ peeps, title }) => {
  
  return (
    <div className="peep-list">
      <h2>{title}</h2>
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

// [
//   {
//     "id": 3,
//     "body": "my first peep :)",
//     "created_at": "2018-06-23T13:21:23.317Z",
//     "updated_at": "2018-06-23T13:21:23.317Z",
//     "user": {
//       "id": 1,
//       "handle": "kay"
//     },
//     "likes": [{
//       "user": {
//         "id": 1,
//         "handle": "kay"
//       }
//     }]
//   }
// ]

// Posted x hours ago needs doing

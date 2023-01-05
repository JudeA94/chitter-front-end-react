import "./peep.css"
import { useParams } from "react-router";
import useFetch from "../../useFetch"
import { Link } from "react-router-dom";
import howLongAgo from "../../HowLongAgo" 

const Peep = () => {
  const { id } = useParams();
  const { data: peep, error, isPending } = useFetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`)

  return (
    <div className="peep">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {peep && (
        <article>
          <h2>{peep.body}</h2>
          <p>Written by: {peep.user.handle}</p>
          <p>Likes: {peep.likes.length}</p>
          <p>Posted {howLongAgo(peep)} ago</p>
        </article>
      )}
    </div>
  );
}

export default Peep;


import PeepList from "../PeepList/PeepList";
import useFetch from "../../useFetch";

const AccountPage = () => {
  const { data: peeps, isPending, error } = useFetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
  
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {peeps && <PeepList peeps={peeps.filter((peep) => peep.user.id == window.localStorage.getItem('user_id'))} title='My Peeps' />}
    </div>
  );
}

export default AccountPage;


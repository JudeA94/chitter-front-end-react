import PeepList from './components/PeepList/PeepList';
import useFetch from './useFetch';

const Home = () => {
  
  const { data: peeps, isPending, error } = useFetch('https://chitter-backend-api-v2.herokuapp.com/peeps')

  return ( 
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {peeps && <PeepList peeps={peeps} title='All Peeps' />}
    </div>
   );
}
 
export default Home;



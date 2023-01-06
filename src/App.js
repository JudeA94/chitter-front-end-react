import Home from './Home'
import NotFound from './NotFound';
import Navbar from './components/nav/Navbar';
import Signup from './components/signup/Signup';
import Peep from './components/peep/Peep';
import AccountPage from './components/accountPage/accountPage';

import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/peeps/:id" element={<Peep />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

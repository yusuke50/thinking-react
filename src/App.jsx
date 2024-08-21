import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import './App.css';
import Home from './Components/Home';
import FlightsList from './Components/FlightsList';
import PeopleCard from './Components/PeopleCard';

function App() {
  

  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flights' element={<FlightsList />} />
          <Route path='/story' element={<PeopleCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

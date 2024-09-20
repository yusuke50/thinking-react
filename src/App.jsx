import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './components/Home';
import FlightsList from './components/FlightsList';
import PeopleCard from './components/PeopleCard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <div className='main-container'>
          <Sidebar />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/flights' element={<FlightsList />} />
              <Route path='/story' element={<PeopleCard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

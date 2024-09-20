import React, { useState } from 'react';

// Mock data for flights
const flightsData = [
  { id: 1, airline: 'AirOne', from: 'New York', to: 'London', price: 450, departureTime: '09:00' },
  {
    id: 2,
    airline: 'SkyHigh',
    from: 'Los Angeles',
    to: 'Tokyo',
    price: 830,
    departureTime: '13:30',
  },
  {
    id: 3,
    airline: 'EagleWings',
    from: 'Chicago',
    to: 'Paris',
    price: 620,
    departureTime: '11:15',
  },
  {
    id: 4,
    airline: 'OceanAir',
    from: 'Miami',
    to: 'Rio de Janeiro',
    price: 575,
    departureTime: '15:45',
  },
  {
    id: 5,
    airline: 'MountainJet',
    from: 'Denver',
    to: 'Vancouver',
    price: 380,
    departureTime: '10:30',
  },
  {
    id: 6,
    airline: 'Thai Vietjet Air',
    from: 'Taipei',
    to: 'Bangkok',
    price: 300,
    departureTime: '16:30',
  },
];

const FlightsList = () => {
  const [flights, setFlights] = useState(flightsData);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setFilter(filterValue);

    const filteredFlights = flightsData.filter(
      (flight) =>
        flight.airline.toLowerCase().includes(filterValue) ||
        flight.from.toLowerCase().includes(filterValue) ||
        flight.to.toLowerCase().includes(filterValue)
    );

    setFlights(filteredFlights);
  };

  return (
    <div className='main-container  p-4'>
      <h1 className='text-3xl font-bold mb-4'>Flights Listing</h1>

      <input
        type='text'
        placeholder='Filter flights...'
        value={filter}
        onChange={handleFilterChange}
        className='w-full p-2 mb-4 border rounded'
      />

      <div className='grid gap-4'>
        {flights.map((flight) => (
          <div key={flight.id} className='border p-4 rounded shadow'>
            <h2 className='text-xl font-semibold'>{flight.airline}</h2>
            <p>
              {flight.from} to {flight.to}
            </p>
            <p>Departure: {flight.departureTime}</p>
            <p className='font-bold'>Price: ${flight.price}</p>
          </div>
        ))}
      </div>

      {flights.length === 0 && (
        <p className='text-center mt-4'>No flights found matching your filter.</p>
      )}
    </div>
  );
};

export default FlightsList;

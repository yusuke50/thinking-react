import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button className='button button-default' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default Home;

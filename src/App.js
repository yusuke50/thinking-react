import logo from './logo.svg';
import './App.css';
import './my.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>

      <div className='thinking-part'>
        <div className='search-bar'>
          <div className='from-group'>
            <input type='text' placeholder='Search' />
          </div>
          <div className='from-group'>
            <input type='checkbox' name='searchCB' id='searchCB' />
            <label htmlFor='searchCB'>Only show products in stock</label>
          </div>
        </div>

        <div className='stock-grid'>
          <div className='stock-header'>
            <h3>Name</h3>
            <h3>Price</h3>
          </div>

          <div>
            <div className='stock-block'>
              <h3 className='stock-category'>Fruits</h3>

              <div className='stock-detail'>
                <div className='stock-item'>
                  <div className='detail-name'>Apple</div>
                  <div className='detail-price'>$ 1</div>
                </div>

                <div className='stock-item'>
                  <div className='detail-name'>Dragonfruit</div>
                  <div className='detail-price'>$ 1</div>
                </div>

                <div className='stock-item'>
                  <div className='detail-name detail-lack'>Passionfruit</div>
                  <div className='detail-price'>$ 2</div>
                </div>
              </div>
            </div>

            <div className='stock-block'>
              <h3 className='stock-category'>Vegetables</h3>

              <div className='stock-detail'>
                <div className='stock-item'>
                  <div className='detail-name'>Spinach</div>
                  <div className='detail-price'>$ 2</div>
                </div>

                <div className='stock-item'>
                  <div className='detail-name detail-lack'>Pumpkin</div>
                  <div className='detail-price'>$ 4</div>
                </div>

                <div className='stock-item'>
                  <div className='detail-name'>Peas</div>
                  <div className='detail-price'>$ 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

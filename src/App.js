import logo from './logo.svg';
import './App.css';
import './my.scss';

const products = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function ProductCategoryRow({ category }) {
  return <h3 className='stock-category'>{category}</h3>;
}

function ProductRow({ name, price, stocked }) {
  return (
    <div className='stock-detail'>
      <div className='stock-item'>
        <div className={'detail-name' + (stocked ? '' : ' detail-lack')}>
          {name}
        </div>
        <div className='detail-price'>{price}</div>
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        ></ProductCategoryRow>
      );
    }

    rows.push(
      <ProductRow
        key={product.name}
        name={product.name}
        price={product.price}
        stocked={product.stocked}
      ></ProductRow>
    );
    lastCategory = product.category;
  });

  return (
    <div>
      <div className='stock-block'>{rows}</div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className='search-bar'>
      <div className='from-group'>
        <input type='text' placeholder='Search' />
      </div>
      <div className='from-group'>
        <label>
          <input type='checkbox' /> Only show products in stock
        </label>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>

      <div className='thinking-part'>
        <SearchBar></SearchBar>

        <div className='stock-grid'>
          <div className='stock-header'>
            <h3>Name</h3>
            <h3>Price</h3>
          </div>

          <div>
            <div className='stock-block'>
              <ProductTable products={products}></ProductTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './my.scss';

import { useState } from 'react';

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

function ProductRow({ product }) {
  return (
    <div className='stock-detail'>
      <div className='stock-item'>
        <div
          className={'detail-name' + (product.stocked ? '' : ' detail-lack')}
        >
          {product.name}
        </div>
        <div className='detail-price'>{product.price}</div>
      </div>
    </div>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        ></ProductCategoryRow>
      );
    }

    rows.push(<ProductRow key={product.name} product={product}></ProductRow>);
    lastCategory = product.category;
  });

  return (
    <div>
      <div className='stock-block'>{rows}</div>
    </div>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <div className='search-bar'>
      <div className='from-group'>
        <input
          type='text'
          placeholder='Search'
          value={filterText}
          onChange={(e) => {
            onFilterTextChange(e.target.value);
          }}
        />
      </div>
      <div className='from-group'>
        <label>
          <input
            type='checkbox'
            checked={inStockOnly}
            onChange={(e) => {
              onInStockOnlyChange(e.target.checked);
            }}
          />{' '}
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

function ThinkingPart() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className='thinking-part'>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      ></SearchBar>

      <div className='stock-grid'>
        <div className='stock-header'>
          <h3>Name</h3>
          <h3>Price</h3>
        </div>

        <div>
          <div className='stock-block'>
            <ProductTable
              products={products}
              filterText={filterText}
              inStockOnly={inStockOnly}
            ></ProductTable>
          </div>
        </div>
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

      <ThinkingPart></ThinkingPart>
    </div>
  );
}

export default App;

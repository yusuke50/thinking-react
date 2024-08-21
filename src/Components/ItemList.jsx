import React from 'react';

const ItemList = () => {
  const items = [];

  return (
    <>
      <div className='list'>
        {items.length && (
          <List items={items} onSelectItem={setSelectedItem} selectedItem={selectedItem} />
        )}
      </div>

      <div className='list'>
        {items.length > 0 && (
          <List items={items} onSelectItem={setSelectedItem} selectedItem={selectedItem} />
        )}
      </div>
    </>
  );
};

export default ItemList;

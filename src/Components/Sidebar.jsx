import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='sidebar'>
      <h1 className='p-3'>Left</h1>
      <Button>Click here</Button>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { usePeopleStore } from '../store';

const PeopleCard = () => {
  const peoples = usePeopleStore((state) => state.peoples);

  return (
    <ul className='divide-y divide-gray-200'>
      {peoples.map((person) => (
        <li key={person.id} className='py-4 flex'>
          <img className='h-10 w-10 rounded-full' src={person.image} alt='' />
          <div className='ml-3'>
            <p className='text-sm font-medium text-gray-900'>{person.name}</p>
            <p className='text-sm text-gray-500'>{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PeopleCard;

import React, { useState } from 'react';
import { usePeopleStore } from '../store';
import { Trash2 } from 'lucide-react';

const PeopleCard = () => {
  const { peoples, addPeople, removePeople } = usePeopleStore((state) => state);

  const handleDelete = (id) => {
    removePeople(id);
  };

  return (
    <>
      <h2 className='w-full'>Travel Group</h2>

      <ul className='divide-y divide-gray-200'>
        {peoples.map((person) => (
          <li key={person.id} className='py-4 flex'>
            <img className='h-10 w-10 rounded-full' src={person.image} alt='' />
            <div className='ml-3'>
              <p className='text-sm font-medium text-gray-900'>{person.name}</p>
              <p className='text-sm text-gray-500'>{person.email}</p>
            </div>
            <Trash2 className='ml-auto my-auto' onClick={() => handleDelete(person.id)}></Trash2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PeopleCard;

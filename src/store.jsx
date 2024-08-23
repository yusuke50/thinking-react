import { create } from 'zustand';

const usePeopleList = create((set) => ({
  peoples: [
    {
      id: 1,
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  addPeople: (people) =>
    set((state) => ({
      peoples: [
        {
          id:
            state.peoples.reduce((max, people) => Math.max(max, people.id), state.peoples[0].id) +
            1,
          name: people.name,
          email: people.email,
          image: people.image,
        },
        ...state.peoples,
      ],
    })),
  removePeople: (id) =>
    set((state) => ({
      peoples: state.peoples.filter((people) => people.id !== id),
    })),
}));

export const usePeopleStore = usePeopleList;

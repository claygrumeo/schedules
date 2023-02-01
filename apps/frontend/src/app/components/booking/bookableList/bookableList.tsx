import { Bookable } from '@frontend/types';
import React from 'react';
import BookableCard from '../bookableCard/bookableCard';
import './bookableList.scss';

export default function BookableList() {
  // get a random number between min-max
  const getRandomImage = () => {
    const rand = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    return `https://picsum.photos/200/300?random=${rand}`;
  };

  // Just some placeholder "Bookable" objects
  const bookables: Bookable[] = [
    {
      id: '1',
      name: '30m Appointment with Bruce',
      description: 'Book 30m with the head of Wayne Enterprises.',
      imgSrc: getRandomImage(),
      duration: 30,
    },
    {
      id: '2',
      name: '60m Appointment with Bruce',
      description: 'Book an hour with the head of Wayne Enterprises.',
      imgSrc: getRandomImage(),
      duration: 60,
    },
    {
      id: '3',
      name: 'Tour of Wayne Manor',
      description: 'Accompany Alfred on a tour of Wayne Manor.',
      imgSrc: getRandomImage(),
      duration: 120,
    },
    {
      id: '4',
      name: 'Wine Tasting in the Garden',
      description: 'Wine tasting in the Manor Gardens.',
      imgSrc: getRandomImage(),
      duration: 180,
    },
  ];

  return (
    <div className="bookablesList">
      {bookables.map((bk: Bookable) => {
        return <BookableCard key={bk.id} {...bk} />;
      })}
    </div>
  );
}

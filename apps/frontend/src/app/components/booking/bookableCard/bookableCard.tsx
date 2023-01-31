import React from 'react';
import { Link } from 'react-router-dom';
import './bookableCard.scss';
import { Bookable } from '@frontend/types';

export default function BookableCard(bookable: Bookable) {
  return (
    <div className="bookableCard">
      <Link to={`/book/${bookable.id}`}>
        <img className="bookableImage" src={bookable.imgSrc} alt="bookableImage" />
        <h3 className="bookableTitle">{bookable.name}</h3>
        <p className="bookableDescription">{bookable.description}</p>
      </Link>
    </div>
  );
}

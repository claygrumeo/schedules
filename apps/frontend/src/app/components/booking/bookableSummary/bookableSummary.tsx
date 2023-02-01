import { Bookable } from '@frontend/types';
import React from 'react';
import './bookableSummary.scss';

export default function BookableSummary({ bookable }: { bookable: Bookable }) {
  return (
    <div className="bookableSummaryWrapper">
      <img
        className="bookableImage"
        src={bookable.imgSrc}
        alt="bookableImage"
      />
      <div className="bookableSummaryInfo">
        <h2>{bookable.name}</h2>
        <p className="bookableSummaryDescription">{bookable.description}</p>
      </div>
    </div>
  );
}

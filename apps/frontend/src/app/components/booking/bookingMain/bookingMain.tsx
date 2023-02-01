// import { useState, useEffect } from 'react'
import React from 'react';
import BookableList from '../bookableList/bookableList';
import './bookingMain.scss';

export default function BookingMain() {
  return (
    <div className="bookingWrapper">
      <BookableList />
    </div>
  );
}

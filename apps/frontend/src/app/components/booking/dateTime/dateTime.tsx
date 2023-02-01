import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Calendar from './calendar/calendar';
import BookableSummary from '../bookableSummary/bookableSummary';
import { Bookable } from '@frontend/types';
import { DateTime } from 'luxon';
import './dateTime.scss';

export default function TimeSelection() {
  const [selectedDate, setSelectedDate] = useState(
    DateTime.now().toFormat('yyyy-MM-dd')
  );
  const [currentMonth, setCurrentMonth] = useState(DateTime.now());
  // Get the bookable from Route info
  const location = useLocation();
  const bookable: Bookable = location.state?.bookable;

  const selectDate = (selection: string) => {
    setSelectedDate(selection);
  };

  const advanceMonth = () => {
    setCurrentMonth(currentMonth.plus({ months: 1 }));
  };

  const rewindMonth = () => {
    setCurrentMonth(currentMonth.minus({ months: 1 }));
  };

  return (
    <div className="dateTimeWrapper">
      <BookableSummary bookable={bookable} />
      <Link className="backToAppointments" to={'/book'}>
        Back to Appointments
      </Link>
      {/* {`Selected Month: ${currentMonth.toFormat('MMMM yyyy')}`}
      <hr />
      {`Selected Date: ${selectedDate}`} */}
      <Calendar
        month={currentMonth}
        selectedDate={selectedDate}
        selectDate={selectDate}
        advanceMonth={advanceMonth}
        rewindMonth={rewindMonth}
      />
    </div>
  );
}

import React, { Dispatch, SetStateAction } from 'react';
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import './calendar.scss';

export default function Calendar({
  month,
  selectedDate,
  selectDate,
  advanceMonth,
  rewindMonth,
}: {
  month: DateTime;
  selectedDate: string;
  selectDate: (selection: string) => void;
  advanceMonth: () => void;
  rewindMonth: () => void;
}) {
  const [calendarDays, setCalendarDays] = useState<DateTime[]>([]);

  // When the month changes, recalculate the dates to show on the calendar
  useEffect(() => {
    // Generate the current month's days
    const newCalendarDays = Array.from({ length: month.daysInMonth }, (_, i) =>
      month.startOf('month').plus({ days: i })
    );

    // Generate number of leading/trailing days
    const numLeadingDays =
      month.startOf('month').weekday === 7 ? 0 : month.startOf('month').weekday;
    const numTrailingDays =
      month.endOf('month').weekday === 7 ? 6 : 6 - month.endOf('month').weekday;
    // Add leading/trailing days
    if (numLeadingDays > 0) {
      const previousMonthLastDay = month.minus({ months: 1 }).endOf('month');
      for (let i = 0; i < numLeadingDays; i++) {
        newCalendarDays.unshift(previousMonthLastDay.minus({ days: i }));
      }
    }
    if (numTrailingDays > 0) {
      const nextMonthFirstDay = month.plus({ months: 1 }).startOf('month');
      for (let i = 0; i < numTrailingDays; i++) {
        newCalendarDays.push(nextMonthFirstDay.plus({ days: i }));
      }
    }

    setCalendarDays(newCalendarDays);
  }, [month]);

  return (
    <div className="calendarContainer">
      <div className="calendarButtonsContainer">
        <button onClick={(e) => rewindMonth()}>Prev</button>
        <h2>{month.toFormat('MMMM yyyy')}</h2>
        <button onClick={(e) => advanceMonth()}>Next</button>
      </div>
      <div className="dateGrid">
        {calendarDays.map((day, i) => {
          return (
            <button
              className={`calendarDay ${
                selectedDate === day.toFormat('yyyy-MM-dd') ? 'selected' : ''
              }`}
              disabled={month.month !== day.month}
              onClick={() => selectDate(day.toFormat('yyyy-MM-dd'))}
              key={i}
            >
              {day.toFormat('d')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

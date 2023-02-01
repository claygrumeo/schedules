import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Calendar from "./calendar/calendar";
import BookableSummary from "../bookableSummary/bookableSummary";
import { Bookable } from "@frontend/types";
import './dateTime.scss'

export default function DateTime() {
  const [selectedDate, setSelectedDate] = useState("")
  // Get the bookable from Route info
  const location = useLocation();
  const bookable: Bookable = location.state?.bookable

  const selectDate = (selection: string) => {
    setSelectedDate(selection)
  }

  return(
    <div className="dateTimeWrapper">
      <BookableSummary bookable={bookable} />
      {`Selected Date: ${selectedDate}`}
      <Calendar selectDate={selectDate}/>
    </div>
  )
}
import React, { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from 'react';

export default function Calendar({ selectDate }: {selectDate: (selection: string) => void}) {
  return(
    <div onClick={(e) => selectDate("2023-01-31")}>Calendar</div>
  )
}
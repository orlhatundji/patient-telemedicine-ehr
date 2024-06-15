import React from 'react'

// Assets
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg'
import { twMerge } from 'tailwind-merge'

type DateProps = {
  date: string,
  time?: string,
  lg?: boolean
}

const DateView: React.FC<DateProps> = ({ date, time, lg = false }) => {
  return (
    <div className="flex items-center gap-x-2">
    <CalendarIcon />
    <p className={twMerge("description2 text-tertiary-100", lg ? "text-base" : "text-xs")}>
      {date} {time ? "|" : ""} {time}
    </p>
  </div>
  )
}

export default DateView
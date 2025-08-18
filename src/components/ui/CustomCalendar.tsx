import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FiArrowLeft } from "react-icons/fi";

interface CalendarProps {
  onClose: () => void;
}

export const CustomCalendar: React.FC<CalendarProps> = ({ onClose }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days: React.ReactNode[] = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const cloneDay = day;
      days.push(
        <div
          key={day.toString()}
          className={`flex items-center justify-center h-12 cursor-pointer border border-gray-800
            ${
              !isSameMonth(day, monthStart)
                ? "text-gray-600"
                : isSameDay(day, selectedDate)
                ? "bg-blue-600 text-white rounded-full w-10 h-10 mx-auto my-auto flex items-center justify-center"
                : "text-white hover:bg-gray-800"
            }`}
          onClick={() => setSelectedDate(cloneDay)}
        >
          {format(day, "d")}
        </div>
      );
      day = addDays(day, 1);
    }
  }

  return (
    <div className="bg-black text-white w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-800">
            <FiArrowLeft size={20} />
          </button>
          <span className="text-lg font-medium">Calendar</span>
        </div>
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-800">
          <IoClose size={22} />
        </button>
      </div>

      <div className="flex items-center justify-between px-6 py-3">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 rounded-full hover:bg-gray-800"
        >
          <FiChevronLeft size={20} />
        </button>
        <span className="text-base font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 rounded-full hover:bg-gray-800"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-gray-400 text-sm border-t border-gray-800">
        {["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"].map((day) => (
          <div key={day} className="h-10 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-sm">{days}</div>
    </div>
  );
};

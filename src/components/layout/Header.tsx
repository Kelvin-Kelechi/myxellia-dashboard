import React, { useState, useRef, useEffect } from "react";
import { TbCalculatorFilled, TbMessage2Filled } from "react-icons/tb";
import { RiNotification2Fill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../calendar.css";
import myxillia from "/src/assets/images/Myxellia-admin.png";
import Budget from "../ui/Budget";

interface HeaderProps {
  user: {
    name: string;
    initials: string;
  };
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Header: React.FC<HeaderProps> = ({ user }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<Value>(new Date());
  const [showBudgeting, setShowBudgeting] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
      if (
        budgetRef.current &&
        !budgetRef.current.contains(event.target as Node)
      ) {
        setShowBudgeting(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#191919] text-white px-20 py-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={myxillia}
            className="h-6 w-auto object-contain mr-4"
            alt="logo"
          />
        </div>

        <div className="flex items-center space-x-2 relative">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <RiNotification2Fill size={27} />
          </button>

          <div className="relative" ref={budgetRef}>
            <button
              className="p-2 hover:bg-gray-800 rounded-lg"
              onClick={() => setShowBudgeting(!showBudgeting)}
            >
              <TbCalculatorFilled size={27} />
            </button>

            {showBudgeting && <Budget setShowBudgeting={setShowBudgeting} />}
          </div>

          <div className="relative" ref={calendarRef}>
            <button
              className="p-2 hover:bg-gray-800 rounded-lg"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <FaCalendarAlt size={22} />
            </button>

            {showCalendar && (
              <div className="absolute right-0 mt-2 bg-white p-2 rounded-lg shadow-lg z-50">
                <Calendar onChange={setDate} value={date} />
              </div>
            )}
          </div>

          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <TbMessage2Filled size={27} />
          </button>

          <div className="w-10 h-10 bg-white text-black text-[23px] rounded-full flex items-center justify-center font-medium">
            {user.initials}
          </div>
        </div>
      </div>
    </header>
  );
};

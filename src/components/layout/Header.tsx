import React, { useState, useRef, useEffect } from "react";
import { TbCalculatorFilled, TbMessage2Filled } from "react-icons/tb";
import { RiNotification2Fill } from "react-icons/ri";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
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
          <div className="relative">
            <button
              className="p-2 rounded-lg group relative cursor-not-allowed opacity-50"
              disabled
            >
              <RiNotification2Fill size={27} />
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                Notifications
              </span>
            </button>
          </div>

          <div className="relative">
            <button
              className="p-2 hover:bg-gray-800 rounded-lg group relative"
              onClick={() => setShowBudgeting(true)}
            >
              <TbCalculatorFilled size={27} />
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                Budgeting
              </span>
            </button>

            {showBudgeting && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg relative">
                  <button
                    onClick={() => setShowBudgeting(false)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg"
                  >
                    ✕
                  </button>

                  <Budget setShowBudgeting={setShowBudgeting} />
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={calendarRef}>
            <button
              className="p-2 hover:bg-gray-800 rounded-lg group relative"
              onClick={() => setShowCalendar(true)}
            >
              <FaCalendarAlt size={22} />
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                Calendar
              </span>
            </button>

            {showCalendar && (
              <>
                <div
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setShowCalendar(false)}
                ></div>

                <div
                  className="fixed right-0 z-50 w-[350px] bg-black text-white shadow-lg flex flex-col"
                  style={{ top: "64px", height: "calc(100% - 64px)" }}  
                >
                  <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <FaArrowLeft size={18} />{" "}
                      <h2 className="text-lg font-semibold">Calendar</h2>
                    </div>
                    <button
                      className="text-white hover:text-red-400 text-lg"
                      onClick={() => setShowCalendar(false)}
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4">
                    <Calendar onChange={setDate} value={date} />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="relative">
            <button
              className="p-2 rounded-lg group relative cursor-not-allowed opacity-50"
              disabled
            >
              <TbMessage2Filled size={27} />
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                Messages
              </span>
            </button>
          </div>

          <div className="w-10 h-10 bg-white text-black text-[23px] rounded-full flex items-center justify-center font-medium">
            {user.initials}
          </div>
        </div>
      </div>
    </header>
  );
};

import React from "react";
import { TbBrandGoogleAnalytics, TbCalculatorFilled } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { PiChartLineUp } from "react-icons/pi";

interface BudgetProps {
  setShowBudgeting: React.Dispatch<React.SetStateAction<boolean>>;
}

const Budget: React.FC<BudgetProps> = ({ setShowBudgeting }) => {
  return (
    <div className="absolute right-0 mt-2 w-[380px] bg-white rounded-2xl shadow-lg z-50 overflow-hidden">
      <div className="bg-[#0f172a] flex justify-center py-6">
        <div className="bg-white/10 p-4 rounded-full">
          <TbCalculatorFilled size={32} className="text-white" />
        </div>
      </div>

      <div className="px-5 py-5 text-black">
        <div className="space-y-5">
          <div className="flex items-start space-x-3">
            <VscSettings size={32} className="text-gray-800 mt-1" />
            <div>
              <h3 className="font-semibold">
                Set up annual budgets by account category
              </h3>
              <p className="text-sm text-gray-600">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <PiChartLineUp size={32} className="text-gray-800 mt-1" />
            <div>
              <h3 className="font-semibold">
                Track actuals vs budget in real time
              </h3>
              <p className="text-sm text-gray-600">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <TbBrandGoogleAnalytics size={32} className="text-gray-800 mt-1" />
            <div>
              <h3 className="font-semibold">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-sm text-gray-600">
                Edit amounts, apply percentage changes, or roll forward last
                year’s data—all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <button
          onClick={() => setShowBudgeting(false)}
          className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800"
        >
          Create Budget
        </button>
      </div>
    </div>
  );
};

export default Budget;

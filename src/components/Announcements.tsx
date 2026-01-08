import React from 'react';

const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-[#E9D5FF] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Exam Schedule Published</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            The final examination schedule has been published. Students are advised to check dates and prepare accordingly.
          </p>
        </div>
        <div className="bg-[#E0F2FE] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">School Timing Update</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            School timing has been adjusted due to administrative reasons. Please follow the updated schedule from next week.
          </p>
        </div>
        <div className="bg-[#FEF3C7] rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Fee Submission Reminder</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Parents are requested to complete the monthly fee payment within the due date to avoid late fines.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Announcements;
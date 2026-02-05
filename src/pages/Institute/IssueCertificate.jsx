import React from "react";

const IssueCertificate = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      {/* 1. Header Banner - Increased Height and Padding */}
      <div className="bg-white rounded-2xl border border-gray-300 px-6 py-8 md:py-10 flex items-center gap-5 shadow-sm min-h-[120px]">
        <div className="text-3xl bg-[#E9D5FF] p-3 rounded-xl flex items-center justify-center shrink-0">
          🎟️
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            Issue Certificate
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-medium mt-1">
            Issue a blockchain verified certificate for a student
          </p>
        </div>
      </div>

      {/* 2. Main Form Card */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-50">
        <form
          className="space-y-5 max-w-2xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Student ID - Reduced input height */}
          <div className="space-y-1.5">
            <label className="block text-gray-800 font-bold text-base">
              Student ID
            </label>
            <input
              type="text"
              placeholder="STU12345...."
              className="w-full p-2.5 rounded-lg border-2 border-gray-200 focus:border-[#9366E4] outline-none transition-all placeholder:text-gray-300 font-medium text-sm"
            />
            <p className="text-gray-400 text-[11px] font-medium">
              Enter the registered student ID
            </p>
          </div>

          {/* Course Name - Reduced input height */}
          <div className="space-y-1.5">
            <label className="block text-gray-800 font-bold text-base">
              Course/Program Name
            </label>
            <input
              type="text"
              placeholder="e.g..B.Tech Computer science"
              className="w-full p-2.5 rounded-lg border-2 border-gray-200 focus:border-[#9366E4] outline-none transition-all placeholder:text-gray-300 font-medium text-sm"
            />
          </div>

          {/* Grade/Score - Reduced input height */}
          <div className="space-y-1.5">
            <label className="block text-gray-800 font-bold text-base">
              Grade/Score
            </label>
            <input
              type="text"
              placeholder="e.g.. A, 95% , First Class"
              className="w-full p-2.5 rounded-lg border-2 border-gray-200 focus:border-[#9366E4] outline-none transition-all placeholder:text-gray-300 font-medium text-sm"
            />
          </div>

          {/* Action Button - Reduced height and padding */}
          <div className="pt-4">
            <button className="w-full bg-[#A78BFA] hover:bg-[#8B5CF6] text-white font-extrabold py-3 rounded-xl transition-all shadow-md text-base active:scale-95">
              Issue Certificate
            </button>
          </div>

          {/* Note Section - Large, clean text without background */}
          <div className="mt-8 px-6">
            <p className="text-base md:text-lg text-gray-500 text-center leading-relaxed font-medium">
              <span className="font-bold text-gray-700">Note :</span> The
              certificate will be stored on the block chain. Make sure all
              information is accurate before submitting. The student will be
              able to view and share this certificate once issued.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssueCertificate;

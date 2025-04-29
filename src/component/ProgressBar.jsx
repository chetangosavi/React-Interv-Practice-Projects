import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  console.log(progress);

  const handleProgress = () => {
    if (progress < 100) {
      setProgress((prev) => prev + 20);
    }
  };
  const handleReset = () => {
    setProgress(0);
  };

  const getColor = () => {
    if (progress < 40) {
      return "orange-400";
    } else if (progress < 70) {
      return "yellow-400";
    } else {
      return "green-400";
    }
  };
  return (
    <div className="bg-white">
      <h1 className="text-center text-2xl font-bold mt-5 uppercase">
        Progress-Bar
      </h1>
      <div className="w-1/2 m-auto mt-4 mb-20">
        <div className="w-[100%] bg-gray-300 overflow-hidden border h-8 rounded-md">
          <div
            style={{ width: `${progress}%` }}
            className={`transition-all duration-300 ease-in-out bg-${getColor()} h-8 rounded-md`}
          ></div>
        </div>
        <div>
          <h1 className="font-bold text-xl">{progress}%</h1>
        </div>
        <div className="flex gap-3 mt-3">
          <button
            onClick={handleProgress}
            className="px-6 py-2 bg-blue-500 rounded-lg text-white font-semibold"
          >
            Progress
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-orange-500  rounded-lg text-white font-semibold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

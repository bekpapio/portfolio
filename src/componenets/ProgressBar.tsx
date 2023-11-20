import React from "react";

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className="">
      <div className="font-bold mb-1">Label</div>
      <div className="h-2 rounded-md w-full bg-neutral-200 dark:bg-neutral-600 overflow-hidden">
        <div
          className={`h-2 rounded-md bg-${color}`}
          style={{ width: `${progress}%`, transition: "width 1s ease-in-out" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse w-full h-20 bg-slate-100 flex items-center px-4">
      <div className="w-16 h-16 rounded bg-slate-200 animate-pulse"></div>
    </div>
  );
};

export default SkeletonLoader;

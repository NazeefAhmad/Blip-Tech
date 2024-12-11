import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full mt-8 items-center justify-center">
      <div className="h-[50px] w-[50px] border-4 border-solid border-t-blue-700 animate-spin rounded-full"></div>
    </div>
  );
};

export default Loading;

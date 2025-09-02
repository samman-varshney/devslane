import React from "react";

export default function Loader() {
  return (
    <div className="grow flex justify-center items-center w-full h-full py-12">
      <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

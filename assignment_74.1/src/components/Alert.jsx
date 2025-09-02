import React, { useContext, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import { AlertContext } from "./Context";

const alertStyles = {
  success: "bg-green-100 border-green-400 text-green-800",
  error: "bg-red-100 border-red-400 text-red-800",
  info: "bg-blue-100 border-blue-400 text-blue-800",
  warning: "bg-yellow-100 border-yellow-400 text-yellow-800",
};

const alertIcons = {
  success: <FaCheckCircle className="text-green-600 w-5 h-5 mt-0.5" />,
  error: <FaTimesCircle className="text-red-600 w-5 h-5 mt-0.5" />,
  info: <FaInfoCircle className="text-blue-600 w-5 h-5 mt-0.5" />,
  warning: <FaExclamationTriangle className="text-yellow-600 w-5 h-5 mt-0.5" />,
};

export default function Alert() {
  const { alert, setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 5 * 1000);
      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);

  if (!alert) return null; // ✅ safe return after hooks

  const { type, message, description, position = "top-right" } = alert;

  const handleOnClose = () => setAlert(null);

  return (
    <div
      className={
        "fixed m-4 p-4 rounded-2xl shadow-lg border w-80 transition-all duration-300 " +
        alertStyles[type] +
        " " +
        (position === "top-right"
          ? "top-5 right-1"
          : position === "top-left"
          ? "top-5 left-1"
          : position === "bottom-right"
          ? "bottom-5 right-1"
          : "bottom-5 left-1")
      }
      role="alert"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-2">
          {alertIcons[type]}
          <div>
            <p className="font-semibold">{message}</p>
            {description && <p className="text-sm mt-1 opacity-90">{description}</p>}
          </div>
        </div>
        <button
          onClick={handleOnClose}
          className="ml-2 text-xl leading-none opacity-70 hover:opacity-100"
          aria-label="Close alert"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

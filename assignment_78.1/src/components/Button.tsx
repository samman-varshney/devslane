
interface ButtonProps {
  className?: string;
  borderRadius?: string;
  handleFunction: () => void;
  label: string;
}

function Button({
  className = "bg-yellow-500 hover:bg-yellow-600",
  borderRadius = "rounded-lg",
  handleFunction,
  label
}: ButtonProps) {
  return (
    <div className={`inline-block p-[0.8px] focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-500 mb-6 ${borderRadius}`}>
      <button
        onClick={handleFunction}
        className={`${className} text-white px-4 py-2 font-semibold flex items-center ${borderRadius}`}
      >
        {label}
      </button>
    </div>
  )
}

export default Button;

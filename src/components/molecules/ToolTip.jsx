/**
 *
 */
export default function ToolTip({ children, text }) {
  return (
    <div className="group relative w-full">
      {children}

      <div
        className="absolute flex items-center z-50 w-36 right-[-140px] top-2 group-hover:opacity-100 delay-300 
         transition-opacity opacity-0"
      >
        <div className="h-0 w-0 border-4 border-y-transparent border-l-transparent border-gray-800 "></div>
        <span
          className="
        bg-gray-800 p-1 text-sm text-gray-100 rounded-md"
        >
          {text}
        </span>
      </div>
    </div>
  );
}

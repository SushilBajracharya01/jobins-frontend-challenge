import classNames from "classnames";

/**
 *
 */
export default function PaginationBtn({ label, onClick, isActive, disabled }) {
  return (
    <button
      className={classNames(
        "w-7 h-7 text-[13px] flex justify-center items-center leading-5 rounded disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed",
        {
          "text-white bg-blue-500": isActive,
          "text-gray-300 bg-gray-25": !isActive,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

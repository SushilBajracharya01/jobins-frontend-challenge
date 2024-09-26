import classNames from "classnames";

export default function TableNavItem({ label, value, active }) {
  return (
    <button
      className={classNames(
        "px-6 py-4 text-blue-500 text-[15px] whitespace-nowrap border-b-2 border-b-transparent",
        { "border-b-blue-500": active }
      )}
    >
      {label}
    </button>
  );
}

import classNames from "classnames";

export default function TableNavItem({
  label,
  value,
  handleOnClick,
  isActive,
}) {
  const onClick = () => {
    handleOnClick(value);
  };
  return (
    <button
      className={classNames(
        "px-6 py-4 text-blue-500 text-[15px] whitespace-nowrap border-b-2 ",
        { "border-b-blue-500": isActive },
        { "border-b-transparent": !isActive }
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

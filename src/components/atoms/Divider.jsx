import classNames from "classnames";

export default function Divider({ className }) {
  return (
    <div
      className={classNames(
        "h-[1px] min-w-[100px] sm:min-h-[100px] sm:min-w-[1px] bg-gray-200 my-auto",
        className
      )}
    ></div>
  );
}

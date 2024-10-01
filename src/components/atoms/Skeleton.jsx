import classNames from "classnames";

export default function Skeleton({ className }) {
  return (
    <div className="animate-pulse duration-150">
      <div className={classNames("bg-gray-200 rounded", className)}></div>
    </div>
  );
}

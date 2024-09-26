import classNames from "classnames";

export default function DashCard({ className, children }) {
  return (
    <div className={classNames("bg-white rounded-2xl", className)}>
      {children}
    </div>
  );
}

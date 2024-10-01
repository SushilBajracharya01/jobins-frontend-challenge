import Skeleton from "./Skeleton";

/**
 *
 */
export default function ValueLabelPair({ value, label, isLoading }) {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-[24px] text-gray-600">
        {isLoading ? <Skeleton className={"w-12 h-10"} /> : `${value}`}
      </div>
      <div className="text-gray-300 text-xm font-medium whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}

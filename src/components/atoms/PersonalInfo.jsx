import Skeleton from "./Skeleton";

/**
 *
 */
export default function PersonalInfo({ label, value, isLoading }) {
  return (
    <div className="flex xl:gap-4 xl:flex-row flex-col">
      <div className="min-w-[116px] ">{label} </div>
      <div className="font-semibold whitespace-nowrap">
        {isLoading ? <Skeleton className="w-36 h-4" /> : value}
      </div>
    </div>
  );
}

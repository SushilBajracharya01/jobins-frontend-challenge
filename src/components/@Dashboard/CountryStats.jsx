import CountUp from "react-countup";
import DashCard from "../atoms/DashCard";
import CountryStat from "../molecules/CountryStat";

import US from "../../assets/svgs/US";
import BR from "../../assets/svgs/BR";
import AU from "../../assets/svgs/AU";
import { formatNumberWithSuffix } from "../../utils/helpers";
import Skeleton from "../atoms/Skeleton";

export default function CountryStats({ data, isLoading }) {
  if (isLoading) {
    return (
      <DashCard className="p-6 flex-1 flex flex-wrap flex-col gap-[18px]">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="min-w-[83px]">
                <Skeleton className={"w-[93px] h-10"} />
              </div>
            </div>

            <Skeleton className="w-32 h-3" />

            <Skeleton className="w-20 h-6" />
          </div>
        ))}
      </DashCard>
    );
  }

  return (
    <DashCard className="p-6 flex-1 flex flex-wrap flex-col gap-[18px]">
      {data?.map(({ id, countryName, value, isPositive, percent }) => {
        const { number, suffix } = formatNumberWithSuffix(value);
        const Value = (
          <CountUp
            className="font-semibold text-gray-500 text-xl"
            end={number}
            suffix={suffix}
          />
        );
        return (
          <CountryStat
            key={countryName}
            Icon={Icon[id]}
            countryName={countryName}
            Value={Value}
            isPositive={isPositive}
            percent={percent}
          />
        );
      })}
    </DashCard>
  );
}

const Icon = {
  US: <US />,
  BR: <BR />,
  AU: <AU />,
};

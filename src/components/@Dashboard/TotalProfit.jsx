import DashCard from "../atoms/DashCard";
import DashCardValue from "../atoms/DashCardValue";
import DashCardTitle from "../atoms/DashCardTitle";
import DashCardChange from "../atoms/DashCardChange";
import DashCardSubTitle from "../atoms/DashCardSubTitle";

//
import Yen from "../../assets/svgs/Yen";
import CountUp from "react-countup";
import { formatNumberWithSuffix } from "../../utils/helpers";
import Skeleton from "../atoms/Skeleton";

/**
 *
 */
export default function TotalProfit({ profit, isLoading }) {
  if (isLoading) {
    return (
      <DashCard className="pt-[21px] px-6 pb-6 flex flex-col justify-between flex-1">
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-[22px] flex-1 justify-center md:justify-start">
          <Skeleton className={"w-12 h-12"} />

          <div>
            <Skeleton className={"w-28 h-5 mb-2"} />
            <Skeleton className={"w-20 h-5"} />
          </div>
        </div>

        <div>
          <Skeleton className="w-16 h-9 mb-2" />
          <Skeleton className="w-32 h-5" />
        </div>
      </DashCard>
    );
  }

  let value = formatNumberWithSuffix(profit?.total ?? 0);
  return (
    <DashCard className="pt-[21px] px-6 pb-6 flex flex-col justify-between flex-1">
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-[22px] flex-1 justify-center md:justify-start">
        <Yen />

        <div>
          <DashCardTitle>Total Profit</DashCardTitle>
          <DashCardSubTitle>Last 7 days</DashCardSubTitle>
        </div>
      </div>

      <div>
        <DashCardValue>
          <CountUp end={value.number} suffix={value.suffix} />
        </DashCardValue>
        <DashCardChange value={profit?.difference ?? "0%"} />
      </div>
    </DashCard>
  );
}

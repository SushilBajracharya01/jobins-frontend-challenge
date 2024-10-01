import CountUp from "react-countup";

//
import ChartIcon from "../../assets/svgs/ChartIcon";

//
import Divider from "../atoms/Divider";
import DashCard from "../atoms/DashCard";
import DashCardValue from "../atoms/DashCardValue";
import DashCardTitle from "../atoms/DashCardTitle";
import DashCardChange from "../atoms/DashCardChange";
import DashCardSubTitle from "../atoms/DashCardSubTitle";
import { formatNumberWithSuffix } from "../../utils/helpers";
import Skeleton from "../atoms/Skeleton";

/**
 *
 */
export default function TotalSales({ sales, isLoading }) {
  if (isLoading) {
    return (
      <DashCard className="pt-5 pb-7 pr-[52px] pl-[43px] flex justify-between min-h-[199px] flex-col sm:flex-row gap-10  flex-1">
        <div className="flex justify-center items-center">
          <Skeleton className="w-20 h-20" />
        </div>
        <Divider />
        <div className="flex-1 max-w-fit flex flex-col justify-between">
          <div>
            <Skeleton className={"w-28 h-5 mb-2"} />
            <Skeleton className={"w-20 h-5"} />
          </div>

          <div>
            <Skeleton className="w-24 h-9 mb-2" />
            <Skeleton className="w-32 h-5" />
          </div>
        </div>
      </DashCard>
    );
  }
  let value = formatNumberWithSuffix(sales?.total ?? 0);
  let difference = formatNumberWithSuffix(sales?.difference ?? 0);

  return (
    <DashCard className="pt-5 pb-7 pr-[52px] pl-[43px] flex justify-between min-h-[199px] flex-col sm:flex-row gap-10  flex-1">
      <div className="flex justify-center items-center">
        <ChartIcon />
      </div>

      <Divider />

      <div className="flex-1 max-w-fit flex flex-col justify-between">
        <div>
          <DashCardTitle>Total Sales & Costs</DashCardTitle>
          <DashCardSubTitle>Last 7 days</DashCardSubTitle>
        </div>

        <div>
          <DashCardValue>
            <CountUp prefix="$ " end={value.number} suffix={value.suffix} />
          </DashCardValue>

          <DashCardChange value={`${difference.number}${difference.suffix}`} />
        </div>
      </div>
    </DashCard>
  );
}

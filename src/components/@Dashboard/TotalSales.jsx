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

/**
 *
 */
export default function TotalSales() {
  return (
    <DashCard className="pt-5 pb-7 pr-[52px] pl-[43px] flex justify-between min-h-[199px] gap-10">
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
            <CountUp prefix="$ " end={350} suffix="K" />
          </DashCardValue>

          <DashCardChange value="8.56K" />
        </div>
      </div>
    </DashCard>
  );
}

import DashCard from "../atoms/DashCard";
import DashCardValue from "../atoms/DashCardValue";
import DashCardTitle from "../atoms/DashCardTitle";
import DashCardChange from "../atoms/DashCardChange";
import DashCardSubTitle from "../atoms/DashCardSubTitle";

//
import Yen from "../../assets/svgs/Yen";
import CountUp from "react-countup";

/**
 *
 */
export default function TotalProfit() {
  return (
    <DashCard className="pt-[21px] px-[24px] pb-[24px] flex flex-col justify-between">
      <div className="flex items-center justify-between gap-[22px]">
        <Yen />
        <div>
          <DashCardTitle>Total Profit</DashCardTitle>
          <DashCardSubTitle>Last 7 days</DashCardSubTitle>
        </div>
      </div>

      <div>
        <DashCardValue>
          <CountUp end={50} suffix="K" />
        </DashCardValue>
        <DashCardChange value={"12%"} />
      </div>
    </DashCard>
  );
}

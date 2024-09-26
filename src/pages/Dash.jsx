import ArrowUp from "../assets/svgs/ArrowUp";
import AvatarIcon from "../assets/svgs/AvatarIcon";
import ChartIcon from "../assets/svgs/ChartIcon";
import DashCard from "../components/atoms/DashCard";
import Divider from "../components/atoms/Divider";
import Notification from "../components/atoms/Notification";
import PageTitle from "../components/atoms/PageTitle";

export default function Dash() {
  return (
    <div>
      <div className="flex justify-between py-3">
        <PageTitle>Dashboard</PageTitle>

        <div className="flex items-center gap-6">
          <Notification count={4} />
          <AvatarIcon />
        </div>
      </div>

      <div>
        <DashCard className="pt-5 pb-7 pr-[52px] pl-[43px] flex justify-between min-h-[199px]">
          <div className="flex justify-center items-center">
            <ChartIcon />
          </div>

          <Divider />

          <div className="flex-1 max-w-fit flex flex-col justify-between">
            <div>
              <h5 className="text-lg font-semibold text-gray-600">
                Total Sales & Costs
              </h5>
              <p className="text-gray-300 text-sm font-medium">Last 7 days</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-600">$350K</h3>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <ArrowUp />
                  <span className="text-sm font-medium text-green-400">
                    8.56K
                  </span>
                </div>

                <span className="text-sm font-medium text-gray-300">
                  vs last 7 days
                </span>
              </div>
            </div>
          </div>
        </DashCard>
      </div>
    </div>
  );
}

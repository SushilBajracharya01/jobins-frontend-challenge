//
import PageTitle from "../components/atoms/PageTitle";
import Notification from "../components/atoms/Notification";
import TotalSales from "../components/@Dashboard/TotalSales";

//
import AvatarIcon from "../assets/svgs/AvatarIcon";
import TotalProfit from "../components/@Dashboard/TotalProfit";

/**
 *
 */
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
        <div className="flex gap-3">
          <TotalSales />

          <TotalProfit />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

//
import PageTitle from "../components/atoms/PageTitle";
import Notification from "../components/atoms/Notification";
import TotalSales from "../components/@Dashboard/TotalSales";
import TotalProfit from "../components/@Dashboard/TotalProfit";
import CountryStats from "../components/@Dashboard/CountryStats";
import PersonalDash from "../components/@Dashboard/PersonalDash";

//
import AvatarIcon from "../assets/svgs/AvatarIcon";

//
import { fetchDashInfo } from "../api/mockAPI";

/**
 *
 */
export default function Dash() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function handleFetchDashData() {
      try {
        setIsLoading(true);
        const response = await fetchDashInfo();
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error, "error");
        setIsLoading(false);
      }
    }
    handleFetchDashData();
  }, []);

  return (
    <div>
      <div className="flex justify-between py-3">
        <PageTitle>Dashboard</PageTitle>

        <div className="flex items-center gap-6">
          <Notification count={data.notifications} />
          <AvatarIcon />
        </div>
      </div>

      <div className="space-y-4">
        <section className="flex gap-3 flex-wrap">
          <TotalSales sales={data?.sales} isLoading={isLoading} />

          <TotalProfit profit={data?.profit} isLoading={isLoading} />

          <CountryStats data={data?.countryStats} isLoading={isLoading} />
        </section>

        <PersonalDash />
      </div>
    </div>
  );
}

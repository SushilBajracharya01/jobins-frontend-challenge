import CountUp from "react-countup";
import DashCard from "../atoms/DashCard";
import CountryStat from "../molecules/CountryStat";

import US from "../../assets/svgs/US";
import BR from "../../assets/svgs/BR";
import AU from "../../assets/svgs/AU";

export default function CountryStats() {
  return (
    <DashCard className="p-6 flex-1 flex flex-wrap flex-col gap-[18px]">
      {DATA.map(({ Icon, countryName, Value, isPositive, percent }) => (
        <CountryStat
          key={countryName}
          Icon={Icon}
          countryName={countryName}
          Value={Value}
          isPositive={isPositive}
          percent={percent}
        />
      ))}
    </DashCard>
  );
}

const DATA = [
  {
    Icon: <US />,
    countryName: "United States",
    Value: (
      <CountUp
        className="font-semibold text-gray-500 text-xl"
        end={30}
        suffix="K"
      />
    ),
    isPositive: true,
    percent: 25.8,
  },
  {
    Icon: <BR />,
    countryName: "Brazil",
    Value: (
      <CountUp
        className="font-semibold text-gray-500 text-xl"
        end={26}
        suffix="K"
      />
    ),
    isPositive: false,
    percent: 16.2,
  },
  {
    Icon: <AU />,
    countryName: "Australia",
    Value: (
      <CountUp
        className="font-semibold text-gray-500 text-xl"
        end={17}
        suffix="K"
      />
    ),
    isPositive: false,
    percent: 11.9,
  },
];

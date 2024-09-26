import CountUp from "react-countup";

//
import ChevronUp from "../../assets/svgs/ChevronUp";
import ChevronDown from "../../assets/svgs/ChevronDown";
import classNames from "classnames";
import Progress from "../atoms/Progress";

/**
 *
 */
export default function CountryStat({
  Icon,
  countryName,
  Value,
  isPositive,
  percent,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        {Icon}

        <div className="min-w-[83px]">
          {Value}
          <div className="text-gray-300 text-[13px]">{countryName}</div>
        </div>
      </div>

      <Progress value={percent} />

      <div className="flex items-center gap-2">
        {isPositive ? <ChevronUp /> : <ChevronDown />}

        <CountUp decimals="1" end={percent} suffix="%">
          {({ countUpRef }) => (
            <div
              ref={countUpRef}
              className={classNames("font-bold min-w-[52px]", {
                "text-red-500": !isPositive,
                "text-green-400": isPositive,
              })}
            />
          )}
        </CountUp>
      </div>
    </div>
  );
}

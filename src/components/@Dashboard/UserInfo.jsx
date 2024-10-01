import BigAvatar from "../../assets/svgs/BigAvatar";
import Divider from "../atoms/Divider";
import PersonalInfo from "../atoms/PersonalInfo";
import ValueLabelPair from "../atoms/ValueLabelPair";

/**
 *
 */
export default function UserInfo() {
  // TODO: fetch API here for userInfo
  return (
    <section className="flex flex-col lg:flex-row gap-4">
      <div className="flex gap-4 items-center justify-start flex-1 flex-col lg:flex-row">
        <BigAvatar />

        <div className="flex flex-col justify-start items-center lg:items-start">
          <h5 className="text-lg font-semibold text-gray-600 sm:whitespace-nowrap">
            Robert Fox
          </h5>
          <p className="text-xl text-gray-300">robert@gmail.com</p>
        </div>
      </div>

      <Divider className="my-6 sm:my-0 mx-6 sm:min-h-[1px] lg:min-h-[100px] sm:h-auto" />

      <div className="flex flex-col gap-4 flex-1">
        <div className="text-gray-300 font-medium text-xm">
          PERSONAL INFORMATION
        </div>

        <div className="text-gray-600 text-xm flex flex-col gap-8 xl:gap-2">
          <PersonalInfo label={"Contact Number"} value={"(201) 555-0124"} />
          <PersonalInfo label={"Date of Birth"} value={"1 Jan, 1985"} />
          <PersonalInfo label={"Member Since"} value={"3 March, 2023"} />
        </div>
      </div>

      <Divider className="my-6 sm:my-0 mx-6 sm:min-h-[1px] lg:min-h-[100px] sm:h-auto" />

      <div className="flex flex-col gap-[26px] flex-1">
        <div className="flex flex-col gap-4">
          <div className="text-gray-300 font-medium text-xm uppercase">
            Shipping Address
          </div>

          <div className="text-gray-600 text-xm">
            3517 W. Gray St. Utica, Pennsylvania 57867
          </div>
        </div>

        <div className="flex justify-between gap-2 flex-row flex-wrap">
          <ValueLabelPair value={150} label={"Total Orders"} />
          <ValueLabelPair value={140} label={"Total Completed"} />
          <ValueLabelPair value={10} label={"Canceled"} />
        </div>
      </div>
    </section>
  );
}

import format from "date-fns/format";
import { useEffect, useState } from "react";

//
import { fetchUserInfo } from "../../api/mockAPI";

//
import BigAvatar from "../../assets/svgs/BigAvatar";

//
import Divider from "../atoms/Divider";
import Skeleton from "../atoms/Skeleton";
import PersonalInfo from "../atoms/PersonalInfo";
import ValueLabelPair from "../atoms/ValueLabelPair";

/**
 *
 */
export default function UserInfo() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function handleFetchUserData() {
      try {
        setIsLoading(true);
        const response = await fetchUserInfo();
        console.log(response, "response oo");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error, "error");
        setIsLoading(false);
      }
    }
    handleFetchUserData();
  }, []);
  if (isLoading) {
    return (
      <section className="flex flex-col lg:flex-row gap-4">
        <div className="flex gap-4 items-center justify-start flex-1 flex-col lg:flex-row">
          <BigAvatar />

          <div className="flex flex-col justify-start items-center lg:items-start">
            <Skeleton className="w-24 h-5 mb-2" />
            <Skeleton className="w-36 h-5" />
          </div>
        </div>

        <Divider className="my-6 sm:my-0 mx-6 sm:min-h-[1px] lg:min-h-[100px] sm:h-auto" />

        <div className="flex flex-col gap-4 flex-1">
          <div className="text-gray-300 font-medium text-xm">
            PERSONAL INFORMATION
          </div>

          <div className="text-gray-600 text-xm flex flex-col gap-8 xl:gap-2">
            <PersonalInfo label={"Contact Number"} value={null} isLoading />
            <PersonalInfo label={"Date of Birth"} value={null} isLoading />
            <PersonalInfo label={"Member Since"} value={null} isLoading />
          </div>
        </div>

        <Divider className="my-6 sm:my-0 mx-6 sm:min-h-[1px] lg:min-h-[100px] sm:h-auto" />

        <div className="flex flex-col gap-[26px] flex-1">
          <div className="flex flex-col gap-4">
            <div className="text-gray-300 font-medium text-xm uppercase">
              Shipping Address
            </div>

            <Skeleton className="w-48 h-5" />
          </div>

          <div className="flex justify-between gap-2 flex-row flex-wrap">
            <ValueLabelPair label={"Total Orders"} isLoading />
            <ValueLabelPair label={"Total Completed"} isLoading />
            <ValueLabelPair label={"Canceled"} isLoading />
          </div>
        </div>
      </section>
    );
  }
  if (!data) return null;
  // TODO: fetch API here for userInfo
  return (
    <section className="flex flex-col lg:flex-row gap-4">
      <div className="flex gap-4 items-center justify-start flex-1 flex-col lg:flex-row">
        <BigAvatar />

        <div className="flex flex-col justify-start items-center lg:items-start">
          <h5 className="text-lg font-semibold text-gray-600 sm:whitespace-nowrap">
            {data.fullname}
          </h5>
          <p className="text-xl text-gray-300">{data.email}</p>
        </div>
      </div>

      <Divider className="my-6 sm:my-0 mx-6 sm:min-h-[1px] lg:min-h-[100px] sm:h-auto" />

      <div className="flex flex-col gap-4 flex-1">
        <div className="text-gray-300 font-medium text-xm">
          PERSONAL INFORMATION
        </div>

        <div className="text-gray-600 text-xm flex flex-col gap-8 xl:gap-2">
          <PersonalInfo label={"Contact Number"} value={data.contact} />
          <PersonalInfo
            label={"Date of Birth"}
            value={format(new Date(data.dob), "dd MMM, yyyy")}
          />
          <PersonalInfo
            label={"Member Since"}
            value={format(new Date(data.memberSince), "dd MMM, yyyy")}
          />
        </div>
      </div>

      <Divider className="my-6 sm:my-0 mx-6 sm:min-h-[1px] lg:min-h-[100px] sm:h-auto" />

      <div className="flex flex-col gap-[26px] flex-1">
        <div className="flex flex-col gap-4">
          <div className="text-gray-300 font-medium text-xm uppercase">
            Shipping Address
          </div>

          <div className="text-gray-600 text-xm">{data.shippingAddress} </div>
        </div>

        <div className="flex justify-between gap-2 flex-row flex-wrap">
          <ValueLabelPair value={data.totalOrders} label={"Total Orders"} />
          <ValueLabelPair
            value={data.totalCompleted}
            label={"Total Completed"}
          />
          <ValueLabelPair value={data.canceled} label={"Canceled"} />
        </div>
      </div>
    </section>
  );
}

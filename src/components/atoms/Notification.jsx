import React from "react";
import NotificationIcon from "../../assets/svgs/NotificationIcon";

function Notification({ count }) {
  return (
    <div className="relative">
      <NotificationIcon />
      <span className="absolute text-[13px] top-[-4px] right-[-6px] bg-red-500 text-white rounded-full px-1.5">
        {count}
      </span>
    </div>
  );
}

export default Notification;

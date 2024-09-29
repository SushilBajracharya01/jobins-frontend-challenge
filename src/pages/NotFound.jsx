import { Link, useLocation } from "react-router-dom";
import SSImg from "../assets/images/ss.png";
import AvatarIcon from "../assets/svgs/AvatarIcon";
import Notification from "../components/atoms/Notification";
import PageTitle from "../components/atoms/PageTitle";
import { slugToTitle } from "../utils/helpers";
export default function NotFound() {
  const location = useLocation();

  const pathname = location.pathname.replace("/", "");
  return (
    <div className="relative">
      <div className="opacity-50 blur-sm">
        <div className="flex justify-between py-3">
          <PageTitle>{slugToTitle(pathname)}</PageTitle>
          <div className="flex items-center gap-6">
            <Notification count={4} />
            <AvatarIcon />
          </div>
        </div>

        <img src={SSImg} alt="screenshot" className="w-full h-full" />
      </div>
      <div className="absolute bg-white rounded-lg p-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <h3 className="text-xl font-bold text-gray-600">
          Oops! Looks like this page is locked! 🔒
        </h3>

        <p className="text-[12px] mt-4 mb-8">
          If you need it unlocked, feel free to contact{" "}
          <a
            href="https://www.sushilbajracharya.com.np"
            target="_blank"
            className="mr-1 text-blue-500"
            rel="noreferrer"
          >
            Sushil Bajracharya
          </a>
          —he’s got the magic key! 🗝️
        </p>

        <Link to="/" className="px-3 py-2 rounded-md bg-blue-500 text-white">
          Go back home
        </Link>
      </div>
    </div>
  );
}

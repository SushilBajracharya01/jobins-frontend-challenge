import { useState } from "react";
import classNames from "classnames";

//
import Indepent from "../../../assets/svgs/Indepent";
import JoBinsLogo from "../../../assets/svgs/JoBinsLogo";

//
import SideMenuNavs from "./SideMenuNavs";

/**
 * Renders the side menu component.
 *
 * @return {JSX.Element} The side menu component.
 */
export default function SideMenu() {
  const [minimize, setMinimize] = useState(false);

  const handleToggleMinimize = () => setMinimize((prev) => !prev);

  return (
    <header>
      <aside
        className={classNames("transition-all", {
          "w-20": minimize,
          "w-[260px]": !minimize,
        })}
      >
        <div
          className={classNames(
            "flex items-center justify-between px-[18px] py-5 gap-2",
            { "px-2": minimize, "px-[18px]": !minimize }
          )}
        >
          <div className="flex items-center gap-2">
            <JoBinsLogo />
            {!minimize && <span className="font-bold text-2xl">JoBins</span>}
          </div>

          <button onClick={handleToggleMinimize}>
            <Indepent
              className={classNames("transition-transform", {
                "rotate-180": minimize,
              })}
            />
          </button>
        </div>

        <SideMenuNavs minimize={minimize} />
      </aside>
    </header>
  );
}

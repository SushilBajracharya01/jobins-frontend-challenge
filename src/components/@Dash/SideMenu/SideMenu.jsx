import classNames from "classnames";
import { useState } from "react";
import JoBinsLogo from "../../../assets/svgs/JoBinsLogo";
import Indepent from "../../../assets/svgs/Indepent";
import ShoppingCart from "../../../assets/svgs/ShoppingCart";
import Star from "../../../assets/svgs/Star";
import CirclePlus from "../../../assets/svgs/CirclePlus";
import BoxIcon from "../../../assets/svgs/BoxIcon";
import SmartHome from "../../../assets/svgs/SmartHome";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    sectionTitle: "MAIN MENU",
    items: [
      {
        Icon: SmartHome,
        title: "Dashboard",
        link: "/",
      },
      {
        Icon: ShoppingCart,
        title: "Order Management",
        link: "/order-management",
      },
      {
        Icon: Star,
        title: "Brand",
        link: "/brand",
      },
    ],
  },
  {
    sectionTitle: "PRODUCTS",
    items: [
      {
        Icon: CirclePlus,
        title: "Add Products",
        link: "/add-products",
      },
      {
        Icon: BoxIcon,
        title: "Product List",
        link: "/product-list",
      },
    ],
  },
];
export default function SideMenu() {
  const [minimize, setMinimize] = useState(false);

  const handleToggleMinimize = () => setMinimize((prev) => !prev);
  return (
    <header>
      <aside
        className={classNames("transition-all", {
          "w-[80px]": minimize,
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

        <nav>
          {menuItems.map(({ sectionTitle, items }) => (
            <div key={sectionTitle}>
              {minimize ? (
                <hr className="my-[15px] mx-[30px]" />
              ) : (
                <p className="text-xs font-bold text-gray-300 py-[15px] px-[30px]">
                  {sectionTitle}
                </p>
              )}
              <div className="flex flex-col gap-2 px-[14px]">
                {items.map(({ Icon, title, link }) => (
                  <NavLink
                    key={title}
                    to={link}
                    className={({ isActive }) =>
                      classNames(
                        "flex items-center gap-2 px-4 py-[9px] rounded-md text-gray-300 hover:bg-gray-50 transition-colors",
                        {
                          "justify-center": minimize,
                          "bg-gray-100 text-gray-600 font-semibold text-xl":
                            isActive,
                        }
                      )
                    }
                    end
                  >
                    {({ isActive }) => (
                      <>
                        {
                          <Icon
                            className={classNames({
                              "text-gray-600": isActive,
                              "text-gray-300": !isActive,
                            })}
                          />
                        }
                        {!minimize && title}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </header>
  );
}

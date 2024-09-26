import classNames from "classnames";
import { NavLink } from "react-router-dom";

/**
 *
 */
function Nav({ title, link, Icon, minimize }) {
  return (
    <NavLink
      key={title}
      to={link}
      className={({ isActive }) =>
        classNames(
          "flex items-center gap-2 px-4 py-[9px] rounded-md text-gray-300 hover:bg-gray-50 transition-colors",
          {
            "justify-center": minimize,
            "bg-gray-100 text-gray-600 font-semibold text-xl": isActive,
          }
        )
      }
      end
    >
      {({ isActive }) => (
        <>
          {<Icon isActive={isActive} />}
          {!minimize && title}
        </>
      )}
    </NavLink>
  );
}

export default Nav;

import SectionTitle from "./SectionTitle";
import ToolTip from "../../molecules/ToolTip";

//
import Nav from "./Nav";

//
import { MENU_ITEMS } from "./_data";

/**
 *
 */
export default function SideMenuNavs({ minimize }) {
  return (
    <nav>
      {MENU_ITEMS.map(({ sectionTitle, items }) => (
        <div key={sectionTitle}>
          <SectionTitle title={sectionTitle} minimize={minimize} />

          <div className="flex flex-col gap-2 px-[14px]">
            {items.map(({ Icon, title, link }) => (
              <ToolTip text={title} key={title}>
                <Nav
                  title={title}
                  link={link}
                  Icon={Icon}
                  minimize={minimize}
                />
              </ToolTip>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

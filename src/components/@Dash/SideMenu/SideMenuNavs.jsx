import SectionTitle from "./SectionTitle";

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
              <Nav
                key={title}
                title={title}
                link={link}
                Icon={Icon}
                minimize={minimize}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

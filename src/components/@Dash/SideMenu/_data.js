import ShoppingCart from "../../../assets/svgs/ShoppingCart";
import Star from "../../../assets/svgs/Star";
import CirclePlus from "../../../assets/svgs/CirclePlus";
import BoxIcon from "../../../assets/svgs/BoxIcon";
import SmartHome from "../../../assets/svgs/SmartHome";

export const MENU_ITEMS = [
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

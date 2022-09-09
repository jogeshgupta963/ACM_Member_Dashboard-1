// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
  UilMedal,
  UilCalender,
  UilMobileAndroid,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import {
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilCode,
} from "@iconscout/react-unicons";
//import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/Rectangle2.png";
//import img2 from "../imgs/img2.png";
//import img3 from "../imgs/img3.png";
import banner1 from "../imgs/banner1.jpg";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    link: "/",
  },
  {
    icon: UilClipboardAlt,
    heading: "Projects",
    link: "/projects",
  },
  {
    icon: UilUsersAlt,
    heading: "Announcements",
    link: "/announcements",
  },

  {
    icon: UilChart,
    heading: 'Achievements',
    link: "/achievements",
  },

  {
    icon: UilMedal,
    heading: 'Badges',
    link: "/badges",
  },
  {
    icon: UilCalender,
    heading: 'Calendar',
    link: "/calendar",
  },
  // {
  //   icon: UilMobileAndroid,
  //   heading: 'Web Development'
  // },
  // {
  //   icon: UilMobileAndroid,
  //   heading: 'App Development'
  // },
];

// Analytics Cards Data
export const cardsData = [
  {
    color: {
      backGround: "white",
      //boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "Web dev",
    png: UilUsdSquare,
    time: "11 hours",
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    color: {
      backGround: "white",
      //boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 80,
    value: "App Dev",
    png: UilMoneyWithdrawal,
    time: "11 hours",
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    color: {
      backGround: "white",
      //boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: "60",
    value: "UI/UX",
    png: UilClipboardAlt,
    time: "11 hours",
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const fourCardsData = [
  {
    title: "Sales",
    color: {
      backGround: "#1e1b5b",
    },
    barValue: 70,
    value: "Badges",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "#1e1b5b",
      //boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 80,
    value: "Projects",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
];

export const twoCardsData = [
  {
    title: "Sales",
    color: {
      backGround: "#1e1b5b",
      //boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "Badges",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "#1e1b5b",
      //boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 80,
    value: "Projects",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    banner: banner1,
    img: img1,
    name: "Tushar Chopra",
    about:
      "I am a budding programmer with a knack for coding. Data Science is my passion and Web Development along with UI/UX designing my hobby. I have beginner to intermediate level knowledge in Python, JavaScript, HTML, CSS, React.js, MySQL, Node.js, Figma and some video editing too.",
  },
];

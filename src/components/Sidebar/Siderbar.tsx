import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonIcon,
} from "@ionic/react";
import {
  briefcaseOutline,
  clipboardOutline,
  constructOutline,
  homeOutline,
  peopleOutline,
  personOutline,
  settingsOutline,
} from "ionicons/icons";
import { useState } from "react";

import logo from "/assets/svg/sidelogo.svg"

type ExpandableKey = "construction" | "home" | "management";

interface NavChild {
  label: string;
  link: string;
}

interface NavItem {
  label: string;
  icon: string;
  link?: string;
  key?: ExpandableKey;
  children?: NavChild[];
}

const Sidebar: React.FC = () => {
  const [openSections, setOpenSections] = useState<
    Record<ExpandableKey, boolean>
  >({
    construction: true,
    home: false,
    management: false,
  });

  const toggleSection = (key: ExpandableKey) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const navItems: NavItem[] = [
    { label: "Hire Pro", icon: personOutline, link: "/profile" },
    {
      label: "Construction",
      key: "construction",
      icon: constructOutline,
      children: [
        { label: "My Projects", link: "/projects" },
        { label: "My Team", link: "/team" },
        { label: "Blogs", link: "/blogs" },
      ],
         link: "/construction/home"
    },
    {
      label: "Home Services",
      key: "home",
      icon: homeOutline,
      children: [
        { label: "Electrician", link: "/electrican" },
        { label: "Plumbing", link: "/plumbing" },
        { label: "Cleaning", link: "/cleaning" },
        { label: "Appliance Repair", link: "/appliance-repair" },
        { label: "Gardening", link: "/gardening" },

      ],
      link: "/home-services/home"
    },
    {
      label: "Management",
      key: "management",
      icon: clipboardOutline,
      children: [
        { label: "Team Attendance", link: "/team-attendance" },
        { label: "Task Management", link: "/task-management" },
        { label: "Budget Management", link: "/budget-management" },
        { label: "Material Management", link: "/material-management" },
      ],
    },
    { label: "Backlog", icon: briefcaseOutline, link: "/backlog" },
    { label: "Flips", icon: settingsOutline, link: "/flips" },
    { label: "My Profile", icon: personOutline, link: "/profile" },
    { label: "Teams", icon: peopleOutline, link: "/teams" },
    { label: "Project Settings", icon: settingsOutline, link: "/settings" },
  ];

  return (
    <IonMenu menuId="main" contentId="main-content" type="overlay" side="start">
      <IonContent className="bg-white">
        <div className="flex items-center space-x-3 mb-6 pt-6 pl-4 pr-0">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-[6px]" />
          <div className="pl-3">
            <h1 className="font-inter text-lg leading-7 font-bold text-custom-black">
              Project Name
            </h1>
            <p className="font-inter text-sm leading-[22px] font-normal text-custom-light">
              Category
            </p>
          </div>
        </div>

        <IonList lines="none" className="pl-2 pt-3">
          {navItems.map((item, idx) =>
            item.children ? (
              <div key={idx}>
                <IonItem
                  button
                  routerLink={item.link}
                  onClick={() => item.key && toggleSection(item.key)}
                  detail={false} className="pt-1"
                >
                  <IonIcon icon={item.icon} slot="start" className={`w-6 h-6 ${item.label === "Hire Pro" ? "text-[#274C77FF]" : "text-[#565D6DFF]"
                    }`} />
                  <IonLabel style={{
                    "--color": "#565D6DFF", fontSize: "18px",
                  }}>{item.label}</IonLabel>
                </IonItem>
                {item.key &&
                  openSections[item.key] &&
                  item.children.map((child, i) => (
                    <IonItem
                      // routerLink={child.link}
                       routerLink={`/home-services/home?category=${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                      key={i}
                      detail={false}
                      className=""
                    >
                      <IonLabel
                        className="pl-12 font-inter leading-[22px] "
                        style={{
                          "--color": "#565D6DFF", fontSize: "18px",
                        }}
                      >
                        {child.label}
                      </IonLabel>
                    </IonItem>
                  ))}
              </div>
            ) : (
              <IonItem
                routerLink={item.link}
                key={idx}
                detail={false}
                className="pt-1"
              >
                <IonIcon
                  icon={item.icon}
                  slot="start"
                  className={`w-6 h-6 ${item.label === "Hire Pro" ? "text-[#274C77FF]" : "text-[#565D6DFF]"
                    }`}
                />
                <IonLabel
                  style={{
                    "--color":
                      item.label === "Hire Pro" ? "#274C77FF" : "#565D6DFF",
                    fontSize: "18px",
                  }}
                  className={
                    item.label === "Hire Pro"
                      ? "font-inter  leading-[22px] font-bold"
                      : " font-inter  leading-[22px] font-normal"
                  }
                >
                  {item.label}
                </IonLabel>
              </IonItem>
            )
          )}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Sidebar;

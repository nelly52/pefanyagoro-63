
import { Home as HomeIcon, Users, Heart, Phone, Baby, Handshake, GraduationCap, DollarSign, UserPlus } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import KidsCorner from "./pages/KidsCorner";
import Partnership from "./pages/Partnership";
import CaregiverEmpowerment from "./pages/CaregiverEmpowerment";
import DonateNow from "./pages/DonateNow";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Programs",
    to: "/programs", 
    icon: <Heart className="h-4 w-4" />,
    page: <Programs />,
    dropdown: [
      {
        title: "Kids Corner",
        to: "/kids-corner",
        icon: <Baby className="h-4 w-4" />,
        page: <KidsCorner />,
      },
      {
        title: "Caregiver Empowerment",
        to: "/caregiver-empowerment",
        icon: <GraduationCap className="h-4 w-4" />,
        page: <CaregiverEmpowerment />,
      },
    ]
  },
  {
    title: "Partnership",
    to: "/partnership",
    icon: <Handshake className="h-4 w-4" />,
    page: <Partnership />,
  },
  {
    title: "Get Involved",
    to: "/get-involved",
    icon: <UserPlus className="h-4 w-4" />,
    page: <GetInvolved />,
  },
  {
    title: "Donate Now",
    to: "/donate-now",
    icon: <DollarSign className="h-4 w-4" />,
    page: <DonateNow />,
  },
];

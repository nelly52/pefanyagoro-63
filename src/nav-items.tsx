
import { Home as HomeIcon, Users, Heart, Phone, Baby, Handshake, GraduationCap } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import KidsCorner from "./pages/KidsCorner";
import Partnership from "./pages/Partnership";
import CaregiverEmpowerment from "./pages/CaregiverEmpowerment";

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
  },
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
  {
    title: "Partnership",
    to: "/partnership",
    icon: <Handshake className="h-4 w-4" />,
    page: <Partnership />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Contact />,
  },
];


import { Home, Users, Heart, Phone, Baby, Handshake } from "lucide-react";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import KidsCorner from "./pages/KidsCorner";
import Partnership from "./pages/Partnership";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
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
    to: "/kids",
    icon: <Baby className="h-4 w-4" />,
    page: <KidsCorner />,
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

export type NavItem = {
  href: string;
  label: string;
  icon: "home" | "feed" | "events" | "profile";
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/feed", label: "Feed", icon: "feed" },
  { href: "/events", label: "Events", icon: "events" },
  { href: "/profile", label: "Profile", icon: "profile" }
];

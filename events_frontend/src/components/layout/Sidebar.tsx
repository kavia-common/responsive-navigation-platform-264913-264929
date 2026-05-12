"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./nav";
import { Icon } from "./icons";

function isActivePath(currentPath: string, href: string) {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(href + "/");
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar" aria-label="Primary">
      <div className="sidebarBrand">
        <div className="brandMark" aria-hidden="true" />
        <div className="brandText">
          <div className="brandTitle">Events</div>
          <div className="brandSubtitle">Discover • RSVP • Share</div>
        </div>
      </div>

      <nav className="nav">
        {NAV_ITEMS.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`navItem ${active ? "navItemActive" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="navIcon">
                <Icon name={item.icon} />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: 14, padding: "10px 12px", color: "rgba(17,24,39,0.62)", fontSize: 12 }}>
        Tip: Resize to mobile width to see the drawer menu.
      </div>
    </aside>
  );
}

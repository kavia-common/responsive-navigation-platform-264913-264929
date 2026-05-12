"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./nav";
import { Icon } from "./icons";

function isActivePath(currentPath: string, href: string) {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(href + "/");
}

export function TopBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    // Close the sheet when route changes
    setIsOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const activeItem =
    NAV_ITEMS.find((i) => isActivePath(pathname, i.href)) ?? NAV_ITEMS[0];

  return (
    <>
      <header className="appbar">
        <div className="appbarLeft">
          <button
            type="button"
            className="mobileMenuButton"
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <Icon name="menu" />
          </button>

          <div className="appbarTitle">{activeItem?.label ?? "Events"}</div>

          <div className="search" role="search">
            <label className="srOnly" htmlFor="topbar-search">
              Search
            </label>
            <input
              id="topbar-search"
              className="searchInput"
              placeholder="Search events, places, people…"
              inputMode="search"
            />
          </div>
        </div>

        <div className="appbarRight">
          <button type="button" className="pillButton pillButtonPrimary">
            <Icon name="plus" />
            <span style={{ fontWeight: 600 }}>New Event</span>
          </button>
        </div>
      </header>

      {isOpen ? (
        <>
          <div
            className="sheetBackdrop"
            role="presentation"
            onClick={() => setIsOpen(false)}
          />
          <div className="sheet" role="dialog" aria-label="Navigation">
            <div className="sidebarBrand" style={{ paddingLeft: 0 }}>
              <div className="brandMark" aria-hidden="true" />
              <div className="brandText">
                <div className="brandTitle">Events</div>
                <div className="brandSubtitle">Navigate</div>
              </div>
            </div>

            <nav className="nav" aria-label="Mobile primary">
              {NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`navItem ${active ? "navItemActive" : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="navIcon">
                      <Icon name={item.icon} />
                    </span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div style={{ marginTop: 12 }}>
              <button
                type="button"
                className="pillButton"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

import * as React from "react";

type IconProps = {
  size?: number;
};

/** Small internal icon set to avoid external dependencies. */
export function Icon({
  name,
  size = 18
}: IconProps & {
  name: "home" | "feed" | "events" | "profile" | "menu" | "plus";
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  } as const;

  switch (name) {
    case "menu":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "plus":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "home":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "feed":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M6 6h12M6 12h12M6 18h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "events":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M8 3v3M16 3v3M5 8h14M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "profile":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M20 21a8 8 0 1 0-16 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

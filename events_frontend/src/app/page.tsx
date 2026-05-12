import Link from "next/link";

export default function HomePage() {
  return (
    <div className="card">
      <h1 style={{ margin: 0, fontSize: 28, letterSpacing: "-0.02em" }}>
        Welcome
      </h1>
      <p style={{ marginTop: 10, marginBottom: 16, color: "rgba(17,24,39,0.72)" }}>
        Use the sidebar to navigate between Feed, Events, and Profile. This layout
        is responsive: on smaller screens the sidebar is available from the top bar menu.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="pillButton pillButtonPrimary" href="/feed">
          Go to Feed
        </Link>
        <Link className="pillButton" href="/events">
          Browse Events
        </Link>
        <Link className="pillButton" href="/profile">
          View Profile
        </Link>
      </div>
    </div>
  );
}

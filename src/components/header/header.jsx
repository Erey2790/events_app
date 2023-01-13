import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <img />
          <Link href="/" legacyBehavior>
            <a> Home</a>
          </Link>
          <Link href="/events" legacyBehavior>
            <a> Events</a>
          </Link>
          <Link href="/about-us" legacyBehavior>
            <a> About Us</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

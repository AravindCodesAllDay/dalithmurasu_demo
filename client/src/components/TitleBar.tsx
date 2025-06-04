import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const navItems = [
  {
    href: "/cart",
    label: "Cart",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    ),
  },
  {
    href: "/bookmarks",
    label: "Bookmarks",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    ),
  },
  {
    href: "/notifications",
    label: "Notifications",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
      />
    ),
  },
];

export default function TitleBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { t } = useTranslation();

  // Toggle panel on Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className="flex flex-row items-center gap-3 rounded-lg bg-secondary text-black relative z-20">
        <h1 className="font-bold text-highlight-1 m-3">#{t("new_feeds")}</h1>

        {/* Ticker */}
        <div className="relative overflow-hidden border-x-2 border-highlight-1">
          <p className="flex w-full translate-x-full [animation:var(--animation-slide-left)] whitespace-nowrap">
            சூத்திரனும், பஞ்சமரும் மந்திரியாகி விட்டால் பரம்பரை இழிவு நீங்கி
            விடுமா?
          </p>
        </div>

        {/* Right-side nav + search */}
        <ul className="flex items-center gap-3 ml-auto">
          <li className="flex gap-1 transition-all duration-150 ease-in-out">
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search articles, authors..."
                className="w-full z-30 border rounded px-1"
                autoFocus
              />
            )}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Open search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </li>
          {navItems.map(({ href, label, icon }, index) => (
            <li
              key={index}
              className="hover:text-highlight-1 transition-colors duration-150 ease-in-out"
            >
              <Link to={href} aria-label={label}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  {icon}
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

import { FiAtSign } from "react-icons/fi";

export function Header() {
  return (
    <header className="header">
      <strong>Notes Feed</strong>

      <a href="/mentions">
        <FiAtSign size={20} />
        mentions (wip)
      </a>
    </header>
  );
}
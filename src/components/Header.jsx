
import { NavLink } from "react-router-dom";
export default function Header() {
  const link = "px-3 py-2";
  const active = "border-b-2 border-black";
  return (
    <header className="flex items-center justify-between py-4">
      <NavLink to="/" className="font-semibold">YourName</NavLink>
      <nav className="space-x-4">
        <NavLink to="/work" className={({isActive}) => `${link} ${isActive?active:""}`}>Work</NavLink>
        <NavLink to="/about" className={({isActive}) => `${link} ${isActive?active:""}`}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => `${link} ${isActive?active:""}`}>Contact</NavLink>
      </nav>
    </header>
  );
}

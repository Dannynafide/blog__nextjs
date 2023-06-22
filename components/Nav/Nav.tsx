import Link from 'next/link';

import {default as Logo, LogoIcon} from './Logo/Logo';

const navLinks = [
  {id: 1, path: '/', label: 'BLOG'},
  {id: 2, path: '/about', label: 'ABOUT'},
  {id: 3, path: '/contact', label: 'CONTACT'},
];

export default function Nav() {
  return (
    <nav className="font-bold flex md:gap-7 items-baseline">
      <Link href={'/'} className="hover:text-teal-500">
        <span className="hidden md:inline">{<Logo />}</span>
        <span className="md:hidden">{<LogoIcon />}</span>
      </Link>

      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          className="p-2 hover:text-teal-500">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

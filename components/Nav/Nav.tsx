import Link from 'next/link';

import Logo from './Logo/Logo';

const navLinks = [
  {id: 1, path: '/', label: 'BLOG'},
  {id: 2, path: '/about', label: 'ABOUT'},
  {id: 3, path: '/contact', label: 'CONTACT'},
];

export default function Nav() {
  return (
    <nav className="font-bold flex gap-7 items-baseline">
      <Link href={'/'} className="hover:text-teal-500">
        {<Logo />}
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

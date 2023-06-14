import Link from 'next/link';

export default function ButtonBack() {
  return (
    <Link
      href={'/'}
      className="text-sm hover:text-teal-600 hover:border-solid hover:border-b hover:border-teal-600">
      &lt; Back to blog
    </Link>
  );
}

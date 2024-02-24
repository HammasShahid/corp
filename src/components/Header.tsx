import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between text-white pt-3 px-24 text-4xl">
        <Link href="/">Home</Link>
        <div className="flex gap-12 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </header>
  );
}

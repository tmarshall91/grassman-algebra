/**
 * Root layout for the learning app
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Learn Anything',
  description: 'A learning platform for mastering any topic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="site-logo">
              Learn Anything
            </Link>
            <nav className="site-nav">
              <Link href="/">Programs</Link>
            </nav>
          </div>
        </header>

        <main className="site-main">
          <div className="container">{children}</div>
        </main>

        <footer className="site-footer">
          <div className="container">
            <p>&copy; 2025 Learn Anything. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

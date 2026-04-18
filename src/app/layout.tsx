
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AK Elevate — Building Thought Leaders',
  description: 'We position founders and leaders as the definitive voice of their industry with substance, not spectacle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-midnight">
        {children}
      </body>
    </html>
  );
}

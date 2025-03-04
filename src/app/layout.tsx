import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/paths';
import { Button, buttonVariants } from '@/components/ui/button';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'The Road To Next',
    description: 'My road to Next.js app ...'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <nav>
                    <ul
                        className='
                            supports-backdrop-blur:bg-background/60
                            fixed left-0 right-0 top-0 z-20
                            border-b bg-background/95 backdrop-blur
                            w-full flex justify-between py-2.5 px-5
                        '
                    >
                        <li>
                            <Button asChild variant='outline'>
                                <Link
                                    href={homePath}
                                    className=' text-lg font-bold'
                                >
                                    Home
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Link
                                href={ticketsPath}
                                className={buttonVariants({
                                    variant: 'outline'
                                })}
                            >
                                Tickets
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main
                    className='
                        main-h-screen flex-1
                        overflow-y-auto overflow-x-hidden
                        py-24 px-8
                        bg-secondary/20
                        flex flex-col
                    '
                >
                    {children}
                </main>
            </body>
        </html>
    );
}

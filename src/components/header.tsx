import { LucideKanban } from 'lucide-react';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/paths';
import { Button, buttonVariants } from './ui/button';
import { ThemeSwitcher } from './theme/theme-switcher';

export const Header = () => {
    return (
        <nav>
            <ul
                className='
                supports-backdrop-blur:bg-background/60
                fixed left-0 right-0 top-0 z-20
                border-b bg-background/95 backdrop-blur
                w-full flex justify-between py-2.5 px-5
            '
            >
                <li className="flex align-middle justify-center gap-x-1">
                    <Button asChild variant='ghost'>
                        <Link href={homePath}>
                            <LucideKanban />
                            <h1 className='ml-2 text-lg font-semibold'>
                                TicketBounty
                            </h1>
                        </Link>
                    </Button>
                </li>
                <li className="flex align-middle justify-center gap-x-1">
                    <ThemeSwitcher />
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
    );
};

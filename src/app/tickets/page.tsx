import clsx from 'clsx';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { initTickets } from '@/data';
import { ticketPath } from '@/paths';
import { LucideCheck, LucideFileText, LucidePencil } from 'lucide-react';

const TICK_ICON = {
    OPEN: <LucideFileText />,
    IN_PROGRESS: <LucidePencil />,
    DONE: <LucideCheck />
};

const TicketsPage = () => {
    return (
        <div className='flex flex-col gap-y-8'>
            <div>
                <h2 className='text-3xl font-bold tracking-tight'>
                    Tickets Page
                </h2>
                <p className='text-sm text-muted-foreground'>
                    All your tickets in one place
                </p>
            </div>
            <Separator />

            <div className='flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top'>
                {initTickets.map(ticket => (
                    <Card key={ticket.id} className='w-full max-w-[420px]'>
                        <CardHeader>
                            <CardTitle className='flex items-center gap-x-2'>
                                <span>{TICK_ICON[ticket.status]}</span>
                                <span className='truncate'>{ticket.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span
                                className={clsx(
                                    'line-clamp-3 whitespace-break-spaces',
                                    {
                                        'line-through': ticket.status === 'DONE'
                                    }
                                )}
                            >
                                {ticket.content}
                            </span>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href={ticketPath(ticket.id)}
                                className='text-sm underline'
                            >
                                View
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TicketsPage;

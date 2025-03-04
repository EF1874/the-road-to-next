import clsx from 'clsx';
import { LucideSquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TICK_ICON } from '@/feature/constants';
import type { Ticket } from '@/feature/types';
import { ticketPath } from '@/paths';

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const DetailButton = (
        <Button asChild size='icon' variant='outline'>
            <Link href={ticketPath(ticket.id)} className='text-sm underline'>
                <LucideSquareArrowOutUpRight className='w-4 h-4' />
            </Link>
        </Button>
    );

    return (
        <div
            className={clsx('w-full flex gap-x-1', {
                'max-w-[420px]': !isDetail,
                'max-w-[580px]': isDetail
            })}
        >
            <Card key={ticket.id} className='w-full'>
                <CardHeader>
                    <CardTitle className='flex items-center gap-x-2'>
                        <span>{TICK_ICON[ticket.status]}</span>
                        <span className='truncate'>{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span
                        className={clsx('whitespace-break-spaces', {
                            'line-clamp-3': !isDetail
                        })}
                    >
                        {ticket.content}
                    </span>
                </CardContent>
            </Card>
            {isDetail ? null : (
                <div className='flex flex-col gap-y-1'>{DetailButton}</div>
            )}
        </div>
    );
};

export { TicketItem };

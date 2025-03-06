import { Ticket } from '@prisma/client';
import clsx from 'clsx';
import { LucideSquareArrowOutUpRight, LucideTrash } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TICK_ICON } from '@/feature/constants';
import { ticketPath } from '@/paths';
import { deleteTicket } from '../actions/delete-ticket';

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const DetailButton = (
        <Button asChild size='icon' variant='outline'>
            <Link prefetch href={ticketPath(ticket.id)} className='text-sm underline'>
                <LucideSquareArrowOutUpRight className='w-4 h-4' />
            </Link>
        </Button>
    );

    const DeleteButton = (
        <form action={deleteTicket.bind(null, ticket.id)}>
            <Button size='icon' variant='outline'>
                <LucideTrash className='w-4 h-4' />
            </Button>
        </form>
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
            {isDetail ? (
                DeleteButton
            ) : (
                <div className='flex flex-col gap-y-1'>{DetailButton}</div>
            )}
        </div>
    );
};

export { TicketItem };

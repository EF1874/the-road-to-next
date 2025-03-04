import Link from 'next/link';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initTickets } from '@/data';
import { ticketsPath } from '@/paths';
import { TicketItem } from '@/feature/ticket/components/ticket-item';

type TickPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TickPage = async (props: TickPageProps) => {
    const params = await props.params;
    const ticket = initTickets.find(ticket => ticket.id === params.ticketId);

    if (!ticket) {
        return (
            <Placeholder
                label='Ticket not found'
                button={
                    <Button asChild variant='outline'>
                        <Link href={ticketsPath}>Go To Tickets</Link>
                    </Button>
                }
            ></Placeholder>
        );
    }

    return (
        <div className='flex justify-center animate-fade-in-from-top'>
            <TicketItem isDetail ticket={ticket} />
        </div>
    );
};

export default TickPage;

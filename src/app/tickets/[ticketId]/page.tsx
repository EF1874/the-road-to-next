import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initTickets } from '@/data';
import { ticketsPath } from '@/paths';
import Link from 'next/link';

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
        <div>
            <h2 className='text-lg'>
                {ticket.title} Page {params.ticketId}
            </h2>
            <p>{ticket.content}</p>
        </div>
    );
};

export default TickPage;

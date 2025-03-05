import Link from 'next/link';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { TicketItem } from '@/feature/ticket/components/ticket-item';
import { ticketsPath } from '@/paths';
import { getTicket } from '@/feature/ticket/queries/get-ticket';

type TickPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TickPage = async (props: TickPageProps) => {
    const params = await props.params;
    const ticket = await getTicket(params.ticketId);

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

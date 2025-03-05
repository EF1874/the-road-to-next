import { notFound } from 'next/navigation';
import { TicketItem } from '@/feature/ticket/components/ticket-item';
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
        return notFound();
    }

    return (
        <div className='flex justify-center animate-fade-in-from-top'>
            <TicketItem isDetail ticket={ticket} />
        </div>
    );
};

export default TickPage;

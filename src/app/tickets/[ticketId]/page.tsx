import { initTickets } from '@/data';

type TickPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TickPage = async (props: TickPageProps) => {
    const params = await props.params;
    const ticket = initTickets.find(ticket => ticket.id === params.ticketId);

    if (!ticket) {
        return <h1 className='text-xl'>Ticket not found</h1>;
    }

    return <h1 className='text-xl'>Tick Page {params.ticketId}</h1>;
};

export default TickPage;

import { Heading } from '@/components/heading';
import { initTickets } from '@/data';
import { TicketItem } from '@/feature/ticket/components/ticket-item';


const TicketsPage = () => {
    return (
        <div className='flex1 flex flex-col gap-y-8'>
            <Heading
                title='Tickets'
                description='All your tickets in one place'
            />

            <div className='flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top'>
                {initTickets.map(ticket => (
                    <TicketItem key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default TicketsPage;

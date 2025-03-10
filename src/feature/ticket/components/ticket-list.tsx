import { RedirectToast } from '@/components/redirect-toast';
import { getTickets } from '../queries/get-tikets';
import { TicketItem } from './ticket-item';

const TicketList = async () => {
    const tickets = await getTickets();
    return (
        <div className='flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top'>
            {tickets.map(ticket => (
                <TicketItem key={ticket.id} ticket={ticket} />
            ))}

            <RedirectToast />
        </div>
    );
};

export { TicketList };

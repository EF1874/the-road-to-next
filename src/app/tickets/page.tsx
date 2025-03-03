import { initTickets } from '@/data';
import Link from 'next/link';

const TicketsPage = () => {
    return (
        <div>
            {initTickets.map(ticket => (
                <div key={ticket.id}>
                    <h2 className='text-lg'>{ticket.title}</h2>
                    <Link
                        href={`/tickets/${ticket.id}`}
                        className='text-blue-500 text-sm underline'
                    >
                        View
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TicketsPage;

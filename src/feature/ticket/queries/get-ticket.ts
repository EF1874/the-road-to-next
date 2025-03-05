import { initTickets } from '@/data';
import type { Ticket } from '@/feature/types';

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const maybeTicket = initTickets.find(ticket => ticket.id === ticketId);

    return new Promise(resolve => {
        resolve(maybeTicket || null);
    });
};

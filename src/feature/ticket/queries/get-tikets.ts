import { initTickets } from '@/data';
import { Ticket } from '@/feature/types';

export const getTickets = async (): Promise<Ticket[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(initTickets);
        }, 2000);
    });
};

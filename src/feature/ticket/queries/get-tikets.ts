import { Ticket } from '@/feature/types';
import { prisma } from '@/lib/prisma';

export const getTickets = async (): Promise<Ticket[]> => {

    return await prisma.ticket.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
};

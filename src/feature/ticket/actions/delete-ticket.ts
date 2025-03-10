'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { setCookieByKey } from '@/actions/cookies';
import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/paths';

export const deleteTicket = async (ticketId: string) => {
    await prisma.ticket.delete({
        where: {
            id: ticketId
        }
    });

    // 手动按需缓存
    revalidatePath(ticketsPath());
    setCookieByKey('toast', 'Ticket deleted');
    redirect(ticketsPath());
};

'use server';

import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/paths';
import { revalidatePath } from 'next/cache';

export const createTicket = async (formData: FormData) => {
    const data = {
        title: formData.get('title') as string,
        content: formData.get('content') as string
    };

    console.log('data:', data);
    await prisma.ticket.create({ data });

    revalidatePath(ticketsPath());
};

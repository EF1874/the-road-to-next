'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { setCookieByKey } from '@/actions/cookies';
import {
    type ActionState,
    fromErrorToActionState,
    toActionState
} from '@/components/form/utils/to-action-state';
import { prisma } from '@/lib/prisma';
import { ticketPath, ticketsPath } from '@/paths';

const upsertTicketSchema = z.object({
    title: z.string().min(1).max(255),
    content: z.string().min(1).max(1024)
});

export const upsertTicket = async (
    id: string | undefined,
    _actionState: ActionState,
    formData: FormData
) => {
    try {
        const data = upsertTicketSchema.parse({
            title: formData.get('title'),
            content: formData.get('content')
        });

        // console.log('data:', data);
        await prisma.ticket.upsert({
            where: {
                id: id ?? ''
            },
            update: data,
            create: data
        });
    } catch (error) {
        // console.log('error:', error);
        return fromErrorToActionState(error, formData);
    }

    revalidatePath(ticketsPath());
    if (id) {
        setCookieByKey('toast', 'Ticket updated');
        redirect(ticketPath(id));
    }

    return toActionState('SUCCESS', `Ticket ${id ? 'updated' : 'created'}`);
};

'use client';

import { Ticket } from '@prisma/client';
import { useActionState } from 'react';
import { SubmitButton } from '@/components/form/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { upsertTicket } from '../actions/upsert-ticket';

type TicketUpsertFormProps = {
    ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [actionState, action] = useActionState(
        upsertTicket.bind(null, ticket?.id),
        { message: '初始状态' }
    );

    return (
        <form action={action} className='flex flex-col gap-y-2'>
            <Input type='hidden' id='id' name='id' defaultValue={ticket?.id} />
            <Label htmlFor='title'>Title</Label>
            <Input
                id='title'
                name='title'
                type='text'
                defaultValue={ticket?.title}
            ></Input>
            <Label htmlFor='content'>Content</Label>
            <Textarea
                id='content'
                name='content'
                defaultValue={ticket?.content}
            ></Textarea>
            <SubmitButton label={ticket?.id ? 'Update' : 'Create'} />
            {actionState.message}
        </form>
    );
};

export { TicketUpsertForm };

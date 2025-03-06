import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { upsertTicket } from '../actions/upsert-ticket';
import { Ticket } from '@prisma/client';

type TicketUpsertFormProps = {
    ticket?: Ticket;
};
const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    return (
        <form
            action={upsertTicket.bind(null, ticket?.id)}
            className='flex flex-col gap-y-2'
        >
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
            <Button type='submit'>{ticket?.id ? 'Update' : 'Create'}</Button>
        </form>
    );
};

export { TicketUpsertForm };

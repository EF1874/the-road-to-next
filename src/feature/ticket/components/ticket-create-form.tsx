import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { createTicket } from '../actions/create-ticket';

const TicketCreateForm = () => {
    return (
        <form action={createTicket} className='flex flex-col gap-y-2'>
            <Label htmlFor='title'>Title</Label>
            <Input id='title' name='title' type='text'></Input>
            <Label htmlFor='content'>Content</Label>
            <Textarea id='content' name='content'></Textarea>
            <Button type='submit'>Create</Button>
        </form>
    );
};

export { TicketCreateForm };

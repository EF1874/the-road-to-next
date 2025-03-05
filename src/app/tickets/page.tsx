import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Heading } from '@/components/heading';
import { Placeholder } from '@/components/placeholder';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/feature/ticket/components/ticket-list';

const TicketsPage = () => {
    return (
        <div className='flex-1 flex flex-col gap-y-8'>
            <Heading
                title='Tickets'
                description='All your tickets in one place'
            />

            <ErrorBoundary
                fallback={<Placeholder label='something were wrong' />}
            >
                <Suspense fallback={<Spinner />}>
                    <TicketList />
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};

export default TicketsPage;

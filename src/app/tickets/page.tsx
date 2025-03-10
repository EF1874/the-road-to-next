import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { Placeholder } from '@/components/placeholder';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/feature/ticket/components/ticket-list';
import { TicketUpsertForm } from '@/feature/ticket/components/ticket-upsert-form';

// 强制页面为动态
// export const dynamic = "force-dynamic";

// 设置静态页面缓存时间，0时页面变成动态
// export const revalidate = 30;

const TicketsPage = () => {
    return (
        <div className='flex-1 flex flex-col gap-y-8'>
            <Heading
                title='Tickets'
                description='All your tickets in one place'
            />
            <CardCompact
                title='Create Ticket'
                description='A new ticket will be created'
                content={<TicketUpsertForm />}
                className='w-full max-w-[420px] self-center'
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

import Link from 'next/link';
import { ticketsPath } from '@/paths';

const HomePage = () => {
    return (
        <div className='flex flex-col gap-y-8'>
            <h2 className='text-3xl font-bold tracking-tight'>Home Page</h2>
            <p className='text-sm text-muted-foreground'>
                Your home place to start
            </p>

            <div className='flex flex-1 flex-col items-center'>
                <Link href={ticketsPath} className=' underline'>
                    Go To Tickets
                </Link>
            </div>
        </div>
    );
};

export default HomePage;

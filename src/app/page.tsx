import Link from 'next/link';
import { ticketsPath } from '@/paths';
import { Heading } from '@/components/heading';

const HomePage = () => {
    return (
        <div className='flex1 flex flex-col gap-y-8'>
            <Heading title='Home' description='Your home place to start' />

            <div className='flex flex-1 flex-col items-center'>
                <Link href={ticketsPath} className=' underline'>
                    Go To Tickets
                </Link>
            </div>
        </div>
    );
};

export default HomePage;

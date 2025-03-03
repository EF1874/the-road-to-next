import Link from 'next/link';
import { ticketsPath } from '@/paths';

const HomePage = () => {
    return (
        <div>
            <h1 className='text-xl'>Home Page</h1>

            <Link href={ticketsPath} className='text-xl text-blue-500 underline'>
                Go To Tickets
            </Link>
        </div>
    );
};

export default HomePage;

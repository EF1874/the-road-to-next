import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1 className='text-xl'>Home Page</h1>

            <Link href='/tickets' className='text-xl text-blue-500 underline'>
                Go To Tickets
            </Link>
        </div>
    );
};

export default HomePage;

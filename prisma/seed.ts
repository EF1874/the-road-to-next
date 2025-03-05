import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tickets = [
    {
        title: 'Ticket 1',
        content: 'This is ticket 1, from database',
        status: 'DONE' as const
    },
    {
        title: 'Ticket 2',
        content: 'This is ticket 2, from database',
        status: 'OPEN' as const
    },
    {
        title: 'Ticket 3',
        content: 'This is ticket 3, from database',
        status: 'IN_PROGRESS' as const
    }
];

async function seed() {
    // for (const ticket of tickets) {
    //     await prisma.ticket.create({
    //         data: ticket
    //     });
    // }

    const t0 = performance.now();

    // await prisma.ticket.deleteMany();

    await prisma.ticket.createMany({
        data: tickets
    });

    const t1 = performance.now();

    console.log(`Execution time: ${t1 - t0} ms`);
}

seed();
// prisma/seed.ts
const { PrismaClient } = require('@prisma/client')

// initialize Prisma Client
const prisma = new PrismaClient();

const usersFake = [
    {
        nick:'zenx5',
        password:'12345',
        first_name:'Octavio',
        last_name:'Martinez',
        email:'omartinez1618@gmail.com',
        role:'admin,client,user',
        create_at: new Date()
    },
    {
        nick:'dimagachi',
        password:'12345',
        first_name:'Juan Jose',
        last_name:'Araujo',
        email:'jjar88@gmail.com',
        role:'client',
        create_at: new Date()
    }
]

const auctionsFake = [
    {
        name: 'Poz a Caracas',
        description: 'Cargamento de Cementos',
        image: '',
        price: 1600,
        active: true,
        expire_date:new Date()
    }
]

const bidsFake = [
    {
        value: 100,
        user_id:2,
        auction_id:1,
        create_at: new Date()
    }
]

async function main() {

    for( const user of usersFake ) {
        await prisma.user.create({
            data: user
        })
    }

    for( const auction of auctionsFake ) {
        await prisma.auction.create({
            data: auction
        })
    }

    for( const bid of bidsFake ) {
        await prisma.bid.create({
            data: bid
        })
    }

}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
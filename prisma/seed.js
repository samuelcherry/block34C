const prisma = require("../prisma");
const seed = async () => {
  const createCustomers = async () => {
    const customers = [
      { name: "Logan" },
      { name: "Chase" },
      { name: "Lincoln" },
      { name: "Dipper" }
    ];
    await prisma.customer.createMany({ data: customers });
  };
  const createRestaurant = async () => {
    const restaurants = [
      { name: "phily" },
      { name: "LA" },
      { name: "Atlanta" }
    ];
    await prisma.restaurant.createMany({ data: restaurants });
  };

  const createReservations = async () => {
    const reservations = [
      {
        customerId: 1,
        restaurantId: 1,
        reservationDate: new Date("2024-12-24"),
        partyCount: 2
      },
      {
        customerId: 3,
        restaurantId: 2,
        reservationDate: new Date("2024-12-25"),
        partyCount: 2
      },
      {
        customerId: 3,
        restaurantId: 3,
        reservationDate: new Date("2024-12-26"),
        partyCount: 2
      }
    ];
    await prisma.reservation.createMany({ data: reservations });
  };

  await createCustomers();
  await createRestaurant();
  await createReservations();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

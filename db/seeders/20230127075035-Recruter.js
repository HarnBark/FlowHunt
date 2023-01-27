/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Recruters',
      [{
        name: 'Papa',
        email: 'theBestPapa@mail.ru',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mama',
        email: 'theBestMama@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Recruters');
  },
};

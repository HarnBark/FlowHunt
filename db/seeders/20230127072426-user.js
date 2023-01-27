// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Мама Аня',
          email: 'anyta@gmail.com',
          password: await bcrypt.hash('123456', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Папа Толя',
          email: 'papochka@gmail.com',
          password: await bcrypt.hash('123456', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};

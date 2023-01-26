/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Candidates',
      [
        {
          name: 'Эдичка',
          email: 'krasavchik@yandex.ru',
          experience: 8.5,
          photo: '/img/r6.JPG',
          phone: '8(906)2541465',
          skype: 'krasavchik77',
          zoom: 'krasavchik77',
          status: 'Work',
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ульяночка',
          email: 'Ulya@gmail.com',
          experience: 6.4,
          photo: '/img/r5.JPG',
          phone: '8(905)8819245',
          skype: 'Ulya666',
          zoom: 'Ulya666',
          status: 'VideoCall',
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Александра',
          email: 'Сан9@yahoo.com',
          experience: 5.2,
          photo: '/img/r3.JPG',
          phone: '8(916)7564598',
          skype: 'Сан9',
          zoom: 'Сан9',
          status: 'Offer',
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Димка',
          email: 'd4ma@mail.ru',
          experience: 2.7,
          photo: '/img/r4.JPG',
          phone: '8(903)7424545',
          skype: 'd4ma',
          zoom: 'd4ma',
          status: 'Interview',
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Иришка',
          email: 'irin8chka@mail.ru',
          experience: 3.2,
          photo: '/img/r2.JPG',
          phone: '8(907)4664514',
          skype: 'irin8chka',
          zoom: 'irin8chka',
          status: 'Call',
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Candidates');
  },
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      experience: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      photo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      phone: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      skype: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      zoom: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      status: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidates');
  },
};

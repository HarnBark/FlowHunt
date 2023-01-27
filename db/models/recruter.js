const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recruter extends Model {
    static associate({ Candidate }) {
      this.hasMany(Candidate, { foreignKey: 'recruterId' });
    }
  }
  Recruter.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Recruter',
  });
  return Recruter;
};

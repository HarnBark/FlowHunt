const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate(models) {
      // define association here
    }
  }
  Candidate.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    skype: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    zoom: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};

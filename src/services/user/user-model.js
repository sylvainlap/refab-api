const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const user = sequelize.define('users', {
    cso: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    region: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    postalCode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM,
      values: ['admin', 'veto', 'ref', 'expert'],
      defaultValue: 'veto',
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  user.sync();

  return user;
};

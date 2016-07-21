const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const tag = sequelize.define('tags', {
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  tag.sync();

  return tag;
};

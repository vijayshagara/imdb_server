const UUID4 =require("uuid")

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type:Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  return User
};

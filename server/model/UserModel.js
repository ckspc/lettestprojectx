module.exports = (sequelize, Sequelize) => {
  const UserAccount = sequelize.define(
    "UserAccount",
    {
      uid: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: "uid",
      },
      username: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "username",
      },
      password: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "password",
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "name",
      },
      surname: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: "surname",
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "email",
      },
      type: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "type",
      },
      active_package: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    }
  );

  return UserAccount;
};

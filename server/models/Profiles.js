module.exports = (sequelize, DataTypes) => {
  const Profiles = sequelize.define("Profiles", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

 

  return Profiles;
};

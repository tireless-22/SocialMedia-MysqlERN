module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentData: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  });

  return Comments;
};

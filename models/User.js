module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      financeGoal: DataTypes.STRING,
      creditScore: DataTypes.STRING,
      currentDebt: DataTypes.STRING,
      retirement: DataTypes.BOOLEAN,

    });
  
    
    User.associate = function(models) {
      // Associating User with FinancialInfo (the data table)
      //the data will belong to the user
      // When an Author is deleted, also delete any associated Posts
      User.hasMany(models.FinancialInfo, {
        onDelete: "cascade"
      });  
    };

    return User;
  };
  
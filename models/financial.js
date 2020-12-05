//Only setting up columns inside of the table

module.exports = function(sequelize, DataTypes) {
    var FinancialInfo = sequelize.define("FinancialInfo", {
     


      /*
        goal: {
            type: DataTypes.STRING,
            allowNull: false
          },
        creditScore: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      currentDebt: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      */
      currentRetirement: {
        type: DataTypes.STRING,
        allowNull: false
      },

      /*
      advice: {
        type: DataTypes.STRING
      } */

      
    });
    return FinancialInfo;
  };
 
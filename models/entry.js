console.log("Hello");
module.exports = function(sequelize, DataTypes) {
	var Entries = sequelize.define("Entries", {
      id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
		entry: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		context: {
			type: DataTypes.STRING(420),
			allowNull: false
		},
		contextLink: {
			type: DataTypes.STRING(200),
			allowNull: true
		}
    }, {
        classMethods: {
            associate: function(models) {
              // associations can be defined here
            }
          }
    });
    console.log("ENTRIES ENTRIES:" + Entries);
	return Entries;
	
};
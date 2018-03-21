module.exports = function(sequelize, DataTypes) {
	var Entry = sequelize.define("Entry", {
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
	});
	return Entry;
};
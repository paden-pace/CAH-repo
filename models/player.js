module.exports = function(sequelize, DataTypes) {
	var Player = sequelize.define("Player", {
		name: DataTypes.STRING,
		points: DataTypes.INTEGER,
		czarStatus: DataTypes.BOOLEAN
	});
	return Player;
};
module.exports = function(sequelize, DataTypes) {
	var Player = sequelize.define("Player", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50]
			}
		},
		points: {
			type: DataTypes.INTEGER,
			validate: {
				min: 0
			}
		},
		czarStatus: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		hand: {
			type: DataTypes.ARRAY
		}
	});
	return Player;
};
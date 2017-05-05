module.exports = function(sequelize, DataTypes) {
	var Cards = sequelize.define("Card", {
		text: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
};
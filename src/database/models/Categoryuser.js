module.exports = (sequelize, DataTypes) => {
    const alias = 'Categoryusers'
    const cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nameCategoryUser: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }
    const config = {
        tableName: 'categoryusers',
        timestamps: false,
        /*createdAt: 'created_at',
        updatedAt: 'updated_at',*/
        deletedAt: false
    }

    const Categoryuser = sequelize.define(alias, cols, config)

    Categoryuser.associate = function (models) {
        Categoryuser.belongsTo(models.User, {
            as: "Categoryuser_perteneceA_User",
            foreignKey: "idcategoryUser"
        })
    }

    return Categoryuser;
}

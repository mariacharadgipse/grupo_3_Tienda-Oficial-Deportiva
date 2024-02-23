module.exports = (sequelize, DataTypes) => {
    const alias = 'Categoryproducts'
    const cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nameCategoryProduct: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }
    const config = {
        tableName: 'categoryproducts',
        timestamps: false,
        /*createdAt: 'created_at',
        updatedAt: 'updated_at',*/
        deletedAt: false
    }

    const Categoryproduct = sequelize.define(alias, cols, config);

    Categoryproduct.associate = function (models) {
        Categoryproduct.hasMany(models.Product, {
            as: "Categoryproduct_tieneMuchos_Product",
            foreignKey: "idCategoryProduct"
        });
    };

    return Categoryproduct;
};

module.exports = (sequelize, DataTypes) => {
    const alias = 'Categoryproducts'
    const cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nameCategoryProduct	: {
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

    const Categoryproduct = sequelize.define(alias, cols, config)
    return Categoryproduct;
}

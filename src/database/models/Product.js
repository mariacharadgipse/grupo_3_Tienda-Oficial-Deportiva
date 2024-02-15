module.exports = (sequelize, DataTypes) => {
    const alias = 'Products'
    const cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,            
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idCategoryProduct : {
            type: DataTypes.INTEGER,
            allowNull: false,            
        },   
        price : {
            type: DataTypes.DECIMAL(6,2).UNSIGNED,
            allowNull: false,            
        },  
        discount: {
            type: DataTypes.DECIMAL(2, 1).UNSIGNED,
            allowNull: false,
        },
        idcolor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
    const config = {
        tableName: 'products',
        timestamps: false,
        /*createdAt: 'created_at',
        updatedAt: 'updated_at',*/
        deletedAt: false        
    }    

    const Product = sequelize.define(alias, cols, config)
    return Product;
}
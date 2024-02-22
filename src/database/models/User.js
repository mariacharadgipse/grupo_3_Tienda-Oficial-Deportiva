module.exports = (sequelize, DataTypes) => {
    const alias = 'Users'
    const cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,            
        },
        imageUser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName : {
            type: DataTypes.STRING,
            allowNull: false,            
        },   
        lastName : {
            type: DataTypes.STRING,
            allowNull: false,            
        },  
        discount: {
            type: DataTypes.DECIMAL(2, 1).UNSIGNED,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idcategoryUser : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },                                           
    }
    const config = {
        tableName: 'users',
        timestamps: false,
        /*createdAt: 'created_at',
        updatedAt: 'updated_at',*/
        deletedAt: false        
    }    

    const User = sequelize.define(alias, cols, config)

    User.associate = function (models) {
        User.hasMany(models.Categoryuser, { 
            as: "User_tieneUna_Categoryuser",
            foreignKey: "idcategoryUser"
        })
    }

    return User;
}

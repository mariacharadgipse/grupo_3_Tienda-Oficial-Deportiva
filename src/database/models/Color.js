module.exports = (sequelize, DataTypes) => {
    const alias = 'Colors'
    const cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nameColor: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,            
        },
                                        
    }
    const config = {
        tableName: 'colors',
        timestamps: false,
        /*createdAt: 'created_at',
        updatedAt: 'updated_at',*/
        deletedAt: false        
    }    

    const Color = sequelize.define(alias, cols, config)
    return Color;
}

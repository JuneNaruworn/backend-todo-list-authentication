const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (Sequelize, DataTypes) => {
    const model = Sequelize.define('TodoList', {
        task: {
            type: DataTypes.STRING(255)
         }
    },{
        tableName: 'todolists',
        timestamps: false,
    });

    model.associate = models => {
        model.hasMany(model.TodoList,{ foreignKey: 'user_id'});
    };

    return model;

}
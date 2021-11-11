module.exports =(sequelize, DataTypes)=>{
    const EventReg = sequelize.define('EventReg',{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
        });
        EventReg.associate = models=>{
          EventReg.belongsTo(models.Events,{
            foreignKey:{
                allowNull:false
            }
          })
        }

    return EventReg
}
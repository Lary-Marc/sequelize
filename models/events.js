
module.exports =(sequelize, DataTypes)=>{
    const Events = sequelize.define('Events',{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          date: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          time: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          location: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          image: {
            type: DataTypes.BLOB,
            allowNull: false,
          },
        
        });
        
        Events.associate = models=>{
          Events.hasOne(models.EventReg,{
              onDelete:'cascade'
          })
        
        }

    return Events
}
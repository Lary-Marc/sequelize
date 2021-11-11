
module.exports =(sequelize, DataTypes)=>{
    const BookAppointment = sequelize.define('BookAppointment',{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
         description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
         readMore: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          image: {
            type: DataTypes.BLOB,
            allowNull: false,
          },
     
        
        });
        
        // Events.associate = models=>{
        //   Events.hasOne(models.EventReg,{
        //       onDelete:'cascade'
        //   })
        
        // }

    return BookAppointment
}
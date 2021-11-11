
module.exports =(sequelize, DataTypes)=>{
    const BookAppointment = sequelize.define('BookAppointment',{
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          dob: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          gender: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          location: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          specialty: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          doa: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          toa: {
            type: DataTypes.TIME,
            allowNull: false,
          },
          pmi: {
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
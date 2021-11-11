
module.exports =(sequelize, DataTypes)=>{
    const UserSignup = sequelize.define('UserSignup',{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
       
         email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          confirmPassword: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
        });
        
        // Events.associate = models=>{
        //   Events.hasOne(models.EventReg,{
        //       onDelete:'cascade'
        //   })
        
        // }

    return UserSignup
}

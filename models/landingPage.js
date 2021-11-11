
module.exports =(sequelize, DataTypes)=>{
    const LandingPage = sequelize.define('LandingPage',{
        img: {
            type: DataTypes.BLOB,
            allowNull: false,
          },
          text1: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          text2: {
            type: DataTypes.STRING,
            allowNull: false,
          },
         text3: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
        });
        
        // Events.associate = models=>{
        //   Events.hasOne(models.EventReg,{
        //       onDelete:'cascade'
        //   })
        
        // }

    return LandingPage
}
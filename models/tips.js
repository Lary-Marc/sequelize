
module.exports =(sequelize, DataTypes)=>{
    const Tips = sequelize.define('Tips',{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      
        
        });
        

    return Tips
}
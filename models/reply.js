module.exports =(sequelize, DataTypes)=>{
    const Replies = sequelize.define('Replies',{
        text:{
            type:DataTypes.STRING,
            allowNull:false
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false
        }
    })

Replies.associate = models=>{
    Replies.belongsTo(models.Comments,{
      foreignKey:{
          allowNull:false
      }
    })
    
}

    return Replies
}
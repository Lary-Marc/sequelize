module.exports =(sequelize, DataTypes)=>{
    const Comments = sequelize.define('Comments',{
        text:{
            type:DataTypes.STRING,
            allowNull:false
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false
        },
    })


Comments.associate = models=>{
    Comments.belongsTo(models.Research,{
      foreignKey:{
          allowNull:false
      }
    })
}
Comments.associate = models=>{
    Comments.hasMany(models.Replies,{
        onDelete:'cascade'
    })
}
    return Comments
}

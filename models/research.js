
module.exports =(sequelize, DataTypes)=>{
    const Research = sequelize.define('Research',{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        blog:{
            type:DataTypes.STRING,
            allowNull:false
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false
        }

    })

Research.associate = models=>{
    Research.hasMany(models.Comments,{
        onDelete:'cascade'
    })
    
 
}

    return Research
}
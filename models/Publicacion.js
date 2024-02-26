'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publicacion.belongsTo(models.Usuario,{foreignKey:'idusuario'})
      Publicacion.hasMany(models.Imagen,{foriegnKey:'idpublicacion'})
      Publicacion.hasMany(models.Comentario,{foreignKey:'idpublicacion'})
      Publicacion.hasMany(models.Like,{foriegnKey:'idpublicacion'})

    }
  }
  Publicacion.init({
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    idusuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publicacion',
  });
  return Publicacion;
};
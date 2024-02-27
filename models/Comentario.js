'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comentario.belongsTo(models.Publicacion,{foriegnKey:'idpublicacion'})
      Comentario.belongsTo(models.Usuario,{foreignKey:'idusuario'})

    }
  }
  Comentario.init({
    texto: DataTypes.STRING,
    fecha: DataTypes.DATE,
    idpublicacion: DataTypes.INTEGER,
    idusuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};
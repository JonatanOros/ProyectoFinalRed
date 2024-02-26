'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comentario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      texto: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      idpublicacion: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references:{

          model:'Publicacion',
          Key:'id'
        }

      },
      idusuario: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references:{

          model:'Usuario',
          Key:'id'
        }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comentario');
  }
};

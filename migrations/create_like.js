'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Like', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Like');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Scenes', [
      {
        title: 'Andar pelo Corredor',
        location: 'a',
        description: 'a',
        test: false,
        difficulty: 1,
        failAction: 1,
        physicalAction: 1,
        socialAction: 1,
        mentalAction: 1,
        typo: 'physical',  
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Scenes', { title: 'Andar pelo Corredor' }, {});
  }
};
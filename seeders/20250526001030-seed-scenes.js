'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Scenes', [
      {
        id: 1,
        title: 'Chegar ao portão da escola',
        location: 'Portão da Escola',
        description: 'O sol da manhã ainda toca suave os telhados quando o aluno se aproxima dos grandes portões da escola...',
        test: false,
        difficulty: 0,
        typo: 'mental',
        failAction: null,
        physicalAction: null,
        socialAction: null,
        mentalAction: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Ir para a secretaria',
        location: 'Secretaria',
        description: 'O aluno caminha pelos corredores ainda silenciosos até encontrar uma porta com uma placa: Secretaria...',
        test: false,
        difficulty: 0,
        typo: 'social',
        failAction: null,
        physicalAction: null,
        socialAction: 3,
        mentalAction: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Pedir informações sobre a sala',
        location: 'Secretaria',
        description: 'O aluno se aproxima da mesa com um leve sorriso. A senhora de óculos, com expressão paciente, ergue os olhos...',
        test: true,
        difficulty: 3,
        typo: 'social',
        failAction: 5,
        physicalAction: null,
        socialAction: 6,
        mentalAction: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Observar os documentos na mesa',
        location: 'Secretaria',
        description: 'Enquanto espera, o aluno deixa os olhos passearem pela mesa. Entre papéis soltos, vê horários de aulas...',
        test: true,
        difficulty: 4,
        typo: 'mental',
        failAction: 5,
        physicalAction: null,
        socialAction: null,
        mentalAction: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Sair da secretaria confuso',
        location: 'Corredor da Secretaria',
        description: 'Com a cabeça cheia de informações e o mapa mal compreendido, o aluno deixa a secretaria meio desnorteado...',
        test: false,
        difficulty: 0,
        typo: 'physical',
        failAction: null,
        physicalAction: 7,
        socialAction: null,
        mentalAction: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        title: 'Agradecer e seguir o mapa',
        location: 'Corredor da Secretaria',
        description: 'Com o mapa em mãos e a indicação clara da senhora da secretaria, o aluno agradece com um sorriso...',
        test: false,
        difficulty: 0,
        typo: 'mental',
        failAction: null,
        physicalAction: 7,
        socialAction: null,
        mentalAction: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        title: 'Andar pelo corredor principal',
        location: 'Corredor Principal',
        description: 'O aluno percorre o longo corredor principal da escola. As janelas à esquerda deixam a luz da manhã pintar o chão...',
        test: false,
        difficulty: 0,
        typo: 'physical',
        failAction: null,
        physicalAction: 8,
        socialAction: 9,
        mentalAction: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        title: 'Ir para a sala de aula',
        location: 'Sala de Aula',
        description: 'O aluno entra discretamente por uma das portas abertas. A sala de aula é ampla, iluminada por janelas altas...',
        test: false,
        difficulty: 0,
        typo: 'mental',
        failAction: null,
        physicalAction: null,
        socialAction: 11,
        mentalAction: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        title: 'Cumprimentar outros alunos no corredor',
        location: 'Corredor Principal',
        description: 'O aluno se aproxima de um pequeno grupo de colegas encostados nas janelas. Alguns estão rindo...',
        test: true,
        difficulty: 2,
        typo: 'social',
        failAction: 13,
        physicalAction: null,
        socialAction: 14,
        mentalAction: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        title: 'Observar os cartazes nas paredes',
        location: 'Corredor Principal',
        description: 'Enquanto caminha, o aluno desacelera para ler os cartazes colados nas paredes. Um deles anuncia uma Feira...',
        test: true,
        difficulty: 5,
        typo: 'mental',
        failAction: 13,
        physicalAction: null,
        socialAction: null,
        mentalAction: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Scenes', null, {});
  }
};

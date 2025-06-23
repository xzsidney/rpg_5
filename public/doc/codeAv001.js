const aventurasEscolares = [
  // --- INÍCIO: PORTÃO DA ESCOLA ---
  {
    id: 1,
    title: "Chegar à Escola",
    location: "Portão da Escola",
    description: "O imponente portão da Escola Saber Infinito se abre para mais um dia. Alunos entram apressados, outros conversam em grupos animados. O inspetor, Sr. Antunes, observa tudo com seu olhar atento. O que você faz?",
    test: false,
    difficulty: 0,
    type: null, // Sem tipo específico, é o início
    failAction: null,
    physicalAction: 2,  // Correr para a secretaria pegar o horário
    socialAction: 3,    // Cumprimentar o Sr. Antunes
    mentalAction: 4     // Observar o movimento e planejar o dia
  },

  // --- CAMINHOS DO PORTÃO ---
  {
    id: 2,
    title: "Apressar-se para a Secretaria",
    location: "Corredor / Secretaria",
    description: "Você decide pegar seu horário na secretaria antes que a fila fique enorme. Você corre pelos corredores, quase esbarrando em alguns alunos.",
    test: false,
    difficulty: 0,
    type: "physical", // Ação que te trouxe aqui foi física
    failAction: null,
    physicalAction: 5,  // Entrar na secretaria e tentar ser atendido rapidamente
    socialAction: 6,    // Parar para ajudar um aluno que deixou cair os livros
    mentalAction: 7     // Checar o mural de avisos antes de entrar na secretaria
  },
  {
    id: 3,
    title: "Interagir com o Inspetor",
    location: "Portão da Escola",
    description: "Você se aproxima do Sr. Antunes. 'Bom dia, Sr. Antunes!'. Ele te olha, com um leve sorriso. 'Bom dia, jovem. Vejo que chegou animado hoje.'",
    test: true,
    difficulty: 3,
    type: "social", // Teste social para causar boa impressão
    failAction: 8,    // Falha: Sr. Antunes te dá uma bronca leve
    physicalAction: 9,  // (Sucesso) Oferecer ajuda para carregar uma caixa
    socialAction: 10,   // (Sucesso) Puxar um papo rápido sobre o dia
    mentalAction: 11    // (Sucesso) Perguntar sobre alguma novidade na escola
  },
  {
    id: 4,
    title: "Analisar o Ambiente",
    location: "Portão da Escola",
    description: "Você para por um instante, observando os grupos. Percebe alguns colegas planejando algo perto do bicicletário e vê um cartaz novo no mural principal. Parece que o dia será agitado.",
    test: false,
    difficulty: 0,
    type: "mental", // Ação que te trouxe aqui foi mental
    failAction: null,
    physicalAction: 2,  // Decidir ir à secretaria após observar
    socialAction: 12,   // Aproximar-se do grupo do bicicletário
    mentalAction: 13    // Ir verificar o cartaz novo no mural
  },

  // --- DESDOBRAMENTOS DA SECRETARIA (vindo da cena 2) ---
  {
    id: 5,
    title: "Buscar Atendimento na Secretaria",
    location: "Secretaria",
    description: "Você entra na secretaria. A Sra. Célia, a secretária, parece ocupada ao telefone. Há uma pequena fila.",
    test: false,
    difficulty: 0,
    type: "physical", // Chegou aqui de forma "direta"
    failAction: null,
    physicalAction: 14, // Tentar chamar a atenção da Sra. Célia gesticulando
    socialAction: 15,   // Esperar pacientemente e cumprimentar quando ela desligar
    mentalAction: 16    // Procurar seu nome numa lista de horários impressa na parede
  },
  {
    id: 6,
    title: "Ajudar Colega no Corredor",
    location: "Corredor",
    description: "Você para e ajuda um aluno a recolher seus livros espalhados. Ele agradece muito. 'Obrigado! Meu nome é Lucas. Você é novo por aqui?'",
    test: false,
    difficulty: 0,
    type: "social",
    failAction: null,
    physicalAction: 2, // Despedir-se e seguir para a secretaria
    socialAction: 17,  // Conversar um pouco com Lucas
    mentalAction: 7,   // Lembrar se já viu Lucas antes e seguir para o mural
  },
  {
    id: 7,
    title: "Verificar Mural de Avisos",
    location: "Corredor (Mural)",
    description: "O mural está cheio de informações: um campeonato de xadrez, inscrições para o grêmio estudantil e um aviso sobre a festa de boas-vindas.",
    test: false,
    difficulty: 0,
    type: "mental",
    failAction: null,
    physicalAction: 5,  // Ir para a secretaria após ver o mural
    socialAction: 18,   // Comentar sobre a festa com alguém próximo
    mentalAction: 19    // Anotar mentalmente as datas importantes
  },

  // --- FALHA SOCIAL COM SR. ANTUNES (vinda da cena 3) ---
  {
    id: 8,
    title: "Levar Bronca do Inspetor",
    location: "Portão da Escola",
    description: "Sua tentativa de ser simpático não cola. 'Menos conversa e mais foco nos estudos, hein? Ande logo para a sua sala!', diz Sr. Antunes, um pouco ríspido. Você se sente um pouco intimidado.",
    test: false,
    difficulty: 0,
    type: "social", // Resultado de uma falha social
    failAction: null,
    physicalAction: 20, // Ir apressado para a Sala de Aula
    socialAction: 40,   // Tentar se justificar para o inspetor (arriscado!)
    mentalAction: 4     // Ignorar e observar o movimento, já que está aqui
  },

  // --- SUCESSO COM SR. ANTUNES (vinda da cena 3) ---
  {
    id: 9,
    title: "Ajudar o Inspetor",
    location: "Portão da Escola",
    description: "Você oferece ajuda para carregar uma caixa de materiais para a sala dos professores. Sr. Antunes aceita com um sorriso. 'Muito gentil da sua parte!'",
    test: false,
    difficulty: 0,
    type: "physical",
    failAction: null,
    physicalAction: 21, // Levar a caixa até a Sala dos Professores
    socialAction: 10,   // Aproveitar para conversar enquanto ajuda
    mentalAction: 11    // Tentar espiar o que tem na caixa discretamente
  },
  {
    id: 10,
    title: "Conversar com o Inspetor",
    location: "Portão da Escola",
    description: "Você e Sr. Antunes trocam algumas palavras amigáveis. Ele parece gostar da sua atitude. 'Continue assim, dedicado e educado. Terá um bom ano.'",
    test: false,
    difficulty: 0,
    type: "social",
    failAction: null,
    physicalAction: 20, // Agradecer e ir para a Sala de Aula
    socialAction: 12,   // Perguntar sobre o grupo do bicicletário que ele também viu
    mentalAction: 13    // Perguntar sobre o cartaz novo no mural
  },
  {
    id: 11,
    title: "Obter Informação do Inspetor",
    location: "Portão da Escola",
    description: "Você pergunta sobre novidades. Sr. Antunes menciona que a Biblioteca recebeu novos livros de aventura. 'Passe lá depois, pode gostar.'",
    test: false,
    difficulty: 0,
    type: "mental",
    failAction: null,
    physicalAction: 20, // Agradecer e ir para a Sala de Aula
    socialAction: 22,   // Perguntar mais detalhes sobre os livros
    mentalAction: 23    // Decidir ir à Biblioteca no primeiro intervalo
  },

  // --- DESDOBRAMENTOS DA OBSERVAÇÃO NO PORTÃO (vinda da cena 4) ---
  {
    id: 12,
    title: "Investigar Grupo do Bicicletário",
    location: "Perto do Bicicletário",
    description: "Você se aproxima do grupo. Eles estão cochichando sobre um 'esquema' para colar na prova de matemática. Um deles te olha desconfiado.",
    test: true,
    difficulty: 5,
    type: "social", // Teste para se enturmar ou ser descoberto
    failAction: 24,   // Falha: Eles te afastam ou te ameaçam
    physicalAction: 25, // (Sucesso) Tentar intimidá-los para conseguir informações
    socialAction: 26,   // (Sucesso) Tentar se enturmar e descobrir o plano
    mentalAction: 27    // (Sucesso) Fingir desinteresse e apenas observar os detalhes
  },
  {
    id: 13,
    title: "Ler o Cartaz Novo",
    location: "Corredor (Mural Principal)",
    description: "O cartaz anuncia um show de talentos da escola! As inscrições vão até o final da semana. Parece divertido, mas também um grande desafio.",
    test: false,
    difficulty: 0,
    type: "mental",
    failAction: null,
    physicalAction: 28, // Animar-se e pensar em um talento físico (dança, malabarismo)
    socialAction: 29,   // Procurar amigos para formar um grupo
    mentalAction: 30    // Considerar se inscrever com um talento mental (mágica, stand-up)
  },

  // --- SALA DE AULA (Pode ser acessada de vários pontos) ---
  {
    id: 20,
    title: "Entrar na Sala de Aula",
    location: "Sala de Aula",
    description: "Você entra na sala. O professor de Português, Sr. Norberto, já está começando a chamada. Alguns colegas te cumprimentam com um aceno.",
    test: false,
    difficulty: 0,
    type: null, // Entrada neutra
    failAction: null,
    physicalAction: 31, // Sentar-se na primeira carteira vaga
    socialAction: 32,   // Procurar um amigo para sentar perto
    mentalAction: 33    // Tentar identificar o assunto da aula pelo material na mesa do professor
  },

  // --- Durante a Aula ---
  {
    id: 33, // Supondo que você escolheu a ação mental na cena 20
    title: "Prestar Atenção na Aula",
    location: "Sala de Aula",
    description: "O Sr. Norberto está explicando sobre figuras de linguagem. É um assunto interessante, mas exige concentração. De repente, ele faz uma pergunta para a turma.",
    test: true,
    difficulty: 6,
    type: "mental", // Teste de conhecimento / atenção
    failAction: 34,   // Falha: Não saber responder e passar vergonha
    physicalAction: 35, // (Sucesso) Levantar a mão rapidamente para responder
    socialAction: 36,   // (Sucesso) Tentar responder, mesmo com um pouco de hesitação
    mentalAction: 37    // (Sucesso) Formular uma resposta completa e bem pensada
  },
  {
    id: 34,
    title: "Passar Vergonha na Aula",
    location: "Sala de Aula",
    description: "Você não sabe a resposta. O professor suspira e alguns colegas dão risadinhas. Que mancada! Você decide ficar quieto e prestar mais atenção.",
    test: false,
    difficulty: 0,
    type: "social", // Consequência social negativa
    failAction: null,
    physicalAction: 45, // Ir para a Cantina cabisbaixo no intervalo
    socialAction: 45,   // Tentar se esconder no fundo da sala no intervalo
    mentalAction: 46    // Decidir ir à Biblioteca estudar no intervalo
  },

  // --- SALA DOS PROFESSORES (Acesso restrito/especial) ---
  {
    id: 21, // Vindo de ajudar o Sr. Antunes
    title: "Entrar na Sala dos Professores",
    location: "Sala dos Professores",
    description: "Você entra rapidamente para deixar a caixa. Alguns professores te olham com curiosidade, outros nem notam. O ambiente é mais sério e cheio de livros.",
    test: false,
    difficulty: 0,
    type: "physical",
    failAction: null,
    physicalAction: 38, // Deixar a caixa e sair rapidamente
    socialAction: 39,   // Agradecer e perguntar se precisam de mais alguma ajuda
    mentalAction: 40    // Tentar dar uma olhada rápida nos papéis sobre a mesa (arriscado!)
  },

  // --- BIBLIOTECA ---
  {
    id: 23, // Vindo da dica do inspetor
    title: "Visitar a Biblioteca",
    location: "Biblioteca",
    description: "A biblioteca é silenciosa e cheia de estantes. A bibliotecária, Dona Matilda, sorri para você. Há uma seção de 'Novidades' em destaque.",
    test: false,
    difficulty: 0,
    type: "mental",
    failAction: null,
    physicalAction: 41, // Pegar o primeiro livro que chamar a atenção na seção de novidades
    socialAction: 42,   // Pedir uma recomendação para Dona Matilda
    mentalAction: 43    // Pesquisar no catálogo por um tema específico
  },
  {
    id: 46, // Vindo de passar vergonha na aula e decidir estudar
    title: "Estudar na Biblioteca",
    location: "Biblioteca",
    description: "Você se senta em uma mesa vazia na biblioteca, determinado a entender a matéria. O silêncio ajuda a concentrar.",
    test: false,
    difficulty: 0,
    type: "mental",
    failAction: null,
    physicalAction: 47, // Fazer exercícios práticos do livro
    socialAction: 42,   // Pedir ajuda a Dona Matilda com uma dúvida
    mentalAction: 48    // Ler a teoria com muita atenção
  },


  // --- CANTINA ---
  {
    id: 45, // Vindo da sala de aula (intervalo)
    title: "Ir para a Cantina",
    location: "Cantina",
    description: "O intervalo finalmente chegou! A cantina está lotada e barulhenta. O cheiro de salgado paira no ar. Você vê alguns conhecidos.",
    test: false,
    difficulty: 0,
    type: null, // Neutro
    failAction: null,
    physicalAction: 49, // Enfrentar a fila para comprar um lanche
    socialAction: 50,   // Juntar-se a um grupo de amigos
    mentalAction: 51    // Procurar um canto mais calmo para observar
  },

  // --- ENFERMARIA (Exemplo de como chegar) ---
  // Suponha que uma ação física em outra cena (ex: aula de educação física) falhe
  {
    id: 60, // ID hipotético de falha em um teste físico
    title: "Machucar-se e ir para a Enfermaria",
    location: "Enfermaria",
    description: "Você torceu o tornozelo na aula de educação física! A enfermeira, Sra. Rosa, está cuidando de você. 'Vai precisar ficar de molho um pouco.'",
    test: false,
    difficulty: 0,
    type: "physical", // Consequência de uma ação física
    failAction: null,
    physicalAction: 61, // Tentar se levantar e testar o tornozelo (teimosia)
    socialAction: 62,   // Conversar com a Sra. Rosa para passar o tempo
    mentalAction: 63    // Refletir sobre como evitar se machucar da próxima vez
  },

  // --- SALA DE CASTIGO (Exemplo de como chegar) ---
  // Suponha que uma ação social ou mental muito errada leve para cá
  {
    id: 24, // Vindo de falha em se enturmar com o grupo do bicicletário (cena 12)
    title: "Ser Pego e Levado para o Castigo",
    location: "Sala de Castigo",
    description: "Sua tentativa de espionar o grupo do bicicletário deu muito errado. Eles chamaram o Sr. Antunes, que te arrastou para a sala de castigo. 'Vai ficar aí até o fim do dia pensando no que fez!' A sala é pequena e entediante.",
    test: false,
    difficulty: 0,
    type: "social", // Consequência de uma falha social grave
    failAction: null,
    physicalAction: 70, // Tentar rabiscar algo na carteira para passar o tempo
    socialAction: 71,   // Tentar conversar com outro aluno que também está de castigo (se houver)
    mentalAction: 72    // Refletir sobre seus erros e como não repeti-los
  },
  {
    id: 40, // Vindo de tentar dar olhada nos papéis na sala dos professores (cena 21) ou de tentar se justificar para o inspetor após bronca (cena 8)
    title: "Ser Flagrado e Acabar no Castigo",
    location: "Sala de Castigo",
    description: "Sua curiosidade (ou teimosia) te custou caro. Um professor (ou o Sr. Antunes) te pegou no flagra e agora você está na sala de castigo. 'Espero que aprenda a lição.'",
    test: false,
    difficulty: 0,
    type: "mental", // ou "social", dependendo da origem
    failAction: null,
    physicalAction: 70, // Tentar rabiscar algo na carteira para passar o tempo
    socialAction: 71,   // Tentar conversar com outro aluno que também está de castigo (se houver)
    mentalAction: 72    // Refletir sobre seus erros e como não repeti-los
  },


  // --- PÁTIO (ENCERRAMENTO) ---
  // Várias cenas podem levar ao pátio no fim do dia
  {
    id: 80,
    title: "Fim das Aulas no Pátio",
    location: "Pátio",
    description: "O sinal toca, anunciando o fim das aulas. O pátio rapidamente se enche de alunos ansiosos para ir para casa ou aproveitar o resto do dia. Você reflete sobre suas experiências de hoje.",
    test: false,
    difficulty: 0,
    type: null,
    failAction: null,
    physicalAction: 81, // Juntar-se a uma partida improvisada de futebol
    socialAction: 82,   // Despedir-se dos amigos e combinar algo para depois
    mentalAction: 83    // Sentar-se em um banco e recapitular o dia mentalmente
  },
  {
    id: 72, // Vindo de refletir na sala de castigo
    title: "Sair do Castigo para o Pátio",
    location: "Pátio",
    description: "Finalmente o castigo acabou. O Sr. Antunes te libera com um último sermão. O pátio está quase vazio, a maioria dos alunos já foi. Você se sente um pouco isolado, mas aliviado.",
    test: false,
    difficulty: 0,
    type: "mental",
    failAction: null,
    physicalAction: 81, // Correr para casa para não perder mais tempo
    socialAction: 82,   // Procurar por algum amigo que ainda possa estar por ali
    mentalAction: 83    // Sentar-se e pensar sobre como será o dia de amanhã
  },

  // --- FIM DE JOGO EXEMPLOS ---
  {
    id: 81, // Ou 82, 83
    title: "Ir Para Casa",
    location: "Saída da Escola",
    description: "O dia na Escola Saber Infinito chegou ao fim. Você caminha para casa, levando consigo as memórias e aprendizados de hoje. (FIM DA AVENTURA)",
    test: false,
    difficulty: 0,
    type: null,
    failAction: null,
    physicalAction: 1, // Placeholder para reiniciar ou próxima aventura
    socialAction: 1,   // Placeholder
    mentalAction: 1    // Placeholder
  },
  // Adicione mais cenas conforme necessário para conectar tudo!
  // Por exemplo, a cena 70, 71, 72 (sala de castigo) precisam de saídas.
  // A cena 72 já leva para o pátio.
  // Cenas 61, 62, 63 (enfermaria) precisam de saídas, como voltar para sala ou ir para casa.
  // As cenas 25, 26, 27 (sucesso com grupo do bicicletário) também precisam de continuações.

  // Exemplo de continuação para Sala de Castigo (após ações internas)
   {
    id: 70, // Rabiscar na carteira
    title: "Passar o Tempo no Castigo",
    location: "Sala de Castigo",
    description: "Você passa o tempo rabiscando na carteira, entediado. As horas se arrastam, mas finalmente o sinal toca. O Sr. Antunes entra e te libera com um olhar severo.",
    test: false,
    difficulty: 0,
    type: "physical",
    failAction: null,
    physicalAction: 80, // Ir para o Pátio (fim das aulas)
    socialAction: 80,   // Ir para o Pátio (fim das aulas)
    mentalAction: 80    // Ir para o Pátio (fim das aulas)
  },
   {
    id: 71, // Conversar com outro aluno no castigo
    title: "Fazer um 'Amigo' de Castigo",
    location: "Sala de Castigo",
    description: "Você conversa com outro aluno que também está de castigo. Descobrem que têm alguns gostos em comum. O tempo passa um pouco mais rápido. O sinal toca e vocês são liberados.",
    test: false,
    difficulty: 0,
    type: "social",
    failAction: null,
    physicalAction: 80, // Ir para o Pátio (fim das aulas)
    socialAction: 82,   // Combinar de se encontrar com o novo 'amigo' no pátio
    mentalAction: 80    // Ir para o Pátio (fim das aulas)
  },
];

// Para usar:
// const cenaAtual = aventurasEscolares.find(cena => cena.id === idDaCenaAtual);
// E então mostrar cenaAtual.description, e os botões com os títulos das cenas
// physicalAction, socialAction, mentalAction.
//

// Função para controle de inico da aventura 
function hideDivA() {
  document.getElementById('containerSenaText').style.display = 'none';
}

function showDivA() {
  document.getElementById('containerSenaText').style.display = 'block';
  document.getElementById('containerBtn').style.visibility = 'visible';
  let exibir = false;
  if (exibir === true) {
    document.getElementById('containerNPC').style.visibility = 'visible';
  } else {
    //vai alguma outra regra
  }

}

async function getNextScene(sceneId) {
  try {
    const res = await fetch(`/nextPlayScreen/${sceneId}`);
    if (!res.ok) throw new Error('Erro ao buscar cena');
    const dado = await res.json();
    return dado;
  } catch (error) {
    console.error('Erro em getNextScene:', error);
  }
}





async function chooseAction(actionId) {
  console.log("Escolhendo ação:", actionId);
  const dado = await getNextScene(actionId);



  if (!dado || !dado.scene ) {
    console.warn("Dados incompletos para a cena.");
    return;
  }

  const { scene,  physicalAction, socialAction, mentalAction } = dado;

 



  // Atualiza título e textos da cena
  document.getElementById("sceneTitle").innerText = `Cena 00${scene.id}: ${scene.title}`;
  document.getElementById("sceneTextDesc").innerText = scene.environmentDescription; 

  const sceneId = scene.id; //   
  const imgUrl = `/img/scene/0${sceneId}.png`; 
  const container = document.getElementById("containerGamePlay");
  container.style.backgroundImage = `url('${imgUrl}')`;
  container.style.backgroundRepeat = "no-repeat";
  container.style.backgroundPosition = "center center";
  container.style.backgroundSize = "cover";




  // Atualiza botões de ação   
  document.getElementById("title-physical").innerText = physicalAction.title;
  document.getElementById("diff-physical").innerText = "Difficulty: " + "⭐".repeat(physicalAction.difficulty || 0);
  document.getElementById("firstAction").setAttribute("onclick", `chooseAction(${scene.physicalAction})`);

  document.getElementById("title-social").innerText = socialAction.title;
  document.getElementById("diff-social").innerText = "Difficulty: " + "⭐".repeat(socialAction.difficulty || 0);
  document.getElementById("secondAction").setAttribute("onclick", `chooseAction(${scene.socialAction})`);

  document.getElementById("title-mental").innerText = mentalAction.title;
  document.getElementById("diff-mental").innerText = "Difficulty: " + "⭐".repeat(mentalAction.difficulty || 0);
  document.getElementById("thirdAction").setAttribute("onclick", `chooseAction(${scene.mentalAction})`);





}





/*  
  const roll = Math.floor(Math.random() * 10) + 1;

  // Gerar novos IDs numéricos fictícios com base no ID atual
  const newPhysicalId = actionId + 1;
  const newSocialId = actionId + 2;
  const newMentalId = actionId + 3;
  const npcSpeak = true

  if (npcSpeak === true) {
    document.getElementById('containerNPC').style.visibility = 'visible';
    document.getElementById("npcSpeaker").innerHTML = "<strong>Professora Helena:</strong> Seja bem-vinda! Pegue seu material e se acomode. A aula já vai começar. Rolagem: " + roll;
    document.getElementById("npcImage").setAttribute("src", "/img/adventures/02.jpg");

  }

  // Atualiza o titulo da Cena e o texto
  document.getElementById("sceneTitle").innerText = "Cena 02: Correndo na Escola" + roll;
  document.getElementById("sceneDesc").innerText = "Cena 02: Descrição" + roll;
  document.getElementById("sceneTextDesc").innerText = "Cena 02: Descrição" + roll;
  document.getElementById("sceneChar").innerText = "Cena 02: Char" + roll;
  document.getElementById("sceneTextChar").innerText = "Cena 02: Char Texto" + roll;

  // Atualiza oos dados dos BNT ação
  document.getElementById("title-physical").innerText = "💪 Brave Tackle"; 
  document.getElementById("diff-physical").innerText = "Difficulty: " + "⭐".repeat(roll);

  document.getElementById("title-social").innerText = "🗣️ Class Clown"; 
  document.getElementById("diff-social").innerText = "Difficulty: " + "⭐".repeat(roll);


  document.getElementById("title-mental").innerText = "🧠 Logical Scan"; 
  document.getElementById("diff-mental").innerText = "Difficulty: " + "⭐".repeat(roll);


  // Atualiza os onClick com novos IDs inteiros
  document.getElementById("physical").setAttribute("onclick", `chooseAction(${newPhysicalId})`);
  document.getElementById("social").setAttribute("onclick", `chooseAction(${newSocialId})`);
  document.getElementById("mental").setAttribute("onclick", `chooseAction(${newMentalId})`);

  console.log(`🎲 Rolado: ${roll} | Ação ID recebida: ${actionId}`);
 


** /

// Regra para jogar o dado 
function rollDice() {
  const roll = Math.floor(Math.random() * 10) + 1;
  const resultEl = document.getElementById('roll-result');
  const penaltyEl = document.getElementById('penalty-effect');

  resultEl.innerHTML = '🎲 Rolando dado...';
  penaltyEl.style.display = 'none';

  setTimeout(() => {
    resultEl.innerHTML = `🎲 Resultado: ${roll}`;

    if (roll >= 6) {
      resultEl.innerHTML += '<br>✅ Sucesso!';
    } else {
      resultEl.innerHTML += '<br>❌ Falha!';
      penaltyEl.style.display = 'block';

      setTimeout(() => {
        penaltyEl.style.display = 'none';
      }, 2500);
    }
  }, 1000);
}

 
- */
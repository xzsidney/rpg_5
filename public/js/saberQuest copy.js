function toggleAdventure() {
    // Pega o elemento da aventura
    const adventureBox = document.getElementById('adventureBox');

    // Verifica o estado atual da visibilidade
    if (adventureBox.style.display === "none") {
        // Se estiver oculto, exibe o conteúdo
        adventureBox.style.display = "block";
    } else {
        // Se estiver visível, oculta o conteúdo
        adventureBox.style.display = "none";
    }
}
 // Exibe a descrição ao passar o mouse
function showInfo(text) { 
  document.getElementById("info-text").innerText = text;
}

 function chooseAction11(aresultId) {
  alert("Você escolheu a ação com ID: " + aresultId);

  // Isso depois virá do resultado da rolagem (success ou fail → próximo action)
  const actionsId = aresultId;

  fetch(`/playAdventure/${actionsId}`)
    .then(res => res.json())
    .then(data => { 
      const action = data.action[0];
     const npcDialog = data.action[0].npcDialog; 
    

      if (!action) {
        console.warn("Ação não encontrada.");
        return;
      }
      
      if (npcDialog) {
        document.getElementById("npc-text").innerHTML =
          `<strong>${npcDialog.npcName}:</strong> ${npcDialog.dialogText}`;
      } else {
        document.getElementById("npc-text").innerHTML =
          `<strong>???</strong>: ...`;
      }
      
       
   
     
     
      // Atualiza os botões com os novos valores
      document.getElementById("1").setAttribute("onmouseover", `showInfo('${action.description}')`);
      document.getElementById("1").setAttribute("onclick", `chooseAction(${action.physicalAction})`);
 
      let getsocialAction = getActionById(action.socialAction);
      document.getElementById("2").setAttribute("onmouseover", `showInfo('${getsocialAction}')`);
      document.getElementById("2").setAttribute("onclick", `chooseAction(${action.socialAction})`);

        let getmentalAction = getActionById(action.mentalAction);
      document.getElementById("3").setAttribute("onmouseover", `showInfo('${getmentalAction}')`);
      document.getElementById("3").setAttribute("onclick", `chooseAction(${action.mentalAction})`);
     
    })
    .catch(err => {
      console.error("Erro ao buscar ações:", err);
    });
}

async function chooseAction(aresultId) {
 

  const actionsId = aresultId;

  try {
    const res = await fetch(`/playAdventure/${actionsId}`);
    const data = await res.json();
    const action = data.action[0];
    const npcDialog = action.npcDialog;

    if (!action) {
      console.warn("Ação não encontrada.");
      return;
    }

    // Atualiza fala do NPC
    if (npcDialog) {
      document.getElementById("npc-text").innerHTML =
        `<strong>${npcDialog.npcName}:</strong> ${npcDialog.dialogText}`;
    } else {
      document.getElementById("npc-text").innerHTML =
        `<strong>???</strong>: ...`;
    }

    const physicalActionObj = await getActionById(action.physicalAction);
    // Atualiza botão físico (usa o próprio objeto atual)
    document.getElementById("1").setAttribute("onmouseover", `showInfo('${physicalActionObj.description}')`);
    document.getElementById("1").setAttribute("onclick", `chooseAction(${action.physicalAction})`);

    // Busca texto da ação social
    const socialActionObj = await getActionById(action.socialAction);
    if (socialActionObj) {
      document.getElementById("2").setAttribute("onmouseover", `showInfo('${socialActionObj.description}')`);
      document.getElementById("2").setAttribute("onclick", `chooseAction(${action.socialAction})`);
    }

    // Busca texto da ação mental
    const mentalActionObj = await getActionById(action.mentalAction);
    if (mentalActionObj) {
      document.getElementById("3").setAttribute("onmouseover", `showInfo('${mentalActionObj.description}')`);
      document.getElementById("3").setAttribute("onclick", `chooseAction(${action.mentalAction})`);
    }

  } catch (err) {
    console.error("Erro ao buscar ações:", err);
  }
}


 
function getActionById(id) {
  return fetch(`/playAdventure/type/${id}`)  
    .then(res => res.json())
    .then(data => data.action)
    .catch(err => {
      console.error('Erro ao buscar ação:', err);
      return null;
    });
}





/*
function atualizarBotoesComNovasAcoes(acoes) {
  acoes.forEach((acao, index) => {
    const botao = document.getElementById((index + 1).toString());

    const tipo = acao.physicalAction ? '💪 Ação Física' :
      acao.socialAction ? '🗣️ Ação Social' :
        acao.mentalAction ? '🧠 Ação Mental' : '❓ Ação';

    botao.innerText = tipo;
    botao.setAttribute('onmouseover', `showInfo('${acao.description}')`);
    botao.setAttribute('onclick', `chooseAction(${acao.id})`);
  });
}

function atualizarNpc(dialogo) {
  if (!dialogo) return;

  const npcFace = document.querySelector(".npc-face");
  const npcText = document.querySelector(".npc-dialog p");

  npcFace.src = `/img/adventures/${dialogo.actionResultId}.jpg`;
  npcText.innerHTML = `<strong>${dialogo.npcName}:</strong> ${dialogo.dialogText}`;
}
*/
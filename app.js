//const IFRAME_URL="http://localhost:5500/iframe/iframe.html";
const IFRAME_URL = "https://dev.d15tgskwr500d2.amplifyapp.com/iframe.html";
const UID="cnam225";
const CONFIG = {
    title:"CNAM",
    logo:""
};
const container = document.createElement("div");
const container2 = document.createElement("div");
container.innerHTML = `
<button class="chatbot-toggler">
        <span class="material-symbols-rounded">mode_comment</span>
        <span class="material-symbols-outlined">close</span>
    </button>
    <div class="chatbot">
        <header>
            <h2>${CONFIG.title}</h2>
        </header>
        <span class="loader hide"></span>
        <iframe class="chatbody" src="${IFRAME_URL}?w=${UID}" frameborder="0"></iframe>
    </div>
`;
container2.innerHTML = `
<button class="chatbot-toggler2">
        <span class="material-symbols-rounded">mode_comment</span>
        <span class="material-symbols-outlined">close</span>
    </button>
    <div class="chatbot2">
        <header>
            <h2>RECLAMATION</h2>
        </header>
        <div class="chatbody2">
        <form id="__vtigerWebForm" name="Tes" action="http://34.122.187.96/modules/Webforms/capture.php" method="post"
    accept-charset="utf-8" enctype="multipart/form-data"><input type="hidden" name="__vtrftk"
        value="sid:87c5b859c50b20e667db4b366551ad5ab752a618,1693492584"><input type="hidden" name="publicid"
        value="cd2bce489150d6ad65801361d44390a0"><input type="hidden" name="urlencodeenable" value="1"><input
        type="hidden" name="name" value="Tes">
    <table>
        <tbody>
            <tr>
                <td><input type="hidden" name="ticket_title" data-label="" value="Réclamation Formulaire Web"
                        required=""></td>
            </tr>
            <tr>
                <td><label>Priorité*</label></td>
                <td><select name="ticketpriorities" data-label="ticketpriorities" required="">
                        <option value="">Select Value</option>
                        <option value="Low">Basse</option>
                        <option value="Normal" selected="">Normale</option>
                        <option value="High">Haute</option>
                        <option value="Urgent">Urgente</option>
                    </select></td>
            </tr>
            <tr>
                <td><label>Statut*</label></td>
                <td><select name="ticketstatus" data-label="ticketstatus" required="">
                        <option value="">Select Value</option>
                        <option value="Open" selected="">Ouvert</option>
                        <option value="In Progress">En cours</option>
                        <option value="Wait For Response">Attente réponse</option>
                        <option value="Closed">Fermé</option>
                        <option value="A analyser">A analyser</option>
                        <option value="A traiter">A traiter</option>
                        <option value="En cours">En cours</option>
                        <option value="Terminé">Terminé</option>
                        <option value="A clôturer">A clôturer</option>
                        <option value="Non fondée">Non fondée</option>
                    </select></td>
            </tr>
            <tr>
                <td><label>N° sécurité sociale</label></td>
                <td><input type="text" name="cf_1033" data-label="" value=""></td>
            </tr>
            <tr>
                <td><label>Nom réclamant</label></td>
                <td><input type="text" name="cf_1029" data-label="" value=""></td>
            </tr>
            <tr>
                <td><label>Prénoms réclamant</label></td>
                <td><input type="text" name="cf_1031" data-label="" value=""></td>
            </tr>
            <tr>
                <td><label>E-mail</label></td>
                <td><input type="text" name="cf_1047" data-label="" value=""></td>
            </tr>
            <tr>
                <td><label>Contact téléphonique</label></td>
                <td><input type="text" name="cf_1045" data-label="" value=""></td>
            </tr>
            <tr>
                <td><label>Type de réclamation</label></td>
                <td><select name="cf_983" data-label="label:Type+de+r%26eacute%3Bclamation">
                        <option value="">Select Value</option>
                        <option value="Carte non active">Carte non active</option>
                        <option value="Droits non ouverts">Droits non ouverts</option>
                        <option value="Rejet irrégulier de facture">Rejet irrégulier de facture</option>
                        <option value="Code du centre non disponible">Code du centre non disponible</option>
                        <option value="Code Etablissement erroné">Code Etablissement erroné</option>
                        <option value="Rupture de stock des médicaments en pharmacie">Rupture de stock des médicaments
                            en pharmacie</option>
                        <option value="Incident sur le serveur SFTP">Incident sur le serveur SFTP</option>
                        <option value="Retard de paiement des honoraires des OGD prestations">Retard de paiement des
                            honoraires des OGD prestations</option>
                    </select></td>
            </tr>
            <tr>
                <td><label>Description</label></td>
                <td><textarea name="description"></textarea></td>
            </tr>
        </tbody>
    </table>
    <input class="btn-send" type="submit" value="Envoyer">
</form>
        </div>
        <span class="loader hide"></span>
    </div>
`;
const body = document.getElementsByTagName("body")[0];
const body2 = document.getElementsByTagName("body")[0];
body.appendChild(container);
body2.appendChild(container2);
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotToggler2 = document.querySelector(".chatbot-toggler2");
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatbotToggler2.addEventListener("click", () => document.body.classList.toggle("show-chatbot2"));

//Ajout du css
const style = document.createElement('style');
style.textContent = `
/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0');

:root {
  --default: #724ae8;
  --theme: #003478;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #E3F2FD;
  overflow: hidden;
}

.chatbot-toggler {
  position: fixed;
  bottom: 30px;
  right: 35px;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--theme);
  transition: all 0.2s ease;
}

body.show-chatbot .chatbot-toggler {
  transform: rotate(90deg);
}

.chatbot-toggler span {
  color: #fff;
  position: absolute;
}

.chatbot-toggler span:last-child,
body.show-chatbot .chatbot-toggler span:first-child {
  opacity: 0;
}

body.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}

.chatbot {
  position: fixed;
  right: 35px;
  bottom: 90px;
  border-radius: 15px;
  width: 420px;
  background: #fff;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  transform-origin: bottom right;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
    0 32px 64px -48px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease;
}

body.show-chatbot .chatbot {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.chatbot header {
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  background: var(--theme);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chatbot header span {
  position: absolute;
  right: 15px;
  top: 50%;
  display: none;
  cursor: pointer;
  transform: translateY(-50%);
}

header h2 {
  font-size: 1.4rem;
}

.chatbot .chatbox {
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px 100px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 25px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}

.chatbox .chat {
  display: flex;
  list-style: none;
}

.chatbox .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}

.chatbox .incoming span {
  width: 32px;
  height: 32px;
  color: #fff;
  cursor: default;
  text-align: center;
  line-height: 32px;
  align-self: flex-end;
  background: var(--theme);
  border-radius: 4px;
  margin: 0 10px 7px 0;
}

.chatbox .chat p {
  white-space: pre-wrap;
  padding: 12px 16px;
  border-radius: 10px 10px 0 10px;
  max-width: 75%;
  color: #fff;
  font-size: 0.95rem;
  background: var(--theme);
}

.chatbox .incoming p {
  border-radius: 10px 10px 10px 0;
}

.chatbox .chat p.error {
  color: #721c24;
  background: #f8d7da;
}

.chatbox .incoming p {
  color: #000;
  background: #f2f2f2;
}

.chatbot .chat-input {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px;
  border-top: 1px solid #ddd;
}

.chat-input textarea {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px 15px 15px 0;
  font-size: 0.95rem;
}

.chat-input span {
  align-self: flex-end;
  color: var(--theme);
  cursor: pointer;
  height: 55px;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 1.35rem;
}

.chat-input textarea:valid~span {
  visibility: visible;
}

@media (max-width: 490px) {
  .chatbot-toggler {
    right: 20px;
    bottom: 20px;
  }

  .chatbot {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
  }

  .chatbot .chatbox {
    height: 90%;
    padding: 25px 15px 100px;
  }

  .chatbot .chat-input {
    padding: 5px 15px;
  }

  .chatbot header span {
    display: block;
  }
}


.chatbody {
  height: 510px;
  background-color: red;
  width: 100%;
}


.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}

.loader::after {
  content: '';
  width: 96px;
  height: 4.8px;
  background: hsl(0, 72%, 60%);
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: hitZak 1s linear infinite alternate;
}

@keyframes hitZak {
  0% {
    left: 0;
    transform: translateX(-1%);
  }

  100% {
    left: 100%;
    transform: translateX(-99%);
  }
}

.hide {
  display: none;
}

/* FORMULAIRE */

.chatbot-toggler2 {
  position: fixed;
  bottom: 30px;
  left: 35px;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--theme);
  transition: all 0.2s ease;
}

.chatbot2 {
  position: fixed;
  left: 35px;
  bottom: 90px;
  border-radius: 15px;
  width: 420px;
  background: #fff;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  transform-origin: bottom right;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
    0 32px 64px -48px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease;
}

body.show-chatbot2 .chatbot2 {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.chatbot2 header {
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  background: var(--theme);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chatbot2 header span {
  position: absolute;
  right: 15px;
  top: 50%;
  display: none;
  cursor: pointer;
  transform: translateY(-50%);
}

header h2 {
  font-size: 1.4rem;
}

.chatbot2 .chatbox {
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px 100px;
}

.chatbot2 :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px;
}

.chatbot2 :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 25px;
}

.chatbot2 :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}

.chatbot2 .chat-input {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px;
  border-top: 1px solid #ddd;
}

@media (max-width: 490px) {
  .chatbot-toggler2 {
    right: 20px;
    bottom: 20px;
  }

  .chatbot2 {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
  }

  .chatbot2 .chatbox {
    height: 90%;
    padding: 25px 15px 100px;
  }

  .chatbot2 .chat-input {
    padding: 5px 15px;
  }

  .chatbot2 header span {
    display: block;
  }
}


.chatbody2 {
  height: 510px;
  background-color: white;
  width: 100%;
  padding: 15px;
}

.chatbody2 {
  font-size: 0.85em;
  color: var(--theme);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.chatbody2 input,
.chatbody2 select,
.chatbody2 textarea {
  border-radius: 5px;
  width: 90%;
  margin-top: 20px;
  height: 2em;
  padding: 2px;
  border: #ccc 1px solid;

}

.chatbody2 .btn-send {
  /* text-align: center; */
  background-color: var(--theme);
  color: #fff;
  height: 3em;
}

.chatbody2 .btn-send:hover {
  cursor: pointer;
}

/* FORMULAIRE2 */

.chatbot-toggler2 {
  position: fixed;
  bottom: 30px;
  left: 35px;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--theme);
  transition: all 0.2s ease;
}

body.show-chatbot2 .chatbot-toggler2 {
  transform: rotate(90deg);
}

.chatbot-toggler2 span {
  color: #fff;
  position: absolute;
}

.chatbot-toggler2 span:last-child,
body.show-chatbot2 .chatbot-toggler2 span:first-child {
  opacity: 0;
}

body.show-chatbot2 .chatbot-toggler2 span:last-child {
  opacity: 1;
}

.chatbot2 {
  position: fixed;
  left: 35px;
  bottom: 90px;
  border-radius: 15px;
  width: 420px;
  background: #fff;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  transform-origin: bottom right;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
    0 32px 64px -48px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease;
}

body.show-chatbot2 .chatbot2 {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.chatbot2 header {
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  background: var(--theme);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chatbot2 header span {
  position: absolute;
  right: 15px;
  top: 50%;
  display: none;
  cursor: pointer;
  transform: translateY(-50%);
}

header h2 {
  font-size: 1.4rem;
}

.chatbot2 .chatbox {
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px 100px;
}

.chatbot2 :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px;
}

.chatbot2 :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 25px;
}

.chatbot2 :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}

.chatbox .chat {
  display: flex;
  list-style: none;
}

.chatbox .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}

.chatbox .incoming span {
  width: 32px;
  height: 32px;
  color: #fff;
  cursor: default;
  text-align: center;
  line-height: 32px;
  align-self: flex-end;
  background: var(--theme);
  border-radius: 4px;
  margin: 0 10px 7px 0;
}

.chatbox .chat p {
  white-space: pre-wrap;
  padding: 12px 16px;
  border-radius: 10px 10px 0 10px;
  max-width: 75%;
  color: #fff;
  font-size: 0.95rem;
  background: var(--theme);
}

.chatbox .incoming p {
  border-radius: 10px 10px 10px 0;
}

.chatbox .chat p.error {
  color: #721c24;
  background: #f8d7da;
}

.chatbox .incoming p {
  color: #000;
  background: #f2f2f2;
}

.chatbot2 .chat-input {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px;
  border-top: 1px solid #ddd;
}

.chat-input textarea {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px 15px 15px 0;
  font-size: 0.95rem;
}

.chat-input span {
  align-self: flex-end;
  color: var(--theme);
  cursor: pointer;
  height: 55px;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 1.35rem;
}

.chat-input textarea:valid~span {
  visibility: visible;
}

@media (max-width: 490px) {
  .chatbot-toggler2 {
    right: 20px;
    bottom: 20px;
  }

  .chatbot2 {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
  }

  .chatbot2 .chatbox {
    height: 90%;
    padding: 25px 15px 100px;
  }

  .chatbot2 .chat-input {
    padding: 5px 15px;
  }

  .chatbot2 header span {
    display: block;
  }
}


.chatbody2 {
  height: 510px;
  background-color: white;
  width: 100%;
  padding: 15px;
}


.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}

.loader::after {
  content: '';
  width: 96px;
  height: 4.8px;
  background: hsl(0, 72%, 60%);
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: hitZak 1s linear infinite alternate;
}

@keyframes hitZak {
  0% {
    left: 0;
    transform: translateX(-1%);
  }

  100% {
    left: 100%;
    transform: translateX(-99%);
  }
}

.hide {
  display: none;
}

#main-site {
  height: 100vh;
  width: 100%;

}

.chatbody2 {
  font-size: 0.85em;
  color: var(--theme);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.chatbody2 input,
.chatbody2 select,
.chatbody2 textarea {
  border-radius: 5px;
  width: 90%;
  margin-top: 20px;
  height: 2em;
  padding: 2px;
  border: #ccc 1px solid;

}

.chatbody2 .btn-send {
  /* text-align: center; */
  background-color: var(--theme);
  color: #fff;
  height: 3em;
}

.chatbody2 .btn-send:hover {
  cursor: pointer;
}
`;
document.head.appendChild(style);



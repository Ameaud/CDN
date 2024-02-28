//const IFRAME_URL="http://localhost:5500/iframe/iframe.html";
const IFRAME_URL = "https://dev.d15tgskwr500d2.amplifyapp.com/iframe.html";
const UID = "cnam225";
const CONFIG = {
  title: "CNAM",
  logo: ""
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
        <select name="typeofticket" id="typeofticket" data-label="" required="">
                        <option value="enrole" default >Formulaire enrôlé</option>
                        <option value="assure" >Formulaire assuré</option>
                    </select>

        </header>
        <div class="chatbody2">
        <form id="__vtigerWebForm" class="formticket1" style="margin-top: 320px;" onsubmit="return verifierSoumission(event)" name="Ticket enrôlé" action="https://vtiger.ipscnam.ci/modules/Webforms/capture.php" method="post" accept-charset="utf-8" enctype="multipart/form-data">
<input type="hidden" name="__vtrftk" value="sid:d59fb513d0a60e000464e01e427b744787f5ba8f,1705273266">
<input type="hidden" name="publicid" value="ca003ecf37033297ef93356cf4dfc26f">
<input type="hidden" name="urlencodeenable" value="1">
<input type="hidden" name="name" value="Ticket enrôlé">
<table>
<tbody>
<tr><td><input type="hidden" name="ticket_title" data-label="" value="Recours enrôlé depuis le site web" required=""></td></tr>
<tr><td><select name="ticketstatus" data-label="ticketstatus" required="" hidden=""><option value="">Select Value</option>
<option value="">Select Value</option>
<option value="Open">Ouvert</option>
<option value="A analyser" selected="">A analyser</option>
<option value="A traiter">A traiter</option>
<option value="In Progress">En cours</option>
<option value="Wait For Response">Terminé</option>
<option value="A clôturer">A clôturer</option>
<option value="Closed">Clôturé</option></select></td></tr>
<tr><td><select name="ticketpriorities" data-label="ticketpriorities" required="" hidden="">
<option value="">Select Value</option><option value="Low">Basse</option>
<option value="Normal" selected="">Normale</option>
<option value="High">Haute</option><option value="Urgent">Urgente</option></select></td></tr>
<tr><td><select name="cf_1195" data-label="label:TYPE+DE+REQUERANT" hidden="">
<option value="">Select Value</option>
<option value="Enrôlé" selected="">Enrôlé</option>
<option value="Assuré">Assuré</option>
<option value="Anonyme">Anonyme</option></select></td></tr>
<tr><td><label>NOM DU REQUERANT*</label></td><td><input type="text" name="cf_1163" data-label="" value="" required=""></td></tr>
<tr><td><label>PRENOMS DU REQUERANT*</label></td>
<td><input type="text" name="cf_1165" data-label="" value="" required=""></td></tr>
<tr><td><label>TYPE DE RECOURS*</label></td>
<td>
<select name="cf_1155" id='typeRecours1' data-label="label:TYPE+DE+RECOURS" required="">
<option value="">Select Value</option>
<option value="Demande de services enrôlé">Demande de services enrôlé</option>
<option value="Réclamation enrôlé">Réclamation enrôlé</option>
</select>
</td></tr><tr><td><label>MOTIF DE RECOURS*</label></td>

<td><select name="cf_1157" id="resultTypeRecours1" data-label="label:MOTIF+DE+RECOURS" required="">
<option value="">Select Value</option>
<option value="RECHERCHE DE CARTE (DISPONIBILITÉ DE SA CARTE)">RECHERCHE DE CARTE (DISPONIBILITÉ DE SA CARTE)</option>
<option value="ASSISTANCE POUR IMPRESSION DE SON RÉÇU D'ENRÔLEMENT">ASSISTANCE POUR IMPRESSION DE SON RÉÇU D'ENRÔLEMENT</option>
<option value="CORRECTION DES INFORMATIONS / BIOMÉTRIE">CORRECTION DES INFORMATIONS / BIOMÉTRIE</option>
<option value="PROBLÈME LIÉE AUX EMPREINTES">PROBLÈME LIÉE AUX EMPREINTES</option>
<option value="DEMANDE DE SUIVI POUR LA NON-PRODUCTION DE SA CARTE">DEMANDE DE SUIVI POUR LA NON-PRODUCTION DE SA CARTE</option>
<option value="RÉTARD DE PRODUCTION DE SA CARTE">RÉTARD DE PRODUCTION DE SA CARTE</option>
<option value="L'INSATISFACTION AU NIVEAU DU PERSONNEL D'ENRÔLEMENT">L'INSATISFACTION AU NIVEAU DU PERSONNEL D'ENRÔLEMENT</option>
<option value="ERREUR SUR LES DONNÉES BIOGRAPHIQUES">ERREUR SUR LES DONNÉES BIOGRAPHIQUES</option>
<option value="CARTE INTROUVABLE">CARTE INTROUVABLE</option>
<option value="INDISPONIBILITÉ DE LA PLATEFORME (MA CARTE CMU)">INDISPONIBILITÉ DE LA PLATEFORME (MA CARTE CMU)</option>
<option value="AUTRE DEMANDE DE SERVICES">AUTRE DEMANDE DE SERVICES</option>
<option value="AUTRE RECLAMATION">AUTRE RECLAMATION</option></select></td>

</tr>
<tr><td><label>Description*</label></td><td><textarea name="description" required=""></textarea></td></tr>
<tr><td><label>EMAIL*</label></td><td><input type="email" name="cf_1173" data-label="" value="" required=""></td></tr>
<tr><td><label>NUMERO DE TELEPHONE*</label></td>
<td><input type="text" name="cf_1175" data-label="" value="" required=""></td></tr>
<tr><td><label>DATE DE CONSTAT DU PROBLÈME</label></td><td><input type="date" name="cf_1185" data-label="" value=""></td></tr>
<tr><td><label>SITE ENROLEMENT</label></td><td><input type="text" name="cf_1287" data-label="" value=""></td></tr>
<tr><td><label>DATE ENROLEMENT</label></td><td><input type="date" name="cf_1159" data-label="" value=""></td></tr>
<tr><td><label>Numéro enrôlement*</label></td><td><input type="text" name="cf_1262" data-label="" value="" required=""></td></tr>
<tr><td><label>DATE DE NAISSANCE*</label></td><td><input type="date" name="cf_1167" data-label="" value="" required=""></td></tr>
<tr><td><label>LIEU DE NAISSANCE</label></td><td><input type="text" name="cf_1169" data-label="" value=""></td></tr>
<tr><td><label>NUMERO DE LA PIECE IDENTITE</label></td><td><input type="text" name="cf_1171" data-label="" value=""></td></tr></tbody></table>
<input class="btn-send" type="submit" value="Envoyer">
</form>

<form id="__vtigerWebForm" class="formticket2 hidetypeofticket" style="margin-top: 220px;" onsubmit="return verifierSoumission(event)" name="Ticket assuré" action="https://vtiger.ipscnam.ci/modules/Webforms/capture.php" method="post" accept-charset="utf-8" enctype="multipart/form-data">
<input type="hidden" name="__vtrftk" value="sid:46d8fb78eb80bd2a5ce764282a68113a7954e795,1705275573">
<input type="hidden" name="publicid" value="a4449067b0c490273f35621c8304629f">
<input type="hidden" name="urlencodeenable" value="1">
<input type="hidden" name="name" value="Ticket assuré">
<table><tbody><tr><td><input type="hidden" name="ticket_title" data-label="" value="Recours assuré depuis le site web" required=""></td></tr>
<tr><td><select name="ticketstatus" data-label="ticketstatus" required="" hidden="">
<option value="">Select Value</option>
<option value="Open">Ouvert</option>
<option value="A analyser" selected="">A analyser</option>
<option value="A traiter">A traiter</option>
<option value="In Progress">En cours</option>
<option value="Wait For Response">Terminé</option>
<option value="A clôturer">A clôturer</option>
<option value="Closed">Clôturé</option></select></td></tr>
<tr><td><select name="ticketpriorities" data-label="ticketpriorities" required="" hidden="">
<option value="">Select Value</option><option value="Low">Basse</option>
<option value="Normal" selected="">Normale</option><option value="High">Haute</option>
<option value="Urgent">Urgente</option></select></td></tr>
<tr><td><select name="cf_1195" data-label="label:TYPE+DE+REQUERANT" hidden=""><option value="">Select Value</option>
<option value="Enrôlé">Enrôlé</option>
<option value="Assuré" selected="">Assuré</option>
<option value="Anonyme">Anonyme</option></select></td></tr>
<tr><td><label>NOM DU REQUERANT*</label></td>
<td><input type="text" name="cf_1163" data-label="" value="" required=""></td></tr>
<tr><td><label>PRENOMS DU REQUERANT*</label></td>
<td><input type="text" name="cf_1165" data-label="" value="" required=""></td></tr>
<tr><td><label>NUMÉRO DE SÉCURITÉ SOCIALE*</label></td>
<td><input type="text" name="cf_1181" data-label="" value="" required=""></td></tr>
<tr><td><label>TYPE DE RECOURS*</label></td>
<td>
<select name="cf_1155" id="typeRecours2" data-label="label:TYPE+DE+RECOURS" required="">
<option value="">Select Value</option>
<option value="Demande de services assuré">Demande de services assuré</option>
<option value="Réclamation assuré">Réclamation assuré</option></select>
</td></tr>
<tr><td><label>MOTIF DE RECOURS*</label></td>
<td><select name="cf_1157" id="resultTypeRecours2" data-label="label:MOTIF+DE+RECOURS" required="">
<option value="">Select Value</option>
<option value="DEMANDE DE PRODUCTION DE DUPLICATA ET/OU DE RENOUVELLEMENT DE CARTE">DEMANDE DE PRODUCTION DE DUPLICATA ET/OU DE RENOUVELLEMENT DE CARTE</option>
<option value="DEMANDE DE SUSPENSION DE LA CARTE (RQ : DEMANDÉ SI LA CARTE À ÉTÉ RÉELLEMENT SUSPENDUE)">DEMANDE DE SUSPENSION DE LA CARTE (RQ : DEMANDÉ SI LA CARTE À ÉTÉ RÉELLEMENT SUSPENDUE)</option>
<option value="DEMANDE DE RATTACHEMENT CSP">DEMANDE DE RATTACHEMENT CSP</option>
<option value="DEMANDE DE DÉTACHEMENT DE CSP">DEMANDE DE DÉTACHEMENT DE CSP</option>
<option value="DEMANDE DE CHANGEMENT DE CSP">DEMANDE DE CHANGEMENT DE CSP</option>
<option value="EMPREINTES NON CONFORMES LORS DE L’ACCÈS AUX SOINS">EMPREINTES NON CONFORMES LORS DE L’ACCÈS AUX SOINS</option>
<option value="ACTE HABITUELLEMENT RÉALISÉ NON EFFECTUÉ CE JOUR DANS LE CENTRE">ACTE HABITUELLEMENT RÉALISÉ NON EFFECTUÉ CE JOUR DANS LE CENTRE</option>
<option value="RETARD DANS L’ACCUEIL ET DANS LA PRISE EN CHARGE DU PATIENT">RETARD DANS L’ACCUEIL ET DANS LA PRISE EN CHARGE DU PATIENT</option>
<option value="REFUS DE PRISE EN CHARGE SANS RAISON VALABLE">REFUS DE PRISE EN CHARGE SANS RAISON VALABLE</option>
<option value="IMPOSSIBILITÉ D'ACCÈS AUX PRESTATIONS DUE À LA DÉFAILLANCE DES LECTEURS">IMPOSSIBILITÉ D'ACCÈS AUX PRESTATIONS DUE À LA DÉFAILLANCE DES LECTEURS</option>
<option value="IMPOSSIBILITÉ D'ACCÈS AUX PRESTATIONS DUE À LA PÉNURIE DE FEUILLES DE SOINS">IMPOSSIBILITÉ D'ACCÈS AUX PRESTATIONS DUE À LA PÉNURIE DE FEUILLES DE SOINS</option>
<option value="REFUS DE DISPENSATION D'UN MÉDICAMENT INSCRIT SUR LE BON">REFUS DE DISPENSATION D'UN MÉDICAMENT INSCRIT SUR LE BON</option>
<option value="IMPOSSIBLE D'ACCÉDER À SON ESPACE ASSURÉ : MOT DE PASSE ERRONÉ">IMPOSSIBLE D'ACCÉDER À SON ESPACE ASSURÉ : MOT DE PASSE ERRONÉ</option>
<option value="COMPTE COTISANT NON IMPACTÉ APRÈS PAIEMENT DE COTISATION PAR MOBILE MONEY">COMPTE COTISANT NON IMPACTÉ APRÈS PAIEMENT DE COTISATION PAR MOBILE MONEY</option>
<option value="RETARD DE PRODUCTION DUPLICATA">RETARD DE PRODUCTION DUPLICATA</option>
<option value="MESSAGE REÇU PAR ERREUR">MESSAGE REÇU PAR ERREUR</option>
<option value="NUMÉRO SÉCU INTROUVABLE">NUMÉRO SÉCU INTROUVABLE</option>
<option value="DIFFICULTÉ À PAYER LES COTISATIONS">DIFFICULTÉ À PAYER LES COTISATIONS</option>
<option value="ENTREPRISE AYANT PAYÉ MAIS DONT LES DROITS DES EMPLOYÉS SONT FERMÉS">ENTREPRISE AYANT PAYÉ MAIS DONT LES DROITS DES EMPLOYÉS SONT FERMÉS</option>
<option value="AUTRE DEMANDE DE SERVICES">AUTRE DEMANDE DE SERVICES</option>
<option value="AUTRE RECLAMATION">AUTRE RECLAMATION</option>

</select></td></tr>
<tr><td><label>Description*</label></td><td><textarea name="description" required=""></textarea></td></tr>
<tr><td><label>DATE DE CONSTAT DU PROBLÈME</label></td><td><input type="date" name="cf_1185" data-label="" value=""></td></tr>
<tr><td><label>EMAIL*</label></td><td><input type="email" name="cf_1173" data-label="" value="" required=""></td></tr>
<tr><td><label>NUMERO DE TELEPHONE*</label></td><td><input type="text" name="cf_1175" data-label="" value="" required=""></td></tr>
<tr><td><label>LIEU DE NAISSANCE</label></td><td><input type="text" name="cf_1169" data-label="" value=""></td></tr>
<tr><td><label>DATE DE NAISSANCE*</label></td><td><input type="date" name="cf_1167" data-label="" value="" required=""></td></tr>
<tr><td><label>NUMERO DE LA PIECE IDENTITE</label></td><td><input type="text" name="cf_1171" data-label="" value=""></td></tr></tbody></table>
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
const typeTicketSelector = document.querySelector("#typeofticket");
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatbotToggler2.addEventListener("click", () => document.body.classList.toggle("show-chatbot2"));
typeTicketSelector.addEventListener("change", (e) => {
  document.querySelector(".formticket1").classList.toggle("hidetypeofticket");
  document.querySelector(".formticket2").classList.toggle("hidetypeofticket");

  let select1 = document.getElementById("typeRecours1");
  if (select1) {
    select1.addEventListener("change", (e) => {
      const choice = e.currentTarget.value;
      
      //console.log("choice",choice,document.getElementById("resultTypeRecours1")?.innerHTML);
      //document.getElementById("resultTypeRecours1").innerHTML="";
      switch (choice) {
        case "Demande de services enrôlé":
          document.getElementById("resultTypeRecours1").innerHTML=`
          <option value="">Select Value</option>
          <option value="RECHERCHE DE CARTE (DISPONIBILITÉ DE SA CARTE)">RECHERCHE DE CARTE (DISPONIBILITÉ DE SA CARTE)</option>
          <option value="ASSISTANCE POUR IMPRESSION DE SON RÉÇU D'ENRÔLEMENT">ASSISTANCE POUR IMPRESSION DE SON RÉÇU D'ENRÔLEMENT</option>
          <option value="CORRECTION DES INFORMATIONS / BIOMÉTRIE">CORRECTION DES INFORMATIONS / BIOMÉTRIE</option>
          <option value="PROBLÈME LIÉE AUX EMPREINTES">PROBLÈME LIÉE AUX EMPREINTES</option>
          <option value="AUTRE DEMANDE DE SERVICES">AUTRE DEMANDE DE SERVICES</option>
          `;
          break;
        case "Réclamation enrôlé":
          document.getElementById("resultTypeRecours1").innerHTML=`
          <option value="">Select Value</option>
          <option value="DEMANDE DE SUIVI POUR LA NON-PRODUCTION DE SA CARTE">DEMANDE DE SUIVI POUR LA NON-PRODUCTION DE SA CARTE</option>
          <option value="RÉTARD DE PRODUCTION DE SA CARTE">RÉTARD DE PRODUCTION DE SA CARTE</option>
          <option value="L'INSATISFACTION AU NIVEAU DU PERSONNEL D'ENRÔLEMENT">L'INSATISFACTION AU NIVEAU DU PERSONNEL D'ENRÔLEMENT</option>
          <option value="ERREUR SUR LES DONNÉES BIOGRAPHIQUES">ERREUR SUR LES DONNÉES BIOGRAPHIQUES</option>
          <option value="CARTE INTROUVABLE">CARTE INTROUVABLE</option>
          <option value="INDISPONIBILITÉ DE LA PLATEFORME (MA CARTE CMU)">INDISPONIBILITÉ DE LA PLATEFORME (MA CARTE CMU)</option>
          <option value="AUTRE RECLAMATION">AUTRE RECLAMATION</option>

          `;
          break;
        default:
          break;
      }

    });
  }
  let select2 = document.getElementById("typeRecours2");
  if (select2) {
    select2.addEventListener("change", (e) => {
      const choice = e.currentTarget.value;
      
      //console.log("choice",choice,document.getElementById("resultTypeRecours1")?.innerHTML);
      //document.getElementById("resultTypeRecours1").innerHTML="";
      switch (choice) {
        case "Demande de services assuré":
          document.getElementById("resultTypeRecours2").innerHTML=`
          <option value="">Select Value</option>
          <option value="DEMANDE DE PRODUCTION DE DUPLICATA ET/OU DE RENOUVELLEMENT DE CARTE">DEMANDE DE PRODUCTION DE DUPLICATA ET/OU DE RENOUVELLEMENT DE CARTE</option>
          <option value="DEMANDE DE SUSPENSION DE LA CARTE (RQ : DEMANDÉ SI LA CARTE À ÉTÉ RÉELLEMENT SUSPENDUE)">DEMANDE DE SUSPENSION DE LA CARTE (RQ : DEMANDÉ SI LA CARTE À ÉTÉ RÉELLEMENT SUSPENDUE)</option>
          <option value="DEMANDE DE RATTACHEMENT CSP">DEMANDE DE RATTACHEMENT CSP</option>
          <option value="DEMANDE DE DÉTACHEMENT DE CSP">DEMANDE DE DÉTACHEMENT DE CSP</option>
          <option value="DEMANDE DE CHANGEMENT DE CSP">DEMANDE DE CHANGEMENT DE CSP</option>
          <option value="AUTRE DEMANDE DE SERVICES">AUTRE DEMANDE DE SERVICES</option>
          `;
          break;
        case "Réclamation assuré":
          document.getElementById("resultTypeRecours2").innerHTML=`
          <option value="">Select Value</option>
          <option value="EMPREINTES NON CONFORMES LORS DE L’ACCÈS AUX SOINS">EMPREINTES NON CONFORMES LORS DE L’ACCÈS AUX SOINS</option>
          <option value="ACTE HABITUELLEMENT RÉALISÉ NON EFFECTUÉ CE JOUR DANS LE CENTRE">ACTE HABITUELLEMENT RÉALISÉ NON EFFECTUÉ CE JOUR DANS LE CENTRE</option>
          <option value="RETARD DANS L’ACCUEIL ET DANS LA PRISE EN CHARGE DU PATIENT">RETARD DANS L’ACCUEIL ET DANS LA PRISE EN CHARGE DU PATIENT</option>
          <option value="REFUS DE PRISE EN CHARGE SANS RAISON VALABLE">REFUS DE PRISE EN CHARGE SANS RAISON VALABLE</option>
          <option value="IMPOSSIBILITÉ D'ACCÈS AUX PRESTATIONS DUE À LA DÉFAILLANCE DES LECTEURS">IMPOSSIBILITÉ D'ACCÈS AUX PRESTATIONS DUE À LA DÉFAILLANCE DES LECTEURS</option>
          <option value="IMPOSSIBILITÉ D'ACCÈS AUX PRESTATIONS DUE À LA PÉNURIE DE FEUILLES DE SOINS">IMPOSSIBILITÉ D'ACCÈS AUX PRESTATIONS DUE À LA PÉNURIE DE FEUILLES DE SOINS</option>
          <option value="REFUS DE DISPENSATION D'UN MÉDICAMENT INSCRIT SUR LE BON">REFUS DE DISPENSATION D'UN MÉDICAMENT INSCRIT SUR LE BON</option>
          <option value="IMPOSSIBLE D'ACCÉDER À SON ESPACE ASSURÉ : MOT DE PASSE ERRONÉ">IMPOSSIBLE D'ACCÉDER À SON ESPACE ASSURÉ : MOT DE PASSE ERRONÉ</option>
          <option value="COMPTE COTISANT NON IMPACTÉ APRÈS PAIEMENT DE COTISATION PAR MOBILE MONEY">COMPTE COTISANT NON IMPACTÉ APRÈS PAIEMENT DE COTISATION PAR MOBILE MONEY</option>
          <option value="RETARD DE PRODUCTION DUPLICATA">RETARD DE PRODUCTION DUPLICATA</option>
          <option value="MESSAGE REÇU PAR ERREUR">MESSAGE REÇU PAR ERREUR</option>
          <option value="NUMÉRO SÉCU INTROUVABLE">NUMÉRO SÉCU INTROUVABLE</option>
          <option value="DIFFICULTÉ À PAYER LES COTISATIONS">DIFFICULTÉ À PAYER LES COTISATIONS</option>
          <option value="ENTREPRISE AYANT PAYÉ MAIS DONT LES DROITS DES EMPLOYÉS SONT FERMÉS">ENTREPRISE AYANT PAYÉ MAIS DONT LES DROITS DES EMPLOYÉS SONT FERMÉS</option>
          <option value="AUTRE RECLAMATION">AUTRE RECLAMATION</option>
          `;
          break;
        default:
          break;
      }

    });
  }
  console.log(e.currentTarget.value, "--", e.target.value);
})

function verifierSoumission(event) {
  //event.preventDefault();
  alert("Formulaire soumis avec succès.");
  setTimeout(()=>{
    location.replace("https://cnam.voodoogroup.africa");
  },1000);
  
  // var formulaire = document.getElementById("__vtigerWebForm");

  //   fetch(formulaire.action, {
  //       method: formulaire.method,
  //       body: new FormData(formulaire)
  //   })
  //   .then(response => {
  //       if (response.ok) {
  //           return response.json();
  //       } else {
  //           throw new Error('Échec de la soumission');
  //       }
  //   })
  //   .then(data => {
  //       alert("Formulaire soumis avec succès! Réponse du serveur : " + JSON.stringify(data));
  //   })
  //   .catch(error => {
  //       alert("Échec de la soumission du formulaire! Erreur : " + error.message);
  //   });
  //alert("Formulaire soumis avec succès.");
  //console.log("verification",e);
}

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
  z-index:999;
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
  z-index:999;
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
  padding-top: 323px !important;
}

.chatbody2 {
  font-size: 0.85em;
  color: var(--theme);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding-top: 323px !important;
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
  padding-top: 323px !important;
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


#typeofticket{
  font-size: x-large;
  font-weight: 900;
  border: none;
  padding: 3px;
  border-radius: 5px;
}
.chatbody2{
  overflow-y: scroll;
}
.hidetypeofticket{
  display: none;
}
`;
document.head.appendChild(style);
const select1 = document.getElementById("typeRecours1");
  if (select1) {
    select1.addEventListener("change", (e) => {
      const choice = e.currentTarget.value;
      
      //console.log("choice",choice,document.getElementById("resultTypeRecours1")?.innerHTML);
      //document.getElementById("resultTypeRecours1").innerHTML="";
      switch (choice) {
        case "Demande de services enrôlé":
          document.getElementById("resultTypeRecours1").innerHTML=`
          <option value="">Select Value</option>
          <option value="RECHERCHE DE CARTE (DISPONIBILITÉ DE SA CARTE)">RECHERCHE DE CARTE (DISPONIBILITÉ DE SA CARTE)</option>
          <option value="ASSISTANCE POUR IMPRESSION DE SON RÉÇU D'ENRÔLEMENT">ASSISTANCE POUR IMPRESSION DE SON RÉÇU D'ENRÔLEMENT</option>
          <option value="CORRECTION DES INFORMATIONS / BIOMÉTRIE">CORRECTION DES INFORMATIONS / BIOMÉTRIE</option>
          <option value="PROBLÈME LIÉE AUX EMPREINTES">PROBLÈME LIÉE AUX EMPREINTES</option>
          <option value="AUTRE DEMANDE DE SERVICES">AUTRE DEMANDE DE SERVICES</option>
          `;
          break;
        case "Réclamation enrôlé":
          document.getElementById("resultTypeRecours1").innerHTML=`
          <option value="">Select Value</option>
          <option value="DEMANDE DE SUIVI POUR LA NON-PRODUCTION DE SA CARTE">DEMANDE DE SUIVI POUR LA NON-PRODUCTION DE SA CARTE</option>
          <option value="RÉTARD DE PRODUCTION DE SA CARTE">RÉTARD DE PRODUCTION DE SA CARTE</option>
          <option value="L'INSATISFACTION AU NIVEAU DU PERSONNEL D'ENRÔLEMENT">L'INSATISFACTION AU NIVEAU DU PERSONNEL D'ENRÔLEMENT</option>
          <option value="ERREUR SUR LES DONNÉES BIOGRAPHIQUES">ERREUR SUR LES DONNÉES BIOGRAPHIQUES</option>
          <option value="CARTE INTROUVABLE">CARTE INTROUVABLE</option>
          <option value="INDISPONIBILITÉ DE LA PLATEFORME (MA CARTE CMU)">INDISPONIBILITÉ DE LA PLATEFORME (MA CARTE CMU)</option>
          <option value="AUTRE RECLAMATION">AUTRE RECLAMATION</option>

          `;
          break;
        default:
          break;
      }

    });
  }



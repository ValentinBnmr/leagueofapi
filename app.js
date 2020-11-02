const inputChamp = document.getElementById('champ');
const btnSend = document.getElementById("envoyer");
const cardChamp = document.querySelector(".card-champ");
const nameChamp = document.getElementById("name-champ");
const iconChamp = document.getElementById("icon-champ");
const descripChamp = document.getElementById("descrip-champ");
const titleChamp = document.getElementById("title-champ");
const inputChampError = document.getElementById("error-champ");
const soundLol = new Audio("src/sound/hoverlol.mp3")
// Variables compétences du champion

  // Skill passif
const imgSkill0 = document.getElementById("img-skill-0");
const titleSkill0 = document.getElementById("title-skill-0");
const descripSkill0 = document.getElementById("descrip-skill-0");

const imgSkill1 = document.getElementById("img-skill-1");
const titleSkill1 = document.getElementById("title-skill-1");
const descripSkill1 = document.getElementById("descrip-skill-1");

const imgSkill2 = document.getElementById("img-skill-2");
const titleSkill2 = document.getElementById("title-skill-2");
const descripSkill2 = document.getElementById("descrip-skill-2");

const imgSkill3 = document.getElementById("img-skill-3");
const titleSkill3 = document.getElementById("title-skill-3");
const descripSkill3 = document.getElementById("descrip-skill-3");

const imgSkill4 = document.getElementById("img-skill-4");
const titleSkill4 = document.getElementById("title-skill-4");
const descripSkill4 = document.getElementById("descrip-skill-4");

// Variables tips du champion 

const tipsWith1 = document.getElementById("tips-with-1");
const tipsWith2 = document.getElementById("tips-with-2");
const tipsWith3 = document.getElementById("tips-with-3");
const tipsAgainst = document.getElementById("tips-against-champ");

const tipsAgainst1 = document.getElementById("tips-against-1");
const tipsAgainst2 = document.getElementById("tips-against-2");

let champion = "Ahri";

cardChamp.addEventListener('mouseover', ()=>{
  soundLol.play();
})

recupererChamp(champion);

function recupererChamp(champion) {
const url = `http://ddragon.leagueoflegends.com/cdn/10.22.1/data/fr_FR/champion/${champion}.json`;
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dèss qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) { //L'erreur 200 signifie que la requête est un succès
      console.log("OK")
        let reponse = requete.response.data[champion]; // on stock la réponse
        console.log(champion);
        console.log(reponse.id);
        console.log(reponse.image.full)
        nameChamp.textContent = reponse.name;
        descripChamp.textContent = reponse.lore;
        titleChamp.textContent = reponse.title
        inputChampError.style.display = "none";



        iconChamp.src = `http://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/${champion}.png`;

        // Affiche les compétences du champion
        
        imgSkill0.src = `http://ddragon.leagueoflegends.com/cdn/10.22.1/img/passive/${reponse.passive.image.full}`;
        titleSkill0.textContent = reponse.passive.name + " (Passif)";
        descripSkill0.textContent = reponse.passive.description;
        
        imgSkill1.src = `http://ddragon.leagueoflegends.com/cdn/10.22.1/img/spell/${reponse.spells[0].image.full}`;
        titleSkill1.textContent = reponse.spells[0].name;
        descripSkill1.textContent = reponse.spells[0].description
        
        imgSkill2.src = `http://ddragon.leagueoflegends.com/cdn/10.22.1/img/spell/${reponse.spells[1].image.full}`;
        titleSkill2.textContent = reponse.spells[1].name;
        descripSkill2.textContent = reponse.spells[1].description

        imgSkill3.src = `http://ddragon.leagueoflegends.com/cdn/10.22.1/img/spell/${reponse.spells[2].image.full}`;
        titleSkill3.textContent = reponse.spells[2].name;
        descripSkill3.textContent = reponse.spells[2].description;

        imgSkill4.src = `http://ddragon.leagueoflegends.com/cdn/10.22.1/img/spell/${reponse.spells[3].image.full}`;
        titleSkill4.textContent = reponse.spells[3].name + " (Ultime)";
        descripSkill4.textContent = reponse.spells[3].description
  
        // Afficher tips champion
        tipsWith1.textContent = `+ ${reponse.allytips[0]}`;
        tipsWith2.textContent = `+ ${reponse.allytips[1]}`;
        tipsWith3.textContent = `+ ${reponse.allytips[2]}`;

        tipsAgainst1.textContent = `- ${reponse.enemytips[0]}`;
        tipsAgainst2.textContent = `- ${reponse.enemytips[1]}`;

        
       
      }
      else {
          inputChampError.style.display = "block";
      }
    }
  }
}

btnSend.addEventListener('click', ()=>{
    event.preventDefault();
    champion = inputChamp.value;
    
    recupererChamp(champion)
})
console.log("chargé")
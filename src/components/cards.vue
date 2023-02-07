
<template>
  <div class="zoneCard">
    <div class="card">
    <img src="../assets/room.JPG" alt="Avatar">
    <div class="container">
      <h2><b>Une porte fermée</b></h2>
      <p>Ce matin en ouvrant les yeux vous vous retrouvez dans un nouvel environnement qui vous est totalement inconnu.</p>
      <p>Une petite pièce, dépourvut de lumière naturelle et à la porte verrouillée.</p><br>
      <p>Cependant la seule issue possible est cette clé. Fouillez la pièce, elle ne devrait pas être bien loin !</p>
      <div class="zoneInput">
        <label>Entre le flag</label>
        <input class="answer" id="in">
        <button class="valide" @click="methModiStyle">Valider</button>  
      </div>
    </div>
  </div>
  <div class="card">
    <div class="chall2Img">
      <img src="../assets/chall2.png" alt="Avatar">
    </div>

    <div class="container">
      <h2><b>Itération </b></h2>
      <p>En ouvrant la porte, ce n'est malheureusement pas la sortie que vous espériez. </p>
      <p>Vous vous retrouvez dans une autre pièce avec, en face de vous, une nouvelle porte. Cependant, cette dernière est verrouillé par plusieurs mécanismes. </p><br>
      <p>A vous de trouver la solution pour les résoudre !</p>
      <div v-if="isVisibleChall1">
      <div class="zoneInput">
        <label>Entre le flag</label>
        <input class="answer" id="chall3">
        <button class="valide" @click="methChall2" msg="valide">Valider</button>  
      </div>
    </div>
    </div>
  </div>

  <div class="card">
    <div>
      <img src="../assets/Fond1.jpg" alt="Avatar">
    </div>  
    <div class="container">
      <h2><b>Vol petit oiseau</b></h2>
      <p>Encore une ! Une nouvelle fois, ce n'est pas la lumière du jour qui vous entoure mais une autre pièce. </p>
      <p>La porte qui vous fait face est cependant inaccessible car une grille vous empêche son accès. </p><br>
      <p>En regardant autour de vous, vous trouvez une inscription gravée dans le mur "Un seul mot parfois suffit à délivrer l'oiseau en cage". </p>
      <p>Vous trouvez également un morceau de papier en fouillant la pièce mais il est quelque peu illisible. </p><br>
      <p>Réunissez vos forces et tentez de le lire !</p>
      <div v-if="isVisibleChall2">
      <div class="zoneInput">
        <label>Entre le flag</label>
        <input class="answer" id="chall4">
        <button class="valide" @click="methChall3" msg="valide">Valider</button>  
      </div>
    </div>
    </div>
  </div>
  </div>


  

</template>

<script>
import { defineComponent } from 'vue';
import chall1 from './chall1.vue';
import chall2 from './chall2.vue';
export default defineComponent ({
  name: "home",
  components: { chall2, chall1 },
  data(){    
    return {
      isVisibleChall1: false,
      isVisibleChall2: false,
      isVisibleChall3: false,
      myValueChall2: "valideChall2",
      myValueChall3: "valideChall3",
      myValueChall4: "FIN"

    }
    },
  methods: {
    methModiStyle(){
      var input = document.getElementById("in").value;
      console.log(input)
      if (input == "Clef violette" || input == "clef violette" || input == "clefviolette") {
        alert("Bravo tu as trouvé la clef ! Tu peux passer à l'étape suivante. Bon jeu !")
        this.isVisibleChall1 = !this.isVisibleChall1;
        this.$emit('message-sent', this.myValueChall2);


      }
        
    },

    methChall2(){
      var input = document.getElementById("chall3").value;
      console.log(input)
      if (input == "aves" || input == "Aves") {
        alert("Bravo tu as trouvé le flag ! Tu arrive à la dernière étape de ce jeu. Bonne chance !")
        this.isVisibleChall3 = !this.isVisibleChall3
        this.isVisibleChall2 = !this.isVisibleChall2
        this.$emit('message-sent', this.myValueChall3);
      }
        
    },
    methChall3(){
      var input = document.getElementById("chall4").value;
      console.log(input)
      if (input == "echapper" || input == "Echapper") {
        alert("Bravo tu as réussi à finir le jeu. On espère que tu t'es bien amusé !")
        this.$emit('message-sent', this.myValueChall4);
      }
        
    },
    
  }
    
})

</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

a{
  cursor: inherit;
}
a:hover{
  background-color:#181818;
}
button {
  margin-left: 1em;
  border-radius: 6px;
  width: 5em;
  height: 1.6em;
  cursor: pointer;
}
input#in{
  border-radius: 5px;
  height: 1.5em;
}
.player {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 20%;
  margin-left: 40%;
  cursor: pointer;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

.zoneInputChall1 {
  margin-top: 15px;

}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.zoneCard {
  display: flex;
  width: 100%;
  margin-block: 15%;
  margin-left: 18%;
}

.cardBlockChall2 {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: block;
  margin: 30px;
  min-width: 302px;
}


img {
  width: 100%;
  max-height: 195px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
div#ZIInter{
  display: flex;
  margin-top: 1em;
}

.zoneInput {
  text-align: center;
  margin-top: 10px;
}

.zoneInput label {
  font-weight: bold;
  color: orange;

}
.answer,
#in {
  height: 40px !important;
  width : 260px;
}

.valide {
  margin-left : 0;
  height: 40px;
  width : 260px;

}

</style>

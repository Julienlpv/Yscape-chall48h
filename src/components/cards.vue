
<template>
  <div class="zoneCard">
    <div class="card">
    <img src="../assets/room.JPG" alt="Avatar">
    <div class="container">
      <h4><b>Chall 1 - Une porte fermée</b></h4>
      <p>Ce matin en ouvrant les yeux vous vous retrouvez dans un nouvel environnement qui vous est totalement inconnu.</p>
      <p>Une petite pièce, dépourvut de lumière naturelle et à la porte verrouillée.</p>
      <p>Cependant la seule issue possible est cette clé. Fouillez la pièce, elle ne devrait pas être bien loin !</p>
      <router-link to="/chall1"><img class="player" src="../assets/play.png" alt="Avatar"></router-link>
      <div class="zoneInput">
        <label>Entre le code secret</label>
        <input id="in">
        <button @click="methModiStyle">Valider</button>  
      </div>
    </div>
  </div>


  <div class="card">
    <img src="../assets/Fond1.jpg" alt="Avatar">
    <div class="container">
      <h4><b>Chall 2</b></h4>
      <p>En ouvrant la porte, ce n'est malheureusement pas la sortie que vous espériez. </p>
      <p>Vous vous retrouvez dans une autre pièce avec, en face de vous, une nouvelle porte cette fois vérouillé par un système de digicode. </p>
      <p>A vous de trouver le code !</p>
      <div v-if="isVisibleChall1">
        <router-link to="/chall2"><img class="player" src="../assets/play.png" alt="Avatar"></router-link>
      </div>

    </div>
  </div>

  <div class="card">
    <img src="../assets/Fond1.jpg" alt="Avatar">
    <div class="container">
      <h4><b>Chall 3 - Vol petit oiseau</b></h4>
      <p>Encore une ! Une nouvelle fois, ce n'est pas la lumière du jour qui vous entoure mais une autre pièce. </p>
      <p>La porte qui vous fait face est cependant inaccessible car une grille vous empêche son accès. </p>
      <p>En regardant autour de vous, vous trouvez une inscription gravée dans le mur "Un seul mot parfois suffit à délivrer l'oiseau en cage". </p>
      <p>Vous trouvez également un morceau de papier en fouillant la pièce mais il est quelque peu illisible. </p>
      <p>Réunissez vos forces et tentez de le lire !</p>
        <router-link to="/chall3"><img class="player" src="../assets/play.png" alt="Avatar"></router-link>
        <button @click="changeComponent"> test</button>
        <transition name="fade">
          <component :is="currentComponent"></component>
        </transition>
    </div>
  </div>
  </div>
  

</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent ({
  name: "home",
  data(){    
    return {
      isVisibleChall1: false,
      currentComponent: 'Home'
    }
    },
  methods: {
    methModiStyle(){
      var input = document.getElementById("in").value;
      console.log(input)
      if (input == "Clef violette" || input == "clef violette") {
        alert("Bravo tu as trouvé la clef ! Tu peux passer à l'étape suivante. Bon jeu !")
        this.isVisibleChall1 = !this.isVisibleChall1
      }
        
    },
    changeComponent() {
      this.currentComponent = this.currentComponent === 'Home'
        ? 'Chall1'
        : 'Home'
    }
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


.player {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 20%;
  margin-left: 40%;
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
  width: 300px;
}


img {
  width: 100%;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

</style>

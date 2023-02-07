<template>
  <div id="chall2">
    <div class="E">
      <p>Enigme 1</p>
      <label>Que signifie MRBW6ZDFEBBGC43FGMZA====</label>
        <input id="Q1" :readonly="!isInputEnabled">
        <div v-if="isVisibleChall1">
        <button class="btn1" @click="valideQ1">Valider</button> 
        </div>
      </div>
    <div class="E">
      <p>Enigme 2</p>
      <label>Que signifie Q29yYmVhdSBmcmV1eAo=</label>
        <input id="Q2" :readonly="!isInputEnabled">
        <div v-if="isVisibleChall2">
        <button class="btn2" @click="valideQ2">Valider</button> 
        </div>
    </div>
    <div class="E">
      <p>Enigme 3</p>
      <label>Que signifie Nftbohf</label>
        <input id="Q3" :readonly="!isInputEnabled">
        <div v-if="isVisibleChall3">
        <button class="btn3" @click="valideQ3">Valider</button> 
        </div>
    </div>
    <div class="E">
      <p>Enigme 4</p>
      <label>Que signifie trevip</label>
        <input id="Q4" :readonly="!isInputEnabled">
        <div v-if="isVisibleChall4">
        <button class="btn4" @click="valideQ4">Valider</button> 
        </div>
    </div>
    <div class="E">
      <p>Enigme 5</p>
      <label>Que signifie Пыгаргуе</label>
        <input id="Q5" :readonly="!isInputEnabled">
        <div v-if="isVisibleChall5"></div>
        <button class="btn5" @click="valideQ5">Valider</button> 
        </div>
    </div>
    <div class="E">
      <p>Enigme 6</p>
      <label>Que signifie 1000111 1101111 1100101 1101100 1100001 1101110 1100101 1000100</label>
        <input id="Q6" :readonly="!isInputEnabled">
        <div v-if="isVisibleChall6">
        <button class="btn6" @click="valideQ6">Valider</button> 
        </div>
    </div>
    <div class="E">
      <p>Enigme 7</p>
      <label>Que signifie ·−·· −−− ·−· ·· −−·− ··− · −</label>
        <input id="Q7" :readonly="!isInputEnabled">
        <div v-if="isVisibleChall7">
          <button class="btn7" @click="valideQ7">Valider</button> 
        </div>
  </div>
  <div v-if="isVisibleFIN">
    <label>Mot A jouter</label>
    <router-link to="/"><button class="fin">RETOUR</button></router-link>
  </div>

  
</template>


<script lang="js">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'chall2',
  data(){    
    return {
      isVisibleChall1: true,
      isVisibleChall2: true,
      isVisibleChall3: true,
      isVisibleChall4: true,
      isVisibleChall5: true,
      isVisibleChall6: true,
      isVisibleChall7: true,
      isInputEnabled: true,
      isVisibleFIN: true,
    }
  },
  methods: {
    valideQ1(){
      var input = document.getElementById("Q1").value;
      console.log(input)
      if (input == "Aigle royal" || input == "aigle royal") { // en base32
        alert("Bravo tu as trouvé la première énigme !")
        this.isInputEnabled = !this.isInputEnabled
        this.isVisibleChall1 = !this.isVisibleChall1
      }
      if (isVisibleChall1== false && isVisibleChall2== false && isVisibleChall3== false && isVisibleChall4== false && isVisibleChall5== false && isVisibleChall6== false && isVisibleChall7== false) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
    },
    valideQ2(){
      var input = document.getElementById("Q2").value;
      console.log(input)
      if (input == "Corbeau Freux" || input == "corbeau Freux" || input == "corbeau Freux" || input == "Corbeau Freux") { // en base64
        alert("Bravo tu as trouvé la deuxième énigme !")
        this.isInputEnabled = !this.isInputEnabled
        this.isVisibleChall2 = !this.isVisibleChall2
      }
      if (isVisibleChall1== false && isVisibleChall2== false && isVisibleChall3== false && isVisibleChall4== false && isVisibleChall5== false && isVisibleChall6== false && isVisibleChall7== false) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
    },
    valideQ3(){
      var input = document.getElementById("Q3").value;
      console.log(input)
      if (input == "esangem" || input == "ESANGEM" || input == "ésangem") { // mésange en remplaçant chaque lettre par la suivante
        alert("Bravo tu as trouvé la troisième énigme !")
        this.isInputEnabled = !this.isInputEnabled
        this.isVisibleChall3 = !this.isVisibleChall3
      }
      if (isVisibleChall1== false && isVisibleChall2== false && isVisibleChall3== false && isVisibleChall4== false && isVisibleChall5== false && isVisibleChall6== false && isVisibleChall7== false) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
    },
    valideQ4(){
      var input = document.getElementById("Q4").value;
      console.log(input)
      if (input == "Pivert" || input == "pivert") { // pivert en inversant les lettres
        alert("Bravo tu as trouvé la quatrième énigme !")
        this.isInputEnabled = !this.isInputEnabled
        this.isVisibleChall4 = !this.isVisibleChall4
      }
      if (isVisibleChall1== false && isVisibleChall2== false && isVisibleChall3== false && isVisibleChall4== false && isVisibleChall5== false && isVisibleChall6== false && isVisibleChall7== false) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
    },
    valideQ5(){
      var input = document.getElementById("Q5").value;
      console.log(input)
      if (input == "Pyrargue" || input == "pyrargue") { //Pyrargue en alphabet Cyrillique
        alert("Bravo tu as trouvé la cinquième énigme !")
        this.isInputEnabled = !this.isInputEnabled
        this.isVisibleChall5 = !this.isVisibleChall5
      }
      if (isVisibleChall1== false && isVisibleChall2== false && isVisibleChall3== false && isVisibleChall4== false && isVisibleChall5== false && isVisibleChall6== false && isVisibleChall7== false) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
    },
    valideQ6(){
      var input = document.getElementById("Q6").value;
      console.log(input)
      if (input == "Goéland" || input == "goéland" || input == "goeland" || input == "Goéland") { //Goéland en binaire
        alert("Bravo tu as trouvé la sixième énigme !")
        this.isInputEnabled = !this.isInputEnabled
        this.isVisibleChall6 = !this.isVisibleChall6
      }
      if (isVisibleChall1== false && isVisibleChall2== false && isVisibleChall3== false && isVisibleChall4== false && isVisibleChall5== false && isVisibleChall6== false && isVisibleChall7== false) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
    },

    valideQ7(){
      var input = document.getElementById("Q7").value;
      console.log(input)
      if (input == "Loriquet" || input == "loriquet") { //Loriquet en morse
        alert("Bravo tu as trouvé la septième énigme !")
        this.isInputEnabled = !this.isInputEnabled
        this.isVisibleChall7 = !this.isVisibleChall7
      }
      if (isVisibleChall1== false && isVisibleChall2== false && isVisibleChall3== false && isVisibleChall4== false && isVisibleChall5== false && isVisibleChall6== false && isVisibleChall7== false) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
    },
  }
});

</script>


<style>
input {
  display: block;
}

.E {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10px;
  border-top:2px solid black;
  color : white;
}

#chall2{
    background-image: url("../assets/chall2.png");
    height: 100%;
    width:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>

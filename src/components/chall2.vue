<template>
    <div class="chall2">
    <div class="background">
    <div class="E">
      <h2>VERROU 1</h2>
      <label>Que signifie MRBW6ZDFEBBGC43FGMZA====</label>
        <input class="answer" id="Q1" :readonly="!isInputEnabled">
        <div v-if="isVisibleChall1">
        <button class="valide btn1" @click="valideQ1">Valider</button> 
        </div>
      </div>
    <div class="E">
      <h2 >VERROU 2</h2>
      <label>Que signifie Q29yYmVhdSBmcmV1eAo=</label>
        <input class="answer" id="Q2" :readonly="!isInputEnabled2">
        <div v-if="isVisibleChall2">
        <button class="valide btn2" @click="valideQ2">Valider</button> 
        </div>
    </div>
    <div class="E">
      <h2>VERROU 3</h2>
      <label>Que signifie Nftbohf</label>
        <input class="answer" id="Q3" :readonly="!isInputEnabled3">
        <div v-if="isVisibleChall3">
        <button class="valide btn3" @click="valideQ3">Valider</button> 
        </div>
    </div>
    <div class="E">
      <h2>VERROU 4</h2>
      <label>Que signifie trevip</label>
        <input class="answer" id="Q4" :readonly="!isInputEnabled4">
        <div v-if="isVisibleChall4">
        <button class="valide btn4" @click="valideQ4">Valider</button> 
        </div>
    </div>
    <div class="E">
      <h2>VERROU 5</h2>
      <label>Que signifie Пыгаргуе</label>
        <input class="answer" id="Q5" :readonly="!isInputEnabled5">
        <div v-if="isVisibleChall5">
        <button class="valide btn5" @click="valideQ5">Valider</button> 
      </div>
        </div>
    
    <div class="E">
      <h2>VERROU 6</h2>
      <label>Que signifie 1000111 1101111 1100101 1101100 1100001 1101110 1100101 1000100</label>
        <input class="answer" id="Q6" :readonly="!isInputEnabled6">
        <div v-if="isVisibleChall6">
        <button class="valide btn6" @click="valideQ6">Valider</button> 
        </div>
    </div>
    <div class="E">
      <h2 >VERROU 7</h2>
      <label>Que signifie ·−·· −−− ·−· ·· −−·− ··− · −</label>
        <input class="answer" id="Q7" :readonly="!isInputEnabled7">
        <div v-if="isVisibleChall7">
          <button class="valide btn7" @click="valideQ7">Valider</button> 
        </div>
      </div>
      {{ counter }}
    <div v-if="isVisibleFIN">
      <div class="flagChall2">
        <label id="aves">Flag : Aves</label><br>
      </div>

    </div>
  </div>
</div>


  
</template>


<script lang="js">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'chall2',
  data(){    
    return {
      counter:0,
      isVisibleChall1: true,
      isVisibleChall2: true,
      isVisibleChall3: true,
      isVisibleChall4: true,
      isVisibleChall5: true,
      isVisibleChall6: true,
      isVisibleChall7: true,
      isInputEnabled: true,
      isInputEnabled2: true,
      isInputEnabled3: true,
      isInputEnabled4: true,
      isInputEnabled5: true,
      isInputEnabled6: true,
      isInputEnabled7: true,
      isVisibleFIN: false,
    }
  },
  methods: {
    valideQ1(){
      var input = document.getElementById("Q1").value;
      console.log(input);
      if (input == "Aigle royal" || input == "aigle royal" || input == "t") { // en base32
        alert("Bravo tu as trouvé la première énigme !")
        this.isInputEnabled = !this.isInputEnabled
        this.isVisibleChall1 = !this.isVisibleChall1
        this.counter += 1
        console.log(this.counter)
      }else {
        alert("Essaye encore !")
      }
      if (this.counter == 7) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
      
        
    },
    valideQ2(){
      var input = document.getElementById("Q2").value;
      console.log(input);
      if (input == "Corbeau Freux" || input == "corbeau Freux" || input == "corbeau Freux" || input == "Corbeau Freux" || input == "t") { // en base64
        alert("Bravo tu as trouvé la deuxième énigme !")
        this.isInputEnabled2 = !this.isInputEnabled2
        this.isVisibleChall2 = !this.isVisibleChall2
        this.counter += 1
    
      }else {
        alert("Essaye encore !")
      }
      if (this.counter == 7) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
        
    },
    valideQ3(){
      var input = document.getElementById("Q3").value;
      console.log(input);
      if (input == "esangem" || input == "ESANGEM" || input == "ésangem" || input || "t") { // mésange en remplaçant chaque lettre par la suivante
        alert("Bravo tu as trouvé la troisième énigme !")
        this.isInputEnabled3 = !this.isInputEnabled3
        this.isVisibleChall3 = !this.isVisibleChall3
        this.counter += 1
      }else {
        alert("Essaye encore !")
      }
      if (this.counter == 7) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
    },
    valideQ4(){
      var input = document.getElementById("Q4").value;
      console.log(input);
      if (input == "Pivert" || input == "pivert" || input == "t") { // pivert en inversant les lettres
        alert("Bravo tu as trouvé la quatrième énigme !")
        this.isInputEnabled4 = !this.isInputEnabled4
        this.isVisibleChall4 = !this.isVisibleChall4
        this.counter += 1
      }else {
        alert("Essaye encore !")
      }
      if (this.counter == 7) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
    },
    valideQ5(){
      var input = document.getElementById("Q5").value;
      console.log(input);
      if (input == "Pyrargue" || input == "pyrargue" || input == "t") { //Pyrargue en alphabet Cyrillique
        alert("Bravo tu as trouvé la cinquième énigme !")
        this.isInputEnabled5 = !this.isInputEnabled5
        this.isVisibleChall5 = !this.isVisibleChall5
        this.counter += 1
      }else {
        alert("Essaye encore !")
      }
      if (this.counter == 7) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
        
    },
    valideQ6(){
      var input = document.getElementById("Q6").value;
      console.log(input);
      if (input == "Goéland" || input == "goéland" || input == "goeland" || input == "Goéland" || input == "t") { //Goéland en binaire
        alert("Bravo tu as trouvé la sixième énigme !")
        this.isInputEnabled6 = !this.isInputEnabled6
        this.isVisibleChall6 = !this.isVisibleChall6
        this.counter += 1
      }else {
        alert("Essaye encore !")
      }
      if (this.counter == 7) {
        this.isVisibleFIN = !this.isVisibleFIN
      }
        
        
    },

    valideQ7(){
      var input = document.getElementById("Q7").value;
      console.log(input);
      if (input == "Loriquet" || input == "loriquet" || input == "t") { //Loriquet en morse
        alert("Bravo tu as trouvé la septième énigme !")
        this.isInputEnabled7 = !this.isInputEnabled7
        this.isVisibleChall7 = !this.isVisibleChall7
        this.counter += 1
      }else {
        alert("Essaye encore !")
      }
      if (this.counter == 7) {
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
  margin-bottom: 10px;
  border-top:2px solid rgb(250, 235, 176);
  color : black;
  padding: 15px 0;
  text-align: center;
}

.chall2{
    background-image: url("../assets/chall2.png");
    height: 100%;
    width:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .background {
    background-color: beige;
    margin : 0 15%;
    opacity: 90%;
  }
  .answer{
    display:block;
    margin: 10px auto;
    height: 40px;
    width : 50%;
    border-radius: 10px;
    border: 2px solid rgb(250, 235, 176) ;
  }

  h2 {
    color: orange;
    margin: 0 0 20px 0;
    font-weight: bold;
  }

  .valide {
    background-color: orange;
    border: 1px solid orange ;
    border-radius: 10px;
    height: 40px;
    width: 10%;
    cursor: pointer;
    transition: background-color 0.3s;

  }

  .valide:hover {
    background-color: rgb(250, 235, 176);
  }

  .flagChall2 {
    display: block;
    text-align: center;
    flex:none;
  }

  #aves{
    color: red;
    font-weight: bold;
    padding-bottom: 50px;
    font-size:30px;
  }

  #classement {
    margin-top: 50px;
    margin-bottom: 20px;
  background-color: hsla(160, 100%, 37%, 1);
    border: 1px solid hsla(160, 100%, 37%, 1) ;
    border-radius: 10px;
    height: 40px;
    width: 300px;
    cursor: pointer;
    transition: background-color 0.3s;
    color:white;
  }

  #classement:hover {
    background-color: rgb(0, 59, 40) ;
  }

</style>


<template>  
<div id="Home">
    <div class="timerZone">
      <TimerConcours />
    </div> 
    <div>
      <div class="playBtn">
        <div class="distanceBtn">
          <button class="challbtn btn1" @click="showChall1 = !showChall1"></button>
        </div>
        <div v-if="isVisibleChall2">
          <div class="distanceBtn">
            <button class="challbtn btn2" fill="clear" @click="showChall2 = !showChall2"></button>
          </div>
        </div>
        <div v-if="isVisibleChall3">
          <div class="distanceBtn">
            <button class="challbtn btn" fill="clear" @click="showChall3 = !showChall3"></button>
          </div>
        </div>
      </div>


        <Cards @message-sent="updateMessage" v-if="!showChall2 && !showChall1 && !showChall3" />

        <chall1 v-if="showChall1 && !showChall2 && !showChall3" />
        <chall2 v-if="showChall2 && !showChall1 && !showChall3"/>
        <chall3 v-if="showChall3 && !showChall1 && !showChall2"/>
    
    </div>
  </div>
</template>
  
  <script>
    import Cards from "@/components/cards.vue"
    import { defineComponent } from 'vue';
    import TimerConcours from '@/components/timer.vue'
    import chall1 from '@/components/chall1.vue'
    import chall2 from '@/components/chall2.vue'
    import chall3 from '@/components/chall3.vue'

  export default  defineComponent({
    name: 'Home',
    components: { Cards, TimerConcours, chall1, chall2, chall3 },
    data() {
    return {
      showChall1: false,
      showChall2: false,
      showChall3: false,
      isVisibleChall2: false,
      isVisibleChall3: false,
      isVisibleChall4: false,
      message:"marche pas"
    };
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

    methChall3(){
      var input = document.getElementById("chall3").value;
      console.log(input)
      if (input == "t" || input == "t") {
        alert("Bravo tu as trouvé le flag ! Tu arrive à la dernière étape de ce jeu. Bonne chance !")
        this.isVisibleChall3 = !this.isVisibleChall3
      }
        
    },
    updateMessage(newValue) {
      console.log(newValue);
      this.message = newValue;
    if (newValue == "valideChall2") {
      this.isVisibleChall2 = !this.isVisibleChall2
    }
    if (newValue == "valideChall3") {
      this.isVisibleChall2 = this.isVisibleChall2
      this.isVisibleChall3 = !this.isVisibleChall3
    }
   
    },
    
  },

    
  });
  </script>

  

  <style>

.timerZone {
    margin-top:2em;
  }
    div.zoneCard[data-v-dab43063] {
      display: flex; 
      margin-block: 15%;
      width: 50%;
      margin-left: 25%;
      margin-right: 25%;
      margin-top: 10px;
    }

    .playBtn {
      justify-content: center;
      margin: auto;
      text-align: center;
      display:flex;
    }

    .distanceBtn {
      margin: 0 130px;
    }

    .challbtn {
      background-image: url('../assets/play.png');
      width:52px;
      height: 52px;
      background-color: transparent;
      border: none;
      cursor: pointer;

    }
  </style>
  
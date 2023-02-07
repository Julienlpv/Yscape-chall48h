
<template>  
    <div class="timerZone">
      <TimerConcours />
    </div> 
    <div>
        <Cards v-if="!showComponentA" />
        <button  @click="showComponentA = !showComponentA">chall1</button>
        <button  @click="showComponentB = !showComponentB">chall2</button>
        <chall1 v-if="showComponentA"/>
        <chall2 v-if="!showComponentA && showComponentB"/>
    
    </div>
</template>
  
  <script>
    import Cards from "@/components/cards.vue"
    import { defineComponent } from 'vue';
    import TimerConcours from '@/components/timer.vue'
    import chall1 from '@/components/chall1.vue'
    import chall2 from '@/components/chall2.vue'

  export default  defineComponent({
    name: 'Home',
    components: { Cards, TimerConcours, chall1, chall2 },
    data() {
    return {
      showComponentA: false
    };
  }
    
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
      margin-top: 5%;
    }

  </style>
  
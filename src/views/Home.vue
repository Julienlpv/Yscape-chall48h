
<template>  
    <div class="timerZone">
      <TimerConcours />
    </div> 
    <div class="cardZone">
        <Cards />
    </div>
</template>
  
  <script>
    import Cards from "@/components/cards.vue"
    import { defineComponent } from 'vue';
    import TimerConcours from '@/components/timer.vue'


  export default  defineComponent({
    name: 'Home',
    components: { Cards, TimerConcours },
    
  });
  </script>

  <style>
.cardZone {
  
}

    .timerZone {
    margin-top:200px;
    margin-left: 30%;
  }
  </style>
  
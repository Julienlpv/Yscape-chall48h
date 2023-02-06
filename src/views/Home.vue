
<template>
    <div>
        <Cards />
    </div>
     
  
  </template>
  
  <script>
  import Cards from "@/components/cards.vue"
  import { defineComponent } from 'vue';

  export default  defineComponent({
    name: 'Home',
    components: { Cards },
    data () {
      return {
  
      }
    },

  });
  </script>
  
  <style scoped>
  
  </style>
  
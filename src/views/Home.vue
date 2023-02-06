
<template>   
    <div>
        <header>
            <Timer />
        </header>
        <body>
            <Cards />
        </body>
    </div>
</template>
  
  <script>
    import Cards from "@/components/cards.vue"
    import { defineComponent } from 'vue';
    import HeaderCompo from "../components/Header.vue";
    import Timer from "../components/timer.vue";

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
  
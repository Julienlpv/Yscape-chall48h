<template>
  <div class="greetings">
    <Home msg="You did it!" />
    <router-view/>
  </div>
</template>


<script lang="js">
import { defineComponent } from 'vue';
import Home from '@/views/Home.vue';


export default defineComponent({
  name: 'app',
 
});

</script>


<style scoped>
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.greetings {
  position: relative;
  width: 100%;
}

.img-fond {
  filter: brightness(30%);
  width: 100%;
  height: auto;
  
}
</style>

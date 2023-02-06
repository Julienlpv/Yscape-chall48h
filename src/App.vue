<template>
  <div class="greetings">
    <header>
      <headerPage />
    </header>
    <main>

  </main>
  <body>
    <div class="wrapper">
      <Home msg="You did it!" />
    </div>
  </body>
</div>
</template>


<script setup>
import Home from './components/Home.vue'
import headerPage from './components/Header.vue'

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

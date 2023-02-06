
<template>
  <div class="zoneCard">
    <div class="card">
    <img src="../assets/Fond1.jpg" alt="Avatar">
    <div class="container">
      <h4><b>Chall 1</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
  <div class="card">
    <img src="../assets/Fond1.jpg" alt="Avatar">
    <div class="container">
      <h4><b>Chall 2</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
  <div class="card">
    <img src="../assets/Fond1.jpg" alt="Avatar">
    <div class="container">
      <h4><b>Chall 3</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
  </div>
  

</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
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

.greetings h1,
.greetings h3 {
  text-align: center;
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

<template>
  <div class="content">
    <h2>Vole petit oiseau</h2>

  <div class="elem">
    <br>
    <div class="desc">
      <p>Encore une ! Une nouvelle fois, ce n'est pas la lumière du jour qui vous entoure mais une autre pièce.<br>

    La porte qui vous fait face est cependant inaccessible car une grille vous empêche son accès.<br><br>

    En regardant autour de vous, vous trouvez une inscription gravée dans le mur "Un seul mot parfois suffit à délivrer l'oiseau en cage".<br><br>

    Vous trouvez également un morceau de papier en fouillant la pièce mais il est quelque peu illisible.

    <br><br>
    Réunissez vos forces et tentez de le lire !</p>
    </div>

    <div class="doc">
      <a class="button" href="chall3.zip" download> Télécharger les documents nécessaires</a>
    </div>

  </div>

  <div class="warning">
    Observez l'image, certains éléments disposés autour de vous vous seront sans aucun doute d'une grande aide ! <br>
    Objet, style, type, mettez ce qui vous passe par la tête !<br><br>
    Pour vous aider : l'étape intermédiaire ne nécessite qu'un simple mot singulier en minuscule, sans caractère spécial et sans chiffre. <br><br><br><br>
    À vous de jouer !
  </div>

  </div>

</template>




<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'chall3',
  data() {;
    return{
    }
  },
  methods: {
    download () {
      const url = '../assets/chall3.zip';
      window.location.href = url;
    }
  },
});

</script>


<style>
  #app {
    display: flex !important;
    height: 100% !important;
    width:100% !important;
    top: 0 !important;
    left: 0 !important;
    padding : 0 !important;
  }

  .content {
    padding-left: 50px;
  }

  .elem {
    display:flex;
  }

  .desc,
  .doc {
    flex:1;
  }
  
  .doc {
    display: flex;

  }
  a {
    margin: 10% auto 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    display:flex;
    background-color: hsla(160, 100%, 37%, 1);
    color: white !important;
    border-radius: 10px;
    padding: 12px 30px;
    cursor: pointer;

    
  }

  .warning {
    color: red;
    font-style: italic;
    text-align: center;
    margin: 50px 0;
  }

  p {
    justify-content: justify;
  }
</style>

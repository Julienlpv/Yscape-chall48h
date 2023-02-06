<template>

  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>GameScape</title>

  </head>
  <body>
      <!--<header class="header">
      </header>-->
      
      <div class="elem">
          <button id="hiddenButton" onclick="hiddenButton()"></button>
      </div>
      
      <!--<footer>
          
      </footer>-->

  </body>
  </html>
</template>
  
  
  <script>
  import { defineComponent } from 'vue';

  
  export default defineComponent({
    name: 'chall1',

    render: 
      function hiddenButton() {
      console.log('Une clef violette est tombée au sol')
      },
   
  });
  
  </script>
  
  
  <style>
  body, html {
    height: 100%;
    width:100%;
    margin:0;
  }
  
  .elem {
    background-image: url("../assets/room.JPG");
    height: 100%;
    width:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #hiddenButton {
    /*visibility: hidden;*/
    background-color:transparent;
    border:none;
    width: 35px;
    height: 35px;
    margin-left : 50%;
    margin-top: 35%;

  }
  </style>
  
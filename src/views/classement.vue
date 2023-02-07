<template>
    <classTest :items="items" />
  </template>
  
  <script>
  import classTest from '@/components/class.vue'
  
  export default {
    components: {
        classTest
    },
    data () {
      return {
        items: [
            
        ]
      }
    }
    ,
      mounted () {
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(json => {
            this.items = json;
        })
  }
  }
  </script>
  
  <style>
  
  </style>
  
<template>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ items.username }} - {{ items.points }}
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
        props: ['items'],

  },
  methods: {
    
  }
  }
  </script>
  
  
  <style>
  
  </style>
  
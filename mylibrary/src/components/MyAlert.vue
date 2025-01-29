<!-- src/components/MyAlert.vue -->
<template>
    <div class="alert">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "MyAlert",
  };
  </script>
  
  <style scoped>
  .alert {
    background-color: #f44336;
    color: white;
    padding: 15px;
    border-radius: 5px;
  }
  </style>
  
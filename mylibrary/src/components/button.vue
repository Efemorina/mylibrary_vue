<!-- src/components/Button.vue -->
<template>
  <button>{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>

<style scoped>
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>

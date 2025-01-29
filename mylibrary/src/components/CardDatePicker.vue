<!-- src/components/CardDatePicker.vue -->
<template>
    <div class="card flex justify-center">
      <input
        type="date"
        v-model="formattedDate"
        class="w-full sm:w-[30rem] p-2 border border-gray-300 rounded"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  // Tarih seçimi için bir ref
  const date = ref("");
  
  // `v-model` kullanımı için tarih formatını tutan bir değişken
  const formattedDate = ref("");
  
  // formattedDate değiştiğinde date'i güncelle
  watch(formattedDate, (newValue) => {
    date.value = newValue;
  });
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
  }
  
  input[type="date"] {
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  </style>
  
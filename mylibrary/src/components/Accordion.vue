<!-- src/components/Accordion.vue -->
<template>
    <div class="accordion">
      <div v-for="(panel, index) in panels" :key="index">
        <div @click="togglePanel(index)" class="accordion-header">
          <slot name="header" :panel="panel">{{ panel.header }}</slot>
        </div>
        <div v-if="activePanel === index" class="accordion-content">
          <slot name="content" :panel="panel">{{ panel.content }}</slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const panels = ref([
    { header: 'Header I', content: 'Content for Panel I' },
    { header: 'Header II', content: 'Content for Panel II' },
    { header: 'Header III', content: 'Content for Panel III' }
  ]);
  
  const activePanel = ref(null);
  
  // Paneli açmak ve kapatmak için fonksiyon
  const togglePanel = (index) => {
    activePanel.value = activePanel.value === index ? null : index;
  };
  </script>
  
  <style scoped>
  .accordion {
    display: flex;
    flex-direction: column;
  }
  
  .accordion-header {
    background-color: #f1f1f1;
    padding: 1rem;
    cursor: pointer;
    border: 1px solid #ddd;
  }
  
  .accordion-content {
    padding: 1rem;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-top: none;
  }
  </style>
  
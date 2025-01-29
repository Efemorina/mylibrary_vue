<!-- src/components/AccordionPanel.vue -->
<template>
    <div>
      <div @click="toggle" class="accordion-header">
        <slot name="header">{{ header }}</slot>
      </div>
      <div v-if="isActive" class="accordion-content">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    header: { type: String, required: true },
    content: { type: String, required: true },
  });
  
  const isActive = ref(false);
  
  // Paneli açmak ve kapatmak
  const toggle = () => {
    isActive.value = !isActive.value;
  };
  </script>
  
  <style scoped>
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
  
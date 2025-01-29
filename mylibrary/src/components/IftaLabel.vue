<!-- src/components/IftaLabel.vue -->
<template>
    <div class="ifta-label">
      <DatePicker 
        v-model="value" 
        :inputId="inputId" 
        :showIcon="showIcon" 
        :iconDisplay="iconDisplay" 
        :variant="variant"
        class="date-picker"
      />
      <label :for="inputId">{{ label }}</label>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import DatePicker from 'vue3-datepicker';  // Eğer vue3-datepicker kullanıyorsan bunu import et
  
  const props = defineProps({
    value: { type: String, default: '' },
    inputId: { type: String, required: true },
    label: { type: String, required: true },
    showIcon: { type: Boolean, default: true },
    iconDisplay: { type: String, default: 'input' },
    variant: { type: String, default: 'filled' },
  });
  
  const emit = defineEmits(['update:value']);  // v-model için custom event
  
  // v-model ile bağlamak için bir watcher kullanabiliriz
  watch(() => props.value, (newValue) => {
    emit('update:value', newValue);
  });
  </script>
  
  <style scoped>
  .ifta-label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  
  .date-picker {
    width: 100%;
  }
  
  label {
    margin-top: 8px;
    font-size: 0.9rem;
    color: #333;
  }
  </style>
  
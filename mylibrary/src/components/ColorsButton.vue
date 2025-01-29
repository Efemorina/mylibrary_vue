<!-- src/components/ColorsButton.vue -->
<template>
    <button :class="buttonClass" class="button">
      {{ label }}
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    label: { type: String, required: true },
    severity: { type: String, default: 'primary' }, // Varsayılan olarak 'primary' severity
  });
  
  const buttonClass = computed(() => {
    return [
      'btn',
      severityClass(props.severity),
    ];
  });
  
  function severityClass(severity) {
    switch (severity) {
      case 'secondary':
        return 'btn-secondary';
      case 'success':
        return 'btn-success';
      case 'info':
        return 'btn-info';
      case 'warn':
        return 'btn-warn';
      case 'help':
        return 'btn-help';
      case 'danger':
        return 'btn-danger';
      case 'contrast':
        return 'btn-contrast';
      default:
        return 'btn-primary';
    }
  }
  </script>
  
  <style scoped>
  .button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
    border: none;
  }
  
  .btn-success {
    background-color: #28a745;
    color: white;
    border: none;
  }
  
  .btn-info {
    background-color: #17a2b8;
    color: white;
    border: none;
  }
  
  .btn-warn {
    background-color: #ffc107;
    color: black;
    border: none;
  }
  
  .btn-help {
    background-color: #20c997;
    color: white;
    border: none;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: white;
    border: none;
  }
  
  .btn-contrast {
    background-color: #f8f9fa;
    color: black;
    border: 1px solid #ced4da;
  }
  
  .button:hover {
    opacity: 0.8;
  }
  </style>
  
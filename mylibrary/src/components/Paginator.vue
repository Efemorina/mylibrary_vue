<!-- src/components/Paginator.vue -->
<template>
    <div class="paginator">
      <div class="pagination-controls">
        <span>Showing {{ first }} to {{ last }} of {{ totalRecords }} entries</span>
      </div>
      <div class="page-buttons">
        <button @click="prevPage" :disabled="first === 0">Previous</button>
        <button @click="nextPage" :disabled="last >= totalRecords">Next</button>
      </div>
      <div class="rows-per-page">
        <label for="rowsPerPage">Rows per page:</label>
        <select v-model="rowsPerPage" @change="onRowsPerPageChange">
          <option v-for="option in rowsPerPageOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  // Prop'ları alıyoruz
  const props = defineProps({
    rows: { type: Number, default: 10 },
    totalRecords: { type: Number, required: true },
    rowsPerPageOptions: { type: Array, default: () => [10, 20, 30] },
  });
  
  // İçsel değişkenler
  const currentPage = ref(0);
  const rowsPerPage = ref(props.rows);
  
  // Sayfa başı ve sonu
  const first = computed(() => currentPage.value * rowsPerPage.value);
  const last = computed(() => Math.min((currentPage.value + 1) * rowsPerPage.value, props.totalRecords));
  
  watch(rowsPerPage, () => {
    currentPage.value = 0; // Rows per page değiştiğinde sayfayı sıfırla
  });
  
  // Sayfa değiştirme fonksiyonları
  const prevPage = () => {
    if (currentPage.value > 0) currentPage.value--;
  };
  
  const nextPage = () => {
    if (currentPage.value < Math.floor(props.totalRecords / rowsPerPage.value)) {
      currentPage.value++;
    }
  };
  
  const onRowsPerPageChange = () => {
    currentPage.value = 0; // Rows per page değiştiğinde sayfayı sıfırla
  };
  </script>
  
  <style scoped>
  .paginator {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  
  .pagination-controls {
    margin-bottom: 1rem;
  }
  
  .page-buttons {
    display: flex;
    gap: 0.5rem;
  }
  
  .page-buttons button {
    padding: 0.5rem;
    cursor: pointer;
  }
  
  .rows-per-page {
    margin-top: 1rem;
  }
  
  .rows-per-page select {
    padding: 0.3rem;
    margin-left: 0.5rem;
  }
  </style>
  
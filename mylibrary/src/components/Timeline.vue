<!-- src/components/TimelineBileşeni.vue -->
<template>
    <div class="timeline">
      <ul>
        <li v-for="(event, index) in value" :key="index" :style="{ borderColor: event.color }">
          <div class="timeline-icon">
            <i :class="event.icon" :style="{ color: event.color }"></i>
          </div>
          <div class="timeline-content">
            <div class="status">{{ event.status }}</div>
            <div class="date">{{ event.date }}</div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  const props = defineProps({
    value: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .timeline {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .timeline li {
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding-left: 40px;
    position: relative;
  }
  
  .timeline li::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 2px;
  }
  
  .timeline-icon {
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    border: 3px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
  }
  
  .timeline-content {
    padding-left: 50px;
  }
  
  .status {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .date {
    color: gray;
    font-size: 0.9rem;
  }
  </style>
  
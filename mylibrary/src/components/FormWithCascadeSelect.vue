<template>
    <div class="card flex justify-center">
      <!-- Form -->
      <form @submit.prevent="onFormSubmit" class="flex justify-center flex-col gap-4">
        <div class="flex flex-col gap-1">
          <!-- CascadeSelect (Özelleştirilmiş Dropdown) -->
          <div class="select-wrapper">
            <select v-model="selectedCity" class="w-56" :disabled="!selectedState" required>
              <option disabled value="">Select a City</option>
              <option v-for="city in filteredCities" :key="city.code" :value="city.cname">{{ city.cname }}</option>
            </select>
          </div>
          <!-- Hata Mesajı -->
          <p v-if="cityError" class="error-message">{{ cityError }}</p>
        </div>
        <!-- Submit Button -->
        <button type="submit" class="submit-button">Submit</button>
      </form>
  
      <!-- Success Toast (Başarı Mesajı) -->
      <div v-if="showToast" class="toast">
        <p>Form is submitted successfully!</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from "vue";
  import { z } from "zod";
  
  // Zod ile doğrulama
  const initialValues = ref({
    city: null,
  });
  
  const selectedCity = ref("");
  const selectedState = ref("");
  const showToast = ref(false);
  const cityError = ref("");
  
  // Ülkeler ve şehirler verisi
  const countries = ref([
    {
      name: "Australia",
      code: "AU",
      states: [
        {
          name: "New South Wales",
          cities: [
            { cname: "Sydney", code: "A-SY" },
            { cname: "Newcastle", code: "A-NE" },
            { cname: "Wollongong", code: "A-WO" },
          ],
        },
        {
          name: "Queensland",
          cities: [
            { cname: "Brisbane", code: "A-BR" },
            { cname: "Townsville", code: "A-TO" },
          ],
        },
      ],
    },
    {
      name: "Canada",
      code: "CA",
      states: [
        {
          name: "Quebec",
          cities: [
            { cname: "Montreal", code: "C-MO" },
            { cname: "Quebec City", code: "C-QU" },
          ],
        },
        {
          name: "Ontario",
          cities: [
            { cname: "Ottawa", code: "C-OT" },
            { cname: "Toronto", code: "C-TO" },
          ],
        },
      ],
    },
  ]);
  
  // Şehirleri filtreleme
  const filteredCities = computed(() => {
    if (!selectedState) return [];
    const state = countries.value
      .flatMap((country) => country.states)
      .find((state) => state.name === selectedState);
    return state ? state.cities : [];
  });
  
  // CascadeSelect'in seçili durumunu yönetmek
  watchEffect(() => {
    cityError.value = "";
    if (!selectedCity.value) {
      cityError.value = "City is required.";
    }
  });
  
  // Form submit işlemi
  const onFormSubmit = () => {
    // Validation: Eğer geçerliyse, başarı mesajını göster
    if (!selectedCity.value) {
      cityError.value = "City is required.";
      return;
    }
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  };
  import { z as zod } from "zod";

  </script>
  
  <style scoped>
  .card {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .select-wrapper {
    margin-bottom: 0.5rem;
  }
  
  .select-wrapper select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .error-message {
    color: red;
    font-size: 0.875rem;
  }
  
  .submit-button {
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .toast {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #28a745;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  